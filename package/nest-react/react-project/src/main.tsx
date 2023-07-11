import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { routes } from "./routes";
console.log('routesConfig', routes);

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./contianers/error";
import Layout from "./components/layout/index.tsx";
import Login from "./contianers/login/index.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
      
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element></route.element>}
          />
        ))}
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
