import React from "react";
import Landing from "./landing";
import CollectionCards from "./images";

export default function Bookmark({
  images,
  setContent,
  addCollection,
  getCollection,
}) {
  images = images.sort((a, b) => a.height - b.height);
  let cut = Math.ceil(images.length / 3);
  const getBack = () => {
    setContent(
      <Landing
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
          <h1>Bookmarked Images</h1>
        </div>
        <div className="bookmark" onClick={getBack}>
          <h4>Go Back</h4>
        </div>
      </header>
      <div className="images">
        <div className="col">
          {images.slice(0, cut).map((item, i) => (
            <CollectionCards item={item} key={i} />
          ))}
        </div>
        <div className="col">
          {images.slice(cut, cut * 2).map((item, i) => (
            <CollectionCards item={item} key={i} />
          ))}
        </div>
        <div className="col">
          {images.slice(cut * 2).map((item, i) => (
            <CollectionCards item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
