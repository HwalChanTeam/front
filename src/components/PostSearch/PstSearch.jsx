import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function DaumPost({ onComplete }) {
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; // 추가 주소
        let address = data.sido + ' ' + data.sigungu; // 지역 주소
        let zipCode = data.zonecode;

        if (data.addressType === 'R') { // 도로명 주소일 경우
            if (data.bname !== '') {
                extraAddress += data.bname; // 법정동
            }
            if (data.buildingName !== '') { // 건물명
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress = fullAddress.replace(address, ''); // 지역 주소 제외
        }

        // 부모 컴포넌트에 전달할 주소 객체 구성
        onComplete({
            address: address, // 지역 주소
            detailAddress: fullAddress + (extraAddress !== '' ? ` (${extraAddress})` : ''), // 나머지 주소
            zipCode : zipCode
        });
    };

    // 클릭 시 발생할 이벤트
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <button type="button" onClick={handleClick}>주소찾기</button>;
}

export default DaumPost;