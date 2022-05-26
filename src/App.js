import React, { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        {/* {appRoutes.map((route) => {
          if (route.children)
            return (
              <Route
                key={route.url}
                path={route.url}
                element={lazy(() => import(`./Pages/${route.component}`))}
              >
                {route.children.map((child) => {
                  return (
                    <Route
                      key={child.url}
                      path={child.url}
                      index={Boolean(child.isIndex)}
                      element={lazy(() => import(`./Pages/${child.component}`))}
                    />
                  );
                })}
              </Route>
            );
          return (
            <Route
              key={route.url}
              path={route.url}
              index={Boolean(route.isIndex)}
              element={lazy(() => import(`./Pages/${route.component}`))}
            />
          );
        })} */}
      </Routes>
    </div>
  );
};

export default App;
