import TaskShow from "./TaskShow";

function TaskList({ tasks}) {
  return <div className="task-list">
    {tasks.map((task, index)=>{
        return (
            <TaskShow task={task} key={index}/>
        )
    })}
  </div>;
}

export default TaskList;
