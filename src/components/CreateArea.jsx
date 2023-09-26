import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [hide, setH]= useState(true);
  function changeArea(){
    setH(false);

  }

  return (
    <div>
      <form className="create-note">
      {hide?null :<input
        //  style={{visibility: hide?'hidden':'visible', width: 0}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
          onClick={changeArea}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={hide?"1": "3"} 
        />
        <Zoom in={!hide}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
