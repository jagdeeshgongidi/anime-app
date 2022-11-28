import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import { Link,useNavigate } from "react-router-dom";
import UseWatchList from "./hooks/UseWatchlist";
const Header = () => {
    const navigate=useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [watchList] = UseWatchList();
    const [search,setSearch]=useState("")
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const searchHandler=(e)=>{
        e.preventDefault();
        if (search.length>3) navigate(`/search/${search}`)
    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    Anime World
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                    menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
            <form className='searchBar'>
            <input type="text" placeholder="Search for an anime ....." 
            value={search} onChange={(e)=>setSearch(e.target.value)}
            />
              <button  onClick={searchHandler} id="search">Search</button>
            </form>
                   
                <Link datacount={watchList.length} className="watch" to="/watchlist">Watchlist</Link>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
