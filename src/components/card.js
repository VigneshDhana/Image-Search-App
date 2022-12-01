import React from "react";

export default function Card({ item, addCollection }) {
  return (
    <>
      <div className="card">
        <div className="collect" onClick={() => addCollection(item)}>
          <p>+</p>
        </div>
        <img src={item.urls.thumb} alt={item.alt_discription} />
      </div>
    </>
  );
}
