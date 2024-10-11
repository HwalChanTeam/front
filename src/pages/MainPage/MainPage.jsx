/** @jsxImportSource @emotion/react */
import *as s from './style';
import MainSearch from '../../components/MainSearch/MainSearch';
import MainMenu from '../../components/MainMenu/MainMenu';
function MainPage() {

    return (
        <div css={s.layout}>
            <MainMenu />
        </div>
    );
}

export default MainPage;