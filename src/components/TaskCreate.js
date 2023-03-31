import { useState } from "react";

function TaskCreate({onCreate}) {
    const [title, setTitle] = useState("")
    const [taskDesc, setTaskDesc] = useState("")

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title,taskDesc);
        setTitle("")
        setTaskDesc("")
    }
  return <div className="task-div">
    <h3 className="task-add-title">Lütfen Task Ekleyiniz.</h3>
    <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input"/>
        <label className="task-label">Task Giriniz:</label>
        <textarea value={taskDesc} onChange={(e) => {setTaskDesc(e.target.value)}} className="task-input"/>
        <button className="task-btn" onClick={handleSubmit}>Oluştur</button>
    </form>
  </div>;
}

export default TaskCreate;
