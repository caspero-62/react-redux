import React from 'react';

const Todos = ({todoList, deleteTodo}) => {
    return (
        <div className='todos collection'>
            {todoList.length ? (   
                    
                todoList.map(todo => (
                    <div className='collection-item' key={todo.id}>
                        <p onClick={() => deleteTodo(todo.id)}>{todo.content}</p>
                    </div>
                ))
                    
            ) : (
                <p className='center collection-item'>You have no todos left, Yipee!</p>
            )}
        </div> 
    );
}

export default Todos;
