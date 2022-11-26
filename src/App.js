
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AnimeInfo } from "./pages/AnimeInfo";
import "../src/styles/index.css"
import Header from "./components/Header";
import WatchList from "./pages/WatchList";
import Notfound from "./pages/Notfound";
function App() {
    return (
        <div className="app">
         <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={ <AnimeInfo />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/watchlist/anime/:id" element={<AnimeInfo />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
    );
}

export default App;
