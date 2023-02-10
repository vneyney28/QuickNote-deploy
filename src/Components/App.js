import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import NewNote from "./newNote";
import { useState } from "react";

function App() {
  const [notes, setValue] = useState([]);

  function deleteNote(id) {
    setValue((preValue) => {
      return preValue.filter((item, index) => {
        return index != id;
      });
    });
  }

  function handleAdd(note) {
    setValue((preValue) => {
      return [...preValue, note];
    });
  }
  return (
    <div className="App">
      <Header />
      <NewNote onAdd={handleAdd} />
      {notes.map((n, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={n.newtitle}
          content={n.newcontent}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
