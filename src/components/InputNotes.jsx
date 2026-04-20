import React, { useState } from "react";
import 
const InputNotes = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const inputTitle = (key) => {
    setTitle(key.target.value);
  };
  const inputNotes = (key) => {
    setNotes(key.target.value);
  };
  return (
    <div>
      <form action="">
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
          onClick={addNotes}
          className="py-2 px-4 bg-gray-600 text-black border-black border-2"
        >
          Add+
        </button>
      </form>
    </div>
  );
};

export default InputNotes;
