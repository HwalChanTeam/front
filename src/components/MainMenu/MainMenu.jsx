
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

    const [onCursor, setOnCursor] = useState(true);

    const handleOnMouseEnter = () => {
        setOnCursor(false);
        console.log("올렸다" + onCursor);
    }
    const handleOnMouseLeave = () => {
        setOnCursor(true);
        console.log("내렸다" + onCursor);
    }

    return (
        <div css={s.container}>
            <header css={s.headerLayout}>
                <div css={s.layout}>
                    <div css={s.menusLayout}>
                        {
                            menus.map(menu =>
                                <Link
                                    to={menu?.path}
                                    css={s.selectedMenu(pathname === menu?.path)}
                                    onMouseEnter={handleOnMouseEnter}
                                    onMouseLeave={handleOnMouseLeave}
                                    >
                                    <span>{menu.name}</span>
                                    {
                                        // !menu?.subMenus.length &&
                                        onCursor !== false &&(
                                            <ul css={s.categorySubLayout}>
                                                {menu.subMenus.map(subMenu => (
                                                    <li>
                                                        {subMenu.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    }
                                </Link>)
                        }
                    </div>
                    <MainSearch onSearch={null} />
                </div>
            </header>

        </div>
    );
}

export default MainMenu;