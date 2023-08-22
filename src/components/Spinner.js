import React from "react";
import "./Spinner.css";

export default function LoadingSpinner() {
  return (
    <>
        <div class="jumping-dots-loader"> <span></span> <span></span> <span></span> </div>
        <div class="moving-gradient"></div>
    </>
  );
}