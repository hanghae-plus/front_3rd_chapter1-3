import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import Test from "./Test";
// import TestMemo from "./TestuseMemo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App/> */}
    <App />
  </StrictMode>
);
