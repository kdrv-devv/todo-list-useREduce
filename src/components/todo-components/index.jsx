import React, { useEffect, useReducer, useState } from "react";
import { FaPen, FaTrashAlt, FaPlus, FaSave } from "react-icons/fa";

const TodoComponents = () => {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [editCheck, setEditCheck] = useState(null);
  let initialState = [];

  const reducer = (state, { type, text, id }) => {
    switch (type) {
      case "add":
        return [...state, { id: Date.now(), list: text }];
      case "delete":
        return state.filter((value) => value.id !== id);
      case "edit":
        return state.map((value) =>
          value.id === id ? { ...value, list: newText } : value
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container min-h-[100vh] flex items-center justify-center">
      <div className="snowflake">*</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">*</div>

      <div className="todo-container flex flex-col gap-[50px] border-[2px] border-[solid] border-[rgba(255,255,255,0.187)] rounded-[7px]   min-h-[500px] bg-transparent  p-[20px] w-[400px] ">
        <div className="todo-header flex flex-col gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-[7px] text-[17px] text-white placeholder:text-white w-full h-[50px]  bg-transparent backdrop-filter backdrop-blur-[20px]"
          />
          <div className="add flex items-center justify-around">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              placeholder="New  task..."
              className="text-[17px] text-white placeholder:text-white w-[80%] h-[50px]  bg-transparent backdrop-filter backdrop-blur-[10px] rounded-[30px]"
            />
            <button
              onClick={(e) => {
                if(text){
                  dispatch({ type: "add", text }), setText("")
                };
              }}
              className="add-btn h-[50px] w-[50px]  flex items-center justify-center rounded-[100%]   bg-transparent backdrop-filter backdrop-blur-[10px]"
            >
              <FaPlus style={{ color: "white", fontSize: 20 }} />
            </button>

          </div>
        </div>

        <div className="todo-tasks text-center">
          <h3 className="font-normal text-[30px] text-[#fff]">Tasks</h3>
          <div className="todo-task-item flex flex-col gap-4 ">
            {state.map((value) => {
              return (
                <div
                  key={value.id}
                  className="task-card flex items-center justify-between h-[50px] backdrop-filter backdrop-blur-[10px] p-[10px]  border-[1px] border-[solid] border-[rgba(255,255,255,0.187)] rounded-[25px]"
                >
                  <input id="chek" type="checkbox" className="task-checkbox" />

                  {editCheck === value.id ?(
                    <input
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="enter edit..."
                      value={newText}
                      className=" h-full  bg-transparent rounded-[6px] flex items-center justify-center text-white  text-[16px]"
                    />
                  ) : (
                    <label
                      htmlFor="chek"
                      className="font-normal text-[17px] text-[#fff] cursor-pointer"
                    >
                      {value.list}
                    </label>
                  )}

                  <div className="task-btns flex items-center gap-2">
                    {editCheck === value.id ?(
                      <button
                        onClick={() => {
                            dispatch({
                              type: "edit",
                              id: value.id,
                              list: newText,
                            }),
                          setEditCheck(null)

                        }}
                        className="save-btn bg-green-500 rounded-[3px] w-[22px] h-[22px] flex items-center justify-center hover:bg-green-600 "
                      >
                        <FaSave style={{ color: "white", fontSize: 11 }} />
                      </button>
                    ) : (
                      <button
                        onClick = {() => {
                            setEditCheck(value.id),
                            setNewText(value.list)
                        }}
                        className = "edit-btn bg-orange-500 rounded-[3px] w-[22px] h-[22px] flex items-center justify-center hover:bg-orange-600 "
                      >
                        <FaPen style={{ color: "white", fontSize: 11 }} />
                      </button>
                    )}

                    <button
                      onClick={() => dispatch({ type: "delete", id: value.id })}
                      className="del-btn  bg-red-700 rounded-[3px] w-[22px] h-[22px] flex items-center justify-center hover:bg-red-800"
                    >
                      <FaTrashAlt style={{ color: "white", fontSize: 11 }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponents;
