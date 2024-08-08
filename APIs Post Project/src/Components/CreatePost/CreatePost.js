import React, { useState } from "react";
import { baseApiUrl } from "../../constant";

function CreatePost({ getPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitContentHandler = (event) => {
    event.preventDefault();
    if (!title || !body) {
      alert("PLEASE FILL THE TASK");
      return;
    }

    fetch(`${baseApiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    })
      .then(async () => {
        setTitle("");
        setBody("");

        let $ = window.$;
        $("#createPost").modal("hide");
        await getPosts();
      })
      .catch((err) => console.error(err));
  };

  const formPayload = { title, body };

  return (
    <React.Fragment>
      <button
        className="btn btn-primary create-post"
        data-toggle="modal"
        data-target="#createPost"
      >
        Create Post
      </button>
      <div
        className="modal fade"
        id="createPost"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="modalLabel">
                Create Post
              </h4>
            </div>
            <div className="modal-body">
              <form
                method="POST"
                id="create-post-form"
                onSubmit={submitContentHandler}
              >
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="post_title"
                    placeholder="Title"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                  />
                </div>

                <div className="form-group">
                  <label>Body</label>
                  <textarea
                    name=""
                    id="post_body"
                    cols="30"
                    rows="10"
                    placeholder="Body"
                    className="form-control"
                    onChange={(event) => setBody(event.target.value)}
                    value={body}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
