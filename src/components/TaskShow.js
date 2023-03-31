function TaskShow({task}) {
    console.log(task);
  return <div className="task">
    <h3 className="task-title">Göreviniz</h3>
    <div>{task.title}</div>
    <h3 className="task-title">Yapılacaklar</h3>
    <div>{task.taskDesc}</div>
    <div className="buttons">
        <button className="delete-btn">Sil</button>
        <button className="update-btn">Güncelle</button>
    </div>
  </div>;
}

export default TaskShow;
