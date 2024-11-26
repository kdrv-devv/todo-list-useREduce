import React, { useEffect, useReducer, useState } from 'react'
import { FaPen,FaTrashAlt ,FaPlus } from "react-icons/fa";

const TodoComponents = () => {
    const [text,setText] = useState("")

    let initialState = []

    const reducer =(state,{type,text,id})=>{
        switch (type) {
            case "add":
                return [...state,{id:Date.now() ,list:text} ]    
            case "delete":
                return state.filter((value)=> value.id !== id)

            case "edit":
                return state.map((value)=> value.id === id)

            default:
                return state 
        }

    }

    const [state,dispatch] = useReducer(reducer,initialState)


  return (

    <div className='container min-h-[100vh] flex items-center justify-center'>

<div className="snowflake">*</div>
  <div className="snowflake">❄</div>
  <div className="snowflake">❄</div>
  <div className="snowflake">❆</div>
  <div className="snowflake">❅</div>
  <div className="snowflake">❅</div>
  <div className="snowflake">❅</div>
  <div className="snowflake">❆</div>



        <div className='todo-container flex flex-col gap-[50px] border-[2px] border-[solid] border-[rgba(255,255,255,0.187)] rounded-[7px] w-[400px]  min-h-[500px] bg-transparent  p-[20px] '>
            <div className='todo-header flex flex-col gap-2'>
                <input type="text" placeholder='Search...' className='rounded-[7px] text-[17px] text-white placeholder:text-white w-full h-[50px]  bg-transparent backdrop-filter backdrop-blur-[20px]'/>
                <div className='add flex items-center justify-around'>
                    <input onChange={(e)=> setText(e.target.value)} value={text} type="text" placeholder='New  task...' className='text-[17px] text-white placeholder:text-white w-[80%] h-[50px]  bg-transparent backdrop-filter backdrop-blur-[10px] rounded-[30px]'  />
                    <button onClick={(e)=> { dispatch({type:"add",text}),setText("")}} className='add-btn h-[50px] w-[50px]  flex items-center justify-center rounded-[100%]   bg-transparent backdrop-filter backdrop-blur-[10px]' ><FaPlus style={{color:'white',fontSize:20}} /></button>
                </div>
            </div>

            <div className='todo-tasks text-center'>
                    <h3 className='font-normal text-[30px] text-[#fff]'>Tasks</h3>
                    <div className='todo-task-item flex flex-col gap-4 '>

                        {state.map((value)=>{
                            return(
  <div key={value.id} className='task-card flex items-center justify-between h-[50px] backdrop-filter backdrop-blur-[10px] p-[10px]  border-[1px] border-[solid] border-[rgba(255,255,255,0.187)] rounded-[25px]'>
  <input id='chek' type="checkbox" className='task-checkbox' />
  <label htmlFor="chek" className='font-normal text-[17px] text-[#fff] cursor-pointer'>{value.list}</label>
  <div className='task-btns flex items-center gap-2'>
      <button className='edit-btn bg-orange-500 rounded-[3px] w-[22px] h-[22px] flex items-center justify-center hover:bg-orange-600 '><FaPen style={{color:"white" , fontSize:11 }} /></button>
      <button onClick={()=> dispatch({type:"delete", id:value.id})} className='del-btn  bg-red-700 rounded-[3px] w-[22px] h-[22px] flex items-center justify-center hover:bg-red-800'><FaTrashAlt  style={{color:"white" , fontSize:11 }} /></button>
  </div>
</div>)
                        })

                        }

                      


                    </div>
                    
            </div>

        </div>


    </div>
  )
}

export default TodoComponents