import { useState } from "react";

export const TodoForm = ({onhandleFormSubmission}) => {
    const [inputValue, setValue] = useState({})
     const handleInputChange = (value) => {
        setValue({id: value, content: value, checked: false});
    }

    const handleFormSubmission = (event) =>{
        event.preventDefault();
        onhandleFormSubmission(inputValue)
        setValue({id: '', content: '', checked: false})
    }
    return (
        <section className="form">
                <form onSubmit={handleFormSubmission}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)}/>
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
    );
}