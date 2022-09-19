import Folder from "./components/Folder";
import explorer from "./Data/FolderData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
