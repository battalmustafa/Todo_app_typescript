import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../slice/TodoSlice";
import { v4 as uuid } from 'uuid';


const TodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onSave = () => {
  if (task ) {
     dispatch(add({task, id: uuid(), completed: false}));
    setTask("");
      console.log(task);
    
     
    } 
    else {
      alert("You must enter a name for your task");
    }
  };
  


  return (
      <div className="rounded-lg p-4 container flex justify-between flex items-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div>
      <h1>Todo App React-Redux-Tailwind </h1>
      </div>
        <div>
          <input
      className="px-4 py-2 leading-tight rounded-lg"
        maxLength={255}
        placeholder="Enter Your Task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
      />
    <button type="submit" onClick={onSave} className="ml-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
  Create
</button>
</div>
    
       
    </div>
   
  );
};
export default TodoForm;