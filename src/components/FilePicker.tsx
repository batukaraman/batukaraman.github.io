import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "@/styles/file-picker.scss";
import { IoCloseOutline, IoCloudUploadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";

export default function FilePicker({ onChange }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    onDrop: useCallback(
      (acceptedFiles) => {
        const newFiles = [...selectedFiles, ...acceptedFiles];
        setSelectedFiles(newFiles);
        onChange(newFiles);
      },
      [onChange, selectedFiles]
    ),
  });

  const removeFile = (file) => {
    const updatedFiles = selectedFiles.filter((f) => f !== file);
    setSelectedFiles(updatedFiles);
    onChange(updatedFiles);
  };

  return (
    <div className="zone">
      <div className="drop-zone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="drop-files">
            <IoCloudUploadOutline size={"50%"} />
          </div>
        ) : (
          <div className="drag-files">Dosya Sürükle veya Gözat</div>
        )}
      </div>
      {selectedFiles.length > 0 && (
        <ul className="file-list">
          {selectedFiles.map((file, index) => (
            <li key={index}>
              {file.name}
              <Button
                onlyIcon
                icon={IoCloseOutline}
                size="sm"
                onClick={() => removeFile(file)}
                variant="tertiary"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
