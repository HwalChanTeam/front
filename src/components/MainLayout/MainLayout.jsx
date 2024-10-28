/** @jsxImportSource @emotion/react */
import MainHeader from "../MainHeader/MainHeader";
import * as s from "./style";

function MainLayout({ children }) {
    return (
        <>
            <div css={s.layout}>
                <MainHeader />
            </div>
            {children}
        </>
    );
}

export default MainLayout;
