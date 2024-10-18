/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { selectedItemsAtom } from "../../apis/util/atom";
import { useState } from "react";

function OrderPage(props) {
  const selectedItems = useRecoilState(selectedItemsAtom); // atom 사용

  const [userInfo, serUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    
  })

  const handleInputChange = (e) => {

  }

  return (
    <div css={s.layout}>
        <div css={s.mainBox}>
            <div css={s.userInfo}>
                <h2>주문자 정보</h2>
                <div css={s.inputBox}>
                <span>이름 : </span>
                <input type="text" name="name" placeholder="이름을 입력해 주세요"/>
                </div>
                <div css={s.inputBox}>
                <label htmlFor="email">이메일 : </label>
                <input type="text" name="email" placeholder="이메일 주소를 입력해 주세요"/>
                </div>
                <div css={s.inputBox}>
                <label htmlFor="phone">연락처 : </label>
                <input type="text" name="phone" placeholder="연락처를 입력해 주세요"/>
                </div>
                    <div css={s.adressButton}>
                        <button>배송지 저장</button>
                    </div>
                <div css={s.adressInputBox}>
                <label htmlFor="adress">배송지 : </label>
                <input type="text" name="adress" placeholder="배송지 입력해 주세요"/>
                </div>
                <div css={s.inputBox}>
                <label htmlFor="message">배송 메세지 : </label>
                <input type="text" name="message"  placeholder="배송 메시지를 입력해 주세요"/>
                </div>
            </div>
            <div css={s.productInfo}>
                <h2>주문상품 정보</h2>
                <div css={s.productTable}>
                    <tr>
                        <td>찹쌀누룽지 반계탕</td>
                        <td><img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" alt="" /></td>
                        <td>수량 : 1개</td>
                        <td>상품금액 12,000원</td>
                        <td>할인금액 0원</td>
                        <td>합계금액 12,000원</td>
                    </tr>
                    </div>
                    <tr>
                        <td>배송비 : 3,000원</td>
                    </tr>
            </div>
            <div css={s.payInfo}>
                <h2>결제수단 선택</h2>
                <button>신용카드</button>
                <button>무통장 입금</button>
            </div>
        </div>
        <div css={s.rightBox}>
            <div css={s.payInfoMain}>
                <div css={s.payinfo}>
                <h2>결제금액</h2>
                </div>
                <div css={s.payinfo}>
                <p>상품 금액 : </p>
                <p>12,000</p>
                </div>
                <div css={s.payinfo}>
                <p>할인 금액 : </p>
                <p>0</p>
                </div>
                <div css={s.payinfo}>
                <p>배송비 : </p>
                <p>3,000</p>
                </div>
                <div css={s.payinfo}>
                <p>추가 배송비 : </p>
                <p>0</p>
                </div>
                <div css={s.payinfo}>
                <p>총 결제 금액 : </p>
                <p>15,000</p>
                </div>
            </div>
            <div css={s.submitButton}>
                <button>결제하기</button>
            </div>
        </div>
    </div>
  );
}

export default OrderPage;

/* 주문자 정보 - input창으로 / 입력 되어 있으면 불러오고, 입력이 없으면 입력 가능하게
                이름, 이메일, 폰번호, 주소, 배송 메세지

                주문 상품 / 총 가격
                배송비(50,000원 이상 무료배송)

                결제 수단 선택
            */
