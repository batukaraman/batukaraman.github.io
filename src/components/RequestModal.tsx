import Modal from "./Modal";
import { useAppSelector } from "@/hooks/useRedux";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";
import {
  uploadDirect,
  uploadFile,
  base,
  uploadFileGroup,
} from "@uploadcare/upload-client";
import Button from "./Button";

function RequestModal() {
  const { serviceName, packageName } = useAppSelector((state) => state.service);
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (!files) return;

    setStatus("uploading");

    try {
      const result = await uploadFileGroup(Array.from(files), {
        publicKey: "51b8bc77375e057b43a4",
        store: "auto",
      });

      console.log("Group CDN URL:", result.cdnUrl);

      result.files.map((file) => {
        console.log(file.cdnUrl);
      });

      setStatus("success");
    } catch (error) {
      console.error("Upload failed:", error);
      setStatus("fail");
    }
  };

  return (
    <Modal id="modal-request-dev-static" state={false}>
      <div className="request-modal">
        <div className="request-modal__header">
          <h4 className="request-modal__title">{serviceName}</h4>
          <h5 className="request-modal__subtitle">{packageName}</h5>
        </div>
        <form action="" className="request-modal__form">
          <div>
            <input type="file" onChange={handleFileChange} multiple />
            {files &&
              Array.from(files).map((file, index) => (
                <ul key={index}>
                  <li>{file.name}</li>
                  <li>{file.type}</li>
                  <li>{file.size}</li>
                </ul>
              ))}
            <Result status={status} />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Talebiniz hakkında söylemek istedikleriniz"
          ></textarea>
          <div className="request-modal__actions">
            <Button text="Vazgeç" variant="secondary" />
            <Button text="Gönder" onClick={handleUpload} />
          </div>
        </form>
      </div>
    </Modal>
  );
}

const Result = ({ status }: { status: string }) => {
  if (status === "success") {
    return <span>Dosya yükleme başarılı!</span>;
  } else if (status === "fail") {
    return <span>Dosya yükleme başarısız!</span>;
  } else if (status === "uploading") {
    return <span>Dosyalar yükleniyor...</span>;
  } else {
    return null;
  }
};

export default RequestModal;
