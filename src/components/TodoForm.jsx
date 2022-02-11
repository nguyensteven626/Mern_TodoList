import React, {useState} from 'react';

const TodoForm = (props) => {

    const [task, setTask] = useState(""); 
    
    
    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
             task: task,
             status: false 
            };
        console.log("The color is", newTask);
        
        props.addTask({task:task, status:false});
        
        //reset State
        setTask("")
    };

    // const handleColor = (e) => {
    //     setColor(e.target.value);
    // }

    return(
        <form onSubmit={ createTask }>
            {/* color: {color}<br/> */}
            {JSON.stringify(task)}<br/>
            <div>
                <label>Task: </label> 
                <input type="text" onChange={ (e) => setTask(e.target.value) }  value = {task}/>
            </div>
            <input type="submit" value="Add Task" />
            
        </form>
    );

}

export default TodoForm;