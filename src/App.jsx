
import { useState } from "react";
import InputNotes from "./components/InputNotes";
import Note from "./components/Note";

export default function App() {
  const [data,setData] = useState([{title:"",notes:""}])
const addNotes = (inputtext)=>{
const newtext = [...data,inputtext];
setData(newtext)
}
  return (
    <>
    <InputNotes onAdd = {addNotes}/>
    <div>
      {data.map(elem => {
return   <Note title = {elem.title} notes = {elem.notes} />
      })
    }
</div>
     
    </>
  );
}


