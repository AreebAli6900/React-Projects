import React, { useEffect, useState } from "react";
import { baseApiUrl } from "../../constant";

function EditPost({ editPost, getPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editPost) {
      const { body, title } = editPost;
      setTitle(title);
      setBody(body);
    }
  }, [editPost]);

  const formPayload = { title, body };

  const updateContentHandler = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("PLEASE FILL THE TASK");
      return;
    }

    fetch(`${baseApiUrl}/posts/${editPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    })
      .then(async () => {
        setTitle("");
        setBody("");

        let $ = window.$;
        $("#updatePost").modal("hide");
        await getPosts();
      })
      .catch((err) => console.error(err));
  };
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="updatePost"
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
                Update Post
              </h4>
            </div>
            <div className="modal-body">
              <form
                method="POST"
                id="create-post-form"
                onSubmit={updateContentHandler}
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

export default EditPost;
