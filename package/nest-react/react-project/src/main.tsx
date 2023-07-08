import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ROUTE_CONFIG } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./contianers/error";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      {ROUTE_CONFIG.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element></route.element>}
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
