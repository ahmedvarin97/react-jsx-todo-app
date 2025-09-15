import { useState } from 'react';
import './todo.css'
import { MdOutlineCheckCircle,MdDeleteForever, MdCheck } from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
 export const TodoApp = () => {
    const [task, setTask] = useState([])
    const handleFormSubmission = (value) =>{
        const {id, content, checked} = value
        if(!content) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if(ifTodoContentMatched) return
        setTask((prevTask) => [...prevTask, {id, content, checked}])
    }
     //Single Task Delete
    const handleTaskDeletion = (value) => {
        const UpdatedTask = task.filter((getValue) => getValue.content !== value);
        setTask(UpdatedTask);
    }
    //Clear All Todos
    const handleClearAllTodo = () => {
        setTask([]);
    }

    const handleTaskCheck = (content) => {
        const UpdatedContent = task.map((curContent) => {
            if(curContent.content === content){
                return { ...curContent, checked: !curContent.checked }
            }else{
                return curContent; 
            }
            
        })
        setTask(UpdatedContent)
    }
    return(
        <section className='todo-container'>
            <TodoHeader />
            <TodoForm onhandleFormSubmission={handleFormSubmission}/>
            <section className='myUnOrdList'>
                <ul className='todo-list'>
                    {
                        task.map((curTask) => {
                            return(
                                <TodoList key={curTask.id} data={curTask.content} funcdel={handleTaskDeletion} funcCheck={handleTaskCheck} checked={curTask.checked}/>
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