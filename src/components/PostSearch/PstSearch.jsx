import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function DaumPost({ onComplete }) {
    // 클릭 시 수행될 팝업 생성 함수
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; // 추가될 주소
        let address = data.sido + ' ' + data.sigungu; // 지역주소(시, 도 + 시, 군, 구)

        if (data.addressType === 'R') { // 주소타입이 도로명주소일 경우
            if (data.bname !== '') {
                extraAddress += data.bname; // 법정동, 법정리
            }
            if (data.buildingName !== '') { // 건물명
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }

            // 지역주소를 제외한 나머지 주소 추출
            fullAddress = fullAddress.replace(address, '');
        }

        // 부모 컴포넌트에 전달할 주소 객체 구성
        onComplete({
            address: address, // 지역 주소 (시, 도 + 시, 군, 구)
            detailAddress: fullAddress + (extraAddress !== '' ? ` (${extraAddress})` : '') // 나머지 주소
        });
    };

    // 클릭 시 발생할 이벤트
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <button type="button" onClick={handleClick}>주소찾기</button>;
}

export default DaumPost;
