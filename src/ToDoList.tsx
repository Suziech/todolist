import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {

//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("")
//   const onChange = (e:React.FormEvent<HTMLInputElement>) => {
//     const {currentTarget : {value}} = e;
//     setToDo(value)
//     setToDoError('')
//   }
//   const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(toDo.length < 10){
//       setToDoError("Text should be longer than 10 characters")
//     }
//     console.log('submit')
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const {register, watch} = useForm();
  console.log(watch())
  return (
        <div>
          <form>
            <input {...register('email')} placeholder="Email" />
            <input {...register('firstName')} placeholder="First Name" />
            <input {...register('lastName')} placeholder="Last Name" />
            <input {...register('username')} placeholder="Username" />
            <input {...register('password')} placeholder="Password" />
            <input {...register('password1')} placeholder="Password1" />
            <button>Add</button>
          </form>
        </div>
      );
}

export default ToDoList;
