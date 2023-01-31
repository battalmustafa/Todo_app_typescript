import { useDispatch } from "react-redux";
import {
 
  remove, done,
} from "../slice/TodoSlice";
//import { FiEdit2, FiTrash2 } from "react-icons/fi";
//import DeleteModal from "./DeleteModal";
//import UpdateModal from "./UpdateModal";


const TodoList = ( todos: any ) => {
 const dispatch = useDispatch();
 
  console.log(todos.todos);



 
  const onDeleteTodo = (itemId: string) => {
   dispatch(remove(itemId));
   console.log(itemId);

  };

  

  return (

    <div className=" container max-w-2xl ml-auto mr-auto rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 m-5">
      
                
    <ul>
    {todos.todos.map((todo: any) => {
        const { id, task} = todo;

        return (
          <li  className="max-w-auto p-4 border-gray-200 rounded-lg flex items-center"
          key={todo.id}>
        <input
            className=""
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => dispatch(done(id))}
          />
            <div className="ml-4 mr-auto box-border ml-4  h-32 w-auto flex items-center flex justify-start">

 The {task} is {todo.completed ? 'done' : 'waiting'} .


            
            </div>
<button className="ml-10 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e)=> onDeleteTodo(id)} >delete</button>
           
              
              
<div >

                
            </div>
          
            <span></span>

            
          </li>
         
        );
      })}
    </ul>
    </div>
 
  );
};

export default TodoList;