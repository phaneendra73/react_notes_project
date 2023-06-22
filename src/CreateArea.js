import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          className="note"
          type="text"
          name="title"
          onchange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <br />
        <textarea
          className="note"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note...."
          rows="3"
        />
        <button onClick={submitNote} className="add">
          +
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
