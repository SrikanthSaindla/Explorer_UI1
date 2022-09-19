import { useState } from "react";

const Folder = (props) => {
  const { explorer } = props;

  const [expand, setExpand] = useState(false);
  if (explorer.isfolder) {
    return (
      <div>
        <span style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          {explorer.name}
        </span>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {explorer.items.map((each) => {
            return <Folder explorer={each} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <span>{explorer.name}</span>
        <br />
      </>
    );
  }
};
export default Folder;
