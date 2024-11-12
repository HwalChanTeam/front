 # 📁 목차
 
 > ## 💻 [프로젝트 소개](#-프로젝트-소개)
 > 
 > ## 👨‍👩‍👧‍👦 [팀원 소개 ](#-팀원-소개-및-역할분담)
 > 
 > ## 🤝 [협업 방식](#-협업-방식)
 > 
 > ## 📋 [프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리)
 > 
 > ## 🔎 [브랜치 전략](#-브랜치-전략)
 > 
 > ## 📝 [컨벤션](#-컨벤션)
 > 
 > ## 📢 [배포](#-배포)
 > 
 > ## 🛠️ [개발 도구](#-개발-도구)
 >
 > ## 📑 [API 명세서 ERD 설계도](#-API-명세서-ERD-설계도)
 > 
 > ## 📄 [메뉴 구조도](#-메뉴-구조도)
 > 
 > ## 🔧 [화면 구현](#-화면-구현)
 > 
 > ## 📖 [주요 기능 및 코드 리뷰](#-주요-기능-및-코드-리뷰)
 > 
 > ## 💡 [느낀점](#-느낀점)

<br>
<br>

## 💻 프로젝트 소개

### ◈ 제목
- 밀키트 상품 구매 사이트

### ◈ 목적
- ( 목적은 추후의 수정예정)

### ◈ 팀 프로젝트
- 팀원 4명 

### ◈ 제작 기간
- 2024.10.01 ~ 2024.11.13

<br>
<br>


## 👨‍👩‍👧‍👦 팀원 소개 및 역할 분담
<h3> 🐃 팀장 : 문주영 </h3>

### 🔧 Back-End
- back 초기 셋팅
- 요청 받은 데이터를 DB와 연결하기 
- 관리자 페이지에서 상품 등록, 조회 기능 구현 

### 🖥️ Front_End
- back과 front 변수명 설정
- ㄹㅇㄹㅇㄴ

### etc.

---

<h3> 🦦 팀원 : 이성민</h3>

### 🖥️ Front_End

### etc.

---

<h3> 🐉 팀원 : 김유진</h3>

### 🔧 Back-End

### 🖥️ Front_End
- back과 front 변수명 설정

### etc.

---

<h3> 🐓 팀원 : 김영희</h3>

### 🖥️ Front_End

### etc.

</br>
</br>

## 🤝 협업 방식
1. 해당하는 업무에 대해 GitHub Issue를 생성합니다.
2. GitHub Actions에 의해 자동으로 생성된 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 작업을 완료하면 각자의 생성한 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.
 	- PR(pull request)을 오픈하면, 팀장이 코드를 확인하고 승인합니다.

	- 코드 리뷰 & 승인은 팀장이 일임했지만, 팀원들도 각자 맡은 부분에 대한 책임감을 가지고 프로젝트를 진행했습니다.

*    컨펌 담당
	 - 주영 :
	 - 성민 :
	 - 유진 :
	 - 영희 :

5. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.

</br>
</br>

## 📋 프로젝트 진행 상황 관리

<a href="https://github.com/HwalChanTeam/front/issues?q=is%3Aissue+is%3Aclosed">  📋GitHub Issues(Front) & </a> 
<a href="https://github.com/HwalChanTeam/back/issues?q=is%3Aissue+is%3Aclosed">GitHub Issues(Back)</a>

-  간편한 이슈 생성을 위해 이슈 템플릿을 만들어 사용했습니다. + 팀원이 현재 어떤 작업을 진행하고 있는지를 바로 알 수 있어 의사소통 비용을 줄일 수 있었습니다.

</br>
</br>

## 🔎 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

</br>
</br>

## 📝 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

### 📌 코드 컨벤션

<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.


💄 함수명, 변수명은 카멜케이스로 작성합니다.


🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.


❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.


🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.


🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.


💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.


🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)


👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)


✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.


🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)


📠 배열 복사 시 반복문을 사용하지 않는다.


😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)


🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)


🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.


🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.


🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.


🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.


🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)


🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.


🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.


🥐 삼중 등호 연산자인 ===, !==만 사용한다.


🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.


🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라


🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 *의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠


💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.



</p>
</pre>
</div>

</br>
</br>

## 📢 베포 (보류)

</br>
</br>

## 🛠️ 개발 도구

### ▣ Back_End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
</p>

### ▣ Front_End

<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
</p>

### ▣ Database 

<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

### ▣ SCM & Deployment

<p>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
</p>

### ▣ Library
- #### Back_End
<p>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/><img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</p>

- #### Front_End
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white"> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
</p>

### ⛓️ pom.xml(Back_End)

| 라이브러리                          | 용도                                      |
| ----------------------------------- | ------------------------------------------|
| lombok                              | 어노테이션(@)으로 코드 자동 생성          |
| spring-boot-starter-security        | spring security 적용                      |
| spring-boot-starter-validation      | 입력 값 검증                              |
| spring-boot-starter-web             | Spring Web 프로젝트에 필수 라이브러리     |
| spring-boot-starter-test            | 프로젝트 작동을 테스트하는 역할           |
| mybatis-spring-boot-starter         | 백엔드에서 MyBatis 문법 적용              |
| spring-boot-devtools                | 빠른 재시작                               |    
| mysql-connector-java                | DB인 MySQL과 연결                         |
| jjwt-api / jjwt-impl / jjwt-jackson | JWT(JSON Web Token) 활용                  |
| spring-boot-starter-oauth2-client   | Oauth2 인증(Naver, Kakao, Google)         |
| spring-boot-starter-mail            | 이메일 송신 기능을 간편하게 설정하는 역할 |

### ⛓️ node_modules(Front_End)

| 모듈 이름                                                                   | 용도                                       |
| --------------------------------------------------------------------------- | ------------------------------------------ |
| emotion/react, emotion/styled                                               | 리액트 내 css 적용                         |
| portone/browser-sdk                                                         | QR 코드로 결제 기능 구현                   |
| testing-library/jest-dom, testing-library/react, testing-library/user-event | 리액트 dom 테스트                          |
| axios                                                                       | 서버로 요청을 보내 통신                    |
| firebase                                                                    | 저장된 이미지를 업로드                     |
| react-dom, react-router-dom                                                 | 주소 요청 발생 시 각 페이지로 이동         |
| react-icons                                                                 | 리액트 아이콘을 불러와 사용                |
| react-query                                                                 | 서버 데이터 동기화(fetching, caching) 지원 |
| react, react-scripts                                                        | 리액트 라이브러리 적용                     |
| recharts                                                                    | 가져온 데이터를 차트로 시각화하는 역할     |
| recoil                                                                      | 전역 상태 관리                             |
| styled-reset                                                                | 초기 CSS 스타일 재설정                     |
| sweetalert2                                                                 | 알림창 구현                                |
| web-vitals                                                                  | 사용자의 웹 바이탈 항목 측정               |
react-modal| 모달 구현 역할 |
react-daum-postcode | 다음 주소 API |

</br>
</br>

## 📑 API 명세서 ERD 설계도
### 📄 API 명세서
<a href="https://www.notion.so/API-1386c80331b7806ab816eedea773c1e9">API 명세서</a>

### 📐 ERD 설계도

</br>
</br>

## 📄 메뉴 구조도
### 메인 페이지 (사용자)
(사진)
### 관리자 페이지 (관리자)
(사진)

</br>
</br>

## 🔧 화면 구현

### 로그인 / 회원가입 페이지 
#### 일반 로그인 / 회원가입 페이지
(영상)
#### OAuth2 소셜 로그인 / 회원가입 페이지(구글)
(영상)
#### OAuth2 소셜 로그인 / 회원가입 페이지(네이버)
(영상)

</br>

### 메인페이지
#### 신상품과 인기상품, 관리자가 추천하는 상품을 각 5개로 추려서 보여주는 메인페이지
(영상)

</dr>

### 밀키트 상품 판매 페이지
#### 밀키트 리스트 페이지
(영상)

#### 카테고리 페이지

(영상)

#### 통합검색 조회 페이지
(영상)

#### 상품 디테일 페이지

(영상)

#### 상품 결제 페이지

(영상)

#### 장바구니 추가 페이지

(영상)

### 상품 후기 페이지 

(영상)

</br>

### 관리자 페이지
#### 상품등록, 상품관리, 매출관리, 주문관리, 직원관리, 유저관리 등을 관리하는 페이지 
(사진)

#### 상품 등록 페이지

(영상)

#### 상품 관리 페이지 

(영상)

#### 매출 관리 페이지

(영상)

#### 주문 관리 페이지 

(영상)

#### 직원 관리 페이지 

(영상)

#### 유저 관리 페이지 

(영상)



### 마이페이지
#### 정보조회, 구매후기, 찜목록, 구매기록, 회원탈퇴

(영상)

<br/>
<br/>

## 📖 주요 기능 및 코드리뷰 

### App.js
---

#### 프론트

**함수**
```Js

function App() {

    const token = localStorage.getItem("accessToken");
    const queryClient = new QueryClient();
    const location = useLocation();
    const navigate = useNavigate();
    const [authRefresh, setAuthRefresh] = useState(true);

    useEffect(() => {
        if (!authRefresh) {
            setAuthRefresh(true);
        }
    }, [location.pathname]);
    
    const accessTokenValid = useQuery(
        ["accessTokenValidQuery"],
        async () => {
            setAuthRefresh(false);
            return await instance.get("/user/public/access", {
                params: {
                    accessToken: localStorage.getItem("accessToken"),
                    role: localStorage.getItem("role")
                },
            });
        },
        {
            enabled: authRefresh,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                const permitAllPaths = ["/user"];
                for (let permitAllPath of permitAllPaths) {
                    if (location.pathname.startsWith(permitAllPath)) {
                        break;
                    }
                }
            },
            onError: (error) => {
                const authPaths = ["/profile"];
                for (let authPath of authPaths) {
                    if (location.pathname.startsWith(authPath)) {
                        navigate("/user/signin");
                        break;
                    }
                }
            },
        }
    );

```
<br/>

- useEffect를 이용하여 페이지 이동이 일어날때 마다 authRefresh 상태를 통해 다른 페이지로 이동이 됐을 때마다 토큰을 체크해주는 로직입니다.
- useQuery를 사용하여 해당 사용자가 accessToken과 role의 권한을 확인하기 위해 get 요청을 보내는 Query 문 입니다 accessToken과 role의 정보를 params를 통해 서버에 넘겨 권한을 확인합니다 
- enabled는 authRefresh가 true일 때만 이 쿼리문이 실행이 될 수 있도록 하였습니다 
- retry는 기본으로 3번 요청을 보내게 되어있어 retry: 0을 설정해줌으로써 한번만 요청을 보내도록 설정하였습니다.  
- refetchOnWindowFocus: false = 사용자가 브라우저 탭을 다시 포커스할 때 쿼리를 자동으로 다시 요청하는 설정입니다. 
- onSuccess: 서버에 응답을 성공적으로 받았을 때 permitAllPaths의 배열에 정의된 /user로 시작하는 경로는 인증 없이 접근이 가능하게 하였습니다 그리고 for of문을 사용하여 permitAllPaths가 실행이 될때마다 permitAllPath 배열에 하나씩 담습니다 만약에 permitAllPath로 시작하면 요청을 계속 반복적으로 보내지 않게 설정하였습니다 
- onError: 인증이 필요로 하는 경로들은 로그인페이지(/user/signin)로 이동하게 설정하였습니다. 

---

<br/><br/>

**return**

```Js
 return (
        <>
            {location.pathname.startsWith("/admin") ? (
                <>
                    <Global styles={adminReset} />
                    <Routes>
                        <Route path="/admin" element={<AdminSignin />} />
                        <Route path="/admin/main/*" element={<AdminRoute element={<AdminMainPage />} />} />
                    </Routes>
                </>
            ) : (
                <>
                    <MainHeader />
                    <MainMenu />
                    <Global styles={UserReset} />
                    <Routes>
                        <Route path="/*" element={<MainPage />} />
                        <Route path="/product/:productId/*" element={<ProductPage />} />
                        <Route path="/user/signup" element={<SignupPage />} />
                        <Route path="/user/signin" element={<SigninPage />} />
                        <Route path="/user/signin/oauth2" element={<OAuth2LoginPage />} />
                        <Route path="/user/signin/findid" element={<FindIdPage />} />
                        <Route path="/user/signin/findpassword" element={<FindPasswordPage />} />
                        <Route path="/user/public/product/category" element={<Category />} />
                        <Route path="/user/products/search" element={<ProductSearchPage />} />
                        <Route path="/cart" element={<UserPrivateRoute element={<ShoppingBasket />} />} />
                        <Route path="/order/*" element={<UserPrivateRoute element={<OrderPage />} />} />
                        <Route path="/mypage/*" element={<UserPrivateRoute element={<MyPage />} />} />
                    </Routes>
                    <MainFooter />
                </>
            )}
        </>
    );
}
```

<br/>

- 리턴에는 해당 페이지로 이동하여 화면에 해당 페이지가 화면에 보이기 위해 라우터를 사용하였습니다. 
- location.pathname.startsWith를 이용하여  admin 경로로 시작하는 해당 페이지만 보이도록 하고 admin 경로로 시작되지 않은 페이지만 보여주기 위해 설정하였습니다.
- MainHeader, MainMenu, Global 등은 admin 페이지를 제외한 모든 페이지에 적용하도록 하였습니다. 
- global에 주어진 스타일은 admin과 user로 나뉘어 적용하였습니다. 

---

<br/><br/>

#### 백엔드

__Controller__
```java

@RequestMapping("/user/public")
@RestController
public class AuthController {

	@Autowired
    private TokenService tokenService;
    
    @GetMapping("/access")
    public ResponseEntity<?> access(ReqAccessDto dto) {
        return ResponseEntity.ok().body(tokenService.isValidAccessToken(dto.getAccessToken()));
    }
     
}

```

<br/>

- /user/public/access 라는 경로로 get 요청을 받아 accessToken이 유효한지 검사하여 그 결과를 JSON 형식으로 응답하는 controller 입니다.
- @RequestMapping("/user/public") : 클래스의 모든 메서드가 /user/public 으로 매핑됩니다.
- @RestController : 메서드의 반환 값을 JSON 형식으로 넘겨주는 역할을 합니다.
- @Autowired : TokenService 라는 객체를 자동으로 주입해주는 역할을 합니다.
- @GetMapping("/access) : 이 클래스에 모든 메서드에 쓰이는 /user/public 경로에 /access를 붙여 get 요청을 받아 access 경로에 해당하는 메서드를 실행시킵니다.
- access 메서드는 클라이언트한테 accessToken을 ReqAccessDto의 객체를 통해 추출합니다(= dto.accessToken) 추출한 후 tokenService 객체에 전달하여 유효성검사를 진행합니다 성공적으로 끝났다면 200 응답을 받습니다. 

---

<br/><br/>

**dto**

```java

@Data
public class ReqAccessDto {
    private String accessToken;
}

```

<br/>

- 클라이언트가 accessToken 요청을 보낼 때 accessToken을 담는 역할을 합니다. 
- @Data : 자동으로 getter와 setter와 같은 메서드를 이용하여 편리하게 데이터를 처리 할 수 있습니다.

---

<br/><br/>

**service**

```java

@Service
public class TokenService {

    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private UserMapper userMapper;

    public Boolean isValidAccessToken(String bearerAccessToken) {
        try {
            String accessToken = jwtProvider.removeBearer(bearerAccessToken);
            Claims claims = jwtProvider.getClaims(accessToken);
            Long userId = ((Integer) claims.get("userId")).longValue();
            User user = userMapper.findUserByUserId(userId);

            if (user == null) {
                throw new RuntimeException();
            }
        } catch (RuntimeException e) {
            throw new AccessTokenValidException("AccessToken 유효성 검사 실패");
        }
        return true;
    }
}

```

<br/>

- TokennService는 JWT 토큰의 유효성을 검사하는 서비스입니다. 
- @Service : 서비스에 해당하는 클래스를 정의할 때 사용합니다. 
- isValidAccessToken(String bearerAccessToken) : 이 메서드는 bearerAccessToken을 입력받고 해당 토큰의 유효성 검사를 합니다. 
- Bearer 토큰에서는 실제 JWT 토큰을 추출하고 해당 토큰에서 userId를 가져와 데이터베이스에서 사용자를 조회한 후, 사용자가 없을 경우 예외(RunTimeException)를 던지고 유효하면 true를 반환합니다.
- 만약 토큰이 유효하지않을 경우에는 catch를 통해 AccessTokenValidException을 던져 유효성 검사 실패를 알립니다. 

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface UserMapper {

    User findUserByUserId(Long userId);
    
}

```

- @Mapper : MyBatis에서 제공해주는 어노테이션 입니다.
- userId를 받아서 해당하는 사용자 정보를 반환하는 메서드인 findUserByUserId를 정의 합니다. 

--- 

<br/><br/>

**xml(sql)**
```java

<select id="findUserByUserId" resultMap="userResultMap">
        select
            ut.user_id,
            ut.username,
            ut.name,
            ut.email,
            ut.password,
            ut.phone_number,
            ut.img,
            ut.created_at,
            urt.user_roles_id,
            urt.user_id as urt_user_id,
            urt.role_id as urt_role_id,
            rt.role_id,
            rt.name as role_name
        from
            users_tb ut
            left outer join user_roles_tb urt on (ut.user_id = urt.user_id)
            left outer join roles_tb rt on (rt.role_id = urt.role_id)
        where
            ut.user_id = #{userId}
    </select>

```

- xml 파일에서는 해당 메서드에 대응하는 SQL 쿼리를 작성하고 이 쿼리를 실행하여 User 객체에 데이터를 전달합니다. 
- SQL은 users_tb에 user_roles_tb, roles_tb를 left join 하여 사용자의 정보와 role정보를 함께 조회하는 쿼리문 입니다.

---

<br/><br/>

### 메인 헤더

```Jsx

function MainHeader(props) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem("role");
        navigate("/");
        window.location.reload(); // 페이지를 새로 고침하여 상태를 초기화
    };

    const handleMyPageOnClick = () => {
        if (!token) {
            if (window.confirm("로그인이 필요한 서비스 입니다.\n로그인 하시겠습니까?")) {
                navigate("/user/signin")
            }
            return;
        }
        navigate("/mypage")
    }

    const handleCartButtonOnClick = () => {
        if (!token) {
            if (window.confirm("로그인이 필요한 서비스 입니다.\n로그인 하시겠습니까?")) {
                navigate("/user/signin")
            }
            return;
        }
        navigate("/cart")
    }

    return (
        <div css={s.layout}>
            <div css={s.background}>
                <div css={s.headerLayout}>
                    <Link to={"/"}>
                        <h1>
                            <img src={logo} />
                            Cuisson
                        </h1>
                    </Link>
                    {
                        !token ?
                            <div css={s.buttonLayout}>
                                <Link to={"/user/signin"}><RiLoginBoxLine /></Link>
                                <a onClick={handleCartButtonOnClick}><SlBasket /></a>
                                <a onClick={handleMyPageOnClick}><LuUser /></a>
                            </div>
                            :
                            <div css={s.buttonLayout}>
                                <a onClick={handleLogout}><RiLogoutBoxRLine /></a>
                                <Link to={"/cart"}><SlBasket /></Link>
                                <Link to={"/mypage"}><LuUser /></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MainHeader;


```

<br/>

- 메인헤더에는 메인으로 갈 수 있는 로고와 로그인 장바구니 마이페이지 등으로 가는 아이콘들을 설정항였습니다.
- 로그인과 장바구니, 마이페이지 아이콘을 클릭 시 로그인이 안되엇을 경우에 로근인을 하라는 알람창을 띄우게 하였고 로그인이 되었을 경우에는 해당 페이지로 들어갈 수 있게 하였습니다.
- navigate를 이용하여 로그인페이지로 이동하게 하였고 Link를 이용하여 해당 페이지로 이동하게 하였습니다. 

---

<br/><br/>


### 메인 메뉴

```jsx
function MainMenu(props) {
    const location = useLocation();
    const pathname = location.pathname;
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
            setOnMouseSubMenuId(0);
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
                <div css={s.box}>
                    <div css={s.menusLayout}>
                        {
                            menus.map(menu =>
                                <div css={s.selectedMenu(pathname === menu?.path)} onMouseLeave={() => handleOnMouseLeave("main", menu.id)}>
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
                </div>
            </header>
            <SelectProductView />
        </>
    );
}

export default MainMenu;
```

- 메인메뉴에는 카테고리, 신상품, 인기상품, 전체리뷰 목록과 검색창을 나타냈습니다.
- 카테고리에 마우스를 갖다 되면 카테고리 밑에 서브 목록이 뜨도록 설정하였습니다. 
- 서브목록은 국.탕.찌개, 안주, 밀키트, 간편식으로 이루어져 있습니다.
- 밀키트에도 마우스를 갖다 될 시 서브목록 옆에 창에 밀키트안에 해당되는 목록(냉동, 냉장)들도 볼 수 있게 설정하였습니다. 
- const [onMouseMenuId, setOnMouseMenuId] = useState(0);는 카테고리에 마우스를 갖다 되면 그 안에 서브 목록이 나타나게 하는 상태입니다.
-  const [onMouseSubMenuId, setOnMouseSubMenuId] = useState(0);는 카테고리 목록들 중 밀키트에 갖다 되면 그 안에도 서브 목록이 나타나게 하는 상태입니다.

<br/>

```Jsx
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
            setOnMouseSubMenuId(0);
        } else if (type === "sub") {
            setOnMouseSubMenuId(0);
        }
    };
    
    
```
- 마우스에 갖다 될 시 type과 id에 따라 해당 목록을 작동하도록 하였습니다.
- type이 main일땐 해당하는 id의 값에 따라 목록들을 선택할 수 있게 하였고 type이 sub일때도 똑같은 형식으로 작용합니다. 
- handleOnMouseLeave는 마우스가 해당 div을 벗어나면 꺼질 수 있게 설정하였습니다.(= id가 0으로 바뀌면 해당 목록이 꺼질 수 있게 하였습니다)

---

<br/><br/>

**mainMenu.js**
```Jsx

export const menus = [
    {
        id: 1,
        name: "카테고리",
        icon: <FaBars />,
        subMenus: [
            {
                id: 1,
                name: "국.탕.찌개",
                path: "/user/public/product/category?categoryId=01",
                subSideMenus: [],
            },
            {
                id: 2,
                name: "안주",
                path: "/user/public/product/category?categoryId=02",
                subSideMenus: [],
            },
            {
                id: 3,
                name: "밀키트",
                path: "/user/public/product/category?categoryId=03",
                subSideMenus: [
                    {
                        id: 1,
                        name: "냉동",
                        path: "/user/public/product/category?categoryId=0301"
                    },
                    {
                        id: 2,
                        name: "냉장",
                        path: "/user/public/product/category?categoryId=0302"
                    },
                ]
            },
            {
                id: 4,
                name: "간편식",
                path: "/user/public/product/category?categoryId=04",
                subSideMenus: [],
            },
        ]
    },
    {
        id: 2,
        name: "신상품",
        path: "/user/newproduct",
        subMenus: [],
    },
    {
        id: 3,
        name: "인기 상품",
        path: "/user/best",
        subMenus: [],
    },
    {
        id: 4,
        name: "상품 후기",
        path: "/user/review",
        subMenus: [],
    },
];

```

- 목록이 해당 경로로 이동하기 위해서 코드가 길어질 것을 예상하여 constants로 뺐습니다. 빼서 메인메뉴 컴포넌트에 맵을 돌려 사용하였습니다.
- 사용하게 되면 카테고리 서브목록의 해당하는 이름(name)과 path를 사용하여 해당 경로로 이동하게 설계 하였습니다. 

---

<br/>

### 메인페이지
#### 메인 

#### 신상품
__프론트__
``` jsx


function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [newProductList, setNewProductList] = useState([]);

	// 페이지가 마운트될 때 스크롤을 맨 위로 이동
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    // 신상품 가져오는 쿼리
    const newProduct = useQuery(
        ["newProducts"],
        async () => {
            return await instance.get("/user/public/new");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setNewProductList(response.data);
            },
        }
    );
    
    const newImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    
    return (
        <>
            {
                // user로 시작한 페이지 일때 메인페이지 x
                location.pathname.startsWith("/user") ? (
                    <></>
                ) : (
                    <>
                        <div css={s.titleLayout}>
                            <p>쿡 배송</p>
                            <p>빠르게 배송해드립니다!</p>
                        </div>

                        {/* 이달의 상품 */}
                        <div css={s.productLayout}>
                            <div css={s.productTitle}>
                                <p>NEW PRODUCT</p>
                                <p>이 달의 신상품</p>
                            </div>
                            <div css={s.productContentLayout}>
                                {
                                    // slice를 사용해 신상품이 5개까지 뜨게 설정
                                    newProductList.slice(0, 5).map((newProduct) => (
                                        <div css={s.newProductLayout} key={newProduct?.data?.productId}>
                                            <img
                                                src={newProduct.thumbnailImg}
                                                onClick={() => newImgOnClick(newProduct.productId)}
                                            />
                                            <div>
                                                <p>{newProduct.description}</p>
                                                <p>{newProduct.title}</p>
                                                <p>{newProduct.price.toLocaleString()}원</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div css={s.ProductLink}>
                                <Link to="/user/newproduct"> 신상품 전체 보기 </Link>
                            </div>
                        </div>
	);
};
```

- 메인에는 신상품과 인기상품 md추천 상품을 5개 씩 잘라서 나타나게 하였습니다
- 스크롤을 하고 해당 상품을 클릭하여 페이지 이동이 되었을 때 스크롤이 그대로 밑에 간 경우가 생겨 useEffect를 사용하여 마운트 될때 마다 스크롤을 초기화 시켰습니다.
- 우선 신상품 코드를 보시면 신상품을 조회하기 위해 useQury를 사용하고 get요청을 서버에 보냈습니다. 
- 응답이 성공적으로 오게 되면 onSuccess가 작동하게 되면서 productList(상품리스트) 상태가 해당 응답 데이터가 담겨서 업데이트 됩니다.
-  newImgOnClick은 상품을 클릭할 때 해당 상품으로 productId를 이용하여 페이지 이동 처리를 하였습니다.
-  user로 시작하는 경로는 메인페이지가 화면에 보이지 않도록 하기위해 설정하였습니다.
- 해당 productList는 서버에서 가지고 온 데이터들이 배열로 담겨져 있으므로 리턴값에 맵을 돌려 상품을 화면에 띄우도록 설정하였습니다.
- 신상품 전체 보기를 클릭시 신상품을 전체 조회한 페이지를 볼 수 있습니다 (8개까지)

---

<br/><br/>

**백엔드**

__Controller__

```java

@RestController
@RequestMapping("/user/public")
public class ProductController {
	@Autowired
    private ProductService productService;
    
    // 신상품(최근 등록순)
    @GetMapping("/new")
    public ResponseEntity<?> getNewProduct() {
        return ResponseEntity.ok().body(productService.getNewProduct());
    }
}
```
- /user/public/new 경로로 클라이언트에서 get 요청을 받아 신상품을 서버에서 조회를 해서 클라이언트에 응답해주는 controller 입니다. 
- service를 통해 조회 데이터를 받아와 클라이언트에 200 응답으로 반환해줍니다.

---

<br/><br/>

**service**

```java

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;
    
    public List<Product> getNewProduct() {
        return productMapper.findNewProduct();
    }
}

```

- getNewProduct라는 메소드는 mapper를 이용하여 신상품을 조회하는 역할을 합니다.

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface ProductMapper {
	List<Product> findNewProduct();
}

```

- findNewProduct()는 Mapper에 정의된 메서드입니다. 
- 이 메서드는 sql에 데이터를 조회하여 service에 전달하여 controller에 적용시키는데에 사용되었습니다.

---

<br/><br/>

**xml**

```java

<select id="findNewProduct" resultMap="productResultMap">
        select
            product_id,
            title,
            price,
            description,
            thumbnail_img
        from
            products_tb
        order by
            created_date desc limit 8
 </select>

```
- 신상품을 조회하는 sql쿼리문 입니다.
- 날짜는 최신순으로 불러오게 하였고 productId(상품id), title(상품명), price(상품가격), description(상품설명), thumbnail_img(상품 썸네일 이미지) 등을 products_tb로 부터 데이터를 8개 까지 들고와 조회되게 설계하였습니다.
-  

---

<br/><br/>


#### 신상품

(사진)  
(코드설명)

#### 인기상품

(사진)  
(코드설명)

#### 상품후기

(사진)  
(코드설명)

#### 카테고리
__1. 국.탕.찌개__  
(사진)  
(코드설명)

__2. 안주__  
(사진)  
(코드설명)

__3. 밀키트__  
(사진)  
(코드설명)

__4. 간편식__  
(사진)  
(코드설명)

#### 상품리스트(상품 컴포넌트)

(사진)  
(코드설명)

#### 통합검색

(사진)  
(코드설명)

#### 장바구니 아이콘  
(사진)  
(코드설명)

### 로그인 / 회원가입 
#### 회원가입

- __일반__  
(사진)  
(코드설명)

- __OAuth2__  
(사진)  
(코드설명)

#### 로그인 

__유저__ 

- __일반__  
(사진)  
(코드설명)

- __OAuth2__  
(사진)  
(코드설명)  

- __아이디 찾기 및 비밀번호 찾기__

	__아이디 찾기__  
(사진)  
(코드설명)

	__비밀번호 찾기__  
(사진)  
(코드설명)

__관리자__  
(사진)  
(코드설명)

### 장바구니

- __수정__  
(사진)  
(코드설명)

- __삭제__  
(사진)  
(코드설명)

### 마이페이지  
#### 프로필 변경  
(사진)  
(코드설명)

#### 정보조회  
(사진)  
(코드설명)

#### 찜목록  
(사진)  
(코드설명)

#### 구매기록   
(사진)  
(코드설명)

#### 구매후기  
(사진)  
(코드설명)

#### 회원탈퇴  
(사진)  
(코드설명)

### 주문 페이지
#### 주문자 정보

#### 주문 상품 정보 

#### 결제  
(사진)  
(코드설명)  

__결제 API__  
(사진)  
(코드설명)

### 모달

</br>
</br>

## 💡 느낀점

🐃 문주영(팀장) : 

</br>

🦦 이성민 :

</br>

🐉 김유진 : 

</br>

🐓 김영희 : 

</br>








