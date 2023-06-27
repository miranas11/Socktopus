import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header ">
            <img className="header__logo" src={logo}></img>
            <nav className="header__nav">
                <div className="header__menu-wrapper">
                    <ul className="header__menu">
                        <li>
                            <Link className="header__link">Home</Link>
                        </li>
                        <li>
                            <Link className="header__link">Men</Link>
                        </li>
                        <li>
                            <Link className="header__link">Women</Link>
                        </li>
                        <li>
                            <Link className="header__link">Kids</Link>
                        </li>
                    </ul>
                    <div className="header__search">
                        <button className="header__icon header__icon-search">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <input
                            className="header__search-input"
                            type="text"
                        ></input>
                    </div>
                    <ul className="header__menu">
                        <li>
                            <Link className="header__link">Profile</Link>
                        </li>
                        <li>
                            <Link className="header__link">WishList</Link>
                        </li>
                        <li>
                            <Link className="header__link">
                                <button className="header__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="w-5 h-5"
                                    >
                                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="header__bars" onClick={() => {}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
