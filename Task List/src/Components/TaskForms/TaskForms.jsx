import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForms() {
  const [taskInput, setTaskInput] = useState();
  const [filterTask, setFilterTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };
  const addTask = () => {
    setTasks([...tasks, taskInput]);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!taskInput) {
      Swal.fire({
        icon: "error",
        title: "Please Fill The Task",
      });
      return;
    }
    if (edit === null) {
      addTask();
    } else {
      editTask();
    }

    setTaskInput("");
  };

  const deleteFunctionHandler = (event, index) => {
    event.preventDefault();
    Swal.fire({
      title: "Are You Sure?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);

        Swal.fire("task is deleted successfully!", "", "success");
      } else {
        Swal.fire("task is not deleted successfully!", "", "info");
      }
    });
  };

  const clearFunctionHandler = (event) => {
    if (filteredTasks.length > 0) {
      event.preventDefault();
      setTasks([]);
      Swal.fire("All Task are deleted successfully!", "", "success");
    } else {
      Swal.fire("There Is No Task!", "", "info");
    }
  };

  const filterFunctionHandler = (event) => {
    event.preventDefault();
    setFilterTask(event.target.value);
  };

  const filterInputValue = filterTask ? filterTask.toLowerCase() : "";
  const filteredTasks = tasks.filter((singleTask) =>
    singleTask.toLowerCase().includes(filterInputValue)
  );

  const editTaskHandeler = (event, index) => {
    event.preventDefault();
    setEdit(index);
    setTaskInput(tasks[index]);
  };

  const editTask = () => {
    const currentIndex = edit;
    const tempTasks = [...tasks];
    tempTasks[currentIndex] = taskInput;

    setTasks(tempTasks);

    setEdit(null);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <div className="row">
                <form id="task-form" onSubmit={formSubmitHandler}>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      onChange={taskInputHandler}
                      value={taskInput}
                    />
                    <label>New Task</label>
                  </div>
                  <button
                    className="waves-effect waves-light btn"
                    type="submit"
                  >
                    {edit === null ? "Add Task" : "Update Task"}
                  </button>
                </form>
              </div>
            </div>
            {/* TASK LIST */}
            <TaskList
              tasks={tasks}
              deleteFunctionHandler={deleteFunctionHandler}
              clearFunctionHandler={clearFunctionHandler}
              filterFunctionHandler={filterFunctionHandler}
              filteredTasks={filteredTasks}
              editTaskHandeler={editTaskHandeler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForms;
