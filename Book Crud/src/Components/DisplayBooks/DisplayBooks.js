import React from "react";
import "../../App.css";
function DisplayBooks({ save, clickDeleteBtnHandeler }) {
  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th className="customize">Delete</th>
        </tr>
      </thead>

      <tbody id="book-list">
        {save.length > 0 &&
          save.map((singleSaves, index) => {
            return (
              <tr key={index}>
                <td>{singleSaves?.titel}</td>
                <td>{singleSaves?.author}</td>
                <td>{singleSaves?.isbn}</td>
                <td className="customize">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={clickDeleteBtnHandeler}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default DisplayBooks;
