import React, { useState } from "react";

const InputNotes = ({onAdd}) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const inputTitle = (key) => {
    setTitle(key.target.value);
  };
  const inputNotes = (key) => {
    setNotes(key.target.value);
  };

  const handleClick = (e)=>{
    e.preventDefault();
    if(!title || !notes) return;
    onAdd({title,notes});
    setTitle("");
    setNotes("");
  }
  return (
    <div className="w-max">
      <form className="flex gap-5">
        <input
          onChange={inputTitle}
          value={title}
          className="py-2 px-4 bg-blue-950 border-b-fuchsia-50 w-1/2 border-2 text-amber-50"
          type="text"
          placeholder="Enter Title"
        />
        <input
          onChange={inputNotes}
          value={notes}
          className="py-2 px-4 bg-blue-950 border-b-fuchsia-50 w-1/2 border-2 text-amber-50"
          type="text"
          placeholder="Enter notes"
        />
        <button
          onClick={handleClick}
          className="py-2 px-4 bg-gray-600 text-black border-black border-2"
        >
          Add+
        </button>
      </form>
    </div>
  );
};

export default InputNotes;
