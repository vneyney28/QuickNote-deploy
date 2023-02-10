import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import Zoom from "@mui/material/Zoom";

function NewNote(props) {
  const [value, setValue] = useState({ newtitle: "", newcontent: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }
  function handleClick(event) {
    props.onAdd(value);
    setValue({ newtitle: "", newcontent: "" });
    event.preventDefault();
  }
  return (
    <form className="create-note">
      {isExpanded && (
        <input
          name="newtitle"
          onChange={handleChange}
          value={value.newtitle}
          type="text"
          placeholder="Enter Title"
        />
      )}
      <textarea
        name="newcontent"
        onChange={handleChange}
        value={value.newcontent}
        type="text"
        placeholder="Enter Task"
        onClick={() => setExpanded(true)}
        rows={setExpanded ? 1 : 3}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default NewNote;
