import React, { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';
import { AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleNewTask = () => {
    if (newTask.trim() !== '') {
      setTasks([{ id: Date.now(), text: newTask, completed: false }, ...tasks]);
      setNewTask('');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNewTask();
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-[1rem] xs:p-[2rem] sm:p-[4rem] flex items-center justify-center">
      <div className="w-full flex flex-col items-center bg-[#071115] px-4 py-[3rem] xs:p-[3rem] rounded-lg shadow-lg min-h-[30rem] max-w-[45rem]">
        <h1 className="text-3xl text-white mb-8">Todo List</h1>
        <div className="flex gap-6 items-center mb-12 w-full">
          <div className=" relative w-full">
            <input
              type="text"
              placeholder="Enter a new task"
              className="p-2 w-full bg-[#071115] border-2 focus:outline-none focus:border-white border-[#1d3b53] rounded-lg text-white pr-[4.5rem]"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleNewTask}
              className="absolute right-[6px] top-[15%] px-3 py-1 hover:bg-[#071115] transition-all duration-200 ease-in-out rounded-lg bg-[#1d3b53] text-white">
              Add
            </button>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="p-2 pr-[2.5rem] w-full bg-[#071115] border-2 focus:outline-none focus:border-white border-[#1d3b53] rounded-lg text-white"
              placeholder="Search tasks"
              value={searchTerm}
              onChange={handleSearch}
            />
            <AiOutlineSearch className="absolute top-[10px] right-3 text-white text-[1.5rem]" />
          </div>
        </div>
        <ul className="w-full md:w-[60%] flex flex-col gap-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`${
                task.completed ? 'line-through text-[#bbc4cb]' : ''
              } px-4 py-2 rounded-lg   border-2 border-[#1d3b53]  flex items-center text-white transition-colors duration-300 ease-in-out gap-4 justify-between `}>
              <span className="truncate text-ellipsis">{task.text}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCompleteTask(task.id)}
                  className=" text-green-500  rounded-lg hover:text-green-600 hover:bg-green-500/10 transition-colors duration-300 ease-in-out">
                  <FaRegCheckSquare className="text-[26px] rounded-lg" />
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className=" text-red-500 rounded-lg hover:text-red-600 transition-colors duration-300 ease-in-out text-[14px] hover:bg-red-500/20">
                  <AiOutlineDelete className="text-[26px]" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
