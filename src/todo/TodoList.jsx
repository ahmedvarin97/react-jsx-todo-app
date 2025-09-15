import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({funcdel, funcCheck, data, checked}) => {
    const handleTaskDeletion = (value) => {
        funcdel(value)
    }

    const handleTaskCheck = (value) => {
        funcCheck(value)
    }
    return(
       <li className='todo-item'>
            <span className={checked ? 'checkList' : 'notCheckList'}>{data}</span>
            <div>
                <button className='check-btn' onClick={() => handleTaskCheck(data)}><MdCheck/></button>
                <button className='delete-btn' onClick={() => handleTaskDeletion(data)}><MdDeleteForever/></button>
            </div>
        </li>
    )
}