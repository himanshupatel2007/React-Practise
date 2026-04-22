import { useState } from "react";
import InputNotes from "./components/InputNotes";
import Note from "./components/Note";

export default function App() {
  const [data, setData] = useState([]);
  const addNotes = (inputtext) => {
    const newtext = [...data, inputtext];
    setData(newtext);
  };
  const deleteNote = (id)=>{
    setData(data.filter((_,index)=> index!=id))
  }
  return (
    <div className="w-screen flex flex-col">
      <InputNotes onAdd={addNotes} />
      <div className="flex flex-wrap">
        {data.map((elem ,index) => {
          return <Note key={index} id={index} deletefn={deleteNote}  title={elem.title} notes={elem.notes} />;
        })}
      </div>
    </div>
  );
}
