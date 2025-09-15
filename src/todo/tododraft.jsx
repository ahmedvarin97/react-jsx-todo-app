import { useEffect, useState } from 'react';
import './todo.css'
import { MdOutlineCheckCircle,MdDeleteForever, MdCheck } from "react-icons/md";
 export const TodoApp = () => {

    const [inputValue, setValue] = useState('')
    const [task, setTask] = useState([])
    const handleInputChange = (value) => {
        setValue(value);
    }
    const handleFormSubmission = (event) =>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) return setValue('')

        setTask((prevTask) => [...prevTask, inputValue])

        setValue('')
    }
     //Single Task Delete
    const handleTaskDeletion = (value) => {
        // console.log(value);
        // console.log(task);
        
        const UpdatedTask = task.filter((getValue) => getValue !== value);
        setTask(UpdatedTask);
    }

    //Clear All Todos
    const handleClearAllTodo = () => {
        setTask([]);
    }

    //Date Time
    const [dateTime, setDateTime] = useState('')
    useEffect(()=> {
        const timeInterval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);
        return () => clearInterval(timeInterval)
    })

   
    

    return(
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmission}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => handleInputChange(event.target.value)}/>
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul className='todo-list'>
                    {
                        task.map((curTask, index) => {
                            return(
                                <li key={index} className='todo-item'>
                                    <span>{curTask}</span>
                                    <div>
                                        <button className='check-btn'><MdCheck/></button>
                                        <button className='delete-btn' onClick={() => handleTaskDeletion(curTask)}><MdDeleteForever/></button>
                                    </div>
                                </li>
                            )
                            
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" type='button' onClick={handleClearAllTodo}>Clear all</button>
            </section>
        </section>
    )
 }

 export default TodoApp;