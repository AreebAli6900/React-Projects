import React from "react";

function Posts(props) {
  const { posts = [], clickDeleteBtn, clickEditBtn } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Post Id</th>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.length > 0 &&
          posts.map((singlePost, index) => {
            return (
              <tr key={index}>
                <td>{singlePost.id}</td>
                <td>{singlePost.title}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => clickEditBtn(event, singlePost.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => clickDeleteBtn(event, singlePost.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Posts;
