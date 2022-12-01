import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./components/landing";

function App() {
  const [content, setContent] = useState("");
  let [collection, setCollection] = useState([]);
  const addCollection = (item) => {
    let duplicate = collection.filter((img) => img.id === item.id);
    if (duplicate.length) {
      alert("This image is already Bookmarked");
      return;
    }
    collection = [...collection, item];
    setCollection(collection);
  };
  const getCollection = () => {
    return collection;
  };
  useEffect(() => {
    setContent(
      <Landing
        getCollection={getCollection}
        addCollection={addCollection}
        setContent={setContent}
      />
    );
  }, []);
  return <>{content}</>;
}

export default App;
