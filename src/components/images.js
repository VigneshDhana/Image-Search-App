import React from "react";

export default function CollectionCards({ item }) {
  return (
    <>
      <div className="card">
        <img src={item.urls.thumb} alt={item.alt_discription} />
      </div>
    </>
  );
}
