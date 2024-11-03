
/** @jsxImportSource @emotion/react */
import { useLocation, useParams } from 'react-router';
import MainSearch from '../MainSearch/MainSearch';
import *as s from './style';
import { Link, useSearchParams } from 'react-router-dom';
import { menus } from '../../constants/mainMenus';
import { useState } from 'react';
import SelectProductView from '../User/SelectProductView/SelectProductView';
import Category from '../Category/Category';
import ReactPaginate from 'react-paginate';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import UserSearch from '../MainSearch/UserSearch/UserSearch';


function MainMenu(props) {
    const location = useLocation();
    const pathname = location.pathname;

    // 검색 param을 UserSearch 컴포넌트로 넘기기 위함
    const [searchParam] = useSearchParams();
    const searchQuery = searchParam.get("search");

    const [onMouseMenuId, setOnMouseMenuId] = useState(0);
    const [onMouseSubMenuId, setOnMouseSubMenuId] = useState(0);

    // 목록 hover o
    const handleOnMouseEnter = (type, id) => {
        if (type === "main") {
            setOnMouseMenuId(id);
        } else if (type === "sub") {
            setOnMouseSubMenuId(id);
        }
    };

    // 목록에 hover x 
    const handleOnMouseLeave = (type, id) => {
        if (type === "main") {
            setOnMouseMenuId(0);
        } else if (type === "sub") {
            setOnMouseSubMenuId(0);
        }
    };

    // sub 목록을 클릭 시 sub 창 x 
    const handleSelectClick = () => {
        setOnMouseMenuId(0);
        setOnMouseSubMenuId(0);
    }

    return (
        <>
            <header css={s.layout}>
                <div css={s.menusLayout}>
                    {
                        menus.map(menu =>
                            <div css={s.selectedMenu(pathname === menu?.path)} >
                                <Link
                                    to={menu?.path}
                                    onMouseEnter={() => handleOnMouseEnter("main", menu.id)}
                                >
                                    <span>{menu?.icon}</span>
                                    <span>{menu.name}</span>
                                </Link>
                                {
                                    (onMouseMenuId === menu.id && !!menu?.subMenus.length) &&
                                    <ul css={s.categorySubLayout} onMouseLeave={() => handleOnMouseLeave("main", menu.id)}>
                                        {menu.subMenus.map(subMenu => (
                                            <div>
                                                <Link
                                                    to={subMenu.path}
                                                    onMouseEnter={() => handleOnMouseEnter("sub", subMenu.id)}
                                                >
                                                    <li onClick={handleSelectClick}>
                                                        {subMenu.name}
                                                    </li>
                                                </Link>
                                                {
                                                    // 서브 목록이 옆으로 뜨는 (밀키트)
                                                    (onMouseSubMenuId === subMenu.id && !!subMenu?.subSideMenus.length) &&
                                                    <ul css={s.categorySubSideLayout} onMouseLeave={() => handleOnMouseLeave("sub", subMenu.id)} >
                                                        {subMenu.subSideMenus.map(subSideMenu => (
                                                            <Link to={subSideMenu.path}>
                                                                <li onClick={handleSelectClick}>
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
                <MainSearch />
            </header>
            <SelectProductView />
            <UserSearch searchQuery={searchQuery} />
        </>
    );
}

export default MainMenu;