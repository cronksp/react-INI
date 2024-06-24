import "./App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import FileUploader from "./components/file-loader/file-uploader";

const handleFileRead = (data: Record<string, any>) => {
  console.log(data);
};

function App() {
  return (
    <MantineProvider>
      <FileUploader
        size={"xl"}
        radius={"xl"}
        label={""}
        description={"Upload a INI file to evaluate"}
        placeholder={"Select INI file"}
        onFileRead={handleFileRead}
      />
    </MantineProvider>
  );
}

export default App;
