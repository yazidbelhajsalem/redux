import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Addtodo } from '../Redux/TodoSlice';
function AddTask() {
  const [title,setTitle] = useState("");
  const dispatch = useDispatch()

  //3MALET OBJET FARG BECH NZID 7AJA ELI FIL INPUT

  const Todo={
    title:title,
    status:false,
    id: uuidv4(),
  }
  return (
    <div>
        <div>
      <input
        onChange={(e) => {setTitle(e.target.value)}}
        style={{
          backgroundColor: "#1212127d",
          height: "30px",
          borderRadius: "20px",
          width: "70%",
          padding: "10px",
          color: "white",
        }}
        placeholder="New task"
      />
      <label>
        {" "}
        <button
          onClick={() => dispatch(Addtodo(Todo))}
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            width: "50px",
            height: "30px",
            margin: "20px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </label>
    </div>
    </div>
  )
}

export default AddTask