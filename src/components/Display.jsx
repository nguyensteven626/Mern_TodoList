import React from 'react';


const Display = (props) => {

    // console.log(props);
    console.log(props.idx);
    const {list, deleteTask, updateTask} = props;

    // const deleteTask = (deleteIdx) => {
    //     console.log("deleteTask function", deleteIdx);
    //     //use filter to select all tasks without the deleteIdx and re-array them
    //     const deleteFunction = list.filter((l, idx) => {
    //       return idx !== deleteIdx;
    //     });
    //     setList(deleteFunction);
    //   }


    return (
        
        <fieldset>
            {JSON.stringify(list)}
            
            <h2>Todo List: </h2>
            <div>
            {
                list.map((list, idx) => {
                    return <div key = {idx} idx={idx}>
                        {list.status ? "yes" : "no"}
                        <input type="checkbox" onChange={() => updateTask(idx) }/>
                        {list.task} 
                        <button onClick={() => deleteTask(idx)}>Delete</button>
                        </div>
                })
            }
           </div>
        </fieldset>
    )
}

export default Display;