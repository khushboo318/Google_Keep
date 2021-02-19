import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setaddItem] = useState([]);
  const addEvent = (note) => {
    // alert("I am Clicked");
    setaddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) => {
    setaddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <Footer />
      <CreateNote passNote={addEvent} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteNote={onDelete}
          />
        );
      })}
    </>
  );
};

export default App;
