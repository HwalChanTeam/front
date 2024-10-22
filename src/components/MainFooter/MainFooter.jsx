/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainFooter(props) {
    return (
    <div css={s.layout}>
        <div css={s.footLayout}>
            <div css={s.mainBox}>
                <div css={s.leftBox}>
                    <div css={s.buttonBox}>
                        <button>회사 설명</button>
                        <button>이용 약관</button>
                    </div>
                    <h2>고객센터</h2>
                    <h1>1588-5890</h1>
                    <div css={s.box}>
                        <span>상담 가능시간 : 월 ~ 금(공휴일 휴무)</span>
                        <span>오전 09:00 ~ 18:00</span>
                        <span></span>
                    </div>
                </div>
                <div css={s.rightBox}>
                    <div css={s.companyBox}>
                        <h3>주식회사 몽키매직</h3>
                        <span>소재지 : 부산광역시 부산진구 123-1234</span>
                        <span>사업자번호 : 12-1234-1234567</span>
                        <span>문주영 | 이메일 ㅁㅁㅁ@ㅁㅁㅁ.com</span>
                        <span>협력사</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MainFooter;
