import React from "react";

export default function Work({ image }) {
  return (
    <div className="worksImg">
      <img src={image} alt="worksimage" />
    </div>
  );
}
