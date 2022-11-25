import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchListProvider from "./components/contextApi/contextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <WatchListProvider>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </WatchListProvider>
    </Router>


);
