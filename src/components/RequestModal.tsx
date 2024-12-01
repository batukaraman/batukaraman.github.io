import Modal from "./Modal";
import { useAppSelector } from "@/hooks/useRedux";
import { useState, useRef } from "react";
import { uploadFileGroup } from "@uploadcare/upload-client";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import FilePicker from "./FilePicker";

function RequestModal() {
  const { serviceName, packageName } = useAppSelector((state) => state.service);
  const [files, setFiles] = useState<FileList | null>(null);
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [fileURLs, setFileURLs] = useState<string | null>("");
  const [status, setStatus] = useState<
    "initial" | "loading" | "success" | "fail"
  >("initial");

  const form = useRef();

  const handleSubmit = async () => {
    if (files) {
      console.log(files);
      return;
    }

    setStatus("loading");

    if (!fullname || !email || !message) {
      console.error("Ad Soyad, E-posta ve Mesaj alanları zorunludur");
      setStatus("fail");
      return;
    }

    let fileURLs = "";

    if (files && files.length > 0 && !fileURLs) {
      try {
        const result = await uploadFileGroup(Array.from(files), {
          publicKey: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY,
          store: "auto",
        });

        fileURLs = result.files.map((file) => file.cdnUrl).join("\n");
        setFileURLs(fileURLs);
      } catch (error) {
        console.error("Dosya yükleme başarısız:", error);
        setStatus("fail");
        return;
      }
    } else if (files && files.length > 0 && fileURLs) {
      console.log("Dosyalar zaten yüklendi.");
    }

    if (!form.current) return;

    const formElement = form.current as HTMLFormElement;

    const fileURLsField = formElement.querySelector(
      'input[name="file_urls"]'
    ) as HTMLInputElement;
    if (fileURLsField) {
      fileURLsField.value = fileURLs || "Dosya Yok";
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("success");
          console.log("Form başarıyla gönderildi!");
        },
        (error) => {
          console.error("Form gönderimi başarısız oldu:", error.text);
          setStatus("fail");
        }
      );
  };

  return (
    <Modal id="modal-request">
      <div className="request-modal">
        <div className="request-modal__header">
          <h4 className="request-modal__title">{serviceName}</h4>
          <h5 className="request-modal__subtitle">{packageName}</h5>
        </div>
        <form ref={form} className="request-modal__form">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Ad Soyad"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-posta"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FilePicker onChange={setFiles} />
          <input type="hidden" name="service_name" value={serviceName || ""} />
          <input type="hidden" name="package_name" value={packageName || ""} />
          <input
            type="hidden"
            name="file_urls"
            value={fileURLs || "Dosya Yok"}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Talebiniz hakkında söylemek istedikleriniz"
            value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <div className="request-modal__actions">
            {<Result status={status} />}
            <Button text="Vazgeç" variant="secondary" />
            <Button
              text="Gönder"
              onClick={handleSubmit}
              isLoading={status == "loading"}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}

const Result = ({ status }: { status: string }) => {
  if (status === "success") {
    return <span style={{ color: "#84cc16" }}>Başarılı!</span>;
  } else if (status === "fail") {
    return <span style={{ color: "#dc2626" }}>Başarısız!</span>;
  } else if (status === "loading") {
    return <span>Gönderiliyor...</span>;
  } else {
    return null;
  }
};

export default RequestModal;
