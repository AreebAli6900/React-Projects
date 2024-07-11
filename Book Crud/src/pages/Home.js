import React, { useState } from "react";
import "./Home.less";
import DisplayBooks from "../Components/DisplayBooks/DisplayBooks";

function Home() {
  const [titel, setTitel] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [save, setSave] = useState([]);

  const titelChangeHnadler = (event) => {
    event.preventDefault();
    setTitel(event.target.value);
  };

  const authorChangeHnadler = (event) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };

  const isbnChangeHnadler = (event) => {
    event.preventDefault();
    setIsbn(event.target.value);
  };

  const clickToSumbitHandler = (event) => {
    event.preventDefault();

    if ((titel === "", author === "", isbn === "")) {
      alert("PLEASE FILL THE FULL VALUE");
      return;
    }

    const object = { titel, author, isbn };
    setSave([...save, object]);

    setTitel("");
    setAuthor("");
    setIsbn("");
  };

  const clickDeleteBtnHandeler = (event, index) => {
    event.preventDefault();

    if (window.confirm("You Delete This!") === true) {
      const deleteBook = [...save];
      deleteBook.splice(index, 1);
      setSave(deleteBook);
    }
  };

  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={clickToSumbitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            value={titel}
            onChange={titelChangeHnadler}
            placeholder="Please Fill The Tittle"
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            id="author"
            className="u-full-width"
            value={author}
            onChange={authorChangeHnadler}
            placeholder="Please Fill The Author"
          />
        </div>
        <div>
          <label>ISBN#</label>
          <input
            type="number"
            id="isbn"
            className="u-full-width"
            value={isbn}
            onChange={isbnChangeHnadler}
            placeholder="Please Fill The Isbn"
          />
        </div>
        <div>
          <input type="submit" value="Submit" className="u-full-width" />
        </div>
      </form>
      <DisplayBooks
        save={save}
        clickDeleteBtnHandeler={clickDeleteBtnHandeler}
      />
    </div>
  );
}

export default Home;
