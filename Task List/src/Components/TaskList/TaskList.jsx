/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function TaskList(props) {
  const {
    deleteFunctionHandler,
    clearFunctionHandler,
    filterFunctionHandler,
    filteredTasks,
    editTaskHandeler,
  } = props;
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={filterFunctionHandler}
        />
        <label>Filter Task</label>
      </div>

      <ul className="collection">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((singleTask, index) => {
            return (
              <li className="collection-item" key={index}>
                {singleTask}

                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => deleteFunctionHandler(event, index)}
                >
                  <i className="fa fa-remove"></i>
                </a>

                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => editTaskHandeler(event, index)}
                >
                  <i className="fa fa-edit"></i>
                </a>
              </li>
            );
          })
        ) : (
          <p className="collection-item">Task is Not Found!</p>
        )}
      </ul>
      <a className="clear-tasks btn black" onClick={clearFunctionHandler}>
        Clear Task
      </a>
    </div>
  );
}

export default TaskList;
