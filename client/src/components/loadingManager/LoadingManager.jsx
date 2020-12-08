import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export default function LoadingProvider({ children }) {
  const [pendingRequests, setPendingRequest] = useState(false);

  return (
    <LoadingContext.Provider value={[pendingRequests, setPendingRequest]}>
      {children}
    </LoadingContext.Provider>
  );
}
