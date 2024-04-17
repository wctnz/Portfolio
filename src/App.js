import { Route, Routes } from "react-router-dom";
import TextContent from "./components/textContetn/TextContent";
import ProjectPage from "./pages/projectPage/ProjectPage";
import ToolPage from "./pages/toolPage/ToolPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TextContent />} />
        <Route path="/:tool" element={<ToolPage />} />
        <Route path="/:tool/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
