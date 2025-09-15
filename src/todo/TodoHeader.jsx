import { useEffect, useState } from "react";

export const TodoHeader = () => {
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
        <header>
            <h1>Todo List</h1>
            <h2 className='date-time'>{dateTime}</h2>
        </header>
    )
}