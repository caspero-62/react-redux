import React, {useState} from 'react';

const AddForm = ({addTodo}) => {

    const [todoInput, settodoInput] = useState({content: ''});

    const handleChange = (e) => {
        settodoInput({content: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(todoInput.content !== '') {
            addTodo(todoInput);
        } else {
            alert('todo cannot be empty');
        }

        settodoInput({content: ''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='todo'>Enter Todo:</label>
                <input name='todo' id='todo' value={todoInput.content} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default AddForm;
