import React, { useContext } from "react";
import { LoadingContext } from "../loadingManager/LoadingManager";

import "./loader.scss";

export default () => {
  const [pendingRequests] = useContext(LoadingContext);
  return (
    <>
      {pendingRequests && (
        <div className="loading">
          <div></div>
        </div>
      )}
    </>
  );
};
