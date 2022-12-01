import React, { useState } from "react";
import Card from "./card";
import Bookmark from "./bookmark";

export default function Landing({ getCollection, addCollection, setContent }) {
  const [images, setImages] = useState([]);
  const handleSearch = async () => {
    let query = document.getElementById("search").value;
    if (!query) return;
    let res = await (
      await fetch(
        `https://api.unsplash.com/search/photos?client_id=rVM1rWuz2YKYH0gwHZRvWzOabQd9WuVP-VpE68aJ0jg&page=1&query=${query}`
      )
    ).json();
    res.results.sort((a, b) => a.height - b.height);
    setImages(res.results);
  };
  const handleBookmark = () => {
    let images = getCollection();
    setContent(
      <Bookmark
        images={images}
        getCollection={getCollection}
        addCollection={addCollection}
        setContent={setContent}
      />
    );
  };

  return (
    <div className="App">
      <header>
        <div className="title">
          <h1>React Photo Search</h1>
        </div>
        <div className="bookmark" onClick={handleBookmark}>
          <h4>Bookmarks</h4>
        </div>
      </header>
      <div className="search">
        <input type="text" id="search" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="images">
        <div className="col">
          {images.slice(0, 4).map((item, i) => (
            <Card item={item} key={i} addCollection={addCollection} />
          ))}
        </div>
        <div className="col">
          {images.slice(4, 7).map((item, i) => (
            <Card item={item} key={i} addCollection={addCollection} />
          ))}
        </div>
        <div className="col">
          {images.slice(7).map((item, i) => (
            <Card item={item} key={i} addCollection={addCollection} />
          ))}
        </div>
      </div>
    </div>
  );
}
