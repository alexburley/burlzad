import React, { useState } from "react";
import Loader from "./Loader";
import "./LoaderContent.css";

export default function LoaderContent() {
  const [loaded, setLoaded] = useState(false);
  const [reset, setReset] = useState();

  const triggerReset = () => {
    setReset((reset) => !reset);
  };
  return (
    <div>
      <p>
        This component took me the best part of 6 months to finish. Perhaps my
        proudest achievement
      </p>

      <div className="loader-container">
        <Loader hasLoaded={setLoaded} />
      </div>
      <button onClick={triggerReset}>Reset</button>
    </div>
  );
}
