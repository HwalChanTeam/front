
/** @jsxImportSource @emotion/react */
import { useLocation } from 'react-router';
import MainSearch from '../MainSearch/MainSearch';
import *as s from './style';
import { Link } from 'react-router-dom';
import { menus } from '../../constants/mainMenus';
import { useState } from 'react';


function MainMenu(props) {
    const location = useLocation();
    const pathname = location.pathname;

    const [onMouseMenuId, setOnMouseMenuId] = useState(0);
    const [onMouseSubMenuId, setOnMouseSubMenuId] = useState(0);

    const handleOnMouseEnter = (type, id) => {
        if(type === "main") {
            setOnMouseMenuId(id);
        }else if(type === "sub") {
            setOnMouseSubMenuId(id);
        }
    }
    const handleOnMouseLeave = (type, id) => {
        if(type === "main") {
            setOnMouseMenuId(0);
        }else if(type === "sub") {
            setOnMouseSubMenuId(0);
        }
    }

    return (
        <header css={s.layout}>
            <div css={s.menusLayout}>
                {
                    menus.map(menu =>
                        <div css={s.selectedMenu(pathname === menu?.path)}>
                            <Link
                                to={menu?.path}
                                onMouseEnter={() => handleOnMouseEnter("main", menu.id)}
                                onMouseLeave={() => handleOnMouseLeave("main", menu.id)}
                            >
                                <span>{menu?.icon}</span>
                                <span>{menu.name}</span>
                            </Link>
                            {
                                (onMouseMenuId === menu.id && !!menu?.subMenus.length) &&
                                    <ul css={s.categorySubLayout}>
                                        {menu.subMenus.map(subMenu => (
                                            <div>
                                                <Link 
                                                    to={subMenu.path}
                                                    onMouseEnter={() => handleOnMouseEnter("sub", subMenu.id)}
                                                    onMouseLeave={() => handleOnMouseLeave("sub", subMenu.id)}
                                                >
                                                    <li>
                                                        {subMenu.name}
                                                    </li>
                                                </Link>
                                                {
                                                    (onMouseSubMenuId === subMenu.id && !!subMenu?.subSideMenus.length) &&
                                                    <ul css={s.categorySubSideLayout}>
                                                        {subMenu.subSideMenus.map(subSideMenu => (
                                                            <Link to={subSideMenu.path}>
                                                                <li>
                                                                    {subSideMenu.name}
                                                                </li>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                }
                                            </div>
                                        ))}
                                    </ul>
                                }
                        </div>)

                }
            </div>
            <MainSearch onSearch={null} />
        </header>
    );
}

export default MainMenu;