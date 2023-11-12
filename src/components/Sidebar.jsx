import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={'nav'}>
            <div className='nav__menu df j-center'>
                <li className={'nav__menu-profile dn'}>
                    <div className={'nav__profile-block df a-center'}>
                        <div>
                            <img className={'nav__profile-img'} src="/public/assets/icons/profile.jpg" alt="profile" />
                        </div>
                        <span className={'nav__profile-text'}>Daniel</span>
                    </div>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link dib pr'} to={'/search'}>
                        <span className={'nav__link-search pa'}></span>
                        <span className={'nav__link-text pa dn'}>Search</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link dib pr'} to={'/home'}>
                        <span className={'nav__link-home pa'}></span>
                        <span className={'nav__link-text pa dn'}>Home</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link dib pr'} to={'/tv-shows'}>
                        <span className={'nav__link-tv-shows sprite pa'}></span>
                        <span className={'nav__link-text pa dn'}>Tv Shows</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link dib pr'} to={'/movies'}>
                        <span className={'nav__link-movies sprite pa'}></span>
                        <span className={'nav__link-text pa dn'}>Movies</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link pr dib'} to={'/genres'}>
                        <span className={'nav__link-genres sprite pa'}></span>
                        <span className={'nav__link-text pa dn'}>Genres</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item'}>
                    <NavLink className={'nav__link dib pr'} to={'/watch-later'}>
                        <span className={'nav__link-watch-later sprite pa'}></span>
                        <span className={'nav__link-text pa dn'}>Watch Later</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item nav__menu-item--lng dn'}>
                    <NavLink className={'nav__link-lng dib'} to={'#'}>
                        <span className={'nav__link-text dib fs24'}>Language</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item nav__menu-item--help dn'}>
                    <NavLink className={'nav__link-help dib'} to={'#'}>
                        <span className={'nav__link-text dib fs24'}>Get Help</span>
                    </NavLink>
                </li>
                <li className={'nav__menu-item nav__menu-item--exit dn'}>
                    <NavLink className={'nav__link-exit dib'} to={'#'}>
                        <span className={'nav__link-text dib fs24'}>Exit</span>
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;