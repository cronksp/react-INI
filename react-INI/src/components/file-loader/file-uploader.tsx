import { FileInput } from "@mantine/core";
import ini from "ini";

interface FileUploaderProps {
  size?: string;
  radius?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  accept?: string;
  onFileRead: (data: Record<string, any>) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  size = "md",
  radius = "md",
  label = "File",
  description = "Upload a file to evaluate",
  placeholder = "Select file",
  accept = ".ini",
  onFileRead,
}) => {
  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const parsedData: Record<string, any> = ini.parse(text);
      onFileRead(parsedData);
    };
    reader.readAsText(file);
  };
  return (
    <FileInput
      size={size}
      radius={radius}
      label={label}
      description={description}
      placeholder={placeholder}
      accept={accept}
      onChange={(file: File | null) => handleFileChange(file as File)}
    />
  );
};

export default FileUploader;
