import React from "react";
import iconNotFound from "../Image/icons8-nothing-found-100.png";

export default function NotFound({ errorMessage }) {
  return (
    <div>
      <div className="notFound">
        <img src={iconNotFound} alt="notFound-icon" />
        <p>Oops! {errorMessage} :/</p>
      </div>
    </div>
  );
}
