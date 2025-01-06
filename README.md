 # 📁 목차
 
 > ## 💻 [프로젝트 소개](#-프로젝트-소개-1)
 > 
 > ## 👨‍👩‍👧‍👦 [팀원 소개 ](#-팀원-소개-및-역할-분담)
 > 
 > ## 🤝 [협업 방식](#-협업-방식-1)
 > 
 > ## 📋 [프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리-1)
 > 
 > ## 🔎 [브랜치 전략](#-브랜치-전략-1)
 > 
 > ## 📝 [컨벤션](#-컨벤션-1)
 > 
 > ## 🛠️ [개발 도구](#%EF%B8%8F-개발-도구-1)
 >
 > ## 📑 [API 명세서 ERD 설계도](#-api-명세서-erd-설계도-1)
 > 
 > ## 📄 [메뉴 구조도](#-메뉴-구조도-1)
 > 
 > ## 🔧 [화면 구현](#-화면-구현-1)
 > 
 > ## 📖 [주요 기능 및 코드 리뷰](#-주요-기능-및-코드리뷰)
 > 
 > ## 💡 [느낀점](#-느낀점-1)

<br/><br/>

## 💻 프로젝트 소개

### ◈ 제목
- 밀키트 판매 사이트

### ◈ 목적
- 밀키트를 온라인으로 주문하고 빠르게 받을 수 있는 서비스를 통해, 소비자들이 직접 마트에 가지 않고도 편리하고 간단하게 요리할 수 있도록 제공하고자 라는 목적으로 만들게 되었습니다.


### ◈ 팀 프로젝트
- 팀원 4명 

### ◈ 제작 기간
- 2024.10.01 ~ 2024.11.13

<br/><br/>

## 👨‍👩‍👧‍👦 팀원 소개 및 역할 분담
<h3> 🐃 팀장 : 문주영 </h3>

### 🔧 Back-End

- 상품 CRUD 기능 생성
- Like(찜 기능) CD 기능 생성
- 신메뉴, 인기상품 프론트엔드에 응답 기능 생성
- 소셜 로그인 기능 추가(네이버, 구글)
- admin 페이지에서 넘어오는 요청 연결

### 🖥️ Front_End

- admin 페이지에서 백엔드로 넘기는 요청 연결
- 카테고리 별 데이터 요청 API 작성
- 페이징 기능 추가
- admin 페이지에 수정Modal 라이브러리 사용 및 LineChart 사용으로 가시성을 높힘

### etc.

- 유저 관리 테이블, 상품 테이블, 주문/결제 테이블 등 핵심 테이블 설계 및 생성
- 파이썬 크롤링 기술을 사용하여 데이터 생성 및 적재
- ERD 다이어그램 작성
- 프로젝트 발표 

---

<h3> 🦦 팀원 : 이성민</h3>

### 🖥️ Front_End

- 유저 페이지 
- 마이페이지(정보수정, 찜목록, 구매기록, 구매후기, 회원탈퇴)
- 주문페이지 
- 회원가입, 로그인, 로그아웃, 아이디/ 비밀번호 찾기
- 관리자 페이지 role권한, 회원관리, 유저관리 
- 장바구니 페이지
- 상품페이지(찜, 수량, 구매하기) 기능 구현 
- 리뷰페이지(조회, 평점기능, 수정, 삭제) 기능 구현 및 css 
- 유저 이미지 변경 기능 구현

### etc.

- API 명세서 작성 

---

<h3> 🐉 팀원 : 김유진</h3>

### 🔧 Back-End

- 회원가입과 jwt 토큰을 이용한 회원가입 및 security 설정
- 토큰 접근에 관해 유효한 토큰인지 확인 기능
- 회원가입시 필요한 이메일 인증 기능
- 관리자 페이지의 상품 등록 및 조회, 삭제 기능
- 관리자 페이지의 유저, 직원 관리의 조회, 삭제 기능
- 유저의 아이디 찾아주기와 비밀번호 재생성 기능
- 장바구니에 물건 추가, 조회, 수정, 삭제 기능
- 상품 조회, 서치 기능, 카테고리별로 구분해서 조회하는 기능
- 상품에 대한 디테일 페이지를 나타내는 기능
- 결제창에 필요한 정보를 나타내는 기능
- 결제 후 주문 테이블, 주소 테이블, 결제 테이블에 데이터 추가하고
재고와 판매 수량 수정하는 기능 구현
- 결제 취소 후 결제 상태 수정하는 기능 구현
- 결제 후 리뷰를 쓸 수 있는 기능
- 유저의 리뷰만 볼 수 있는 마이페이지와 전체 리뷰를 볼 수 있는 전체리뷰로 구분
- 리뷰 수정을 위한 7일 이내 날짜 확인 기능
- 유저 개인정보 페이지에서 유저의 비밀번호 일치와 함께 데이터 수정 가능
- 회원 탈퇴를 위한 삭제 기능
- 유저 프로필 이미지를 변경할 수 있는 수정 기능
- 예외 처리를 위한 핸들러 구현


### 🖥️ Front_End

- 유저의 찜 기능 구현
- 관리자 페이지의 상품 서치 기능
- 관리자 페이지의 유저, 직원 조회 기능
- 토큰 검사를 위한 토큰 검사 요청 기능
- 결제 로직 구현
- 결제 취소 로직 구현


### etc.

- 데이터베이스 테이블 생성
- 장바구니 기능 구현 중 테이블 추가 및 수정

---

<h3> 🐓 팀원 : 김영희</h3>

### 🖥️ Front_End

- 메인페이지 css 
- 통합검색 기능 구현 
- 카테고리별 상품 조회 query 구현 
- 상품 목록 정렬 (한 줄에 5개씩 반복하여 나오도록 설정함)
- 카테고리에 마우스를 올려 놓으면 카테고리 목록이 뜨는 기능을 구현 및 css 
- 관리자페이지에서 상품등록, 상품관리, 매출관리, 주문관리, 직원관리, 유저관리 css 수정 및 틀을 똑같이 맞춤 
- 관리자 로그인 페이지 css 수정
- 유저관리 검색 기능 구현 

### etc.

- 리드미 작성
- ppt 제작

<br/><br/>

## 🤝 협업 방식
1. 해당하는 업무에 대해 GitHub Issue를 생성합니다.
2. GitHub Actions에 의해 자동으로 생성된 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 작업을 완료하면 각자의 생성한 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.
 	- PR(pull request)을 오픈하면, 팀장이 코드를 확인하고 승인합니다.

	- 코드 리뷰 & 승인은 팀장이 일임했지만, 팀원들도 각자 맡은 부분에 대한 책임감을 가지고 프로젝트를 진행했습니다.

*    컨펌 담당
	 - 주영 : 유진 (백엔드)
	 - 성민 : 영희 (프론트)
	 - 유진 : 주영 (백엔드)
	 - 영희 : 성민 (프론트)

5. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.

<br/><br/>

## 📋 프로젝트 진행 상황 관리

<a href="https://github.com/HwalChanTeam/front/issues?q=is%3Aissue+is%3Aclosed">  📋GitHub Issues(Front) & </a> 
<a href="https://github.com/HwalChanTeam/back/issues?q=is%3Aissue+is%3Aclosed">GitHub Issues(Back)</a>

-  간편한 이슈 생성을 위해 이슈 템플릿을 만들어 사용했습니다. + 팀원이 현재 어떤 작업을 진행하고 있는지를 바로 알 수 있어 의사소통 비용을 줄일 수 있었습니다.

<br/><br/>

## 🔎 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<br/><br/>

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

<br/><br/>

## 🛠️ 개발 도구

### ▣ Back_End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>

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

### ▣ Cloud Service

<p>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
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

<br/><br/>

## 📑 API 명세서 ERD 설계도
### 📄 API 명세서

<br/>

<a href="https://smooth-agreement-bd7.notion.site/API-1386c80331b7806ab816eedea773c1e9">API 명세서</a>

### 📐 ERD 설계도

<br/>

<img src="https://github.com/user-attachments/assets/84e89f80-fff7-4e88-b0b6-a27a79c4f348" />

<br/><br/>

## 📄 메뉴 구조도

<br/>

<img src="https://github.com/user-attachments/assets/a1cf1ed2-8b34-4220-bc4a-598fd02f0780" />

<br/><br/>

## 🔧 화면 구현

### 로그인 / 회원가입 / 아이디 찾기 / 비밀번호 찾기 페이지

</br>

<img src="https://github.com/user-attachments/assets/bb5b375e-a66a-4c3e-b4cf-7d2ba144fea5" />

</br>

### 메인페이지
#### 신상품과 인기상품, 관리자가 추천하는 상품을 각 5개로 추려서 보여주는 메인페이지

<br/>

<img src="https://github.com/user-attachments/assets/412d2d03-4f28-4df4-9c0d-55a898cf79ad" /> 

<img src="https://github.com/user-attachments/assets/e3055d00-eeea-4c08-b692-60904b07a834" /> 

<img src="https://github.com/user-attachments/assets/9074f3b0-e336-4457-89d0-7551c8b15561" /> 

<br/>

### 카테고리 페이지

#### 국.탕.찌개 페이지

<br/>

<img src="https://github.com/user-attachments/assets/2d7573e5-8be4-4f9f-bff8-6f9356b658b8" /> 

<br/>

#### 안주 페이지

<br/>

<img src="https://github.com/user-attachments/assets/21f3b861-d0fc-4073-8257-6b09907d4108" />

<br/>

#### 밀키트 페이지

<br/>

<img src="https://github.com/user-attachments/assets/23e77ae4-69b9-4e9f-92d8-73a39f4a8456">

<br/>

#### 간편식 페이지

<br/>

<img src="https://github.com/user-attachments/assets/db116c52-eeba-4673-bf3d-afdd96e684f5">

<br/>

### 상품 상세 페이지

<br/>

<img src="https://github.com/user-attachments/assets/ed18ff94-9484-431e-8bab-dfd9494f5738">

<br/>

### 찜 기능 

<br/>

<img src="https://github.com/user-attachments/assets/b9ef5d31-7196-49f6-8df6-78277c8c887a" />

<br/>

### 장바구니 추가 페이지

<br/>

<img src="https://github.com/user-attachments/assets/c67ba7df-a1fe-4ebf-9ea0-3ce15ed462eb" />

<br/>

### 상품 결제 페이지

<br/>

<img src="https://github.com/user-attachments/assets/2820534e-6cf3-4c8f-ba45-2862f9b7584d" />

<br/>


### 마이페이지
#### 정보조회, 구매후기, 찜목록, 구매기록, 회원탈퇴

<br/>

<img src="https://github.com/user-attachments/assets/0d067b2a-00e5-43f4-9783-44156c883219" />

<br/>

### 관리자 로그인 페이지

<br/>

<img src="https://github.com/user-attachments/assets/13a29757-5d7d-49fc-85aa-7aa51f858331" />

<br/>

### 관리자 페이지

<br/>

<img src="https://github.com/user-attachments/assets/6a535f3f-7aa0-473d-8388-cf4c8b2b910a" />

<br/><br/>

## 💡 느낀점

🐃 문주영(팀장)  
: 프론트엔드와 백엔드 두가지를 다 해보며 요청/응답 주소와 변수를 맞추거나 API 설계를 논의하는 과정에서 원활한 소통과 협력이 얼마나 중요한지 깨달았습니다. 각자의 역할을 이해하며 협업하는 법을 배웠고 이미지 크롤링과 데이터베이스 연동 과정에서 발생한 에러를 해결하며 디버깅 능력과 문제 해결 능력 또한 많이 키웠습니다. 그리고 OAuth2 와 같은 소셜 로그인 기술을 구현하며 원하는 데이터를 받아오고 적용하는 경험을 쌓았던거 같아 아주 만족하는 프로젝트 였던것 같습니다.

<br/>

🦦 이성민  
: 저는 이번 프로젝트를 통하여 팀원들과의 소통, 프론트-백 사이의 데이터 전달이 얼마나 중요한지와, 오류 처리의 중요성을 실감했습니다.
특히 useQuery를 통한 데이터 조회, mutation을 통한 데이터 전달을 정확하게 이해했습니다. 
비록 한달간의 짧은 시간이었지만 네 명이서 매일매일 합을 맞춘 경험과 기능들을 추가하기 위해 힘 썼던 시간과 오류처리를 한 경험은 그 무었보다 소중한 경험이었다고 생각합니다.
다시 이런 기회가 있다면, 더욱 성장한 모습으로 프로젝트를 진행할 수 있을것입니다. 

<br/>

🐉 김유진  
: 토큰을 이용한 로그인 기능을 구현하면서 security 설정과 필터 설정 등을 직접 해보면서
어느 시점에서 토큰이 접근하고 토큰을 확인해야 하는지 알게 되었습니다.
프론트엔드와 백엔드를 연결해 보면서 서로 변수와 요청 URL을 맞춰야 하므로 팀원들과의 소통이 중요한지를 깨달았습니다. 그리고 미리 API 설계, 기능, 테이블 설계에 대한 생각들을 나누고 프로젝트를 시작했지만 되지 않는 경우들이 있어서 조금 더 꼼꼼하게
계획단계를 가지는 게 중요하다는 것을 깨달았습니다.
테스트 단계에서 발생하는 오류를 해결하기 위한 디버깅 능력도 늘었고
쿼리를 담당해서 하다 보니 상황별로 쿼리를 쓰는 방식도 훨씬 많이 알게 되고 배우게 되었습니다. 그리고 결제 기능을 담당하면서 API를 가지고 와서 쓰는 방법에 대해서 배웠고 데이터의 타입을 맞춰주고 그 후에 백엔드로 넘겨줘야 할 데이터에 대해서도 고려하면서 코드를 구현해야 더 좋은 코드를 구현할 수 있다고 느꼈고 배울 수 있는 기회가 되었습니다.
팀원들과 잦은 회의로 인한 소통과 협업에 대한 자세도 많이 배웠습니다.
배운 내용들을 적용하고 응용하며 경험을 쌓을 수 있는 프로젝트였다고 생각합니다.

<br/>

🐓 김영희  
: 이번 프로젝트를 진행하면서 제가 프로젝트 진행하기 전에 crud 중 조회하는 파트를 어려워 하였는데 이번 프로젝트로 인해 url 요청이나 데이터 정보들을 들고와서 조회하는 과정을 많이 하게 되어 극복하게 되었습니다. 제가 백엔드와 요청한 주소를 같게 써야하는 과정에서 팀원들과 소통하지 않고 제 멋대로 쓴 경우가 있었습니다. 그래서 진도 나가는 과정에서 지연된 경우가 생겨 시간이 오래 걸렸습니다. 저는 이런 점을 보면서 제 행동에 반성하게 되었고 그 후에는 팀원들과 잘 소통하고 잘 안되는 부분이 있으면 팀원들에게 물어보기도 하였고 요청 주소와 변수명도 백엔드에 맞춰 작성하게 되었습니다 이런 과정을 겪으면서 팀원들간의 소통이 정말 중요하다는 것을 깨달았습니다. 그리고 제가 검색해서 조회하는 파트를 맡게되면서 정말 어렵다고 생각이 들었고 이 파트에서 시간을 많이 쏟게 되었습니다. 저 혼자 힘으론 안될거 같아서 팀원들의 도움을 받아 검색하는 파트도 무사히 끝마칠 수 있게 되었습니다. 어려웠던 점이 사용자가 검색하였을 때 검색한 데이터를 어떻게 조회해야 할지 조회한 페이지를 어떻게 띄워야 할지 주소를 어떻게 전달해야 할지 어려워했었습니다. 제가 도움을 요청했던 팀원분이 searchParams를 사용해서 요청 URL를 설정해 보고 검색 결과 페이지를 따로 만들어 보라는 조언 덕분에 searchParams를 사용하여 파라미터 값으로 주소로 설정해 검색한 상품이 조회될 수 있도록 구현하였고, 검색결과 페이지를 따로 만들어 검색한 결과값이 조회될 수 있도록 구현하였습니다. 이 과정을 걸치면서 searchParams를 어떻게 써야 할지를 자세히 알게 되었고 어려운 점이 있으면 팀원에게 도움받는 것이 시간 효율에 좋다는 것을 깨달았습니다. 이번 프로젝트를 진행하면서 결과물도 중요하지만 무엇보다 팀원들간의 소통과 협력이 정말 중요하다는 사실을 깨닫게 되었습니다. 
 
