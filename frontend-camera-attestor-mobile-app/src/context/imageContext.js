import { createContext, useState } from "react";

const ImageContext = createContext(null);

const ImageProvider = ({ children }) => {
  // Add your rollup server url here
  const rollupUrl = "https://a968-119-82-122-198.ngrok-free.app/";

  const [uri, setUri] = useState("");
  const [base64, setBase64] = useState("");
  const [uuid, setUuid] = useState("");

  const value = {
    uri,
    setUri,
    base64,
    setBase64,
    uuid,
    setUuid,
    rollupUrl,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
