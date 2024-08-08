import React, { useEffect, useState } from "react";
import Posts from "../../Components/Posts/Posts";
import { baseApiUrl } from "../../constant";
import Spinner from "../../Components/Spinner/Spinner";
import CreatePost from "../../Components/CreatePost/CreatePost";
import EditPost from "../../Components/EditPost/EditPost";

function MainApp() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);

    await fetch(`${baseApiUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));

    setLoading(false);
  };

  const clickDeleteBtn = async (event, postsId) => {
    event.preventDefault();
    setLoading(true);
    await fetch(`${baseApiUrl}/posts/${postsId}`, {
      method: "DELETE",
    })
      .then(async () => {
        await getPosts();
      })
      .catch((err) => console.error(err));
    setLoading(false);
  };

  const clickEditBtn = async (e, postsId) => {
    e.preventDefault();

    await fetch(`${baseApiUrl}/posts/${postsId}`)
      .then((response) => response.json())
      .then((data) => {
        setEditPost(data);

        let $ = window.$;
        $("#updatePost").modal("show");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container main-app">
      {loading && <Spinner />}
      <CreatePost getPosts={getPosts} />
      <EditPost editPost={editPost} getPosts={getPosts} />
      <Posts
        posts={posts}
        clickDeleteBtn={clickDeleteBtn}
        clickEditBtn={clickEditBtn}
      />
    </div>
  );
}

export default MainApp;
