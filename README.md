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

## 📖 주요 기능 및 코드리뷰 

### config

#### 백엔드 

**BCryptConfig**

```java

@Configuration
public class BCryptConfig {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}

```

<br/>

- 이 코드는 Spring Security에서 비밀번호를 암호화롤 처리하기 위해 bCryptPasswordEncoder 메서드를 정의한 코드입니다.
- @Configuration : BCryptConfig 라는 클래스가 Spring의 설정 클래스임을 나타냅니다.
- @Bean : 해당 메서드가 반환하는 객체를 Bean으로 등록하겠다는 의미입니다.
- new BCryptPasswordEncoder() : BCryptPasswordEncoder는 기본 생성자로 인스턴스를 생성합니다. 이 객체는 비밀번호를 BCrypt 해시 방식으로 암호화는 데 사용됩니다.

---

<br/><br/>

**OAuth2Config**

```java

@Configuration
public class OAuth2Config {

    @Bean
    public DefaultOAuth2UserService defaultOAuth2UserService() {
        return new DefaultOAuth2UserService();
    }

}

```

<br/>

- 이 클래스는 OAuth2를 인증하기 위한 Spring 설정 클래스입니다.
- DefaultOAuth2UserService 빈은 OAuth2 인증과정에서 사용자의 정보를 처리할 때 사용됩니다.

---

<br/><br/>

**SecurityConfig**

```java

@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAccessTokenFilter jwtAccessTokenFilter;
    @Autowired
    private AuthenticationHandler authenticationHandler;
    @Autowired
    private OAuth2Service oAuth2Service;
    @Autowired
    private OAuth2SuccessHandler oAuth2SuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
            .formLogin().disable()
            .httpBasic().disable()
            .csrf().disable()
            .cors()
            .and()
            .headers().frameOptions().disable()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
                .antMatchers("/admin/signin" , "/user/public/**").permitAll()
                .antMatchers("/admin/**").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers("/user/**").hasRole("USER")
                .anyRequest().authenticated();

        http.exceptionHandling()
                .authenticationEntryPoint(authenticationHandler);

        http.addFilterBefore(jwtAccessTokenFilter, UsernamePasswordAuthenticationFilter.class);

        http.oauth2Login()
                .successHandler(oAuth2SuccessHandler)
                .userInfoEndpoint()
                .userService(oAuth2Service);
    }
}

```

<br/>

- 이 클래스는 웹 애플리케이션에 대한 보안구성을 처리하며 다양한 보안 메커니즘(인증, 권한관리, CSRF 비활성화 등)을 설정하는 클래스입니다.
- @EnableGlobalMethodSecurity(prePostEnabled = true) : 메소드 실행 전에 접근 권한을 체크하거나, 메소드 실행 후 권한을 확인하는 등의 작업을 처리하는 데 유용합니다.
- @EnableWebSecurity : Spring Security의 설정을 활성화하고, 웹 보안 관련 설정을 적용하기 위해 사용됩니다. 주로 WebSecurityConfigurerAdapter를 상속한 클래스와 함께 사용되며, 이 클래스에서 HTTP 보안 설정 및 인증, 권한 관련 구성을 정의합니다.
- 이 클래스는 WebSecurityConfigurerAdapter를 상속하여 웹 보안 구성을 확장할 수 있게 도와주고 configure(HttpSecurity http)라는 메서드를 오버라이드하여 구체적인 보안 설정을 정의합니다.
- configure(HttpSecurity http)라는 메서드는 HTTP 보안 설정을 담당하며 애플리케이션의 보안 규칙을 정의합니다. 

- .formLogin().disable() : 기본으로 제공되는 폼 로그인 기능을 비활성화합니다.
- .httpBasic().disable() : HTTP Basic 인증을 비활성화하고 더 안전하고 유연한 인증 방식(jwt, OAuth2 등)을 사용하도록 유도합니다. 
- .csrf().disable() : csrf 보호를 비활성화합니다.
- .cors() : 다른 도메인에서 API 요청을 허용하는 역할을 합니다.
- .headers().frameOptions().disable() : X-Frame-Options 헤더를 비활성화하여 애플리케이션이 다른 사이트에서 iframe(내부프레임)으로 로드되도록 허용해주는 역할을 합니다.
- .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) : 세션을 사용하지 않고 무상태 방식으로 처리하고 상태를 유지하지 않기 때문에 서버에서 세션 정보를 저장하지 않습니다.

- .authorizeRequests() : HTTP 요청에 대한 접근 권한을 설정해주는 역할을 합니다.
- 모든 사용자가 "/admin/signin", "/user/public/" 경로에 접근할 수 있도록 permitAll()을 설정하였습니다.
- /admin/** 경로는 ADMIN 또는 MANAGER 역할을 가진 사용자만 접근할 수 있도록 hasAnyRole을 설정하였습니다.
- /user/** 경로는 USER 역할을 가진 사용자만 접근할 수 있도록 hasRole을 설정하였습니다.
- .anyRequest().authenticated() : 그 외의 모든 요청은 인증된 사용자만 접근할 수 있도록 설정하는 역할을 합니다. 
- http.exceptionHandling() : 주로 인증 오류나 예외가 발생했을 때 적절한 응답을 authenticationHandler을 통해 처리하는 역할을 합니다.
- http.addFilterBefore() : JWT 필터(jwtAccessTokenFilter)를 UsernamePasswordAuthenticationFilter 필터 앞에 추가하여 요청에서 JWT 추출하고 해당 JWT가 유효한지 검사하여 인증 정보를 설정하는 역할을 합니다.

- http.oauth2Login() : OAuth2 로그인 방식(예: 구글, 네이버 등)을 사용할 수 있게 활성화 해주는 역할을 합니다.
- .successHandler(oAuth2SuccessHandler) : OAuth2 로그인 성공 후 oAuth2SuccessHandler가 처리해주는 역할을 합니다.
- .userInfoEndpoint().userService(oAuth2Service) : OAuth2 로그인 후, 사용자 정보를 oAuth2Service를 통해 처리합니다.

---

<br/><br/>

**WebMvcConfigurer**

```java

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}

```

<br/>

- 이 코드는 WebMvcConfigurer 이라는 인터페이스를 구현하여 CORS 설정을 해주는 Config 입니다.
- WebMvcConfigurer 라는 인터페이스는 Mvc의 설정을 변경할 수 있는 여러 메서드(addCorsMappings 등)를 제공해주는 역할을 합니다. 
- addCorsMappings 라는 메서드는 웹 애플리케이션에서 허용할 CORS 정책을 정의합니다. 
- registry.addMapping("/**") : 웹 애플리케이션 내에서 모든 HTTP 요청에 대해 CORS 정책이 적용한다는 의미입니다.
- .allowedOrigins("*") : 모든 외부 도메인에서 이 서버의 자원에 접근할 수 있도록 허용하도록 설정하는 역할을 합니다.
- .allowedMethods("*") : 모든 HTTP 메서드(GET, POST, PUT, DELETE 등)에 대해 CORS를 허용하도록 설정하는 역할을 합니다.
- .allowedHeaders("*") : 모든 HTTP 헤더(요청/응답 내용, 형식, 인증 정보 등)에 대해 CORS를 허용하도록 설정하는 역할을 합니다. 

---

<br/><br/>

### security

#### 백엔드

**JwtAccessTokenFilter**

```java

@Component
public class JwtAccessTokenFilter extends GenericFilter {

    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private UserMapper userMapper;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

        String bearerAccessToken = httpServletRequest.getHeader("Authorization");
        
        if (bearerAccessToken == null || bearerAccessToken.equals("null") || bearerAccessToken.isBlank()) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }


        String accessToken = jwtProvider.removeBearer(bearerAccessToken);

        Claims claims = null;

        try {
            claims = jwtProvider.getClaims(accessToken);
            Long userId = ((Integer) claims.get("userId")).longValue();
            User user = userMapper.findUserByUserId(userId);
            if (user == null) {
                throw new JwtException("해당 ID(" + userId + ")의 사용자 정보를 찾지 못했습니다.");
            }
            PrincipalUser principalUser = user.toPrincipal();
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalUser, null, principalUser.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (JwtException e) {
            e.printStackTrace();
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}

```

<br/>

- 이 필터는 요청이 들어올 때 JWT를 인증 헤더에서 확인하고 해당 JWT가 유효한지 검사하여 인증 정보를 설정하는 필터입니다.
- JwtAccessTokenFilter는 GenericFilter를 확장한 클래스이고 GenericFilter는 JWT 토큰을 인증하는 역할을 합니다.
- doFilter 메서드는 서블릿 필터체인에 일환으로 HTTP요청을 가로채어 JWT 토큰을 확인힌 후 인증을 처리하는 역할을 합니다.
- 먼저 HttpServletRequest 객체로 캐스팅하여 요청 정보를 얻어 Authorization 헤더에서 Bearer 토큰을 추출합니다.
- 만약  Authorization 헤더에 토큰이 없거나 null인 경우 필터는 더 이상 인증을 인증을 진행하지 않고 요청을 계속해서 다음 필터로 전달합니다.
- jwtProvider.removeBearer() 메서드는 Bearer 접두어를 제거한 토큰 문자열을 반환하여 accessToken라는 변수에 담습니다. 
- claims 객체는 JWT에 담긴 정보를 나타내어 이 정보에는 사용자의 ID, 권한, 만료 시간 등 인증 및 권한부여에 필요한 여러 데이터를 포함하고 있습니다.
- JWT에서 userId를 추출하여 userMapper.findUserByUserId(userId)를 통해 데이터베이스에서 사용자 정보를 조회합니다. 만약에 사용자가 존재하지 않으면 "해당 ID(" + userId + ")의 사용자 정보를 찾지 못했습니다." 라고 예외를 발생시킵니다.
- user 객체에서 PrincipalUser 객체를 생성하여 spring security에서 사용자 인증 정보를 관리합니다.
- authentication 객체는 Spring Security에서 인증 정보를 설정하는 객체이며 이를 SecurityContextHolder에 설정하여 현재 요청에서 사용자를 인증된 상태로 만들어주는 역할을 합니다. 
- 만약 jwt가 유효하지 않거나 예외가 발생하게 될 경우, catch를 통해 예외를 출력하고 그대로 필터체인에 넘깁니다. 그대로 필터체인에 넘길 경우 인증은 실패하지만 다른 필터에서 요청을 처리할 수 있게 됩니다.
- 필터가 끝난 후 필터체인을 통해 요청을 다음 필터나 서블릿으로 전달하여 인증이 성공하거나 실패한 후에도 요청이 계속 진행되도록 설정하였습니다.

---

<br/><br/>

- **UserMapper**

    ```java

    @Mapper
    public interface UserMapper {

        User findUserByUserId(Long userId);

    }

    ```

    <br/>

    - findUserByUserId 메서드는 userId를 기준으로 사용자를 조회하고 그 결과를 User 객체로 반환합니다.

---

<br/><br/>

- **user.xml**

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

    <br/>

    - 해당 사용자의 userId를 통해서 사용자의 정보를 조회하여 mapper에 전달하는 sql문 입니다. 

---

<br/><br/>

**AuthenticationHandler**

```java

@Component
public class AuthenticationHandler implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(403);
        response.getWriter().println("인증 토큰이 유효하지 않습니다.");
        authException.printStackTrace();
    }
}

```

<br/>

- 이 코드는 Spring Security에서 인증 오류가 발생하였을 때 커스텀 응답 처리를 하기 위한 클래스입니다.
- AuthenticationEntryPoint는 인증되지 않은 사용자가 보호된 리소스에 접근할 때 호출하는 인터페이스입니다.
- commence 메서드는 인증 오류가 발생하였을 때 Spring Security가 이 메서드를 호출하여 인증 실패 응답을 처리합니다.
- response.setContentType("text/plain") : 클라이언트가 받게 될 응답 데이터 형식을 "text/plain"(일반 텍스트 형식)으로 설정하여 전달하는 역할을 합니다.
- response.setCharacterEncoding("UTF-8") : 응답의 문자 인코딩을 UTF-8로 설정하여 한글 등의 문자들이 깨지지 안고 제대로 출력될 수 있도록 설정합니다.
- response.setStatus(403) : 응답 상태 코드를 403 오류로 설정하여 사용자가 요청한 리소스에 접근할 권한이 없거나 인증에 실패한 경우에 반환될 수 있도록 설정하였습니다.
- response.getWriter().println("인증 토큰이 유효하지 않습니다.") : 응답 본문에 "인증 토큰이 유효하지 않습니다" 라는 메시지를 출력할 수 있도록 설정하였습니다.
- authException.printStackTrace() : 예외의 원인과 경로를 콘솔이나 로그에 출력하여 문제를 추적할 수 있게 도와주는 역할을 합니다.

---

<br/><br/>

**OAuth2SuccessHandler**

```java

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        DefaultOAuth2User defaultOAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = defaultOAuth2User.getAttributes();

        String oAuth2Name = attributes.get("id").toString();
        String provider = attributes.get("provider").toString();

        User user = userMapper.findUserByUsername(oAuth2Name);

        String accessToken = jwtProvider.generateAccessToken(user);
        response.sendRedirect("http://localhost:3000/user/signin/oauth2?accessToken=" + accessToken);
    }
}

```

<br/>

- 이 코드는 OAuth2 인증 성공 후에 특정 작업을 수행하는 Handler 입니다. 
- onAuthenticationSuccess라는 메서드는 OAuth2 인증 성공 시 호출이 되며 Authentication 객체를 매개변수로 받습니다.
- authentication 객체에서 PrincipalUser(사용자 정보)를 불러와 defaultOAuth2User에 저장합니다.
- DefaultOAuth2User에서 사용자의 OAuth2 속성 정보(구글, 네이버 등에서 제공하는 사용자 데이터)를 getAttributes 통해 가지고와 attributes에 저장합니다.
- oAuth2Name : 사용자 정보를 확인하고, OAuth2 제공자의 id를 문자열 형식으로 추출하여 oAuth2Name에 저장합니다.
- provider : 사용자가 인증에 사용한 OAuth2 제공자(구글, 네이버 등)의 이름을 provider에 저장합니다.
- user : OAuth2 인증에서 얻은 사용자의 ID를 이용하여 해당 사용자의 정보를 조회하여 user에 저장합니다. 
- accessToken : user 객체를 바탕으로 JWT를 생성하며 생성된 JWT는 사용자가 인증되었음을 증명하여 accessToken으로 보호된 리소스에 대한 접근 권한을 부여하는데 사용됩니다.
- 생성된 JWT 토큰을 쿼리 파라미터로 포함하여 url(OAuth2로 인증한 로그인 페이지)로 리다이렉트되어 클라이언트에서 이 토큰(accessToken)을 사용할 수 있게 설정하였습니다.

---

<br/><br/>

- **JwtProvider**

    ```java

    @Component
    public class JwtProvider {

        public Date getExpireDate() {
            return new Date(new Date().getTime() + (1000l * 60 * 60 * 24 * 30));
        }
        
        public String generateAccessToken(User user) {
            return Jwts.builder()
                    .claim("userId", user.getUserId())
                    .expiration(getExpireDate())
                    .signWith(key, SignatureAlgorithm.HS256)
                    .compact();
        }

    }

    ```

    <br/>

    - getExpireDate 메서드는 JWT의 토큰 만료날짜를 현재 시간에서 30일 후의 날짜를 Date 객체로 반환하는 역할을 합니다.
    - generateAccessToken 메서드는 User 객체를 입력받아 JWT를 생성하는 역할을 합니다.
    - Jwts는 JJWT 라이브러리의 클래스이며 JWT 생성, 검증 파싱 등을 쉽게 처리할 수 있도록 도와주는 역할을 합니다.
    - .claim("userId", user.getUserId()) : JWT의 페이로드 부분에 데이터를 추가하는 메서드이며 "userId"는 클레임의 키입니다.
    - user.getUserId는 해당 사용자 ID 값을 JWT의 페이로드에 "userId"라는 이름의 클레임으로 포함시켜 JWT를 검증할 때 사용자가 누구인지 식별하는 역할을 합니다. 
    - .expiration(getExpireDate()) : JWT 토큰의 만료 시간을 설정하는 역할을 합니다.  
    - .signWith(key, SignatureAlgorithm.HS256) : JWT의 서명을 추가하는 메서드이고 서명은 JWT가 변조되지 않았음을 확인하는 역할을 합니다.
    - key는 토큰을 생성할 때 사용되며 토큰을 검증할 때도 동일한 키를 사용해야 유효성을 확인할 수 있게 설정하는 역할을 합니다.
    - SignatureAlgorithm.HS256은 HS256 알고리즘을 사용하여 서명하는 역할을 합니다. 
    - .compact() : 이 메서드를 호출하면 claim, expiration, signWith 등에서 설정한 값들이 하나의 JWT로 결합되어 최종적으로 하나의 문자열로 반환됩니다. 

---

<br/><br/>

- **UserMapper**

    ```java

    @Mapper
    public interface UserMapper {

        User findUserByUsername(String username);

    }

    ```

    <br/>

    - findUserByUsername 메서드는 username(사용자가 입력한 ID)을 통해 해당 사용자의 정보를 찾아 onAuthenticationSuccess 메서드 안에 user 변수에 저장합니다.

---

<br/><br/>

- **user.xml**

    ```java

    <select id="findUserByUsername" resultMap="userResultMap">
        select
            ut.user_id,
            ut.username,
            ut.name,
            ut.email,
            ut.phone_number,
            ut.img,
            ut.password,
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
            ut.username = #{username}
    </select>

    ```

    <br/>

    - OAuth2에 인증된 사용자의 ID를 통해 users_tb에서 사용자의 정보를 조회하여 UserMapper에 전달하는 sql 문입니다. 

---

<br/><br/>

**PrincipalUser**

```java

@Builder
@Data
public class PrincipalUser implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private Set<UserRoles> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream().map(
                ur -> new SimpleGrantedAuthority(ur.getRole().getName())
        ).collect(Collectors.toSet());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

```

<br/>

- PrincipalUser는 사용자의 정보를 담고 있으며, Spring Security에서 요구하는 메서드들을 구현하여 사용자의 보안 정보(권한, 계정 상태 등)를 제공합니다.
- 이 클래스는 UserDetails 인터페이스를 구현하고 있으며 UserDetails는 사용자 인증 정보를 관리하기 위해 사용하였습니다. 
- getAuthorities 메서드는 사용자가 가진 권한들을(roles) SimpleGrantedAuthority 객체로 변환하여 collect를 통해 Set< GrantedAuthority >의 형식으로 동일한 권한을 여러번 추가해도 한번만 저장되는 형태로 반환하는 역할을 합니다.
- isAccountNonExpired 메서드는 계정이 만료되지 않았는지 확인하는 역할을 하며 항상 true로 반환하여 계정이 만료되지 않은 것으로 처리합니다. 
- isAccountNonLocked 메서드는 계정이 잠겨있지 않은지 확인하는 역할을 하며 항상 true로 반환하여 계정이 잠겨있지 않음을 나타냅니다. 
- isCredentialsNonExpired 메서드는 사용자의 비밀번호 등이 만료되지 않았는지 확인하는 역할을 하며 항상 true를 반환하여 비밀번호 등이 만료되지 않았음을 나타냅니다.
- isEnabled 메서드는 사용자의 계정이 활성화되어 있는지 확인하는 역할을 하며 항상 true로 반환하여 계정이 활성화된 것으로 처리합니다.

---

<br/><br/>

### application.yml

#### 백엔드 

```yml

spring:
  config:
    import: application-secret.yml

mybatis:
  mapper-locations:
    - /mappers/*.xml

user:
  profile:
    img:
     default: https://firebasestorage.googleapis.com/v0/b/userprofile-43e23.appspot.com/o/TeamProject%2F%ED%9D%90%EB%AD%87.PNG?alt=media&token=1fb1e5f5-f11a-4181-bdb0-1f52aab0565d

logging:
  level:
    org.springframework.security: DEBUG

```

<br/>

- application.yml은 SpringBoot의 설정을 관리합니다. 
- spring.config.import 는 외부에서 application-secret.yml 파일을 가져와 현재 application.yml의 설정에 통합합니다.
- application-secret.yml 은 민감한 정보(API 키, sql비밀번호 등)를 별도로 설정하고 관리할 때 사용합니다.
- mybatis.mapper-locations 는 MyBatis의 매퍼 파일을 찾을 위치를 지정하는 설정이며 이는 /mappers/*.xml 경로에 있는 모든 xml 파일을 MyBatis 매퍼로 사용하겠다는 의미입니다.
- user.profile.img.default 는 Firebase Storage를 이용하여 사용자의 기본 프로필 이미지 url를 설정하는 역할을 합니다.
- logging.level.org.springframework.security 는 Spring Security 관련 로그를 더 자세하게 출력하기 위해 DEBUG 레벨로 설정하였습니다.    

---

<br/><br/>

### App.js

#### 프론트

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

**Dto**

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

**Service**

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
- isValidAccessToken는 bearerAccessToken을 입력받고 해당 토큰의 유효성 검사를 합니다. 
- Bearer 토큰에서는 실제 JWT 토큰을 추출하고 해당 토큰에서 userId를 가져와 데이터베이스에서 사용자를 조회한 후, 사용자가 없을 경우 예외(RunTimeException)를 던지고 유효하면 true를 반환합니다.
- 만약 토큰이 유효하지않을 경우에는 catch를 통해 AccessTokenValidException을 던져 유효성 검사 실패를 알립니다. 

---

<br/><br/>

**JwtProvider**

```java

@Component
public class JwtProvider {

    private final Key key;

    public JwtProvider(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String removeBearer(String bearerToken) throws RuntimeException {
        if (bearerToken == null) {
            throw new RuntimeException();
        }

        int bearerLength = "bearer ".length();
        return bearerToken.substring(bearerLength);
    }

    public Claims getClaims(String token) {
        JwtParser jwtParser = Jwts.parser()
                .setSigningKey(key)
                .build();

        return jwtParser.parseClaimsJws(token).getPayload();
    }

}

```

<br/>

- 이 클래스는 JWT 관련 작업을 수행하는 로직입니다.
- @Value("${jwt.secret}") : application.ymml 파일에 정의된 jwt.secret 값을 가지고 옵니다.
- Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret)) : secret 값을 BASE64로 디코딩하여 HMAC-SHA 알고리즘에 적합한 암호화 키를 생성하여 this.key에 집어 넣습니다.
- removeBearer 라는 메서드는 "bearer " 라는 부분을 잘라내고 나머지 토큰 값을 반환하는 역할을 합니다.
- getClaims 라는 메서드는 JwtParser를 이용하여 JWT를 검증하고 파싱하여 Claims 객체를 반환합니다. 
- setSigningKey(key)는 서명 검증을 위한 키를 설정합니다. 
- jwtParser.parseClaimsJws(token).getPayload() 는 token을 파싱하고 서명을 검증하며 JWT의 유효한 페이로드 부분을 반환합니다.

--- 

<br/><br/>

**Mapper**

```java

@Mapper
public interface UserMapper {

    User findUserByUserId(Long userId);

}

```

<br/>

- @Mapper : MyBatis에서 제공해주는 어노테이션 입니다.
- userId를 받아서 해당하는 사용자 정보를 반환하는 메서드인 findUserByUserId를 정의 합니다. 

--- 

<br/><br/>

**xml**

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

### 메인 헤더(MainHeader)

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

- 메인헤더에는 메인으로 갈 수 있는 로고와 로그인, 장바구니, 마이페이지 등으로 가는 아이콘을 Link를 이용해서 해당 페이지로 이동할 수 있게 하였습니다.
- 로그인과 장바구니, 마이페이지 아이콘을 클릭 시 로그인이 안되었을 경우에 로그인을 하라는 알림창을 띄우고 로그인을 한 경우에는 navigate를 이용해 해당 페이지로 이동 할 수 있게 하였습니다.

---

<br/><br/>


### 메인 메뉴(MainMenu)

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
<br/>

- 메인메뉴에는 카테고리, 신상품, 인기상품, 전체리뷰, 검색창을 나타내었고 useState로 상태를 이용해 카테고리에 마우스를 올리면 서브 카테고리가 나타나도록 설정하였습니다.
- 서브목록은 국.탕.찌개, 안주, 밀키트, 간편식으로 이루어져 있습니다.

---

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

<br/>

- 목록이 해당 경로로 이동하기 위해서 코드가 길어질 것을 예상하여 constants로 뺐습니다. 빼서 메인메뉴 컴포넌트에 맵을 돌려 사용하였습니다.
- 사용하게 되면 카테고리 서브목록의 해당하는 이름(name)과 path를 사용하여 해당 경로로 이동하게 설계 하였습니다. 

---

<br/><br/>

### 메인페이지

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
        </>
    )
```
<br/>

- 메인에는 신상품과 인기상품 md추천 상품을 5개 씩 잘라서 나타나게 하였습니다
- 스크롤을 하고 해당 상품을 클릭하여 페이지 이동이 되었을 때 스크롤이 그대로 밑에 간 경우가 생겨 useEffect를 사용하여 마운트 될때 마다 스크롤을 초기화 시켰습니다.
- 우선 신상품 코드를 보시면 신상품을 조회하기 위해 useQury를 사용하고 get요청을 서버에 보냈습니다. 
- 응답이 성공적으로 오게 되면 productList(상품리스트)의 상태가 해당 응답 데이터가 담겨서 업데이트 됩니다.
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
<br/>

- /user/public/new 경로로 클라이언트에서 get 요청을 받아 신상품을 서버에서 조회를 해서 클라이언트에 응답해주는 controller 입니다. 
- service를 통해 조회 데이터를 받아와 클라이언트에 200 응답으로 반환해줍니다.

---

<br/><br/>

**Service**

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
<br/>

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

<br/>

- findNewProduct()는 Mapper에 정의된 메서드입니다. 
- 이 메서드는 sql에 데이터를 조회하고 service에 전달하여 controller에 적용시키는데에 사용되었습니다.

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
<br/>

- 신상품을 조회하는 sql쿼리문 입니다.
- 날짜는 최신순으로 불러오게 하였고 productId(상품id), title(상품명), price(상품가격), description(상품설명), thumbnail_img(상품 썸네일 이미지) 등을 products_tb로 부터 데이터를 8개 까지 들고와 조회되게 설계하였습니다.

---

<br/><br/>

#### 인기상품, MD추천 상품 

**프론트**
```jsx 

    const [bestProductList, setBestProductList] = useState([]);
    const [respectProductList, setRespectProductList] = useState([]);

        // 인기상품 가져오는 쿼리
    const bestProduct = useQuery(
        ["bestProduct"],
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setBestProductList(response.data);
            },
        }
    );

    // MD추천 상품 ???
    const respectProduct = useQuery(
        ["respectProduct"],
        async () => {
            return await instance.get("/user/public/recom");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setRespectProductList(response.data);
            },
        }
    );  

    const bestImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const respectImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <>
            {/* 베스트 상품top5 */}
            <div css={s.productLayout}>
                <div css={s.productTitle}>
                    <p>BEST PRODUCT</p>
                    <p>베스트 상품 TOP5</p>
                </div>
                <div css={s.productContentLayout}>
                    {bestProductList.slice(0, 5).map((bestProduct) => (
                        <div css={s.productImgLayout} key={bestProduct.productId}>
                            <img
                                src={bestProduct.thumbnailImg}
                                onClick={() => bestImgOnClick(bestProduct.productId)}
                            />
                            <div>
                                <p>{bestProduct.description}</p>
                                <p>{bestProduct.title}</p>
                                <div css={s.footerBox}>
                                    <p>{bestProduct.price.toLocaleString()}원</p>
                                    <ShoppingBasketIcon product={bestProduct}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div css={s.ProductLink}>
                    <Link to="/user/best"> 인기상품 전체 보기 </Link>
                </div>
            </div>
        
            {/* MD 추천상품(5개) */}
            <div css={s.productLayout}>
                <div css={s.productTitle}>
                    <p>MD 추천상품</p>
                </div>
                <div css={s.productContentLayout}>
                    {respectProductList.slice(0, 5).map((respectProduct) => (
                        <div
                            css={s.productImgLayout}
                            key={respectProduct.productId}
                        >
                            <img src={respectProduct.thumbnailImg} onClick={() => respectImgOnClick(respectProduct.productId)}/>
                            <div>
                                <p>{respectProduct.description}</p>
                                <p>{respectProduct.title}</p>
                                <div css={s.footerBox}>
                                    <p>{respectProduct.price.toLocaleString()}원</p>
                                    <ShoppingBasketIcon product={respectProduct}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    );

```
<br/>

- 베스트 상품과 MD 추천상품도 신상품과 마찬가지로 코드를 똑같이 설계하였습니다
- 대신 MD 추천상품은 전체 상품보럭 가기 버튼이 없습니다. 
- 인기상품 전체보기 클릭 시 인기상품 목록으로 넘어갑니다 (10개까지)

---

<br/><br/>

**백엔드**

__Controller__

```java

    // 인기상품(판매량순)
    @GetMapping("/best")
    public ResponseEntity<?> getPopularityProduct() {
        return ResponseEntity.ok().body(productService.getPopularityProduct());
    }

    // MD 추천상품
    @GetMapping("/recom")
    public ResponseEntity<?> getRecommendedProduct() {
        return ResponseEntity.ok().body(productService.getRecommendedProduct());
    }

```
- 인기상품과 MD 추천상품도 신상품의 controller과 비슷하게 구현하였습니다.

---

<br/><br/>

**Service**

```java

    // 인기상품
    public List<Product> getPopularityProduct() {
        return productMapper.findPopularityProduct();
    }

    // MD 추천 상품
    public List<Product> getRecommendedProduct() {
        return productMapper.findRecommendedProduct();
    }

```
<br/>

- 인기상품과 MD추천상품도 신상품의 Service과 비슷하게 구현하였습니다.

---

<br/><br/>

**Mapper**

```java

    // 인기상품
    List<Product> findPopularityProduct();
    
    // MD 추천상품
    List<Product> findRecommendedProduct();

```
<br/>

- 인기상품과 MD추천상품도 신상품의 Mapper과 비슷하게 구현하였습니다.

---

<br/><br/>

**xml**

```java

    // 인기 상품
    <select id="findPopularityProduct" resultMap="productResultMap">
        select
            product_id,
            title,
            price,
            description,
            thumbnail_img
        from
            products_tb
        order by
            sales_count desc limit 10
    </select>

    // MD 추천 상품
    <select id="findRecommendedProduct" resultMap="productResultMap">
        select
            product_id,
            title,
            price,
            description,
            thumbnail_img
        from
            products_tb
        order by
            stock desc limit 5;
    </select>

```

<br/>

- 인기상품과 MD 추천 상품도 신상품의 xml과 비슷하게 구현하였습니다.
- 인기상품은 판매량을 기준으로 내림차순으로 정렬 하였습니다.
- MD 추천상품은 재고량을 기준으로 내림차순으로 정렬 하였습니다.

---

<br/><br/>

#### 신상품

**프론트**
```jsx

function NewProductView(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`;

    const [newProductList, setNewProductList] = useState([]);

    const allNewProduct = useQuery(
        "newProducts",
        async () => {
            return await instance.get("/user/public/new");
        },
        {
            onSuccess: (response) => {
                const responseData = response.data // li의 배열 길이 ( 8개 )
                let newProducts = responseData.length
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num = Math.floor(newProducts % 5 === 0 ? newProducts / 5 : (newProducts / 5) + 1)  // 나머지 존재, 2까지 반복 / num = 2
                for (let i = 0; i < num; i++) {
                    let newProductArray = []
                    // 1. j < 2 - 1 === 0 
                    for (let j = 0; j < (num - 1 === i ? (newProducts % 5 === 0 ? 5 : newProducts % 5) : 5); j++) {
                        newProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = newProductArray
                }
                setNewProductList(result)
            },
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <ProductList productList={newProductList} productPath={productPath} />
            </div>
        </div>
    );
}

export default NewProductView;

```

<br/>

- 전체 신상품을 조회하는 실행문 입니다.
- newProductList 라는 상태를 만들어 새로운 상품의 리스트들을 Query 문을 이용하여 신상품의 리스트들을 담아 화면에 보이게 하였습니다.
- 하나의 ul에 li를 5개씩 보이게 하기 위해 for 문을 사용하였습니다.

---

<br/><br/>

**백엔드**

- 메인페이지의 신상품을 조회한 백엔드의 코드문을 적용하였습니다.

---

<br/><br/>

#### 인기상품

**프론트**

```jsx

function BestProduct(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`; // 경로 수정 필요

    const [bestProductList, setBestProductList] = useState([]);

    // 전체 불러오는 쿼리
    const allBestProduct = useQuery(
        "bestProducts",
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            onSuccess: (response) => {
                // 한 ul 의 5개씩 보이게 하기 위해 씀 
                const responseData = response.data // li의 배열 길이 ( 10개 )
                let bestProducts = responseData.length
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num =  Math.floor(bestProducts % 5 === 0 ?  bestProducts / 5 : (bestProducts / 5) + 1)  // 나머지 존재, 2까지 반복 / num = 2
                for(let i = 0; i < num; i++) {
                    let bestProductArray = []
                    // 1. j < 2 - 1 === 0 
                    for(let j = 0; j < (num - 1 === i ? (bestProducts % 5 === 0 ? 5 : bestProducts % 5) : 5); j++ ) {
                        bestProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = bestProductArray
                }
                setBestProductList(result)
            },
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <ProductList productList={bestProductList} productPath={productPath}/>
            </div>
        </div>
    );
}

export default BestProduct;

```

<br/>

- 전체 인기상품을 조회하는 실행문 입니다.
- 신상품과 비슷하게 설계된 실행문 입니다.

---

<br/><br/>

**백엔드**

- 메인페이지의 인기상품을 조회하는 코드문과 똑같습니다.

---

<br/><br/>

#### 상품후기

**프론트**

```jsx

function Review(props) {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            return await instance.get("/user/public/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                setReviews(response.data);
            },
        }
    );

    const handleProductImgOnClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div css={s.containerStyle}>
            <ul>
                {reviews.map((review) => (
                    <li key={review?.productId} css={s.productStyle}>
                        <img src={review.product?.thumbnailImg} css={s.imageStyle}  onClick={() => handleProductImgOnClick(review.productId)}/>
                        <div css={s.textStyle}>
                            <Star rating={review.rating}/>
                            <h2 css={s.titleStyle}>{review?.title}</h2>
                            <p css={s.contentBox}>{review?.content}</p>
                            <div css={s.createDateStyle}>
                                <p>{review?.createdAt}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Review;

```

<br/>

- 전체 리뷰를 조회하는 실행문 입니다. 
- /user/public/review 의 url로 get요청을 보내 전체 리뷰 데이터를 서버에서 응답받아 화면에 표시하는 Query문을 구현하였습니다. 
- 응답 데이터는 리뷰의 상태에 담아 업데이트시켜 응답받은 리뷰상태를 맵을 돌려 구현하였습니다. 
- star라는 컴포넌트 안에 평점 기능을 사용하였습니다.
---

<br/>

__star.jsx 컴포넌트__

```jsx

function Star({rating}) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div css={s.starRating}>
        {stars.map((star) => (
          <span key={star} css={star <= rating ? s.starRatingFilled : s.starRatingEmpty}>
            ★
          </span>
        ))}
      </div>
    );
  };

export default Star;

```

<br/>

- 평점기능을 구현한 컴포넌트 입니다 
- 평점은 총 5점 까지 설정하였고 점수에 따라 별의 갯수가 보이게 설정하였습니다. 
- 평점기능을 사용한 이유는 내가 구매한 상품을 평가하기 위해 사용하였습니다.

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/user/public/review")
    public ResponseEntity<?> getAllReviews() { // 전체 페이지 리뷰
        return ResponseEntity.ok().body(reviewService.getAllReviews());
    }

}

```
<br/>

- 클라이언트에서 get 요청을 받아 전체 리뷰 조회 데이터를 응답해주는 Controller 입니다.
- /user/public/review 라는 url로 get 요청을 받아 응답해줍니다.

--- 

<br/><br/>

**Service**

```java

@Service
public class ReviewService {

    public List<Review> getAllReviews() {
        return reviewMapper.findAllReview();
    }

}

```
<br/>

- getAllReviews 라는 메서드를 사용하여 Mapper를 통해 전체리뷰의 데이터를 리스트로 받아 controller에 전달하는 역할을 합니다.

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface ReviewMapper {
    List<Review> findAllReview();
}

```

<br/>

- findAllReview는 ReviewMapper에 정의된 메서드입니다. 
- 이 메서드는 sql에서 조회한 데이터를 받아 service에 전달하기 위한 역할을 합니다.

---

<br/><br/>

**xml**

```java

<select id="findAllReview" resultMap="reviewResultMap">
    select
        rt.review_id,
        rt.user_id,
        rt.product_id,
        rt.rating,
        rt.title,
        rt.content,
        rt.created_at,
        pt.thumbnail_img
    from
        reviews_tb rt
        left outer join users_tb ut on (rt.user_id = ut.user_id)
        left outer join products_tb pt on (rt.product_id = pt.product_id)
    order by rt.created_at desc
</select>

```

<br/>

- 전체 리뷰를 조회하는 sql 문입니다. 
- 날짜별 최신순(내림차순)으로 정렬되어 조회하는 형식으로 구현하였습니다.

---

<br/><br/>

#### 카테고리

**프론트**

```jsx

function Category(props) {
    const navigate = useNavigate();
    const productPath = () => `/product/${productList?.data?.productId}`; // 해당 상품의 상품페이지로 이동할려고 만든 productId
    const [searchParams, setSearchParams] = useSearchParams();
    const [productList, setProductList] = useState([]);
    const categoryId = searchParams.get("categoryId");
    const [selectPage, setSelectPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    
    // 카테고리 조회 query
    const categoryQuery = useQuery(
        ["categoryQuery", selectPage, categoryId],
        async () => {
            return await instance.get(`/user/public/product/category?categoryId=${categoryId}&page=${selectPage}&limit=${limit}`);
        },
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {

                const responseData = response?.data?.products // ul의 배열 길이
                let categoryProducts = responseData.length
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num = Math.floor(categoryProducts % 5 === 0 ? categoryProducts / 5 : (categoryProducts / 5) + 1)  

                for (let i = 0; i < num; i++) {
                    let categoyrProductArray = []

                    for (let j = 0; j < (num - 1 === i ? (categoryProducts % 5 === 0 ? 5 : categoryProducts % 5) : 5); j++) {
                        categoyrProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = categoyrProductArray
                }
                setProductList(result)
            }
        }
    );

    useEffect(() => {
        // page 수
        if (categoryQuery.data) {
            const calculatedPageCount = categoryQuery.data?.data?.count % limit === 0
                ? categoryQuery.data?.data?.count / limit
                : Math.floor(categoryQuery.data?.data?.count / limit) + 1;
            setPageCount(calculatedPageCount)};
    }, [categoryQuery.data]);
    
    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/user/public/product/category?categoryId=${categoryId}&page=${e.selected + 1}&limit=${limit}`);
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <ProductList productList={productList} />
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );

}

export default Category;

```

<br/>

- 카테고리별 상품을 조회하는 실행문 입니다.
- 페이지 url에서 categoryId라는 파라미터 값을 가져와 카테고리 별로 페이지 이동이 잘 일어나고 조회되면서 화면에 보이게 구현하였습니다.
- 신상품과 인기상품과 같은 형식으로 한 ul에 5개씩 나타나게 설정하였습니다.
- limit으로 제한하여 한 페이지당 20개까지 보이도록 페이징 처리를 하는 ReactPaginate를 사용하여 2페이지를 클릭하면 해당 카테고리의 상품이 더 나올 수 있도록 설정하였습니다.
- ProductList라는 컴포넌트를 이용하여 상품을 조회하는 역할을 합니다. 

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/user/public")
public class ProductController {

    @GetMapping("/product/category")
    public ResponseEntity<?> searchCategory(ReqSearchDto dto) {
        return ResponseEntity.ok().body(productService.searchCategory(dto));
    }

}

```

<br/>

- 클라이언트에 /user/public/product/category 형식으로 get요청을 받아 카테고리별로 ReqSearchDto라는 객체로 변환하여 dto로 응답데이터를 받아 클라이언트에 반환하는 Controller 입니다.  

---

<br/><br/>

**Dto**

```java

@Data
public class ReqSearchDto {
    private int page;
    private String keyword;
    private int limit;
    private String categoryId;
}

```

<br/>

- ReqSearchDto는 검색 요청에 필요한 파라미터를 담는 객체입니다.
- 클라이언트에서 페이지번호와 상품명, 상품제한 수, 카테고리별 상품 등의 데이터를 ReqSearchDto 라는 객체로 묶어 서버에 전달해주는 역할을 합니다. 

---

<br/><br/>

**Service**

```java

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public RespSearchProductDto searchCategory(ReqSearchDto dto) {
        int startIndex = (dto.getPage() - 1) * dto.getLimit();
        int mainCategoryId = Integer.parseInt(dto.getCategoryId().substring(0, 2));
        int semiCategoryId = 0;

        if (dto.getCategoryId().length() == 4) {
            semiCategoryId = Integer.parseInt((dto.getCategoryId()).substring(2, 4));
        }

        Map<String, Object> paging = Map.of(
                "startIndex", startIndex,
                "limit", dto.getLimit(),
                "mainCategoryId", mainCategoryId,
                "semiCategoryId", semiCategoryId
        );

        List<Product> productList = productMapper.findProductByCategory(paging);
        int productCount = productMapper.findProductCountBySemiCategory(mainCategoryId, semiCategoryId);

        return RespSearchProductDto.builder()
                .products(productList)
                .count(productCount)
                .build();
    }
}

```

<br/>

- searchCategory 메소드는 카테고리별로 상품을 조회하여 그 결과를 dto에 담아 controller에 전달하는 역할을 합니다.
- startIndex는 페이징 처리를 위한 시작인덱스를 계산합니다. getPage는 요청한 페이지 번호이고 getLimit은 상품 리스트 제한 수 입니다.
- mainCategoryId는 getCategoryId를 가지고와 문자열을 2개까지 짤라 정수로 반환시켜 정의하였습니다. ( 예를 들어, 1, 2, 3, 4를 가지고 왔다면 1, 2만 가지고 오는 형식입니다. )
- semiCategoryId는 만약에 getCategoryId의 배열의 길이가 4이면 semiCategoryId는 2에서 4까지 잘라 정수형태로 정의해라 라는 형식으로 작성하였습니다.
- 페이징 및 카테고리 정보를 Map객체에 담아 각 params로 넘겨주는 것이 아닌 map객체로 한번에 데이터를 controller에 넘겨주기 위해 사용하였습니다. 
- productCount는 상품의 총 갯수를 조회하는 메소드입니다.
- 페이징의 정보를 사용하여 상품을 조회할 수 있게 설정하였습니다.

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface ProductMapper {

    List<Product> findProductByCategory(Map<String, Object> paging);

    int findProductCountBySemiCategory(int mainCategoryId, int semiCategoryId);

}

```

<br/>

- findProductByCategory 메소드는 카테고리별 상품 리스트를 페이징을 통해 조회하고 service에 전달하는 역할을 합니다.
- findProductCountBySemiCategory 메소드는 카테고리별 총 갯수를 구해 service에 전달하는 역할을 합니다.

---

<br/><br/>

**xml**

```java

    <select id="findProductByCategory" resultMap="productResultMap">
        select
            pt.product_id,
            pt.title,
            pt.price,
            pt.description,
            pt.origin,
            pt.thumbnail_img,
            ct.category_id as ct_category_id,
            ct.name,
            sct.semi_category_id,
            sct.name as sct_name
        from
            products_tb pt
            left outer join product_categories_tb pct on(pt.product_id = pct.product_id)
            left outer join semi_categories_tb sct on (sct.semi_category_id = pct.semi_category_id)
            left outer join categories_tb ct on (ct.category_id = pct.category_id)
        where 1=1
            <if test="mainCategoryId != 0">
                and pct.category_id = #{mainCategoryId}
            </if>
            <if test="semiCategoryId != 0">
                and pct.semi_category_id = #{semiCategoryId}
            </if>
        limit #{startIndex}, #{limit}
    </select>

```

<br/>

- 카테고리별로 조회한 sql 문입니다.
- main 카테고리(국.탕.찌개, 안주, 밀키트, 간편식)와 semiCategor(냉동, 냉장)과 구분하여 상품 리스트를 조회합니다.
- 페이지 수와 지정한 limit 수에 맞추어 상품을 조회되게 설정하였습니다.

---

<br/><br/>

**xml**

```java

    <select id="findProductCountBySemiCategory" resultType="java.lang.Integer">
        select
            count(*)
        from
            categories_tb ct
            left outer join product_categories_tb pct on (ct.category_id = pct.category_id)
            left outer join semi_categories_tb sct on (sct.semi_category_id = pct.semi_category_id)
            left outer join products_tb pt on (pct.product_id = pt.product_id)
        where 1=1
            <if test="mainCategoryId != 0">
                and ct.category_id = #{mainCategoryId}
            </if>
            <if test="semiCategoryId != 0">
                and sct.semi_category_id = #{semiCategoryId}
            </if>
    </select>

```

<br/>

- 카테고리별 상품의 총 갯수를 조회한 sql 문입니다.
- main 카테고리(국.탕.찌개, 안주, 밀키트, 간편식)와 semiCategor(냉동, 냉장)과 구분하여 총 갯수를 나타냈습니다.

---

<br/><br/>

#### 상품리스트(상품 컴포넌트)

**프론트**

```jsx

function ProductList({productList}) {

    return (
        <>
            {
                productList?.map((product) => (
                    <ul css={s.menuLayout}>
                        {
                            product.map((pro) => (
                                <li>
                                    <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link
                                                key={pro.productId}
                                                to={`/product/${pro.productId}`}>
                                                <img src={pro.thumbnailImg} />
                                            </Link>
                                        </div>
                                        <div css={s.productLayout}>
                                            <p>{pro.description}</p>
                                            <h2>{pro.title}</h2>
                                            <div css={s.footerBox}>
                                                <h2>{pro.price.toLocaleString()}원</h2>
                                                <ShoppingBasketIcon product={pro}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </>
    );
}

export default ProductList;

```

<br/>

- 신상품, 인기상품, 카테고리별 상품을 조회할때 쓰이는 컴포넌트 입니다. 
- 상품 리스트를 맵을 돌려 해당되는 상품 정보값 별로 화면에 나타나게 구현하였습니다.

---

<br/><br/>

#### 통합검색

**프론트**

**MainSearch**

```jsx

function MainSearch() {

    const navigate = useNavigate();

    // 검색 상태
    const [keyword, setKeyword] = useState("");

    // 상품데이터 제한 수
    const limit = 20;

    const handleKeywordOnChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleMainSearchButtonOnClick = () => {
        setKeyword("");
        navigate(`/user/products/search?page=1&${limit}&keyword=${keyword}`);
    };

    const handleKeywordOnKeyDown = (e) => {
        if (e.key === "Enter") {
            handleMainSearchButtonOnClick();
        }
    }

    return (
        <>
            <div css={s.layout}>
                <div css={s.searchSection}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        name="title"
                        css={s.searchInput}
                        onChange={handleKeywordOnChange}
                        onKeyDown={handleKeywordOnKeyDown}
                        value={keyword}
                    />
                    <IoSearchSharp onClick={handleMainSearchButtonOnClick} size="30" />
                </div>
            </div>
        </>
    );
}

export default MainSearch;

```

<br/>

- 검색창에 검색할 상품을 검색하면 해당 상품 값이 나오는 코드문입니다.
- 검색 데이터를 입력할때 마다 keyword라는 상태로 담아 키워드에 해당하는 상품데이터를 navigate를 통해서 페이지 이동으로 상품을 조회하는 형식으로 구현하였습니다.

---

<br/><br/>

**ProductSearchPage**

```jsx

function ProductSearchPage(props) {

    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ selectPage, setSelectPage ] = useState(1);

    const limit = 20;
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const [ maxPageCount, setMaxPageCount ] = useState(1);
    const [ productTrGroups, setProductTrGroups ] = useState([]);

    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/user/products/search?page=${e.selected + 1}&limit=${limit}&keyword=${keyword}`);
    }

    const productsQuery = useQuery(
        ["productsSearch", page, keyword],
        // page: 해당 페이지 불러오고 limit: 20 제한 search: 검색한 데이터 
        async() => await instance.get(`/user/public/product/search?page=${page}&limit=${limit}&keyword=${keyword}`), 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMaxPageCount(
                    response.data.count % limit === 0
                        ? Math.floor(response.data.count / limit)
                        : Math.floor(response.data.count / limit) + 1)

                const products = response.data.products;
 
                const trGroupChildrenCount = 5;

                const rowCount = products.length % trGroupChildrenCount === 0 ? products.length / trGroupChildrenCount : Math.floor(products.length / trGroupChildrenCount) + 1;

                let productTrList = [];
                for(let i = 0; i < rowCount; i++) {
                    let trGroupList = [];
                    for(let j = 0; j < trGroupChildrenCount; j++) {
                        const product = products[j + (i * trGroupChildrenCount)];
                        if(!product) {
                            continue;
                        }
                        trGroupList = [...trGroupList, product];
                    }
                    productTrList = [...productTrList, trGroupList];
                }
                setProductTrGroups(productTrList);
                
            }
        }
    );

    // 상품 총 갯수를 불러오게 하기 위한 함수  
    const productCount = productsQuery.data?.data.count;

    return (
        <div css={s.layout}>
            <h3>총 {productCount}개의 상품이 검색되었습니다.</h3>
            <div css={s.contentLayout}>
                {
                    productTrGroups?.map((productTrGroup) => (
                        <ul css={s.menuLayout}>
                            {
                                productTrGroup?.map((product) => (
                                    <li>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link
                                                    key={product.productId}
                                                    to={`/product/${product.productId}`}>
                                                    <img src={product.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <p>{product.description}</p>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price.toLocaleString()}원</h2>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
            <div css={s.listBox}>
                <div css={s.pageNumber}>
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={<><MdNavigateBefore /></>}
                        nextLabel={<><MdNavigateNext /></>}
                        pageCount={maxPageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={5}
                        onPageChange={handleOnPageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductSearchPage;

```

<br/>

- 해당 상품을 검색하였을 때 상품이 조회되는 상품 검색 페이지 입니다.
- searchParams를 이용하여 해당 상품을 검색하였을 때 해당 상품이 파라미터값에 따라 페이지 이동이 일어나면서 조회가 될 수 있도록 searchParams를 사용하였습니다.
- searchParams를 쓰기 위해 useQuery를 사용하여 get요청을 파라미터값을 포함하여 서버에 요청을 보냈습니다. 
- 이 코드도 똑같이 페이지마다 limit으로 제한한 수에 따라 한 ul에 5개씩 상품이 보이도록 설정하였습니다.
- 해당 상품이 검색될 때마다 검색된 총 상품의 갯수를 구현하였습니다.

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/user/public")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/product/search") // 상품 조회
    public ResponseEntity<?> searchProduct(ReqSearchDto dto) {
        return ResponseEntity.ok().body(productService.searchProducts(dto));
    }

}

```

<br/>

- 클라이언트에 get요청을 받아 검색한 상품을 조회한 데이터 정보를 응답해주는 Controller 입니다. 
- dto의 정보를 이용하여 응답해주는 데이터로 사용이 됩니다. 

---

<br/><br/>

**Dto**

- 카테고리별 조회할 때 쓰인 dto와 같습니다. 

---

<br/><br/>

**Service**

```java

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public RespSearchProductDto searchProducts(ReqSearchDto dto) {
        int startIndex = (dto.getPage() - 1) * dto.getLimit();

        Map<String, Object> paging = Map.of(
                "startIndex", startIndex,
                "limit", dto.getLimit(),
                "keyword", dto.getKeyword() == null ? "" : dto.getKeyword()
        );

        List<Product> productList = productMapper.findProduct(paging);
        int productCount = productMapper.findProductCountByTitle(dto.getKeyword());

        return RespSearchProductDto.builder()
                .products(productList)
                .count(productCount)
                .build();
    }
}

```

<br/>

- 검색한 상품리스트를 조회한 데이터를 mapper로 통해 전달받고 controller에 전달하는 역할을 합니다
- 검색한 상품 정보를 맵에 담아 페이징처리를 구현하였습니다.
- 검색된 상품의 총 갯수도 구현하여 상품이 몇개나 검색이 되었는지 유저가 볼 수 있기 위하여 구현하였습니다.
- 이 코드문은 카테고리별 조회한 코드문과 비슷하게 구현하였습니다.

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface ProductMapper {

    List<Product> findProduct(Map<String, Object> paging);

    int findProductCountByTitle(String title);

}

```

<br/>

- findProduct 메소드는 검색한 상품을 페이징으로 받아 페이지에 따라 상품을 조회하여 service에 전달해주는 메소드입니다.
- findProductCountByTitle 메소드는 검색한 상품별 총 상품의 갯수를 나타내어 service에 전달해주는 역할을 합니다.

---

<br/><br/>

**xml**

```java

    <select id="findProduct" resultMap="productResultMap">
        select
            pt.product_id,
            pt.title,
            pt.price,
            pt.description,
            pt.origin,
            pt.thumbnail_img,
            pt.created_date,
            ct.category_id as ct_category_id,
            ct.name,
            sct.semi_category_id,
            sct.name as sct_name
        from
            products_tb pt
            left outer join product_categories_tb pct on (pt.product_id = pct.product_id)
            left outer join categories_tb ct on (pct.category_id = ct.category_id)
            left outer join semi_categories_tb sct on (sct.semi_category_id = pct.semi_category_id)
        where
            pt.title like concat('%',trim(ifnull(#{keyword},'')),'%')
        limit #{startIndex},20
    </select>

```

<br/>

- 검색한 상품을 조회하는 sql 문입니다.
- 상품을 페이지당 20개까지 불러올 수 있게 설정하였습니다.
- 빈 공백으로 검색이되면 전체 상품이 나오도록 구현하였습니다.

---

<br/><br/>

**xml**

```java

    <select id="findProductCountByTitle" resultType="java.lang.Integer">
        select
            count(*)
        from
            products_tb pt
        where
            pt.title like concat('%',trim(ifnull(#{title},'')),'%')
    </select>

```

<br/>

- 검색한 상품의 총 갯수를 나타내는 sql 문입니다. 

---

<br/><br/>

#### 장바구니 아이콘 

**프론트**

```jsx

// 상품 당 icon을 띄우기 위한 컴포넌트 / 상품 당 장바구니 클릭 시 장바구니로 이동하게 기능 추가
function ShoppingBasketIcon({product}) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); 

    // 구매수량 상태
    const [productItems, setProductItems] = useState({ buyItem: 1 });

    // 장바구니 추가 mutation
    const basketAddProductMutation = useMutation(
        async (payload) => {
            await instance.post("/user/cart", payload);
        },
        {
            onSuccess : () => {
            if(window.confirm("장바구니에 담았습니다\n장바구니로 이동하시겠습니까?")) {
                navigate("/cart")
            }
            },
            onError: (error) => {
            console.error("오류!!!" + error);
            },
        }
    );

    // 장바구니 추가 헨들러
    const handleBasketOnClick = async (id) => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
            }
            return;
        }
        // RequestBody로 넘기기 위한 변수 생성
        const payload = {
            productId: product.productId,
            price: product.price,
            quantity: productItems.buyItem,
        };
        basketAddProductMutation.mutate(payload);
    }

    return (
        <div css={s.layout}>
            <div css={s.iconBox}>
                <a onClick={() => handleBasketOnClick(product.productId)}><SlBasket size="20" style={{cursor: "pointer"}} /></a>
            </div>
        </div>
    );
}

export default ShoppingBasketIcon;

```

<br/>

- 상품 목록 별로 장바구니 아이콘을 띄워서 그 아이콘을 클릭 시 장바구니에 추가하고 장바구니로 이동하는 형식으로 구현하였습니다.
- 장바구니에 추가하는 /user/cart 라는 post 요청 url를 서버에 보냈습니다. 
- 서버에서 성공적으로 응답이 오면 장바구니에 해당 상품이 추가되고 로그인이 안되어있는 상태에서 클릭시 로그인 화면으로 넘어가게 페이지 이동처리를 하였습니다.
- product라는 상품리스트들을 프롭스로 받아 해당 상품 id와 가격, 상품의 수량을 장바구니페이지로 넘기는 형식입니다.

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/user/cart")
public class CartController {

    @PostMapping("")
    public ResponseEntity<?> addCart(@RequestBody ReqAddCartDto dto) {
        cartService.addCart(dto);
        return ResponseEntity.ok().body(true);
    }

}

```

<br/>

- /user/cart 로 post 요청을 받아 장바구니에 해당 상품을 추가하는 controller 입니다.

---

<br/><br/>

**Dto**

```java

@Builder
@Data
public class ReqAddCartDto {
    private Long productId;
    private int quantity;
    private int price;

    public Cart toCart(Long userId) {
        return Cart.builder()
                .userId(userId)
                .build();
    }

    public CartItem toCartItem(Long cartId) {
        return CartItem.builder()
                .cartId(cartId)
                .productId(productId)
                .quantity(quantity)
                .price(price)
                .build();
    }
}

```

<br/>

- 장바구니에 추가하는 요청을 담는 객체입니다. 
- 클라이언트에 해당 상품의 id와 상품 수량, 가격 등의 정보를 담아 서버에 Cart와 CartItem 객체로 변환하여 처리해주는 역할을 합니다.
- toCart 메서드는 ReqAddCartDto를 사용하여 장바구니 객체(Cart)를 생성하고 사용자 정보를 설정합니다.
- toCartItem 메서드는 ReqAddCartDto를 사용하여 장바구니 항목을 생성하고 상품 정보와 장바구니 ID를 설정합니다. 

---

<br/><br/>

**Service**

```java


@Service
public class CartService {
    @Autowired
    private CartMapper cartMapper;
    @Autowired
    private CartItemMapper cartItemMapper;

    @Transactional(rollbackFor = SQLException.class)
    public void addCart(ReqAddCartDto dto) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        Long cartId = cartMapper.findCartIdByUserId(principalUser.getId());

        if (cartId == null) {
            Cart cart = dto.toCart(principalUser.getId());
            cartMapper.addCart(cart);
            cartItemMapper.addCartItems(dto.toCartItem(cart.getCartId()));
            return;
        }
        cartItemMapper.addCartItems(dto.toCartItem(cartId));
    }
}

```

<br/>

- 이 코드는 ReqAddCartDto 객체를 받아서 사용자가 상품을 장바구니에 추가하는 요청을 처리한 데이터를 controller에 전달하는 역할을 합니다
- @Transactional(rollbackFor = SQLException.class) 는 예외가 발생하였을 때 이전 상태로 보이게 하기 위해 사용되었습니다.
- 로그인한 사용자의 정보가 PrincipalUser 객체로 반환되고 이를 principalUser에 저장하여 사용자의 id를 추출하여 사용합니다.
- 사용자의 장바구니 id를 데이터베이스에서 조회합니다. 
- 만약 장바구니 id가 null 이면 해당 유저(userId)에 선택한 상품 항목(cartItem)을 새로 생성된 cart 객체(장바구니)를 데이터베이스에 저장하고 해당 유저의 장바구니에 추가되게 설정하였습니다.
- 사용자의 장바구니 id가 있을 경우에는 장바구니 새로 생성 없이 해당 상품항목만 추가합니다.

---

<br/><br/>   

**CartMapper**

```java

@Mapper
public interface CartMapper {

    int addCart(Cart cart);

}

```

<br/>

- addCart 메서드는 CartMapper에 정의된 메서드입니다.
- 이 메서드는 사용자의 장바구니를 생성한 데이터를 sql에서 받아 service에 전달해주는 역할을 합니다.

---

<br/><br/>

**CartItemMapper**

```java

@Mapper
public interface CartItemMapper {

    int addCartItems(CartItem cartItem);

}

```

<br/>

- addCartItems 메서드는 CartItemMapper에 정의된 메서드입니다.
- 이 메서든는 상품정보를 사용자의 장바구니에 추가하기 위한 데이터를 sql에서 받아 service에 전달하는 역할을 합니다.

---

<br/><br/>

**cart.xml**

```java

    <insert id="addCart" useGeneratedKeys="true" keyProperty="cartId">
        insert into cart_tb
        values(0, #{userId}, now())
    </insert>

```

<br/>

- 해당 사용자의 장바구니를 생성한 데이터를 mapper에 전달해주는 sql문 입니다. 

---

<br/><br/>

**cart_item.xml**

```java

    <insert id="addCartItems" useGeneratedKeys="true" keyProperty="cartItemId">
        insert into cart_items_tb
        values(0, #{cartId}, #{productId}, #{quantity}, #{price}, now())
    </insert>

```

<br/>

- 사용자의 장바구니에 해당 상품의 정보를 추가하고 추가한 데이터를 mapper에 전달해주는 sql문입니다.

---

<br/><br/>

#### 상품 상세 페이지

**전체 코드**

**프론트**

```jsx

const selectProductMenus = [
    {
        selectedId: 1,
        title: "상세정보",
        path: "/product/:productId",
    },
    {
        selectedId: 2,
        title: "구매후기",
        path: "/product/:productId/review",
    },
    {
        selectedId: 3,
        title: "상품문의",
        path: "/product/:productId/inquiry",
    },
    {
        selectedId: 4,
        title: "배송",
        path: "/product/:productId/delivery",
    },
];

function ProductPage() {
    const token = localStorage.getItem("accessToken");
    const { productId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [selectedProduct, setSelectedProduct] = useRecoilState(productOrderAtom); // atom 사용

    // 페이지가 마운트될 때 스크롤을 맨 위로 이동
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [product, setProduct] = useState({
        productId,
        thumbnailImg: "",
        title: "",
        description: "",
        origin: "",
        price: 0,
        category: "",
    });

    // 상품 조회
    const productData = useQuery(
        ["getProduct"],
        async () => {
            const id = parseInt(productId);
            return await instance.get("/user/public/product/detail", {params: {id : id}});
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: true,
            onSuccess: (response) => {
                setProduct(response.data?.product);
            },
            onError: (response) => {
                console.log(response)
            }
        }
    );

    // 구매수량 상태
    const [productItems, setProductItems] = useState({ buyItem: 1 });

    // 구매수량 숫자 증가 감소
    const handlebuyNumberChange = (delta) => {
        setProductItems((prevItem) => ({
            ...prevItem,
            buyItem: Math.max(1, prevItem.buyItem + delta),
        }));
    };

    const basketAddProductMutation = useMutation(
        async (payload) => {
            await instance.post("/user/cart", payload);
        },
        {
            onSuccess: () => {
                if (window.confirm("상품이 장바구니에 담겼습니다! 장바구니에서 주문을 진행해 주세요.")) {
                    navigate("/cart")
                }
            },
            onError: (error) => {
                console.error("오류!!!" + error);
            },
        }
    );

    // 구매하기 버튼
    const handleBuyButton = async () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
                navigate("/user/signin");
            }
            return;
        }
        const payload = {
            productId: productId,
            price: product.price,
            quantity: productItems.buyItem,
        };
        basketAddProductMutation.mutateAsync(payload).catch(() => {});
    };

    // 찜버튼 mutation
    const productLikeMutation = useMutation(
        async () => {
            return await instance.post(`/user/product/like/${product.productId}`);
        },
        {
            onSuccess: response => {
                productData.refetch();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const productDislikeMutation = useMutation(
        async () => {
            return await instance.delete(`/user/product/dislike/${product.productId}`);
        },
        {
            onSuccess: response => {
                productData.refetch();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    // 찜 버튼
    const handleWishListButton = () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
                navigate("/user/signin");
            }
            return;
        } else {
            productLikeMutation.mutateAsync().catch(() => { });
            alert("찜에 추가되었습니다.");
        }
    };

    const handleDislikeOnClick = () => {
        productDislikeMutation.mutateAsync().catch(() => { });
    };


    // 구매수량*가격 함수
    const calculateTotalPrice = (product) => {
        return product?.price * productItems.buyItem;
    };

    // 총 상품금액, 총합계 계산 함수
    const calculateTotals = () => {
        const totalProductAmount = calculateTotalPrice(product);
        const deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        const totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    return (
        <div css={s.layout}>
            <div css={s.productLayout}>
                <div css={s.imgLayout}>
                    <img src={product?.thumbnailImg} />
                </div>
                <div css={s.productContent}>
                    <div css={s.titleLayout}>
                        <h2>{product?.title}</h2>
                        <p>{product?.description}</p>
                    </div>
                    <div css={s.price}>
                        <p>{product?.price.toLocaleString()} 원</p>
                    </div>
                    <div css={s.contentBox}>
                        <div css={s.contury}>
                            <p>원산지: {product?.origin}</p>
                            <p>{deliveryFee.toLocaleString()}원</p>
                        </div>
                        <div css={s.productTitleBox}>
                            <p>상품명: {product?.title}</p>
                            <p>
                                구매수량:
                                <span>
                                    <button onClick={() => handlebuyNumberChange(-1)}>-</button>
                                    {productItems.buyItem}
                                    <button onClick={() => handlebuyNumberChange(1)}>+</button>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div css={s.buyProduct}>
                        <p>
                            총 {totalProductAmount.toLocaleString()} 원
                            <span>
                                <button onClick={handleBuyButton}>구매하기</button>
                                {
                                    productData?.data?.data?.likeCheck
                                        ?
                                        <IoIosHeart
                                            onClick={handleDislikeOnClick}
                                            size="30"
                                            style={{ cursor: "pointer" }}
                                        />
                                        :
                                        <IoMdHeartEmpty
                                            onClick={handleWishListButton}
                                            size="30"
                                            style={{ cursor: "pointer" }}
                                        />
                                }
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 상품 상세설명란 */}
            <div css={s.menuLayout}>
                <div css={s.menuBox}>
                    {selectProductMenus.map((menu) => (
                        <Link
                            key={menu.selectedId}
                            to={menu.path.replace(":productId", productId)} // :id를 id로 대체
                            css={s.selectProductMenu(
                                pathname === menu.path.replace(":productId", productId)
                            )}
                        >
                            <span>{menu.title}</span>
                        </Link>
                    ))}
                </div>
                <div css={s.productInfor}>
                    <Routes>
                        <Route path="/" element={<InformationView product={product} />} />
                        <Route path="/review" element={<BuyReview product={product} />} />
                        <Route path="/inquiry" element={<InquiryView product={product} />} />
                        <Route path="/delivery" element={<DeliveryView product={product} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

```

<br/>

- 이 코드는 해당 상품을 클릭할 시 상품을 상세하게 볼 수 있는 페이지로 넘어가 찜 기능, 상품의 수량, 구매하기 버튼을 클릭할 시 상품을 장바구니로 담는 기능을 구현하였고 Routes를 이용하여 상품의 상세정보, 구매후기, 상품문의, 배송 등을 볼 수 있게 하였습니다. 
- 구매하기 버튼을 클릭할 시 로그인을 해야 장바구니에 담을 수 있고 로그인이 안되어 있는 경우 로그인 화면으로 넘기도록 설정하였습니다. 
- 장바구니 추가 로직과 찜목록 삭제하는 기능 설명, 총 합계산 함수는 다른 파트(장바구니 아이콘, 마이페이지 - 찜목록, 장바구니)에서 볼 수 있습니다.

---

<br/><br/>

- **상품 조회 기능**

    **프론트**

    ```jsx

    // 상품 조회
    const productData = useQuery(
        ["getProduct"],
        async () => {
            const id = parseInt(productId);
            return await instance.get("/user/public/product/detail", {params: {id : id}});
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: true,
            onSuccess: (response) => {
                setProduct(response.data?.product);
            },
            onError: (response) => {
                console.log(response)
            }
        }
    );

    ```

    <br/>

    - useQuery 훅을 사용하여 하나의 상품을 클릭할 시 해당 상품의 상세 페이지로 넘어가 조회되도록 구현한 코드입니다.
    - 서버에 get 요청을 보내고 파라미터로 해당 상품의 id 값을 전달하여 성공적으로 응답이 오면 해당 상품을 조회되도록 하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    // 상품 디테일 페이지
    @GetMapping("/product/detail")
    public ResponseEntity<?> getProductDetail(@RequestParam Long id) {
        return ResponseEntity.ok().body(productService.getProductDetail(id));
    }

    ```

    <br/>

    - 클라이언트에 해당 상품의 id를 전달받아 sevice에 전달하여 해당 상품을 조회하는 로직을 처리하고 성공적으로 응답을 받으면 클라이언트에 반환합니다.

    ---

    <br/><br/>

    **RespProductDetailDto**

    ```java

    @Builder
    @Data
    public class RespProductDetailDto {
        private Product product;
        private Boolean likeCheck;
    }

    ```

    <br/>

    - 해당 하는 상품을 찜한 정보와 상품의 기본 정보를 담는 dto 입니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public RespProductDetailDto getProductDetail(Long productId) {
        Long userId = 0l;

        Authentication authentication = SecurityContextHolder
        .getContext()
        .getAuthentication();

        if(!authentication.getPrincipal().toString().equals("anonymousUser")) {
            PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
            userId = principalUser.getId();
        }

        Product product = productMapper.findProductById(productId);
        Boolean likeCheck = productLikeMapper.isProductLike(userId, productId);

        return RespProductDetailDto.builder()
                .product(product)
                .likeCheck(likeCheck)
                .build();
    }

    ```

    <br/>

    - 이 코드는 특정 상품의 상세 정보와 해당 상품에 대한 사용자 맞춤 정보를 조회하고 controller에 응답을 반환하는 역할을 합니다. 
    - userId 변수는 현재 로그인한 사용자의 ID를 저장하기 위한 변수입니다.
    - authentication 변수는 인증된 사용자의 정보를 저장한 변수 입니다. 
    - productMapper를 통해 해당 상품의 정보를 조회하여 product 변수에 담는 역할을 합니다.
    - productLikeMapper를 통해 사용자가 상품을 찜 추가하였으면 찜한 상태가 보이도록 구현하여 likeCheck 변수에 담는 역할을 합니다. 
    - RespProductDetailDto의 builder 패턴을 이용하여 product, likeCheck 객체를 controller에 응답을 반환합니다. 

    ---

    <br/><br/>

    **ProductMapper**

    ```java

    Product findProductById(Long productId);

    ```

    <br/>

    - 해당 상품을 클릭할 시 상품의 세부 정보를 sql 쿼리문에서 조회하여 성공적으로 데이터를 가지고 오면 findProductById 메서드에 담아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **ProductLikeMapper**

    ```java

    Boolean isProductLike(Long userId, Long productId);

    ```

    <br/>

    - 로그인한 해당 사용자가 특정 상품을 찜한 상태를 sql 쿼리문에서 조회하여 성공적으로 데이터를 가지고 오면 isProductLike 메서드에 담아 service에 전달하는 역할을 합니다.  

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="findProductById" resultMap="productResultMap">
        select
            pt.product_id,
            pt.title,
            pt.price,
            pt.description,
            pt.origin,
            pt.thumbnail_img,
            pt.contents_img1,
            pt.contents_img2,
            pt.contents_img3,
            pt.contents_img4,
            ct.category_id as ct_category_id,
            ct.name,
            sct.semi_category_id,
            sct.name as sct_name
        from
            products_tb pt
            left outer join product_categories_tb pct on (pt.product_id = pct.product_id)
            left outer join categories_tb ct on (pct.category_id = ct.category_id)
            left outer join semi_categories_tb sct on (sct.semi_category_id = pct.semi_category_id)
        where
            pt.product_id = #{productId}
    </select>

    ```

    <br/>

    - 해당하는 상품의 id를 이용하여 상품의 정보를 조회하는 sql 쿼리문입니다.

    ---

    <br/><br/>

    **product_like.xml**

    ```java

    <select id="isProductLike" resultType="java.lang.Boolean">
        select
        exists(
        select
            1
        from
            products_like_tb
        where
            user_id = #{userId}
            and product_id = #{productId})
    </select>

    ```

    <br/>

    - 사용자가 찜한 상품이면 1을 반환하고 아니면 아무 반응도 안하도록 구현한 sql 쿼리문입니다.  

---

<br/><br/>

- **상품 수량 증가 감소**

    **프론트**

    ```jsx

    // 구매수량 숫자 증가 감소
    const handlebuyNumberChange = (delta) => {
        setProductItems((prevItem) => ({
            ...prevItem,
            buyItem: Math.max(1, prevItem.buyItem + delta),
        }));
    };


    ```

    <br/>

    - 이 함수는 해당 상품의 수량을 증가하고 감소하도록 하였고 무조건 1 밑으로는 못가게 구현한 함수입니다. 

---

<br/><br/>

- **찜 추가 기능**

    **프론트**

    ```jsx

    // 찜버튼 mutation
    const productLikeMutation = useMutation(
        async () => {
            return await instance.post(`/user/product/like/${product.productId}`);
        },
        {
            onSuccess: response => {
                productData.refetch();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    ```

    <br/>

    - mutation 훅을 사용하여 해당 상품의 찜 목록을 추가한 코드입니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @PostMapping("/like/{id}")
    public ResponseEntity<?> productLike(@PathVariable Long id) {
        productLikeService.productLike(id);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에 post 요청을 받아 해당 상품의 찜을 추가하기 위한 controller 입니다.
    - 해당 상품의 id를 service에 넘겨 찜을 추가한 로직을 수행하고 성공적으로 응답을 받으면 클라이언트에 응답을 true로 반환하였습니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public void productLike(Long productId) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();


        ProductLike productLike = ProductLike.builder()
                .productId(productId)
                .userId(principalUser.getId())
                .build();
        productLikeMapper.addProductLike(productLike);
    }

    ```

    <br/>

    - 해당 상품의 id를 이용하여 상품의 찜을 mapper를 통해 추가한 데이터를 받아 controller에 전달하는 역할을 하는 service 입니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    Long addProductLike(ProductLike like);

    ```

    <br/>

    - 특정 상품의 찜을 눌러 sql 쿼리문에서 추가하는 기능을 수행하여 성공적으로 데이터를 가지고 오면 addProductLike 메서드에 담아 service에 전달하는 역할을 합니다.

    ---

    <br/><br/>

    **xml**

    ```java

    <insert id="addProductLike">
        insert into products_like_tb
        values(0, #{userId}, #{productId})
    </insert>

    ```

    <br/>

    - 찜을 클릭한 로그인한 사용자의 id와 해당 상품의 id를 데이터베이스에서 추가하여 저장하여 mapper에 전달합니다. 

---

<br/><br/>

- **InformationView**

    **프론트**

    ```jsx

    function InformationView({product}) {

        return (
            <div css={s.layout}>
                <div css={s.imgLayout}>
                    <img src={product?.contentsImg1} />
                    <img src={product?.contentsImg2} />
                    <img src={product?.contentsImg3} />
                    <img src={product?.contentsImg4} />
                </div>
            </div>
        );
    }

    export default InformationView;

    ```

    <br/>

    - 상품 상세 페이지에서 해당하는 상품의 정보를 props로 받아 상세 정보 구간에서 해당 상품의 세부 이미지들을 조회하는 코드입니다. 

---

<br/><br/>

- **DeliveryView**

    **프론트**

    ```jsx

    function DeliveryView(props) {

        return (
            <div style={{marginTop: "80px"}}>
                <img src="https://www.omealdang.com/fserver//files/ckeditor/202236/1662528622_0.jpg" />
            </div>
        );
    }

    export default DeliveryView;

    ```

    <br/>

    - 이 코드는 전체적인 상품의 상세 페이지의 배송정보의 이미지를 설정한 코드입니다. 

---

<br/><br/>

### 로그인 / 회원가입 
#### 회원가입

**프론트**

```jsx

function SignupPage(props) {
    const navigate = useNavigate();

    // 이메일 전송된 상태
    const [isEmailSend, setIsEmailSend] = useState(false);

    // 60초 타이머
    const [timer, setTimer] = useState(60);

    const [user, setUser] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
        phoneNumber: "",
    });

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        phoneNumber: <></>,
    });

    const [sendEmail, setSendEmail] = useState({
        toEmail: "",
    });

    const [sendCheckNum, setSencCheckNum] = useState({
        checkNum: "",
    });

    const handleInputOnchange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    const handleEmailInputOnchange = (e) => {
        let emailValue = e.target.value;
        setSendEmail((email) => ({
            ...email,
            [e.target.name]: emailValue,
        }));

        //user.eamil도 함께 업데이트
        setUser((email) => ({
            ...email,
            email: emailValue,
        }));
    };

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErrors = {
            // 에러메시지 초기값
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>,
            checkNum: <></>,
        };

        for (let fieldError of fieldErrors) {
            EmptyFieldErrors = {
                ...EmptyFieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>,
            };
        }
        setFieldErrorMessages(EmptyFieldErrors);
    };

    // 이메일 전송 버튼
    const emailSendButtonOnClick = async () => {
        if (isEmailSend) {
            alert("60초 후에 다시 시도해 주세요");
            return;
        }

        try {
            await instance.post("/user/public/email/send", sendEmail);
            setIsEmailSend(true);
            setTimer(60);

            const countdown = setInterval(() => {
                setTimer((timer) => {
                    if (timer <= 1) {
                        clearInterval(countdown);
                        setIsEmailSend(false);
                        return 0;
                    }
                    return timer - 1;
                });
            }, 1000);
        } catch (error) {
            console.log(error); // 에러 로그 확인
        }
    };

    // 이메일 인증번호 입력
    const emailCheckOnChange = (e) => {
        setSencCheckNum((checkNum) => ({
            ...checkNum,
            [e.target.name]: e.target.value,
        }));
    };

    // 이메일 인증번호 체크 mutation
    const checkEmailMutation = useMutation(
        async () => {
            return await instance.post("/user/public/email/auth", sendCheckNum);
        },
        {
            onSuccess: (response) => {
                setUser.email(response.data);
            },
            onError: (response) => {
                console.log(response.data);
            },
        }
    );

    // 이메일 인증 체크 버튼
    const handleCheckEmailButtonOnClick = () => {
        checkEmailMutation.mutate();
    };

    // 회원가입 post mutation
    const signupMutation = useMutation(
        async () => {
            const signupData = await instance.post("/user/public/signup", user);
        },
        {
            onSuccess: () => {
                alert("회원가입을 축하합니다.");
                navigate("/");
            }
        }
    );

    // 회원가입 완료 버튼
    const handleSubmitButtonOnClick = () => {
        signupMutation.mutate();
    };

    return (
        <div css={s.mainLayout}>
            <h1 css={s.logo}>
                <img src={logo} />
            </h1>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2>회원가입</h2>
                </div>
                <div css={s.inputUser}>
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="username"
                        value={user.username}
                        placeholder="아이디를 입력해 주세요"
                    />
                    {fieldErrorMessages.username}
                    <input
                        type="password"
                        onChange={handleInputOnchange}
                        name="password"
                        value={user.password}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                    {fieldErrorMessages.password}
                    <input
                        type="password"
                        onChange={handleInputOnchange}
                        name="checkPassword"
                        value={user.checkPassword}
                        placeholder="비밀번호를 한번 더 입력해 주세요"
                    />
                    {fieldErrorMessages.checkPassword}
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="name"
                        value={user.name}
                        placeholder="이름을 작성해 주세요"
                    />
                    {fieldErrorMessages.name}
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="phoneNumber"
                        value={user.phoneNumber}
                        placeholder="휴대폰 번호를 입력해 주세요"
                    />
                    {fieldErrorMessages.phoneNumber}
                </div>
                <div css={s.inputEmail}>
                    <input
                        type="text"
                        name="toEmail"
                        value={sendEmail.toEmail}
                        placeholder="이메일을 입력해 주세요"
                        onChange={handleEmailInputOnchange}
                    />
                    {fieldErrorMessages.email}
                    <button onClick={emailSendButtonOnClick}>
                        인증요청 {isEmailSend && `(${timer}초 후 재시도)`}
                    </button>

                    {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
                    {isEmailSend === false ? (
                        <></>
                    ) : (
                        <div css={s.emailCkeck}>
                            <input
                                type="text"
                                name="checkNum"
                                placeholder="인증번호를 입력해 주세요"
                                onChange={emailCheckOnChange}
                                value={sendCheckNum.checkNum}
                            />
                            {fieldErrorMessages.checkNum}
                            <button onClick={handleCheckEmailButtonOnClick}>확인</button>
                        </div>
                    )}
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleSubmitButtonOnClick}>회원가입 하기</button>
                </div>
                <div css={s.oauth2Buttons}>
                    <button>
                        <SiNaver />
                        네이버 로그인
                    </button>
                    <button>
                        <FcGoogle />
                        구글 로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;

```

<br/>

- 이 코드는 사용자가 회원가입을 하기 위해 아이디, 비밀번호, 이름, 휴대폰번호, 이메일을 입력하도록 구성되었습니다. 
- 인증번호 요청은 이메일을 입력하여 이메일에 인증번호 전송 상태를 isEmailSend를 통해 관리하였습니다. 응답 온 인증번호를 60초내로 입력하도록 timer 상태로 관리하였고 인증번호 확인은 checkEmailMutation 으로 sendCheckNum 상태를 통해 관리하였습니다.
- 아이디와 비밀번호, 이름, 휴대폰번호, 이메일을 입력할 시 user상태를 업데이트하여 사용자 정보를 저장되도록 구현하였습니다. 
- 아이디와 비밀번호 이름, 휴대폰번호, 이메일을 입력하고 회원가입할 시 mutation을 통해 post 요청을 보냈습니다. 회원가입에 성공할 시 사용자 정보가 저장 되고 회원가입을 축하한다는 알람창과 메인으로 자동으로 이동하게 구현하였습니다.

---

<br/><br/>

**백엔드**

**AuthController**

```java

@RequestMapping("/user/public")
@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody ReqSignupDto dto) throws SignupException {
    String roleName = "ROLE_USER";
    return ResponseEntity.ok().body(authService.signup(dto, roleName));
    }

}

```

<br/>

- 클라이언트에 회원가입하는 요청을 처리하고 응답을 반환하는 역할을 합니다.
- 클라이언트가 보내는 JSON 데이터를 ReqSignupDto 객체로 변환하여 service에 전달합니다.
- 예외가 터지면 throws SignupException로 던져서 예외처리(오류처리)를 합니다.
- 회원가입 시 모든 유저에게 ROLE_USER라는 권한을 부여함으로써 관리자와 메니저를 차별화 두기 위해 사용하였습니다.
- authService.signup 메서드는 실제 회원가입을 성공적으로 응답해주기 위한 메서드입니다.

---

<br/><br/>

**EmailController**

```java

@RestController
@RequestMapping("/user/public/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(@RequestBody ReqSendMailDto dto) throws Exception {
        emailService.sendEmail(dto);
        return ResponseEntity.ok().body(true);
    }

    @PostMapping("/auth")
    public ResponseEntity<?> authEmail(@RequestBody ReqCertificationDto dto) {
        return ResponseEntity.ok().body(emailService.authEmail(dto.getCheckNum()));
    }
}

```

<br/>

- sendEmail 메서드는 이메일 인증 요청을 /user/public/email/send를 통해 받아 사용자가 입력한 정보를 ReqSendMailDto 객체로 변환하여 service에 전달하고 service에서 성공적으로 데이터를 가지고 오면면 true로 응답하여 클라이언트에 전달하는 역할을 합니다. 
- authEmail 메서드는 이메일에서 온 인증번호와 사용자가 입력한 인증번호와 똑같이 썼는지 확인하는 로직입니다.
- ReqCertificationDto 객체로 변환하여 service에 전달하여 인증번호를 검사하는 역할을 합니다. 

---

<br/><br/>

**ReqSignupDto**

```java

@Data
public class ReqSignupDto {
    @Pattern(regexp = "^[a-z0-9]{6,}$", message = "사용자이름은 6자이상의 영소문자, 숫자 조합이어야합니다.")
    private String username;
    @NotBlank(message = "성명은 공백일 수 없습니다.")
    @Pattern(regexp = "^[a-zA-Z가-힣]*$", message = "이름은 한글 또는 영문자만 포함할 수 있습니다.")
    private String name;
    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Email(message = "이메일 형식이어야 합니다.")
    private String email;
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[~!@#$%^&*?])[A-Za-z\\d~!@#$%^&*?]{8,16}$", message = "비밀번호는 8자이상 16자이하의 영대소문, 숫자, 특수문자(~!@#$%^&*?)를 포함하여합니다.")
    private String password;
    private String checkPassword;
    @Pattern(regexp = "^01[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$", message = "전화번호는 010-1234-5678 형식이어야합니다.")
    private String phoneNumber;

    public User toEntity(BCryptPasswordEncoder bycryptPasswordEncoder, String img) {
        return User.builder()
                .username(username)
                .name(name)
                .email(email)
                .password(bycryptPasswordEncoder.encode(password))
                .phoneNumber(phoneNumber)
                .img(img)
                .build();
    }
}

```
<br/>

- 이 dto는 회원가입 요청에 필요한 사용자 정보를 담는 객체입니다.
- 각 필드에는 유효성 검사를 위한 어노테이션 @Pattern을 사용하여 클라이언트에서 보낸 데이터과 올바른 형식이진 서버에서 확인해주는 역할을 합니다.
- toEntity 메서드는 ReqSignupDto의 각 필드를 해당 User 엔티티 객체의 속성으로 설정합니다.
- 비밀번호는 암호화 된 상태에서 User 엔티티에 저장이 되어 안전하게 처리 되었습니다.

---

<br/><br/>

**ReqSendMailDto**

```java

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReqSendMailDto {
    private String toEmail;
}

```

<br/>

- 사용자의 이메일에 인증번호를 보내기 위해 사용자의 이메일을 담아 service에 전달하는 dto 입니다.

---

<br/><br/>

**ReqCertificationDto**

```java

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReqCertificationDto {
    private String checkNum;
}

```

<br/>

- 사용자가 입력한 인증번호를 담아 service에 전달하여 이메일로 응답한 인증번호와 일치한지 확인하기 위한 로직입니다.

---

<br/><br/>

**RespSignupDto**

```java

@Builder
@Data
public class RespSignupDto {
    private User user;
}

```

<br/>

- 사용자가 입력한 user 정보를 service에서 받아 controller에 전달해주는 역할을 합니다.

---

<br/><br/>

**AuthService**

```java

@Service
public class AuthService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private UserRolesMapper userRolesMapper;

    @Value("${user.profile.img.default}")
    private String defaultProfileImg;

    @Transactional(rollbackFor = SignupException.class)
    public RespSignupDto signup(ReqSignupDto dto, String roleName) throws SignupException {

        User user = null;

        try {
            if (isDuplicateUsername(dto.getUsername())) {
                throw new SignupException("이미 존재하는 사용자 입니다.");
            }
            if (!checkPassword(dto.getPassword(), dto.getCheckPassword())) {
                throw new SignupException("비밀번호가 일치하지 않습니다.");
            }

            user = dto.toEntity(bCryptPasswordEncoder, defaultProfileImg);
            userMapper.save(user);

            Role role = roleMapper.findByName(roleName);
            if (role == null) {
                role = Role.builder()
                        .name(roleName)
                        .build();   

                roleMapper.save(role);
            }

            UserRoles userRoles = UserRoles.builder()
                    .userId(user.getUserId())
                    .roleId(role.getRoleId())
                    .build();
            userRolesMapper.save(userRoles);
            user.setUserRoles(Set.of(userRoles));

        } catch (Exception e) {
            throw new SignupException(e.getMessage());
        }

        return RespSignupDto.builder()
                .user(user)
                .build();
    }

}

// username 중복 확인
public boolean isDuplicateUsername(String username) {
    return Optional.ofNullable(userMapper.findUserByUsername(username)).isPresent();
}

// password, checkPassword 같은지 확인
public boolean checkPassword(String password, String checkPassword) {
    return checkPassword.equals(password);
}

```

<br/>

- signup 메서드는 사용자의 아이디가 동일한 사용자가 있는지, 입력한 비밀번호가 다시 입력한 비밀번호와 같은지 확인하고 입력한 정보가 올바르면 저장이 되어 controller에 전달해주는 역할을 해줍니다.
- @Transactional : 예외가 발생하면 DB에 저장된 데이터는 전부 취소됩니다
- 여기서 Transactional는 롤백으로 사용되어 첫번째 user 정보가 저장이 되있다면 두번째부터 userId를 비교하여 동일할 시 두번째 user 정보가 아예 들어가지 못하게 막는 역할을 하였습니다.
- user라는 객체를 생성하여 암호화된 비밀번호와 기본 프로필 사진을 가지고와 userMapper를 통해 DB에 저장합니다.
- role 객체에 주어진 roleName에 해당하는 역할이 데이터베이스에 존재하는지 조회하여 역할이 없으면(role == null) 새 역할을 생성하고 Role.builder 에 저장합니다.
- userRoles 객체는 user 객체에 가지고온 userId와 role 객체에 가지고온 roleId 를 userRolesMapper를 통해 저장하는 역할을 합니다.
- 최종적으로 RespSignupDto 객체에 user정보를 담아 controller에 반환하는 역할을 합니다.

---

<br/><br/>

**EmailService**

```java

@Service
public class EmailService {

    @Value("${spring.mail.username}")
    private String senderEmail;
    @Autowired
    private JavaMailSender javaMailSender;
    private String verifyCode;

    public void sendEmail(ReqSendMailDto dto) throws Exception {
        verifyCode = String.format("%.0f",(Math.random() * (90000)) + 100000);
        try {
            StringBuilder htmlContent = new StringBuilder();
            MimeMessage mail = javaMailSender.createMimeMessage();
            MimeMessageHelper mailHelper = new MimeMessageHelper(mail, true, "UTF-8");

            htmlContent.append("<h3>요청하신 인증 번호입니다.</h3>");
            htmlContent.append("<h1>");
            htmlContent.append(verifyCode);
            htmlContent.append("</h1>");
            htmlContent.append("<h3>감사합니다.</h3>");

            mail.setText(htmlContent.toString(), "UTF-8", "html");

            mailHelper.setFrom(senderEmail);
            mailHelper.setTo(dto.getToEmail());
            mailHelper.setSubject("인증 번호 안내");
            mailHelper.setText(htmlContent.toString(), true);

            javaMailSender.send(mail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public boolean authEmail(String checkNum) {

        if (checkNum.equals(verifyCode)) {
            return true;
        }
        return false;
    }
}

```

<br/>

- sendEmail 메서드는 사용자가 입력한 이메일에 인증번호를 생서하고 전송하는 로직입니다.
- verifyCode는 6자리의 랜덤숫자(100000 ~ 999999 사이)를 생성하여 인증번호로 생성해주는 역할을 합니다.
- htmlContent 객체는 StringBuilder라는 클래스를 이용하여 메일 본문에 인증번호를 전달하는 내용을 삽입하여 구성하였습니다.
- authEmail 메서드는 입력한 인증번호가 메일에 전송된 인증번호와 같은지 확인하는 역할을 합니다.
- 만약에 입력한 인증번호가 같으면 true로 반환해주고 아니면 false로 반환해줍니다.

---

<br/><br/>

**UserMapper**

```java

@Mapper
public interface UserMapper {

    int save(User user);

    User findUserByUsername(String username);

}

```

<br/>

- save 메서드는 UserMapper에 정의된 메서드 입니다.
- 이 메서드는 입력한 사용자의 정보를 저장하기 위한 데이터를 sql에서 받아 service에 전달하는 역할을 합니다.
- findUserByUsername 메서드는 사용자가 입력한 아이디가 중복되는지 확인하는 sql문을 통해 service로 전달하는 역할을 합니다.

---

<br/><br/>

**RoleMapper**

```java

@Mapper
public interface RoleMapper {

    int save(Role role);
    Role findByName(String name);

}

```

<br/>

- save 메서드는 role 객체를 DB에 저장하는 역할을 합니다.
- findByName 메서드는 AuthService에서 roleName을 받아 그 값을 name이라는 이름으로 받아 이를 통해 Role을 조회하는 메서드입니다.

---

<br/><br/>

**UserRolesMapper**

```java

@Mapper
public interface UserRolesMapper {

    int save(UserRoles userRoles);

}

```

<br/>

- save 메서드는 UserRoles 객체를 userId와 roleId 값으로 DB에 저장하여 service에 전달하는 역할을 합니다.

---

<br/><br/>

**user.xml**

```java

<insert id="save" useGeneratedKeys="true" keyProperty="userId">
    insert into users_tb(user_id, username, name, email, password, phone_number, img, created_at)
    values(0, #{username}, #{name}, #{email}, #{password}, #{phoneNumber}, #{img}, now())
</insert>

```

<br/>

- 사용자가 입력한 user 정보를 users_tb에 추가하여 UserMapper에 전달하는 sql문입니다.

---

<br/><br/>

**user.xml**

```java

<select id="findUserByUsername" resultMap="userResultMap">
    select
        ut.user_id,
        ut.username,
        ut.name,
        ut.email,
        ut.phone_number,
        ut.img,
        ut.password,
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
        ut.username = #{username}
</select>

```

<br/>

- 사용자가 입력한 username와 users_tb에 있는 username과 같은거만 조회하는 sql문입니다. 

---

<br/><br/>

**role.xml**

```java

// save 메서드
<insert id="save" useGeneratedKeys="true" keyProperty="roleId">
    insert into roles_tb
    values(0, #{name})
</insert>

```

<br/>

- RoleMapper에서 받아온 roleName을 roles_tb에 추가하여 그 결과를 RoleMapper로 전달하는 sql문입니다.  

---

<br/><br/>

**role.xml**

```java

// findByName 메서드
<select id="findByName" resultType="org.test.teamproject_back.entity.Role">
    select
        role_id as roleId,
        name
    from
        roles_tb
    where
        name = #{name}
</select>

```

<br/>

- name에 해당하는 역할을 roles_tb 에서 조회하여 결과를 RoleMapper로 전달하는 sql문입니다. 

---

<br/><br/>

**user_roles.xml**

```java

<insert id="save">
    insert into user_roles_tb
    values(0, #{userId}, #{roleId})
</insert>

```

<br/>

- userId와 roleId를 이용하여 user와 role의 정보들을 user_roles_tb에 추가하여 결과값을 UserRolesMapper에 전달하는 sql문입니다. 

---

<br/><br/>

#### 로그인 

__유저__ 

- __일반__  

    **프론트**

    ```jsx

    function SigninPage(props) {
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';

        const [user, setUser] = useState({
            username: "",
            password: "",
        });

        const userInputOnChange = (e) => {
            setUser((user) => ({
                ...user,
                [e.target.name]: e.target.value,
            }));
        };

        // 로그인 mutation
        const signinUser = useMutation(
            async (user) => {
                return await instance.post("user/public/signin", user);
            },
            {
                // 로그인 에러 - 에러메시지 불러옴
                onError: (response) => {
                    alert(response.response.data); // 데이터 확인 필요
                },
                onSuccess: (response) => {
                    localStorage.setItem(
                        "accessToken",
                        "Bearer " + response.data.accessToken
                    ); // 로그인 성공하면 accessToken 집어넣음
                    localStorage.setItem("role", response.data.role.name)

                    instance.interceptors.request.use((config) => {
                        // 요청때 config 설정 사용해라
                        config.headers["Authorization"] = localStorage.getItem("accessToken"); // 처음에 로그인이 안되어있으면 null값 들어가 있음
                        return config;
                    });
                    navigate(from, {replace : true});
                },
            }
        );

        const handleLoginSubmitOnClick = () => {
            signinUser.mutate(user);
        };

        const handleLoginSubmitOnkeyDown = (e) => {
            if(e.keyCode === 13) {
                handleLoginSubmitOnClick();
            }
        };

        return (
            <div css={s.mainLayout}>
                <h1 css={s.logo}>
                    <img src={logo} />
                </h1>
                <div css={s.layout}>
                    <div css={s.headerLayout}>
                        <h2>로그인</h2>
                    </div>
                    <div css={s.inputUser}>
                        <input
                            type="text"
                            name="username"
                            onChange={userInputOnChange}
                            value={user.username}
                            placeholder="아이디를 입력해 주세요"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={userInputOnChange}
                            onKeyDown={handleLoginSubmitOnkeyDown}
                            value={user.password}
                            placeholder="비밀번호를 입력해 주세요"
                        />
                    </div>
                    <div css={s.joinOkButton}>
                        <button onClick={handleLoginSubmitOnClick}>로그인 하기</button>
                    </div>
                    <div css={s.oauth2Buttons}>
                        <a href="http://localhost:8080/oauth2/authorization/naver">
                            <SiNaver />
                            네이버 로그인
                        </a>
                        <a href="http://localhost:8080/oauth2/authorization/google?scope=email%20profile%20https://www.googleapis.com/auth/user.phonenumbers.read">
                            <FcGoogle />
                            구글 로그인
                        </a>
                    </div>
                    <div css={s.joinAndSearchUser}>
                        <Link to="/user/signup">회원 가입</Link>
                        <Link to="/user/signin/findid" >아이디 비밀번호 찾기</Link>
                    </div>
                </div>
            </div>
        );
    }

    export default SigninPage;

    ```

    <br/>

    - 이 코드는 사용자가 회원가입한 아이디와 비밀번호를 입력하여 로그인 할 수 있도록 구현하였습니다.
    - 입력한 아이디와 비밀번호는 상태로 관리합니다.
    - mutation을 사용하여 로그인의 post 요청으로 처리합니다.
    - post 요청이 성공할시 accessToken과 role(사용자의 역할)를 서버에서 받아와 localStorage에 저장하고 로그인한 정보를 통해 로그인이 필요한 페이지를 이용할 수 있게 구성하였고 로그인이 성공하면 이전 페이지로 돌아갈 수 있게 구현하였습니다.
    - 로그인 버튼을 클릭하거나 비밀번호 창에서 엔터키를 누를 시 로그인 요청을 하는 mutation이 실행이 됩니다. 
    - 로그인 화면에는 OAuth2 기능을 이용하여 네이버, 구글로그인을 구현하였고 아이디와 비밀번호 찾기도 할 수 있게 구현하였습니다. 아이디와 비밀번호찾기를 클릭 시 아이디 찾는 페이지로 넘어가도록 Link를 걸어 설정하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @RequestMapping("/user/public")
    @RestController
    public class AuthController {
        @Autowired
        private AuthService authService;

        @PostMapping("/signin")
        public ResponseEntity<?> signin(@Valid @RequestBody ReqSigninDto dto) {
            return ResponseEntity.ok().body(authService.signin(dto));
        }

    }

    ```

    <br/>

    - 클라이언트에서 사용자가 입력한 정보를 요청을 받아 authService를 통해 응답을 ReqSigninDto 형태로 전달해주는 controller입니다. 

    ---

    <br/><br/>

    **ReqSigninDto**

    ```java

    @Data
    public class ReqSigninDto {

        @Pattern(regexp = "^[a-z0-9]{6,}$", message = "사용자이름은 6자이상의 영소문자, 숫자 조합이어야합니다.")
        private String username;
        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[~!@#$%^&*?])[A-Za-z\\d~!@#$%^&*?]{8,16}$", message = "비밀번호는 8자이상 16자이하의 영대소문, 숫자, 특수문자(~!@#$%^&*?)를 포함하여합니다.")
        private String password;

    }

    ```

    <br/>

    - 이 코드는 클라이언트에서 보낸 username과 password를 받아 유효성 검사 하는 역할을 합니다.

    --- 

    <br/><br/>

    **RespSigninDto**

    ```java

    @Builder
    @Data
    public class RespSigninDto {

        private String expireDate;
        private String accessToken;
        private Role role;

    }

    ```

    <br/>

    - 이 dto는 서버에서 클라이언트로 반환하는 응답데이터(expireDate, accessToken, role)가 담겨있는 dto입니다. 

    --- 

    <br/><br/>

    **Service**

    ```java

    @Service
    public class AuthService {

        @Autowired
        private UserMapper userMapper;
        @Autowired
        private BCryptPasswordEncoder bCryptPasswordEncoder;
        @Autowired
        private RoleMapper roleMapper;
        @Autowired
        private JwtProvider jwtProvider;

        public RespSigninDto signin(ReqSigninDto dto) {
        User user = checkUsernameAndPassword(dto.getUsername(), dto.getPassword());

            return RespSigninDto.builder()
                    .expireDate(jwtProvider.getExpireDate().toLocaleString())
                    .accessToken(jwtProvider.generateAccessToken(user))
                    .role(roleMapper.findRoleByUsername(dto.getUsername()))
                    .build();
        }

        public User checkUsernameAndPassword(String username, String password) {
            User user = userMapper.findUserByUsername(username);
            if (user == null) {
                throw new UsernameNotFoundException("사용자 정보를 확인하세요.");
            }
            if (!bCryptPasswordEncoder.matches(password, user.getPassword())) {
                throw new BadCredentialsException("사용자 정보를 확인하세요.");
            }
            return user;
        }
    }

    ```

    <br/>

    - 로그인 성공 시 JWT토큰을 생성하여 반환하는 AuthService 입니다.
    - signin 메서드는 로그인 요청을 처리합니다. 
    - checkUsernameAndPassword 메서드를 호출하여 username과 password 정보를 user 객체에 대입합니다.
    - expireDate는 JWT 토큰의 만료일을 문자열로 변환한 형태로 RespSigninDto에 반환합니다.
    - accessToken는 user 정보를 바탕으로 jwt 토큰을 생성한 형태로 RespSigninDto에 반환합니다. 
    - role는 로그인한 사용자의 역할를 찾아서 그 값을 RespSigninDto에 반환합니다.
    - checkUsernameAndPassword 메서드는 사용자가 입력한 아이디와 비밀번호가 올바른지 검사하여 signin메서드에서 사용됩니다.
    - 사용자가 입력한 아이디의 값이 null 이거나 찾을 수 없으면 throw를 이용하여 오류로 응답해줍니다.
    - 사용자가 입력한 비밀번호가 올바르지 않으면 오류로 응답합니다.

    ---

    <br/><br/>

    **UserMapper**

    ```java

    @Mapper
    public interface UserMapper {

        User findUserByUsername(String username);

    }

    ```

    <br/>

    - findUserByUsername 메서드는 username(사용자가 입력한 ID)을 통해 해당 사용자의 정보를 찾아 signin 메서드 안에 user 변수에 저장합니다.
    - 이는 해당 사용자의 아이디와 데이터베이스 안에 있는 해당 사용자의 저장된 아이디와 비교하기 위한 메서드입니다.

    ---

    <br/><br/>

    **RoleMapper**

    ```java

    @Mapper
    public interface RoleMapper {

        Role findRoleByUsername(String username);

    }

    ```

    <br/>

    - findRoleByUsername 메서드는 데이터베이스에서 사용자의 역할을 조회하여 username을 매개변수로 받아 AuthService에 반환하는 Mapper입니다.

    ---

    <br/><br/>

    **user.xml**

    ```java

    <select id="findUserByUsername" resultMap="userResultMap">
        select
            ut.user_id,
            ut.username,
            ut.name,
            ut.email,
            ut.phone_number,
            ut.img,
            ut.password,
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
            ut.username = #{username}
    </select>

    ```

    <br/>

    - 입력한 사용자의 ID를 통해 users_tb에서 사용자의 정보를 조회하여 UserMapper에 전달하는 sql 문입니다.

    ---

    <br/><br/>

    **role.xml**

    ```java

    <select id="findRoleByUsername" resultMap="roleResultMap">
        select
            rt.role_id,
            rt.name
        from
            users_tb ut
            left outer join user_roles_tb urt on (ut.user_id = urt.user_id)
            left outer join roles_tb rt on (urt.role_id = rt.role_id)
        where
            ut.username = #{username};
    </select>

    ```

    <br/>

    - 사용자가 입력한 username을 통해 해당당 사용자의 역할을 조회하여 RoleMapper에 반환하는 sql 문입니다.

---

<br/><br/>

- __OAuth2__  

    **프론트**

    ```jsx

    function SigninPage(props) {
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';

        const [user, setUser] = useState({
            username: "",
            password: "",
        });

        const userInputOnChange = (e) => {
            setUser((user) => ({
                ...user,
                [e.target.name]: e.target.value,
            }));
        };

        // 로그인 mutation
        const signinUser = useMutation(
            async (user) => {
                return await instance.post("user/public/signin", user);
            },
            {
                // 로그인 에러 - 에러메시지 불러옴
                onError: (response) => {
                    alert(response.response.data); // 데이터 확인 필요
                },
                onSuccess: (response) => {
                    localStorage.setItem(
                        "accessToken",
                        "Bearer " + response.data.accessToken
                    ); // 로그인 성공하면 accessToken 집어넣음
                    localStorage.setItem("role", response.data.role.name)

                    instance.interceptors.request.use((config) => {
                        // 요청때 config 설정 사용해라
                        config.headers["Authorization"] = localStorage.getItem("accessToken"); // 처음에 로그인이 안되어있으면 null값 들어가 있음
                        return config;
                    });
                    navigate(from, {replace : true});
                },
            }
        );

        const handleLoginSubmitOnClick = () => {
            signinUser.mutate(user);
        };

        const handleLoginSubmitOnkeyDown = (e) => {
            if(e.keyCode === 13) {
                handleLoginSubmitOnClick();
            }
        };

        return (
            <div css={s.mainLayout}>
                <h1 css={s.logo}>
                    <img src={logo} />
                </h1>
                <div css={s.layout}>
                    <div css={s.headerLayout}>
                        <h2>로그인</h2>
                    </div>
                    <div css={s.inputUser}>
                        <input
                            type="text"
                            name="username"
                            onChange={userInputOnChange}
                            value={user.username}
                            placeholder="아이디를 입력해 주세요"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={userInputOnChange}
                            onKeyDown={handleLoginSubmitOnkeyDown}
                            value={user.password}
                            placeholder="비밀번호를 입력해 주세요"
                        />
                    </div>
                    <div css={s.joinOkButton}>
                        <button onClick={handleLoginSubmitOnClick}>로그인 하기</button>
                    </div>
                    <div css={s.oauth2Buttons}>
                        <a href="http://localhost:8080/oauth2/authorization/naver">
                            <SiNaver />
                            네이버 로그인
                        </a>
                        <a href="http://localhost:8080/oauth2/authorization/google?scope=email%20profile%20https://www.googleapis.com/auth/user.phonenumbers.read">
                            <FcGoogle />
                            구글 로그인
                        </a>
                    </div>
                    <div css={s.joinAndSearchUser}>
                        <Link to="/user/signup">회원 가입</Link>
                        <Link to="/user/signin/findid" >아이디 비밀번호 찾기</Link>
                    </div>
                </div>
            </div>
        );
    }

    export default SigninPage;

    ```

    <br/>

    - 기존 로그인페이지에 OAuth2 로그인 기능을 넣었습니다. 
    - a 태그에 href를 이용하여 기존에 네이버 로그인과 구글 로그인을 할 수 있는 url를 가지고와 사용하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    <br/>

    - OAuth2 로그인에서 백엔드는 OAuth2Config, application.yml, application-secret.yml, OAuth2SuccessHandler 로 구성하였습니다. (맨 위에 설명되어 있습니다.)

---

<br/><br/>

- __아이디 찾기 및 비밀번호 찾기__

	__아이디 찾기__

    **프론트**

    ```jsx

    function FindIdPage(props) {
        const navigate = useNavigate();

        const [user, setUser] = useState({
            name: "",
            phoneNumber: ""
        });

        const userInputOnChange = (e) => {
            setUser((user) => ({
                ...user,
                [e.target.name]: e.target.value,
            }));
        };

        // 아이디 찾기 mutation
        const findIdUser = useMutation(
            async (user) => {
                return await instance.get("/user/public/find", {params : {name: user.name, phoneNumber: user.phoneNumber}});
            },
            {
                onError: (response) => {
                    alert(response.response.data); // 데이터 확인 필요
                },
                onSuccess: (response) => {
                    const id= response.data
                    alert("회원님의 아이디는 " + id + " 입니다.");
                },
            }
        );

        // 아이디 찾기 onClick
        const handleFindIdSubmitOnClick = () => {
            findIdUser.mutate(user);
        };

        return (
            <div css={s.mainLayout}>
            <h1 css={s.logo}>
                <img src={logo} />
            </h1>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2>아이디찾기</h2>
                </div>
                <div css={s.inputUser}>
                    <input
                        type="text"
                        name="name"
                        onChange={userInputOnChange}
                        value={user.name}
                        placeholder="이름을 입력해 주세요"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        onChange={userInputOnChange}
                        value={user.phoneNumber}
                        placeholder="휴대폰 번호를 하이픈(-) 추가해서 입력해 주세요"
                    />
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleFindIdSubmitOnClick}>아이디 찾기</button>
                </div>
                <div css={s.joinAndSearchUser}>
                    <Link to="/user/signin" >로그인</Link>
                    <Link to="/user/signin/findpassword" >비밀번호 찾기</Link>
                    <Link to="/user/signup" >회원 가입</Link>
                </div>
            </div>
        </div>
        );
    }

    export default FindIdPage;

    ```

    <br/>

    - 사용자의 아이디를 찾는 페이지 입니다. 
    - mutation 훅을 이용하여 서버에 "/user/public/find" URL로 get 요청을 보내고 params로 사용자의 이름과 전화번호를 넘깁니다. 
    - onError 콜백에서 response.response.data를 alert로 표시하고 있습니다. 에러 메시지를 사용자에게 직접 보여주는 방식입니다.
    - onSuccess 콜백에서 response.data를 콘솔에 로그하고, 사용자에게 아이디를 alert로 표시하고 있습니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @RequestMapping("/user/public")
    @RestController
    public class AuthController {

        @Autowired
        private AuthService authService;

        @GetMapping("/find")
        public ResponseEntity<?> findUsername(ReqFindUsernameDto dto) {
            return ResponseEntity.ok().body(authService.findUsername(dto));
        }

    }

    ```

    <br/>

    - 클라이언트에서 "/user/public/find" 로 get 요청을 받아 사용자의 아이디를 authService를 통해 찾아 ReqFindUsernameDto 형태로 전달해주는 Controller 입니다.

    ---

    <br/><br/>

    **Dto**

    ```java

    @Data
    public class ReqFindUsernameDto {

        private String name;
        private String phoneNumber;

    }

    ```

    <br/>

    - 이 dto는 클라이언트에서 보낸 사용자의 이름과 전화번호를 받아 controller나 service에 전달하는 Dto 입니다.

    ---

    <br/><br/>

    **Service**

    ```java

    @Service
    public class AuthService {

        @Autowired
        private UserMapper userMapper;

        public String findUsername(ReqFindUsernameDto dto) {
            return userMapper.findUsername(dto.getName(), dto.getPhoneNumber());
        }

    }

    ```

    <br/>

    - findUsername 메서드는 클라이언트로부터 전달된 ReqFindUsernameDto 객체에서 사용자의 이름과 전화번호를 추출하여 userMapper를 통해 데이터베이스에서 사용자의 아이디를 조회하여 controller에 전달하는 service입니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    @Mapper
    public interface UserMapper {

        String findUsername(@Param("name") String name, @Param("phoneNumber") String phoneNumber);

    }

    ```

    <br/>

    - findUsername 메서드는 해당 사용자의 이름과 전화번호를 service에서 요청을 파라미터로 받아 이를 통해 SQL 쿼리에서 사용자의 ID를 조회하여 service에 전달하는 Mapper입니다.

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="findUsername" resultType="java.lang.String">
        select
            username
        from
            users_tb
        where
            name = #{name}
            and phone_number = #{phoneNumber}
    </select>

    ```

    <br/>

    - 사용자의 이름과 전화번호를 받아 사용자의 ID를 조회하는 sql 문입니다. 

    ---

    <br/><br/>

	__비밀번호 찾기__  

    **프론트**

    ```jsx

    function FindPasswordPage(props) {
        const navigate = useNavigate();

        const [user, setUser] = useState({
            username: "",
            name:"",
            phoneNumber: "",
        });

        const userInputOnChange = (e) => {
            setUser((user) => ({
                ...user,
                [e.target.name]: e.target.value,
            }));
        };

        // 비밀번호 찾기 mutation
        const passwordUser = useMutation(
            async (user) => {
                return await instance.put("/user/public/regen", user);   
            },
            {
                // 로그인 에러 - 에러메시지 불러옴
                onError: (response) => {
                    alert(response.response.data); // 데이터 확인 필요
                },
                onSuccess: () => {
                    alert("비밀번호가 초기화 되었습니다.\n 고객님의 임시비밀번호는 1Q2w3e4r!! 입니다.\n 로그인 후 마이페이지에서 변경 바랍니다.");
                }
            }
        );

        // 비밀번호찾기 버튼 
        const handleFindPasswordSubmitOnClick = () => {
            passwordUser.mutate(user);
        };

        return (
            <div css={s.mainLayout}>
            <h1 css={s.logo}>
                <img src={logo} />
            </h1>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2>비밀번호 찾기</h2>
                </div>
                <div css={s.inputUser}>
                    <input
                        type="text"
                        name="name"
                        onChange={userInputOnChange}
                        value={user.name}
                        placeholder="이름을 입력해 주세요"
                    />
                    <input
                        type="text"
                        name="username"
                        onChange={userInputOnChange}
                        value={user.username}
                        placeholder="아이디를 입력해 주세요"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        onChange={userInputOnChange}
                        value={user.phoneNumber}
                        placeholder="휴대폰 번호를 ( - ) 추가해서 입력해 주세요"
                    />
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleFindPasswordSubmitOnClick}>비밀번호 찾기</button>
                </div>
                <div css={s.joinAndSearchUser}>
                    <Link to="/user/signin" >로그인</Link>
                    <Link to="/user/signin/findid" >아이디 찾기</Link>
                    <Link to="/user/signup" >회원 가입</Link>
                </div>
            </div>
        </div>
        );
    }

    export default FindPasswordPage;

    ```

    <br/>

    - 이 코드는 사용자의 비밀번호를 초기화 하기위한 페이지 입니다. 
    - mutation을 이용하여 "/user/public/regen" 로 put 요청을 보내 서버에 응답 받습니다. 
    - 응답을 성공적으로 받으면 비밀번호 초기화 성공 메시지를 alert로 표시하고 임시 비밀번호를 사용자에게 안내합니다.
    - 사용자의 이름과 아이디, 전화번호를 입력 시 비밀번호를 초기화 할 수 있게 설정하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @RequestMapping("/user/public")
    @RestController
    public class AuthController {

        @PutMapping("/regen")
        public ResponseEntity<?> generatePassword(@RequestBody ReqGeneratePasswordDto dto) {
            authService.generatePassword(dto);
            return ResponseEntity.ok().body(true);
        }

    }

    ```

    <br/>

    - 클라이언트에서 "/user/public/regen으로 put 요청을 받아 authService를 통해 비밀번호를 초기화하는 기능을 처리하고 응답 본문으로 true를 반환하는 Controller 입니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Data
    public class ReqGeneratePasswordDto {
        private String name;
        private String username;
        private String phoneNumber;

        public User toUser(BCryptPasswordEncoder bCryptPasswordEncoder) {
            return User.builder()
                    .name(name)
                    .username(username)
                    .phoneNumber(phoneNumber)
                    .password(bCryptPasswordEncoder.encode("1Q2w3e4r!!"))
                    .build();
        }
    }

    ```

    <br/>

    - 이 dto는 클라이언트에서 전달받은 사용자의 이름과 아이디, 전화번호를 담는 Dto입니다.
    - toUser메서드는 비밀번호를 초기화 과정에서 사용자의 정보와 함께 사용자의 비밀번호를 임시로 "1Q2w3e4r!!"를 설정하여 이를 암호화하여 User 객체로 변환하고고 반환합니다.

    ---

    <br/><br/>

    **Service**

    ```java
    
    @Service
    public class AuthService {

        @Autowired
        private UserMapper userMapper;

        public void generatePassword(ReqGeneratePasswordDto dto) {
            userMapper.updatePassword(dto.toUser(bCryptPasswordEncoder));
        }

    }

    ```

    <br/>

    - generatePassword 메서드는 클라이언트로부터 전달된 ReqGeneratePasswordDto 객체에서 사용자의 해당 정보를 추출하여 userMapper를 통해 해당 사용자의 비밀번호를 toUser메서드를 통해 임시비밀번호로 변경하여 데이터베이스에 저장하고 controller에 응답을 반환하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    @Mapper
    public interface UserMapper {

        int updatePassword(User user);

    }

    ```

    <br/>

    - updatePassword 메서드는 사용자의 정보를 통해 SQL 쿼리에서 비밀번호 초기화한 데이터를 받아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <update id="updatePassword">
        update users_tb
        set
            password = #{password}
        where
            name = #{name}
        and username = #{username}
        and phone_number = #{phoneNumber}
    </update>

    ```

    <br/>

    - 해당 사용자의 이름, 아이디, 전화번호를 받아 비밀번호를 초기화하는 sql 문입니다.

---

<br/><br/>

### 장바구니

- __ShoppingBosket__  

    **프론트**

    ```jsx

    function ShoppingBasket(props) {
        const navigate = useNavigate();

        const [productList, setProductList] = useState([]); // 상품 목록 상태 추가

        // 전체 체크박스 기본 속성 - false
        const [isAllchecked, setIsAllchecked] = useState(false);

        // 장바구니 상품 가져오기
        const { data, isLoading, isError, refetch } = useQuery(
            ["basketProducts"],
            async () => {
            return await instance.get("/user/cart");
            },
            {
            onSuccess: (response) => {
                const productsWithEditState = response?.data?.cartList.map((product) => ({
                    ...product,
                    isEdit: false, // 각 상품에 대해 수정 상태 추가
                }));
                setProductList(productsWithEditState);
            },
            refetchOnWindowFocus: false, // 창 포커스 시 재요청 하지 않음
            retry: 0,
            // 데이터 가져오면 productList에 설정
            }
        );

        // 수정 요청을 위한 mutation
        const editMutation = useMutation(
            async (product) => {
            const editData = {
                cartId: product.cartId,
                cartItemId: product.cartItemId,
                quantity: product.quantity,
            };
            return await instance.put(`/user/cart/${product.cartItemId}`, editData);
            },
            {
            onSuccess: () => {
                refetch(); // 삭제 후 장바구니를 다시 불러오기
            },
            }
        );

        // 삭제 요청을 위한 mutation
        const deleteMutation = useMutation(
            async (product) => {
            const deleteProduct = {
                cartId: product.cartId,
                cartItemId: product.cartItemId,
            };
            return await instance.delete(`/user/cart/${product.cartItemId}`, {
                data: { cartId: product.cartId, cartItemId: product.cartItemId },
            });
            },
            {
            onSuccess: () => {
                refetch(); // 삭제 후 장바구니를 다시 불러오기
            },
            }
        );

        // 전체 체크박스 체인지 함수
        const handleAllCkeckBoxOnChange = () => {
            const checkState = !isAllchecked;
            setIsAllchecked(checkState);
            setProductList(
            productList.map((product) => ({ ...product, checked: checkState }))
            );
        };

        // 개별 체크박스 체인지 함수
        const handleCheckBoxOnChange = (cartItemId) => {
            const updateProductList = productList.map((product) =>
            product.cartItemId === cartItemId
                ? { ...product, checked: !product.checked }
                : product
            );
            setProductList(updateProductList);

            // 모든 개별 체크박스가 선택된 경우 전체 체크박스도 체크
            const allChecked = updateProductList.every((product) => product.checked);
            setIsAllchecked(allChecked);
        };

        // 수량 변경 함수
        const handleQuantityChange = (index, number) => {
            const updatedProducts = productList.map((product, i) =>
            i === index
                ? { ...product, quantity: Math.max(1, product.quantity + number) }
                : product
            );
            setProductList(updatedProducts);
        };

        // 수정 버튼 클릭 함수
        const handleEditStateButtonOnClick = (productId) => {
            setProductList(
                productList.map((product) =>
                product.cartItemId === productId
                    ? { ...product, isEdit: true }
                    : { ...product, isEdit: false }
                )
            );
            };

        // 수정 버튼 클릭 함수
        const handleEditButtonOnClick = (product) => {
            editMutation.mutate(product);
            alert("수정이 완료되었습니다.");
            setProductList(
            productList.map((item) =>
                item.cartItemId === product.cartItemId
                ? { ...item, isEdit: false }
                : item
            )
            );
        };

        // 삭제 버튼 클릭 함수
        const handleDeleteButtonOnClick = (product) => {
            deleteMutation.mutateAsync(product).catch(()=>{});
            refetch();
        };

        // 상품갯수 * 가격 함수
        const calculateTotalPrice = (product) => {
            return product.price * product.quantity;
        };

        // 총 상품금액, 총합계 계산 함수
        const calculateTotals = () => {
            const totalProductAmount = productList?.reduce((total, product) => {
            return total + (product.checked ? calculateTotalPrice(product) : 0);
            }, 0);
            const deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
            const totalAmount = totalProductAmount + deliveryFee;

            return { totalProductAmount, totalAmount, deliveryFee };
        };

        const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

        // 구매 버튼 클릭 시 작동
        const handleBuyButtonOnClick = () => {
            const selectedProducts = productList.filter((product) => product.checked);

            const orderProducts = selectedProducts.map(
            (product) =>
                `cartId=${product.cartId}&cartItemId=${product.cartItemId}&quantity=${product.quantity}`
            );

            navigate(`/order?${orderProducts.join("&")}`);

        };

        const handleAllDeleteButtonOnClick = async () => {
            const allProductId = {
            cartId: productList.map((item) => item.cartId),
            cartItemId: productList.map((item) => item.cartItemId),
            };
            if (window.confirm("모든 상품이 삭제됩니다. 삭제하시겠습니까?")) {
            await instance.delete("user/cart", {
                data: {
                cartId: allProductId.cartId,
                cartItemId: allProductId.cartItemId,
                },
            });
            refetch();
            }
        };

        if (isLoading) return <div>Loading...</div>;
        // if (isError) return <div>데이터를 가져오는데 실패했습니다.</div>

        return (
            <div css={s.cartContainer}>
            {/* 장바구니 목록 섹션 */}
            <div css={s.cartListSection}>
                <div css={s.basketHeader}>
                <h2 css={s.title}>장바구니</h2>
                </div>
                <div css={s.basketBox}>
                <table css={s.productTable}>
                    <thead css={s.thead}>
                    <tr>
                        <td>
                        <input
                            type="checkbox"
                            onChange={handleAllCkeckBoxOnChange}
                            checked={isAllchecked}
                        />
                        </td>
                        <th>상품</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>금액</th>
                        <th>할인</th>
                        <th>합계금액</th>
                        <th>비고</th>
                    </tr>
                    </thead>
                    <tbody css={s.tbody}>
                    {productList?.map((product, index) => (
                        <tr key={product?.productId}>
                        <td>
                            <input
                            type="checkbox"
                            onChange={() =>
                                handleCheckBoxOnChange(product?.cartItemId)
                            }
                            checked={product?.checked}
                            />
                        </td>
                        <td>
                            <div css={s.img}>
                            <img src={product?.product?.thumbnailImg} />
                            </div>
                        </td>
                        <td>
                            <div css={s.productName}>{product?.product?.title}</div>
                            <tr>{product.description}</tr>
                        </td>
                        <td>
                            {product.isEdit ? (
                            <>
                                <button onClick={() => handleQuantityChange(index, -1)}>
                                -
                                </button>
                                {product?.quantity}
                                <button onClick={() => handleQuantityChange(index, +1)}>
                                +
                                </button>
                            </>
                            ) : (
                            <>{product?.quantity}</>
                            )}
                        </td>
                        <td>{product?.price.toLocaleString()} 원</td>
                        <td>-</td>
                        <td> {calculateTotalPrice(product).toLocaleString()} 원</td>
                        <td>
                            {
                                product.isEdit ? (
                                    <button onClick={() => handleEditButtonOnClick(product)}>
                                    수정
                                </button>
                                ) : (
                                    <button onClick={() => handleEditStateButtonOnClick(product?.cartItemId)}>
                                    수정
                                </button>
                                )
                            }
                            <button onClick={() => handleDeleteButtonOnClick(product)}>
                            삭제
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <div css={s.footerBox}>
                <div css={s.priceBox}>
                    <div css={s.productAmount}>
                    <p>
                        총 {productList?.filter((product) => product.checked).length}{" "}
                        개의 상품금액
                    </p>
                    <p>{totalProductAmount.toLocaleString()}원</p>
                    </div>
                    <FaPlus />
                    <div css={s.deliveryFee}>
                    <p>배송비</p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                    </div>
                    <FaEquals />
                    <div css={s.totalAmount}>
                    <p>합계</p>
                    <p>{totalAmount.toLocaleString()}원</p>
                    </div>
                </div>
                </div>
                <div css={s.buttonBox}>
                <button onClick={handleBuyButtonOnClick}>주문하기</button>
                <button onClick={handleAllDeleteButtonOnClick}>전체삭제</button>
                </div>
            </div>
            </div>
        );
    }

    export default ShoppingBasket;

    ```

    <br/>

    - 이 코드는 장바구니 페이지 코드 입니다. 세부적인 기능은 밑에서 설명하겠습니다. 

    ---

    <br/><br/>

- __수정__

    **프론트**

    ```JSX

    const [productList, setProductList] = useState([]);

    // 수정 요청을 위한 mutation
    const editMutation = useMutation(
        async (product) => {
            const editData = {
                cartId: product.cartId,
                cartItemId: product.cartItemId,
                quantity: product.quantity,
            };
            return await instance.put(`/user/cart/${product.cartItemId}`, editData);
        },
        {
            onSuccess: () => {
                refetch(); // 삭제 후 장바구니를 다시 불러오기
            },
        }
    );

    // 수정 버튼 클릭 함수
    const handleEditStateButtonOnClick = (productId) => {
        setProductList(
            productList.map((product) =>
            product.cartItemId === productId
                ? { ...product, isEdit: true }
                : { ...product, isEdit: false }
            )
        );
    };

    // 수정 버튼 클릭 함수
    const handleEditButtonOnClick = (product) => {
        editMutation.mutate(product);
        alert("수정이 완료되었습니다.");
        setProductList(
            productList.map((item) =>
                item.cartItemId === product.cartItemId
                ? { ...item, isEdit: false }
                : item
            )
        );
    };

    ```

    <br/>

    - 이 코드는 장바구니 상품 목록의 수량을 바꾸기 위한 수정 기능을 구현한 코드입니다.
    - editMutation : 상품 목록의 수량을 수정하기 위한 비동기 함수를 정의합니다.
    - cartId, cartItemId, quantity를 포함한 데이터를 "/user/cart/${product.cartItemId}"로 서버에 put 요청을 보냅니다. 
    - 수정이 성공적으로 이루어 지면 refetch를 호출하여 장바구니 데이터를 다시 불러옵니다.
    - handleEditStateButtonOnClick(수정 상태 버튼 클릭 함수) : 특정 아이템을 수정 상태로 전환하고 다른 아이템들은 수정 상태를 해제합니다.
    - handleEditButtonOnClick(수정 버튼 클릭 함수) : 수정된 아이템을 서버에 전송하여 업데이트하고 수정이 완료되면 알림을 표시하고, 수정 상태를 해제합니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @RestController
    @RequestMapping("/user/cart")
    public class CartController {

        @Autowired
        private CartService cartService;

        @PutMapping("/{id}")
        public ResponseEntity<?> modifyCart(@RequestBody ReqModifyCartDto dto) {
            cartService.modifyCart(dto);
            return ResponseEntity.ok().body(true);
        }

    }

    ```

    <br/>

    - 클라이언트에 put 요청을 받아 장바구니의 상품의 수량을 수정하기 위해 ReqModifyCartDto 객체로 변환하여 service에 전달하고 성공적으로 데이터를 가지고 오면 응답을 true로 반환합니다. 

    ---

    <br/><br/>

     **Dto**

    ```java

    @Builder
    @Data
    public class ReqModifyCartDto {
        private Long cartId;
        private Long cartItemId;
        private int quantity;

        public CartItem toCartItem(Long cartId, Long cartItemId, int quantity) {
            return CartItem.builder()
                    .cartId(cartId)
                    .cartItemId(cartItemId)
                    .quantity(quantity)
                    .build();
        }
    }

    ```

    <br/>

    - 이 dto는 장바구니 상품 목록과 상품 수량 정보를 담는 객체입니다. 
    - toCartItem 메서드는 ReqModifyCartDto에서 받은 장바구니 수정 정보를 CartItem 객체로 변환하는 역할을 합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    @Service
    public class CartService {

        @Autowired
        private CartMapper cartMapper;
        @Autowired
        private CartItemMapper cartItemMapper;

        @Transactional(rollbackFor = SQLException.class)
        public void modifyCart(ReqModifyCartDto dto) {
            List<Long> cartItemsIdList = cartMapper.findCartItemIdByCartId(dto.getCartId()); // 카트에 해당하는 아이템
            List<Long> matchingCartItemIdList = cartItemsIdList.stream() // 해당 아이템 찾음
                    .filter(cartItemId -> cartItemId.equals(dto.getCartItemId()))
                    .collect(Collectors.toList());

            if (!matchingCartItemIdList.isEmpty()) {
                for (Long cartItemId : matchingCartItemIdList) {
                    cartItemMapper.updateCartItems(dto.toCartItem(dto.getCartId(), cartItemId, dto.getQuantity()));
                }
            }
        }
    }

    ```

    <br/>

    - 이 코드는 주어진 ReqModifyCartDto 정보를 바탕으로 해당 장바구니의 항목을 찾아서 수량을 수정하는 역할을 하는 Service 입니다.
    - modifyCart 메서드는 트랜잭션을 통해 데이터베이스의 예외처리가 일어나면 롤백하도록 설정하였습니다.
    - cartItemIdList : cartMapper를 사용하여 cartId를 통해 해당 사용자의 장바구니의 항목을 찾아 cartItemIdList에 저장합니다. 
    - matchingCartItemIdList : cartItemIdList에 저장된 해당 장바구니 항목의 목록에 대해 스트림을 생성하여 cartItemId와 일치하는 장바구니 항목을 찾아 collect를 통해 수정할 데이터 목록들을 저장합니다. 
    - 만약에 matchingCartItemIdList가 비어있지 않다면 장바구니 항목의 수량을 cartItemMapper를 통해 수정할 수 있도록 설정하였습니다. 

    ---

    <br/><br/>

    **CartMapper**

    ```java

        @Mapper
        public interface CartMapper {

            List<Long> findCartItemIdByCartId(Long cartId);

        }

    ```

    <br/>

    - cartId를 통해 해당 장바구니 항목을 데이터베이스에서 찾아 findCartItemIdByCartId 메서드에 저장합니다.

    ---

    <br/><br/>

    **CartItemMapper**

    ```java

    @Mapper
    public interface CartItemMapper {

        int updateCartItems(CartItem cartItem);

    }

    ```

    <br/>

    - cartItem 객체를 통해 해당 장바구니 항목의 수량을 데이터베이스에서 수정하여 updateCartItems 메서드에 저장합니다. 

    ---

    <br/><br/>

    **cart.xml**

    ```java

    <select id="findCartItemIdByCartId" resultType="java.lang.Long">
        select
            cit.cart_item_id
        from
            cart_tb ct
            left outer join cart_items_tb cit on (ct.cart_id = cit.cart_id)
        where
            ct.cart_id = #{cartId};
    </select>

    ```

    <br/>

    - 이 코드는 장바구니의 항목을 cartId를 이용하여 조회하는 sql 문입니다. 

    ---

    <br/><br/>

    **cart_item.xml**

    ```java

    <update id="updateCartItems">
        update cart_items_tb
        set
            quantity = #{quantity}
        where
            cart_id = #{cartId}
            and cart_item_id = #{cartItemId}
    </update>

    ```

    <br/>

    - 이 코드는 cartId와 carItemId를 이용하여 수량을 수정할 수 있도록 설정한 sql 문입니다. 

---

<br/><br/>

- __삭제__  

    **프론트**

    ```jsx

    // 삭제 요청을 위한 mutation
    const deleteMutation = useMutation(
        async (product) => {
        const deleteProduct = {
            cartId: product.cartId,
            cartItemId: product.cartItemId,
        };
        return await instance.delete(`/user/cart/${product.cartItemId}`, {
            data: { cartId: product.cartId, cartItemId: product.cartItemId },
        });
        },
        {
        onSuccess: () => {
            refetch(); // 삭제 후 장바구니를 다시 불러오기
        },
        }
    );

    const handleDeleteButtonOnClick = (product) => {
        deleteMutation.mutateAsync(product).catch(()=>{});
        refetch();
    };


    ```

    <br/>

    - 이 코드는 해당 장바구니의 항목을 삭제하는 역할을 합니다. 
    - deleteMutation을 사용하여 cartId와 cartItemId를 포함한 데이터를 서버에 전송합니다.
    - 삭제가 성공하면 refetch를 호출하여 장바구니 데이터를 다시 불러옵니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @RestController
    @RequestMapping("/user/cart")
    public class CartController {

        @DeleteMapping("/{id}")
        public ResponseEntity<?> deleteCart(@RequestBody ReqDeleteCartDto dto) {
            cartService.deleteCart(dto);
            return ResponseEntity.ok().body(true);
        }

    }

    ```

    <br/>

    - 클라이언트에서 삭제 요청을 받아 해당 사용자의 장바구니 항목을 cartService를 통해 삭제 처리하는 Controller 입니다. 
    - ReqDeleteCartDto 객체로 변환하여 cartService에 전달하고 성공적으로 데이터를 가지고 오면 클라이언트에 응답을 true로 반환합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Builder
    @Data
    public class ReqDeleteCartDto {
        private Long cartId;
        private Long cartItemId;
    }

    ```

    <br/>

    - 이 dto는 장바구니 해당 사용자의 장바구니 목록 데이터를 담는는 객체입니다.

    ---

    <br/><br/>

    **Service**

    ```java

    @Service
    public class CartService {

        @Autowired
        private CartItemMapper cartItemMapper;

        @Transactional(rollbackFor = SQLException.class)
        public void deleteCart(ReqDeleteCartDto dto) {
            cartItemMapper.deleteCartItemByCartItemId(dto.getCartItemId());
        }

    }

    ```

    <br/>

    - 이 코드는 주어진 ReqDeleteCartDto 정보를 바탕으로 해당 장바구니의 항목을 cartItemMapper를 통해 삭제 처리하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    @Mapper
    public interface CartItemMapper {

        int deleteCartItemByCartItemId(Long cartItemId);

    }

    ```

    <br/>

    - cartItemId를 통해 장바구니 목록 중에 해당 항목을 sql문에서 삭제하여 그 데이터를 deleteCartItemByCartItemId 메서드에 저장하여 CartService에 전달합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <delete id="deleteCartItemByCartItemId">
        delete from cart_items_tb
        where
            cart_item_id = #{cartItemId}
    </delete>

    ```

    <br/>

    - cartItemId를 통해 장바구니 항목을 삭제 처리하는 sql 문입니다. 

---

<br/><br/>

- __체크박스 기능__

    **프론트**

    ```jsx

    // 전체 체크박스 체인지 함수
    const handleAllCkeckBoxOnChange = () => {
        const checkState = !isAllchecked;
        setIsAllchecked(checkState);
        setProductList(
        productList.map((product) => ({ ...product, checked: checkState }))
        );
    };

    // 개별 체크박스 체인지 함수
    const handleCheckBoxOnChange = (cartItemId) => {
        const updateProductList = productList.map((product) =>
        product.cartItemId === cartItemId
            ? { ...product, checked: !product.checked }
            : product
        );
        setProductList(updateProductList);

        // 모든 개별 체크박스가 선택된 경우 전체 체크박스도 체크
        const allChecked = updateProductList.every((product) => product.checked);
        setIsAllchecked(allChecked);
    };

    ```

    <br/>

    - 이 코드는 장바구니 목록의 체크박스를 관리하는 기능을 구현한 것입니다.
    - 전체 체크박스 변경 함수 : 전체 선택 체크박스의 상태를 변경하며 모든 제품의 checked 상태를 전체 선택 체크박스의 상태와 동일하게 설정합니다. 
    - 개별 체크박스 변경 함수 : 특정 개별의 체크박스 상태를 변경하고 모든 개별 체크박스가 선택된 경우 전체 선택 체크박스도 선택되록 설정합니다.

    ---

    <br/><br/>

    - __수량 변경 기능__

    **프론트**

    ```jsx

     // 수량 변경 함수
    const handleQuantityChange = (index, number) => {
        const updatedProducts = productList.map((product, i) =>
        i === index
            ? { ...product, quantity: Math.max(1, product.quantity + number) }
            : product
        );
        setProductList(updatedProducts);
    };

    ```

    <br/>

    - 이 코드는 장바구니 아이템의 수량을 변경하고, 수정 상태를 관리하며, 수정 요청을 처리하는 기능을 구현한 것입니다.
    - handleQuantityChange(수량 변경 함수) : 특정 아이템의 수량을 증가 또는 감소시키고 수량은 최소 1이상으로 유지됩니다.

    ---

    <br/><br/>

    - __상품금액 계산 함수__

    **프론트**

    ```jsx

    // 상품갯수 * 가격 함수
    const calculateTotalPrice = (product) => {
        return product.price * product.quantity;
    };

    // 총 상품금액, 총합계 계산 함수
    const calculateTotals = () => {
        const totalProductAmount = productList?.reduce((total, product) => {
        return total + (product.checked ? calculateTotalPrice(product) : 0);
        }, 0);
        const deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        const totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    ```

    <br/>

    - 이 코드는 장바구니의 총 상품 금액과 총 합계를 계산하는 기능을 구현한 것입니다.
    - calculateTotalPrice : 각 상품의 가격과 수량을 곱하여 총 가격을 계산합니다.
    - calculateTotals : 선택된 상품들의 총 금액을 계산하고 총 금액이 30,000원 이상이면 배송비는 0원, 그렇지 않으면 3,000원을 부과합니다.
    - 총 상품 금액과 배송비를 합산하여 총 합계를 계산합니다.

    ---

    <br/><br/>

    - __구매버튼 클릭__

    **프론트**

    ```jsx

    // 구매 버튼 클릭 시 작동
    const handleBuyButtonOnClick = () => {
        const selectedProducts = productList.filter((product) => product.checked);

        const orderProducts = selectedProducts.map(
        (product) =>
            `cartId=${product.cartId}&cartItemId=${product.cartItemId}&quantity=${product.quantity}`
        );

        navigate(`/order?${orderProducts.join("&")}`);

    }

    ```

    <br/>

    - 이 코드는 사용자가 구매 버튼을 클릭했을 때 선택된 상품들을 주문 페이지로 전달하는 기능을 구현한 것입니다.
    - 선택된 상품 필터링 : productList에서 checked 상태가 true인 상품들만 필터링하여 selectedProducts 배열에 저장합니다.
    - 주문 상품 데이터 생성 : 선택된 상품들의 cartId, cartItemId, quantity를 쿼리 문자열 형식으로 변환하여 orderProducts 배열에 저장합니다.
    - navigate함수를 사용하여 "/order" 페이지로 이동하며, 쿼리 문자열로 주문 상품 데이터를 전달합니다.

---

<br/><br/>

### 마이페이지  

#### 전체 코드

**프론트**

```jsx

const menus = [
  {
    id: 1,
    name: "정보 조회",
    path: "/mypage/userinfo",
    icon: <RiFileUserLine />,
  },
  {
    id: 2,
    name: "찜목록",
    path: "/mypage/wishlist",
    icon: <FcLike />,
  },
  {
    id: 3,
    name: "구매기록",
    path: "/mypage/buyinfo",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    id: 4,
    name: "구매후기",
    path: "/mypage/reviewinfo",
    icon: <HiOutlinePencilSquare />,
  },
  {
    id: 5,
    name: "회원탈퇴",
    path: "/mypage/leaveUser",
    icon: <GoTrash />,
  },
];

function MyPage(props) {
    const location = useLocation();
    const { pathname } = location;

    const [userInfo, setUserInfo] = useState();

    const queryClient = useQueryClient();
    const userInfoState = queryClient.getQueryState("userInfoQuery");
    const [isUploading, setUploading] = useState(false);
    const profileImage = [];
    const [imgUrl, setImgUrl] = useState(null); // imgUrl 상태 별도로 관리

    const getUserInfo = useQuery(
        ["getUserInfo"],
        async () => {
        return await instance.get("/user");
        },
        {
        onSuccess: (response) => {
            setUserInfo(response.data);
        },
        }
    );

    const imgUpload = useMutation(
        async (imgUrl) => {
        return await instance.put("user/img", imgUrl);
        },
        {
        onSuccess : () => {
            getUserInfo.refetch();
        },
        onError: (e) => {
            console.error(e)
        }
        }
    )
    
    const handleImageChangeOnClick = useCallback( async () => {
        if (window.confirm("프로필 사진을 변경하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.click();

            fileInput.onchange = (e) => {
                const files = Array.from(e.target.files);

                const storage = getStorage();
                setUploading(true);

                files.forEach((file) => {
                const storageRef = ref(storage, `user/${uuid()}_${file.name}`);
                const task = uploadBytesResumable(storageRef, file);
    
                task.on(
                    'state_changed',
                    () => { }, // 업로드 중 상태 핸들링 (옵션)
                    (e) => {
                        console.error(e);
                        setUploading(false);
                    },
                    async () => {
                        try {
                            alert("이미지가 변경될 때 까지 기다려 주세요.")
                            const imgUrl = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                            profileImage.push(imgUrl)
    
                            setImgUrl((user) => ({
                                ...user,
                                imgUrl: profileImage[0]
                            }));
    
                        } catch (e) {
                            console.error("파일 가져오기 실패" + e);
                        } finally {
                            setUploading(false);
                        }
                    }
                );
                });
            };
        }
    }, []); 

    // imgUrl이 변경되면 서버로 업데이트
    useEffect(() => {
    if (imgUrl) {
        imgUpload.mutate(imgUrl);
        setImgUrl(null)
    }
    }, [imgUpload]);


    return (
        <div css={s.mainContainer}>
            <h2>마이페이지</h2>
            <div css={s.userInfoContainer}>
                <div css={s.imgBox} onClick={handleImageChangeOnClick} >
                <img src={userInfo?.img} alt="" />
                </div>
                <div css={s.userInfoBox}>
                <p>{userInfo?.name}님 반갑습니다.</p>
                <p>{userInfo?.email}</p>
                </div>
            </div>
            <div css={s.menuBox}>
                {/* 메뉴 선택 버튼 */}
                {menus.map((menu) => (
                <Link
                    key={menu.id}
                    to={menu.path}
                    css={s.selectedMenu(pathname === menu.path)}
                >
                    {menu.icon} <span>{menu.name}</span>
                </Link>
                ))}
            </div>
            <div css={s.contentsBox}>
                <Routes>
                    <Route path="/userinfo" element={<UserInfo />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/buyinfo" element={<BuyInfo />} />
                    <Route path="/reviewinfo" element={<ReviewInfo />} />
                    <Route path="/leaveUser" element={<LeaveUser 
                    userInfo={userInfo}
                    />} />
                </Routes>
            </div>
        </div>
    );
}

export default MyPage;

```

<br/>

- 이 코드는 해당 사용자의 정보(프로필, 이름, 이메일 등)를 보여주고 정보수정, 찜목록, 구매기록, 자신이 쓴 리뷰, 회원 탈퇴 등 구현한 마이페이지 입니다. 
- useQuery를 사용하여 해당 사용자의 정보를 조회하였습니다. 
- Route를 사용하여 정보수정, 찜목록, 구매기록, 구매후기, 회원탈퇴를 이동하도록 하였습니다. 

---

<br/><br/>

**백엔드**

<br/>

- 마찬가지로 다른 코드에서 조회한 백엔드 코드와 흐름이 같습니다. 
- 클라이언트에 /user로 get요청을 받아 사용자 정보를 조회하는 로직을 구현하였습니다. 

---

<br/><br/>

#### 프로필 변경  

**프론트**

```jsx

const profileImage = [];
const [imgUrl, setImgUrl] = useState(null); // imgUrl 상태 별도로 관리

const imgUpload = useMutation(
    async (imgUrl) => {
    return await instance.put("user/img", imgUrl);
    },
    {
    onSuccess : () => {
        getUserInfo.refetch();
    },
    onError: (e) => {
        console.error(e)
    }
    }
)

const handleImageChangeOnClick = useCallback( async () => {
    if (window.confirm("프로필 사진을 변경하시겠습니까?")) {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.click();

        fileInput.onchange = (e) => {
            const files = Array.from(e.target.files);

            const storage = getStorage();
            setUploading(true);

            files.forEach((file) => {
            const storageRef = ref(storage, `user/${uuid()}_${file.name}`);
            const task = uploadBytesResumable(storageRef, file);

            task.on(
                'state_changed',
                () => { }, // 업로드 중 상태 핸들링 (옵션)
                (e) => {
                    console.error(e);
                    setUploading(false);
                },
                async () => {
                    try {
                        alert("이미지가 변경될 때 까지 기다려 주세요.")
                        const imgUrl = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                        profileImage.push(imgUrl)

                        setImgUrl((user) => ({
                            ...user,
                            imgUrl: profileImage[0]
                        }));

                    } catch (e) {
                        console.error("파일 가져오기 실패" + e);
                    } finally {
                        setUploading(false);
                    }
                }
            );
            });
        };
    }
}, []); 

// imgUrl이 변경되면 서버로 업데이트
useEffect(() => {
if (imgUrl) {
    imgUpload.mutate(imgUrl);
    setImgUrl(null)
}
}, [imgUpload]);

```

<br/>

- 이 코드는 프로필 사진을 변경하는 기능을 구현한 것입니다.
- 프로필 사진 변경 확인: 사용자가 프로필 사진을 변경할지 확인하는 메시지를 표시합니다.
- 파일 입력 생성 및 클릭: 파일 입력 요소를 동적으로 생성하고 클릭하여 파일 선택 창을 엽니다.
- 파일 선택 처리: 사용자가 파일을 선택하면, 선택된 파일들을 배열로 변환합니다.
- 파일 업로드:
    - Firebase Storage를 사용하여 파일을 업로드합니다.
    - 업로드 상태를 관리하고, 업로드 중 에러가 발생하면 처리합니다.
    - 업로드가 완료되면 다운로드 URL을 가져와서 "profileImage" 배열에 추가합니다.
- 프로필 이미지 업데이트: 다운로드 URL을 사용하여 프로필 이미지를 업데이트합니다.

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/user")
public class UserController {

    @PutMapping("/img")
    public ResponseEntity<?> modifyImgProfile(@RequestBody ReqImgDto dto) {
        userService.modifyImgProfile(dto);
        return ResponseEntity.ok().body(true);
    }

}

```

<br/>

- 클라이언트에서 "/user/img"로 put 요청을 받아 사용자의 이미지를 변경하는 로직을 수행합니다.
- ReqImgDto 객체로 변환하여 userService에 전달하고 성공적으로 데이터를 가지고 오면 클라이언트에 응답을 true로 반환합니다.

---

<br/><br/>

**Dto**

```java

@Data
public class ReqImgDto {
    private String imgUrl;
}

```

<br/>

- 이 dto는 수정할 이미지 url 데이터를 담고 있습니다. 

---

<br/><br/>

**Service**

```java

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Transactional(rollbackFor = SQLException.class)
    public void modifyImgProfile(ReqImgDto dto) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        userMapper.updateUserProfile(principalUser.getId(), dto.getImgUrl());
    }

}

```

<br/>

- 이 코드는 사용장의 프로필 이미지를 수정하는 비즈니스 로직을 처리합니다. 
- modifyImgProfile 메서드는 현재 로그인한 사용자의 정보를 가져오고 이를 바탕으로 새로운 프로필 이미지를 데이터베이스에 업데이트하는 역할을 합니다. 

---

<br/><br/>

**Mapper**

```java

@Mapper
public interface UserMapper {

    int updateUserProfile(@Param("userId") Long userId,@Param("imgUrl") String imgUrl);

}

```

<br/>

- updateUserProfile 메서드는 userId와 imgUrl를 service에서 요청을 파라미터로 받아 이를 통해 SQL 쿼리에서 로그인 한 사용자의 ID를 통해 imgUrl를 수정하여 service에 전달하는 역할을 합니다.

---

<br/><br/>

**xml**

```java

<update id="updateUserProfile">
    update users_tb
    set
        img = #{imgUrl}
    where
        user_id = #{userId}
</update>

```

<br/>

- 로그인 한 사용자ID로 비교하여 이미지를 업데이트(수정)하는 sql 문입니다. 

---

<br/><br/>

#### 정보조회  

**프론트**

**UserInfo**

```jsx

function UserInfo(props) {
    const [userInfo, setUserInfo] = useState({
        username: "", // 수정 불가
        name: "", // 수정 불가
        email: "", // 수정 가능
        phoneNumber: "", // 수정 가능
        password: "",
        changePassword: "",
        checkPassword: "",
        img: "",
        address: {
            address: "", // 지역 주소
            detailAddress: "", // 상세 주소
            zipCode: "",
        },
    });

    // 유저 정보 불러오기
    const { data, isError, isLoading, refetch } = useQuery(
        ["userInfos"],
        async () => {
            return await instance.get("/user");
        },
        {
            onSuccess: (response) => {
                setUserInfo(response.data);
            },
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    // onChange 핸들러
    const handleUserInfoOnChange = (e) => {
        setUserInfo((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 수정 함수
    const userInfoEditmutation = useMutation(
        async (dto) => {
            return await instance.put(`/user/${dto.id}`, dto);
        },
        {
            onSuccess: () => {
                alert("수정이 완료되었습니다.")
                refetch();
            },
        }
    );

    // 완료 버튼
    const handleSubmitButtonOnClick = () => {
        const dto = {
            id: userInfo.id,
            email: userInfo.email, // 이메일
            phoneNumber: userInfo.phoneNumber, // 후대폰
            address: userInfo.address.address, // 지역 주소
            detailAddress: userInfo.address.detailAddress, // 상세 주소
            zipCode: userInfo.address.zipCode, // 우편번호
            password: userInfo.password, // 현재 비밀번호
            changePassword: userInfo.changePassword, // 변경할 비밀번호
            checkPassword: userInfo.checkPassword, // 비밀번호 확인
        };
    // 새 비밀번호와 비밀번호 확인이 입력된 경우에만 추가
    if (userInfo.changePassword && userInfo.checkPassword) {
        dto.changePassword = userInfo.changePassword; // 변경할 비밀번호
        dto.checkPassword = userInfo.checkPassword; // 비밀번호 확인
    }
        userInfoEditmutation.mutate(dto);
    };

    // 주소 선택 완료 시 호출될 함수
    const handleAddressComplete = (address) => {
        setUserInfo((user) => ({
            ...user,
            address: {
                address: address.address, // 지역 주소 업데이트
                detailAddress: address.detailAddress, // 나머지 주소 업데이트
                zipCode: address.zipCode,
            },
        }));
        };

    // 배송지 수정 -> 지금처럼 지역주소, 나머지 주소가 아닌, 배송지 목록 관리 버튼 -> 윈도우 창 뜸 -> 배송지 관리 가능

    if (isLoading) return <div>Loading...</div>;

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <div css={s.userInfo}>
                    <h2>사용자 정보</h2>
                    <div css={s.inputBox}>
                        <label htmlFor="username">아이디 : </label>
                        <input
                            type="text"
                            name="username"
                            readOnly
                            value={userInfo.username} // defaultValue → value로 변경
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="name">이름 : </label>
                        <input
                            type="text"
                            name="name"
                            readOnly
                            value={userInfo.name} // defaultValue → value로 변경
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="password">현재 비밀번호: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.password} // 현재 비밀번호 반영
                            placeholder="현재 비밀번호를 입력하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="changePassword">새 비밀번호: </label>
                        <input
                            type="password"
                            name="changePassword"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.changePassword} // 새 비밀번호 반영
                            placeholder="새 비밀번호를 입력하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="checkPassword">비밀번호 확인: </label>
                        <input
                            type="password"
                            name="checkPassword"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.checkPassword} // 비밀번호 확인 반영
                            placeholder="비밀번호를 확인하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="email">이메일 : </label>
                        <input
                            onChange={handleUserInfoOnChange}
                            type="text"
                            name="email"
                            value={userInfo.email} // defaultValue → value로 변경
                            placeholder="이메일 주소를 입력해 주세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="phoneNumber">휴대폰 번호 : </label>
                        <input
                            onChange={handleUserInfoOnChange}
                            type="text"
                            name="phoneNumber"
                            value={userInfo.phoneNumber} // defaultValue → value로 변경
                            placeholder="휴대폰 번호를 입력해 주세요"
                        />
                    </div>
                    <p>
                        {/* DaumPost 컴포넌트 추가 */}
                        <input
                            type="text"
                            name="zipCode"
                            readOnly
                            value={userInfo?.address?.zipCode}
                        />
                        <DaumPost onComplete={handleAddressComplete} />
                    </p>
                    <div css={s.addressBox}>
                        <label>지역 주소: </label>
                        <input
                            type="text"
                            name="address"
                            readOnly
                            value={userInfo?.address?.address} // 지역 주소 반영
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label>나머지 주소: </label>
                        <input
                            type="text"
                            name="detailAddress"
                            onChange={handleUserInfoOnChange}
                            value={userInfo?.address?.detailAddress} // 나머지 주소 반영
                        />
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSubmitButtonOnClick}>정보 수정</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;

```

<br/>

- 이 코드는 로그인 한 사용자의 정보를 조회하고 수정하기 위한 역할을 수행합니다.
- 이메일, 전화번호, 비밀번호, 주소를 변경할 수 있게 설정하였습니다. 
- useQuery를 이용하여 로그인 한 해당 사요자의 정보를 조회하였습니다.
- useMutation 훅을 사용하여 서버에 put 요청을 받고 성공적으로 응답이 오면 완료되었다고 알람창을 띄워서 구현하였습니다.
- 수정완료 버튼을 클릭 시 서버로 보낼 dto를 새로 구성하였고 비밀번호 변경을 원할 시에만 비밀번호를 백엔드에 포함시키고, 그렇지 않은 경우는 비밀번호를 dto에서 제외시켰습니다.  
- DaumPost 컴포넌트를 추가하여 해당 사용자의 주소를 입력하도록 설정하였고 handleAddressComplete(주소 선택 완료 시 호출됨)를 DaumPost 컴포넌트에 넘겨주었습니다. 

---

<br/><br/>

**DaumPost**

```jsx

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

```

<br/>

- 이 코드는 주소찾기 클릭할 시 주소를 검색하여 찾을 수 있는 창을 띄워 주소를 입력하도록 설정하였습니다. 

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    // 비밀번호, 주소, 이메일 수정
    @PutMapping("/{id}")
    public ResponseEntity<?> modifyUserInfo(@RequestBody ReqModifyUserDto dto) throws SignupException {
        userService.modifyUserInfo(dto);
        return ResponseEntity.ok().body(true);
    }

}

```

<br/>

- 클라이언트에서 put 요청을 받아 사용자의 정보를 수정하는 로직을 수행합니다. 
- ReqModifyUserDto 객체로 변환하여 modifyUserInfo 메서드에 전달하고 성공적으로 실행이 되면 클라이언트에 응답을 true로 반환합니다.  

---

<br/><br/>

**Dto**

```java

@Builder
@Data
public class ReqModifyUserDto {
    private String password;
    private String changePassword;
    private String checkPassword;
    private String email;
    private String address;
    private String detailAddress;
    private String zipCode;

    public User toUpdateUser(Long userId, BCryptPasswordEncoder bycryptPasswordEncoder) {
        return User.builder()
                .userId(userId)
                .password(bycryptPasswordEncoder.encode(changePassword))
                .email(email)
                .build();
    }

    public User toUser(Long userId, String password) {
        return User.builder()
                .userId(userId)
                .password(password)
                .email(email)
                .build();
    }

    public Address toAddress(Long userId) {
        return Address.builder()
                .userId((userId))
                .address(address)
                .detailAddress(detailAddress)
                .zipCode(zipCode)
                .build();
    }
}

```

<br/>

- 이 dto는 사용자의 정보를 수정하는 데 필요한 데이터를 담고 있습니다.
- toUpdateUser 메서드는 ReqModifyUserDto의 데이터를 바탕으로 사용자 정보를 수정하기 위한 User 객체를 반환하는 역할을 합니다.
- toUser 메서드는 ReqModifyUserDto의 데이터를 바탕으로 새로운 User 객체를 생성하고 주로 비밀번호 변경과 관련된 작업에서 사용하도록 구현하였습니다.
- toAddress 메서드는 ReqModifyUserDto의 데이터를 바탕으로 사용자 주소 정보를 담은 Address 객체를 생성하는 역할을 합니다. 

---

<br/><br/>

**Service**

```java

@Transactional(rollbackFor = SQLException.class)
public void modifyUserInfo(ReqModifyUserDto dto) throws SignupException {
    PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getPrincipal();

    User user = userMapper.findUserByUserId(principalUser.getId());

    if (!bCryptPasswordEncoder.matches(dto.getPassword(), user.getPassword())) {
        throw new BadCredentialsException("사용자 정보를 확인하세요.");
    }

    if (dto.getChangePassword() != null && dto.getCheckPassword() != null) {
        if (!authService.checkPassword(dto.getChangePassword(), dto.getCheckPassword())) {
            throw new SignupException("비밀번호가 일치하지 않습니다.");
        }
        userMapper.updateUserInfo(dto.toUpdateUser(user.getUserId(), bCryptPasswordEncoder));
    } else {
        userMapper.updateUserInfo(dto.toUser(user.getUserId(), user.getPassword()));
    }

    if(addressMapper.findAddressByUserId(user.getUserId()) != null) {
        addressMapper.updateAddress(dto.toAddress(user.getUserId()));
        return;
    }

    addressMapper.addAddress(dto.toAddress(user.getUserId()));
}

```

<br/>

- 이 코드는 사용자의 정보를 수정하는 비즈니스 로직을 처리하는 modifyUserInfo 메서드입니다. 
- 현재 로그인한 비밀번호와 입력한 비밀번호가 맞지 않고 새비밀번호와 다시 쓰는 새비밀번호가 일치 하지 않으면 예외 처리하도록 설정하였습니다.
- 현재 로그인한 비밀번호와 입력한 비밀번호가 일치하면 정보 수정이 되도록 구현하였습니다. 
- 주소가 이미 존재하는 경우 : 사용자의 원래 주소에서 다른 주소로 변경할 수 있게 updateAddress 메서드를 사용하여 수정 가능하도록 구현하였습니다. 
- 만약 주소가 없는 경우, 사용자의 주소를 추가할 수 있게 구현하였습니다. 

---

<br/><br/>

**UserMapper**

```java

@Mapper
public interface UserMapper {

    User findUserByUserId(Long userId);

    int updateUserInfo(User user);

}

```

<br/>

- findUserByUserId 메서드는 userId를 이용하여 sql 쿼리문에서 조회하여 성공 시 응답을 받고 이 메서드에 담아 service에 전달하는 역할을 합니다.
- updateUserInfo 메서드는 user 객체를 통해 sql 쿼리문에서 사용자의 정보를 수정하여 성공 시 응답을 받고 이 메서드에 담아 service에 전달하는 역할을 합니다

---

<br/><br/>

**addressMapper**

```java

@Mapper
public interface AddressMapper {

    int addAddress(Address address);

    int updateAddress(Address address);

}

```

<br/>

- addAddress 메서드는 address 객체를 이용하여 sql 쿼리문에서 사용자의 주소를 추가하여 성공 시 응답을 받고 addAddress 메서드에 담아 service에 전달하는 역할을 합니다.
- updateAddress 메서드는 address 객체를 이용하여 sql 쿼리문에서 사용자의 주소를 변경하여 성공 시 응답을 받고 이 메서드에 담아 service에 전달하는 역할을 합니다.

---

<br/><br/>

**user.xml**

```java

<update id="updateUserInfo">
    update users_tb
    set
        password = #{password},
        email = #{email}
    where
        user_id = #{userId}
</update>

```

<br/>

- 해당 사용자의 ID를 통해 사용자의 비밀번호와 이메일을 수정할 수 있는 기능을 구현한 sql 쿼리문입니다. 

---

<br/><br/>

**address.xml**

```java

<insert id="addAddress">
    insert into shipping_addresses_tb
    values(default, #{userId}, #{address}, #{detailAddress}, #{zipCode})
</insert>

```

<br/>

- 이 코드는 해당 사용자의 주소를 추가하는 기능을 구현한 sql 쿼리문입니다. 

---

<br/><br/>

**address.xml**

```java

<update id="updateAddress">
    update shipping_addresses_tb
    set
        address = #{address},
        detail_address = #{detailAddress},
        zip_code = #{zipCode}
    where
        user_id = #{userId}
</update>

```

<br/>

- 사용자의 주소를 변경하는 기능을 구현한 sql 쿼리문입니다. 

---

<br/><br/>

#### 찜목록  

**프론트**

__전체 코드__

```jsx

function WishList(props) {

    const navigate = useNavigate();

    const [productLikeList, setProductLikeList] = useState([]);

    // 위시리스트 전체조회
    const productWishList = useQuery(
        ["productLikeQuery"],
        async () => {
            return await instance.get("/user/product")
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setProductLikeList(response.data.body.map((item) => item.product[0])); 
            }
        }
    );

    // 찜 삭제 기능
    const disLikeProductWishListMutation = useMutation(
        async (productId) => {
            return await instance.delete(`/user/product/dislike/${productId}`)
        },
        {
            onSuccess: () => {
                productWishList.refetch();
            },
        }
    )

    const handleDisLikeProductOnClick = async (id) => {
        disLikeProductWishListMutation.mutate(id);
    }

    // 장바구니 추가 기능
    const productToBaskect = useMutation(
        async (product) => {
            const CartProduct = {
                productId : product.productId,
                quantity : 1,
                price : product.price,
            }
            return await instance.post("/user/cart/", CartProduct);
        },
        {
            onError: (error) => {
                console.error("오류!!!" + error)
            },
            onSuccess: () => {
                if (window.confirm("장바구니에 추가하였습니다.\n장바구니로 이동하시겠습니까?")) {
                navigate("/cart")
            }
            }
        }
    )

    // 장바구니 이동 기능 추가
    const handleProductToBaskect = (product) => {
        productToBaskect.mutate(product);
    }

    return (
        <div css={s.wishListContainer}>
            {/* 찜 목록 섹션 */}
            <div css={s.wishListSection}>
                <div css={s.wishListHeader}>
                    <h2>찜 목록</h2>
                </div>
                {productLikeList.length === 0 ? (
                    <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>
                ) : (
                    <table css={s.tableLayout}>
                        <tbody css={s.menuLayout}>
                            {productLikeList.map((product) => (
                                <tr key={product?.productId}>
                                    <td>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link key={product.productId} to={`/product/${product.productId}`}>
                                                    <img src={product?.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.contentLayout}>
                                                <div css={s.productLayout}>
                                                    <h2>{product?.title}</h2>
                                                    <h2>{product?.price.toLocaleString()}원</h2>
                                                </div>
                                                <div css={s.icons}>
                                                    <button onClick={() => handleProductToBaskect(product)} ><SlBasket size="24" /></button>
                                                    <button onClick={() => handleDisLikeProductOnClick(product.productId)} ><IoIosHeart size="25" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

}

export default WishList;

```

<br/>

- 이 코드는 찜목록 전체 코드입니다. 상세한 기능리뷰는 밑으로 내리면 있습니다.
- 해당 사용자가 상품을 찜안하면 찜 목록이 비어있고 있으면 찜한 상품이 뜨도록 구현하였습니다.
- 장바구니 추가 기능은 위에 설명이 되어있어어 스킵하겠습니다. 

---

<br/><br/>

- __위시리스트 조회__

    ```jsx

     const [productLikeList, setProductLikeList] = useState([]);

    // 위시리스트 전체조회
    const productWishList = useQuery(
        ["productLikeQuery"],
        async () => {
            return await instance.get("/user/product")
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setProductLikeList(response.data.body.map((item) => item.product[0])); 
            }
        }
    );

    ```

    <br/>

    - 위시리스트 조회 API를 통해 사용자가 좋아요를 누른 상품들의 목록을 불러옵니다. useQuery 훅을 사용하여 서버로부터 데이터를 가져오고, 성공 시 setProductLikeList 함수를 통해 상태를 업데이트합니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @Autowired
    private ProductLikeService productLikeService;

    @GetMapping("")
    public ResponseEntity<?> getWishList() {
        return ResponseEntity.ok().body(productLikeService.getWishList());
    }

    ```

    <br/>

    - 이 코드는 클라이언드에 get요청을 받아 응답을 service에 getWishList 메서드를 호출하고 반환하며 해당 사용자의 찜목록을 조회하는 역할을 합니다. 

    ---

    **Service**

    ```java

    @Autowired
    private ProductLikeMapper productLikeMapper;

    public ResponseEntity<?> getWishList() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return ResponseEntity.ok(productLikeMapper.SearchProductLikeByUserId(principalUser.getId()));
    }

    ```

    <br/>

    - 이 코드는 해당 로그인한 사용자의 ID를 데이터베이스에서 조회하여 service에 응답받아 controller에 조회한 데이터 값을 전달하는 역할을 합니다. 

    ---

    **Mapper**

    ```java

    List<ProductLike> SearchProductLikeByUserId(Long userId);

    ```

    <br/>

    - userId를 통해 sql 쿼리문에서 해당 사용자의 찜목록에 찜한 상품들을 조회하여 데이터가 성공적으로 조회될 시 SearchProductLikeByUserId 메서드에 담아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="SearchProductLikeByUserId" resultMap="productLikeProductResultMap">
        select
            plt.product_like_id,
            plt.user_id,
            pt.product_id,
            pt.title,
            pt.price,
            pt.thumbnail_img
        from
            products_like_tb plt
            left outer join products_tb pt on(pt.product_id = plt.product_id)
        where
            plt.user_id = #{userId}
    </select>

    ```

    <br/>

    - userId를 이용하여 해당 사용자의 찜한 상품 목록을 조회한 sql 쿼리문입니다.

---

<br/><br/>

- __위시리스트 삭제__

    ```jsx

    // 찜 삭제 기능
    const disLikeProductWishListMutation = useMutation(
        async (productId) => {
            return await instance.delete(`/user/product/dislike/${productId}`)
        },
        {
            onSuccess: () => {
                productWishList.refetch();
            },
        }
    )

    ```

    <br/>

    - 백엔드에 productId를 보내 상품을 제거한 후, 삭제가 완료되면 새로고침을 통해 리스트를 새로 불러오는 코드입니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @DeleteMapping("/dislike/{id}")
    public ResponseEntity<?> productDislike(@PathVariable Long id) {
        productLikeService.productDislike(id);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 이 코드는 해당 사용자의 찜목록 리스트에 찜한 상품을 삭제한 결과 값을 클라이언트에 응답을 반환하는 역할을 합니다. 

    ---

    **Service**

    ```java

    public void productDislike(Long productId) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        ProductLike productDisLike = ProductLike.builder()
                .productId(productId)
                .userId(principalUser.getId())
                .build();
        productLikeMapper.deleteProductLike(productDisLike);
    }

    ```

    <br/>

    - 이 코드는 해당 사용자의 찜한 상품을 삭제하는 기능을 처리하는 productDislike 메서드입니다. 
    - productDisLike 객체는 사용자가 찜한 상품을 찜목록에 삭제한 정보를 기록하여 mapper에 전달하여 데이터베이스에서 삭제하여 service에 응답을 받아 controller에 전달하는 역할을 합니다. 

    ---

    **Mapper**

    ```java

    Long deleteProductLike(ProductLike dislike);

    ```

    <br/>

    - deleteProductLike 메서드는 sql 쿼리문에서 찜한 상품을 찜목록에서 삭제한 결과값을 이 메서드에 담아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <delete id="deleteProductLike">
        delete from products_like_tb
        where
            product_id = #{productId}
            and user_id = #{userId}
    </delete>

    ```

    <br/>

    - 해당하는 상품의 Id와 사용자의 Id를 조건으로 찜목록의 찜한 상품을 삭제하는 sql 쿼리문입니다. 

---

<br/><br/>

#### 구매기록   

**프론트**

```jsx

function BuyInfo(props) {
    // 모달 띄우는 상태 추가
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    const navigate = useNavigate();
    // 구매상품 목록 배열로 불러오기
    const [userBuyInfo, setUserBuyInfo] = useState([]);
    const [paymentData, setPaymentData] = useState({});

    // 구매기록 map돌리는 거에 후기작성 버튼 추가 - 모달창 띄움 - 별점(1 - 5), 제목, 내용 입력
    // 배송완료 후 7일 이내에만 리뷰 작성 가능하게 해야함

    //구매목록 조회 기능
    const { data, isError, isLoading, refetch } = useQuery(
        ["getUserBuyInfo"],
        async () => {
            return await instance.get("/user/order/record");
        },
        {
            onSuccess: (response) => {
                setUserBuyInfo(response?.data);
            },
        }
    );

    const getPaymentNum = async (orderId) => {
        let response = null;
        try {
            response = await instance.get("/user/payment", {
                params: { orderId: orderId },
            });
            setPaymentData(response?.data); 
        } catch (error) {
            console.error(error);
        }
    };

    const accessTokenMutaion = useMutation(
        async () =>
            await axios.post("https://api.portone.io/login/api-secret", {
                apiSecret: portone,
            }),
        {
            onSuccess: (response) => console.log(response),
        }
    );

    const portonePaymentCancelMutation = useMutation(
        async ({ accessToken }) => {
            const cancelAmount = paymentData.amount;
            const options = {
                method: "post",
                url: `https://api.portone.io/payments/${paymentData.paymentNum}/cancel`, // 확인
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + accessToken,
                },
                data: {
                    reason: "취소요청",
                    cancel_request_amount: cancelAmount,
                },
            };
            const { data } = await axios.request(options);
            return data;
        },
        {
            onSuccess: () => {
                modifyOrderStatus.mutateAsync();
                Swal.fire({
                    text: "결제가 취소되었습니다.",
                    icon: "success",
                    timer: 1500,
                    confirmButtonColor: "#9d6c4c",
                    confirmButtonText: "닫기",
                });
                window.location.reload();
            },
            onError: (error) => console.log(error),
        }
    );

    const modifyOrderStatus = useMutation(
        async () => await instance.put(`/user/payment/${paymentData.paymentNum}`)
    );

    const handlePaymentCancelOnClick = (orderId) => {
        Swal.fire({
            text: "결제를 취소하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#777777",
            cancelButtonText: "닫기",
            confirmButtonColor: "#9d6c4c",
            confirmButtonText: "주문취소",
        }).then((result) => {
            if (result.isConfirmed) {
                getPaymentNum(orderId);
                accessTokenMutaion
                    .mutateAsync()
                    .then((response) =>
                        portonePaymentCancelMutation
                            .mutateAsync(response?.data)
                            .catch(() => { })
                    );
            }
        });
    };

    const [modalProducts, setModalProducts] = useState(0);

    // 후기
    const handleReview = (productId) => {
        setModalProducts(productId);
        setOpenModal(true);
    };   

    return (
        <div css={s.containerStyle}>
            <h2>구매기록</h2>
            <ul>
                {userBuyInfo?.map((products) => (
                    <li key={products.orderId} css={s.productStyle}>
                        <img
                            src={products?.orderItems[0]?.products[0].thumbnailImg}
                            alt={products.title}
                            css={s.imageStyle}
                        />
                        <div css={s.textStyle}>
                            <h2 css={s.titleStyle}>
                                {products?.orderItems[0]?.products[0].title}
                                {
                                    products?.orderItems[0]?.products?.length > 1
                                        ?
                                        <>
                                            외 {products?.orderItems[0]?.products?.length - 1}개
                                        </>
                                        :
                                        <></>
                                }
                            </h2>
                            <p css={s.orderStatusStyle}>{products?.payment?.paymentStatus === "completed" ? "결제 완료" : "결제 취소"}</p>
                            <p css={s.priceStyle}>
                                가격: {products?.totalAmount.toLocaleString()}원
                            </p>
                        </div>
                        <div css={s.otherBox}>
                            <div css={s.buttonBox}>
                                {products?.payment?.paymentStatus === "completed"
                                    ?
                                    <>
                                        <button
                                            css={s.buttonStyle1}
                                            onClick={() => handlePaymentCancelOnClick(products.orderId)}
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            css={s.buttonStyle2}
                                            onClick={() =>
                                                handleReview(products?.orderItems[0]?.products[0].productId)
                                            }
                                        >
                                            <FaRegPenToSquare />
                                        </button>
                                    </>
                                    :
                                    <></>
                                }
                                <RegisterReviewModal
                                    onClose={closeModal}
                                    isOpen={openModal}
                                    product={modalProducts}
                                />
                            </div>
                            <p>{products.createdAt.slice(0, 10)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BuyInfo;

```

<br/>

- 이 코드는 사용자의 구매기록 전체 코드 입니다.
- 세부 기능은 밑에 설명하겠습니다. 

---

- **구매목록 조회 기능**

    **프론트**

    ```Jsx

    const [userBuyInfo, setUserBuyInfo] = useState([]);

    //구매목록 조회 기능
    const { data, isError, isLoading, refetch } = useQuery(
        ["getUserBuyInfo"],
        async () => {
            return await instance.get("/user/order/record");
        },
        {
            onSuccess: (response) => {
                setUserBuyInfo(response?.data);
            },
        }
    );

    ```

    <br/>

    - 해당 사용자가 구매한 상품 목록을 조회하는 기능을 useQuery를 사용하여 구현하였습니다. 
    - 서버에 get 요청을 보내고 성공적으로 응답이 오면 구매한 상품 목록을 조회합니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("/order/record")
    public ResponseEntity<?> getOrderRecord() {
        return ResponseEntity.ok().body(orderService.getOrderRecord());
    }

    ```

    <br/>

    - 이 코드는 클라이언트에 get요청을 받아 응답을 service에 getOrderRecord 메서드를 호출하고 반환하며 해당 사용자의 구매한 상품의 목록을 조회하는 역할을 합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public List<Order> getOrderRecord() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return orderMapper.findUserOrder(principalUser.getId());
    }

    ```

    <br/>

    - 이 코드는 orderMapper를 통해 해당 로그인한 사용자의 Id를 데이터베이스에서 조회하여 응답을 반환받아 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    List<Order> findUserOrder(Long userId);

    ```

    <br/>

    - findUserOrder 메서드는 userId를 이용하여 sql 쿼리문에서 해당 사용자의 구매한 상품의 목록을 조회하여 데이터가 성공적으로 가져올 시 이 메서드에 담아 sevice에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="findUserOrder" resultMap="orderResultMap">
        select
            ot.order_id,
            ot.total_amount,
            ot.created_at,
            oit.quantity,
            pt.product_id,
            pt.title,
            pt.thumbnail_img,
            pat.payment_status,
            pat.payment_method
        from
            orders_tb ot
            left outer join order_items_tb oit on(ot.order_id = oit.order_id)
            left outer join products_tb pt on (pt.product_id = oit.product_id)
            left outer join payments_tb pat on (pat.order_id = oit.order_id)
        where user_id = #{userId}
        order by ot.created_at desc
    </select>

    ```

    <br/>

    - userId를 이용하여 해당 사용자가 구매한 상품 정보들을 최근 구매한 날짜 순으로 정렬하여 조회한 sql 쿼리문입니다.

---

<br/><br/>

- **getPaymentNum 함수**

    **프론트**

    ```Jsx

    const getPaymentNum = async (orderId) => {
        let response = null;
        try {
            response = await instance.get("/user/payment", {
                params: { orderId: orderId },
            });
            setPaymentData(response?.data); 
        } catch (error) {
            console.error(error);
        }
    };

    ```

    <br/>

    - 이 함수는 구매한 상품의 결제 번호를 조회하는 기능을 한 함수입니다. 
    - 서버에 상품을 주문한 Id를 파라미터 값으로 넘기고 get 요청을 보냈습니다.
    - 성공적으로 응답이 오면 결제 번호를 조회한 데이터를 보여줍니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("")
    public ResponseEntity<?> getPaymentNum (@RequestParam (required = false) Long orderId) {
        return ResponseEntity.ok().body(paymentService.getPaymentNum(orderId));
    }

    ```

    <br/>

    - 클라이언트에 get 요청과 파라미터로 orderId를 받아 사용자가 구매한 상품의 결제 번호를 조회하는 작업을 수행합니다.
    - service에 상품을 주문한 id를 넘겨 해당 결제 번호를 전달받아 클라이언트에 응답을 반환합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public Payment getPaymentNum (Long orderId) {
        return paymentsMapper.findPaymentNumByOrderId(orderId);
    }

    ```

    <br/>

    - 이 코드는 mapper에 orderId를 넘겨 결제 번호를 조회한 데이터를 받아 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    Payment findPaymentNumByOrderId (Long orderId);

    ```

    <br/>

    - findPaymentNumByOrderId 메서드는 orderId를 통해 sql 쿼리문에서 결제 번호를 조회한 데이터 값을 이 메서드에 저장하여 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="findPaymentNumByOrderId" resultMap="paymentResultMap">
        select
            payment_num,
            amount
        from
            payments_tb
        where
            order_id = #{orderId}
    </select>

    ```

    <br/>

    - 사용자가 구매한 상품의 id를 통해 결제번호를 조회하는 sql 쿼리문입니다. 

---

<br/><br/>

- **accessTokenMutation 함수**

    **프론트**

    ```Jsx

    const accessTokenMutaion = useMutation(
        async () =>
            await axios.post("https://api.portone.io/login/api-secret", {
                apiSecret: portone,
            }),
        {
            onSuccess: (response) => console.log(response),
        }
    );

    ```

    <br/>

    - 이 코드는 post 요청을 사용하여 서버에서 accessToken을 받아오는 비동기 작업을 처리하는 역할을 합니다. 

---

<br/><br/>

- **구매 상태 기능**

    **프론트**

    ```Jsx

    const modifyOrderStatus = useMutation(
        async () => await instance.put(`/user/payment/${paymentData.paymentNum}`)
    );

    ```

    <br/>

    - 이 코드는 서버에 put요청을 보내 상품의 구매 상태를 처리하는 mutation 입니다.
    - 만약 결제 하였을 때 결제 완료, 결제 취소하였을 때 결제 취소 등 이러한 상태를 수정하는 로직입니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @PutMapping("/{paymentId}")
    public ResponseEntity<?> modifyStatus (@PathVariable String paymentId) {
        paymentService.modifyStatus(paymentId);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 이 코드는 클라이언트에 put 요청을 받아 해당 사용자가 구매한 상품의 결제 상태를 수정하는 역할을 합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    @Autowired
    private PaymentsMapper paymentsMapper;

    @Autowired
    private ProductMapper productMapper;

    @Transactional(rollbackFor = SQLException.class)
    public void modifyStatus (String paymentId) {
        String paymentStatus = "failed";
        paymentsMapper.updatePaymentStatus(paymentStatus, paymentId.trim());
        List<OrderItem> orderItems = paymentsMapper.findOrderItems(paymentId.trim());
        productMapper.updateReturnSalesCountAndStock(orderItems);
    }

    ```

    <br/>

    - 이 코드는 해당 구매한 상품의 결제상태를 수정하는 기능을 처리하는 modifyStatus 메서드입니다.
    - paymentStatus를 failed로 초기화 시키고 paymentsMapper를 통해 updatePaymentStatus 메서드를 이용하여 결제상태를 failed에서 다른 상태로 변경하는 역할을 합니다.
    - updateReturnSalesCountAndStock 메서드는 조회된 구매 항목들을 기반으로 상품의 판매 수량과 재고를 복원하는 업데이트 작업을 수행합니다.

    ---

    <br/><br/>

    **paymentsMapper**

    ```java

    int updatePaymentStatus(String paymentStatus, String paymentId);

    List<OrderItem> findOrderItems(String paymentId);

    ```

    <br/>

    - updatePaymentStatus 메서드는 결제상태와 결제한 상품의 아이디를 이용하여 sql 쿼리문에서 결제상태를 수정한 데이터 값을 이 메서드에 저장하여 service에 전달하는 역할을 합니다.
    - findOrderItems 메서드는 구매한 상품을 paymentId를 이용하여 sql 쿼리문에서 조회한 데이터 값을 이 메서드에 저장하여 service에 전달하는 역할을 합니다.

    ---

    <br/><br/>

    **productMapper**

    ```java

    int updateReturnSalesCountAndStock(List<OrderItem> orderItemList);

    ```

    <br/>

    - updateReturnSalesCountAndStock 메서드는 sql 쿼리문에서 해당 사용자의 구매기록에 조회된 구매 항목들을 기반으로 상품의 재고와 수량을 복원하는 업데이트 작업한 데이터 결과 값을 이 메서드에 저장하여 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **payments.xml**

    ```java

    <update id="updatePaymentStatus">
        update payments_tb
        set
            payment_status = #{paymentStatus}
        where
            payment_num = #{paymentId}
    </update>

    ```

    <br/>

    - paymentId를 이용하여 구매한 상품의 결제상태를 수정하는 sql 쿼리문입니다. 

    ---

    <br/><br/>

    **payments.xml**

    ```java

    <select id="findOrderItems" resultMap="orderItemResultMap">
        select
            oit.product_id,
            oit.quantity
        from
            payments_tb pt
            left outer join orders_tb ot on (pt.order_id = ot.order_id)
            left outer join order_items_tb oit on (ot.order_id = oit.order_id)
        where
            pt.payment_num = #{paymentId}
    </select>

    ```

    <br/>

    - 해당 사용자가 구매한 상품의 항목들을 paymentId를 이용하여여 조회하는 sql 쿼리문입니다. 

    ---

    <br/><br/>

    **product.xml**

    ```java

    <update id="updateReturnSalesCountAndStock">
        update products_tb
        set
            sales_count =
            case
                <foreach collection="orderItemList" item="item" separator=" ">
                    when product_id = #{item.productId}
                    then sales_count - #{item.quantity}
                </foreach>
            else sales_count
        end,

        stock =
        case
            <foreach collection="orderItemList" item="item" separator=" ">
                when product_id = #{item.productId}
                then stock + #{item.quantity}
            </foreach>
            else stock
        end

        where
            product_id in(
                <foreach collection="orderItemList" item="item" separator=",">
                    #{item.productId}
                </foreach>
            )
    </update>

    ```

    <br/>

    - 사용자가 구매한 상품의 결제상태에 따라 해당 상품의 재고 수와 수량이 업데이트되는 방식으로 구현한 sql 쿼리문입니다. 

---

<br/><br/>

- **구매 결제 취소 기능**

    **프론트**

    ```Jsx

    const portonePaymentCancelMutation = useMutation(
        async ({ accessToken }) => {
            const cancelAmount = paymentData.amount;
            const options = {
                method: "post",
                url: `https://api.portone.io/payments/${paymentData.paymentNum}/cancel`, // 확인
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + accessToken,
                },
                data: {
                    reason: "취소요청",
                    cancel_request_amount: cancelAmount,
                },
            };
            const { data } = await axios.request(options);
            return data;
        },
        {
            onSuccess: () => {
                modifyOrderStatus.mutateAsync();
                Swal.fire({
                    text: "결제가 취소되었습니다.",
                    icon: "success",
                    timer: 1500,
                    confirmButtonColor: "#9d6c4c",
                    confirmButtonText: "닫기",
                });
                window.location.reload();
            },
            onError: (error) => console.log(error),
        }
    );

    const handlePaymentCancelOnClick = (orderId) => {
        Swal.fire({
            text: "결제를 취소하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#777777",
            cancelButtonText: "닫기",
            confirmButtonColor: "#9d6c4c",
            confirmButtonText: "주문취소",
        }).then((result) => {
            if (result.isConfirmed) {
                getPaymentNum(orderId);
                accessTokenMutaion
                    .mutateAsync()
                    .then((response) =>
                        portonePaymentCancelMutation
                            .mutateAsync(response?.data)
                            .catch(() => { })
                    );
            }
        });
    };

    ```

    <br/>

    - 이 코드는 결제 취소를 처리하는 기능을 구현한 것입니다.
    - portonePaymentCancelMutation는 결제를 취소하는 비동기 함수를 정의하고 axios를 이용하여 PortOne API에 결제 취소 요청을 보냅니다.
    - accessToken을 사용하여 인증 헤더를 설정합니다. 
    - 결제 취소할 시 취소 사유와 취소 금액을 포함한 데이터를 전송합니다. 
    - 결제 취소가 성공될 시 취소 사유와 취소 금액을 포함한 데이터를 전송하고 결제가 취소가 되며 결제한 금액이 본인에게 돌아오도록 설정하였습니다. 

---

<br/><br/>

- **구매 후기 작성 기능**

    **리뷰 작성 버튼 클릭 함수**

    ```Jsx

    // 후기
    const handleReview = (productId) => {
        setModalProducts(productId);
        setOpenModal(true);
    };  

    ```

    <br/>

    - 이 코드는 구매한 상품을 리뷰를 작성하도록 설정하였고 리뷰작성 아이콘을 클릭할 시 리뷰를 작성할 수 있는 모달창을 띄워 작성할 수 있도록 구현하였습니다. 

    ---

    <br/><br/>

    **리뷰 작성 모달창**

    ```Jsx

    function RegisterReviewModal({ isOpen, onClose, product }) {

        const [reviewData, setReviewData] = useState({
            productId: 0,
            rating: 0,
            title: "",
            content: ""
        })

        useEffect(() => {
            if (product) {
                setReviewData((review) => ({
                    ...review,
                    productId: product
                }));
            }
        }, [product]);

        const handleWriteReview = async () => {
            try {
                await instance.post("/user/review", reviewData);
                alert("리뷰가 등록되었습니다.");
                setReviewData({
                    productId: 0,
                    rating: 0,
                    title: "",
                    content: ""
                })
                onClose(true);
            } catch (e) {
                console.error(e);
            }
        }

        const handleReviewInput = (e) => {
            setReviewData((review) => ({
                ...review,
                [e.target.name]: e.target.value
            }))
        }

        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 100,
                    },
                    content: {
                        position: "static",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "350px",
                        height: "450px",
                        maxWidth: "90%",
                        overflow: "auto",
                        inset: "auto",
                    },
                }}
            >
                <div css={s.layout}>
                    <h2>리뷰 작성</h2>
                    <div css={s.container}>
                        <div>
                            <label for="rating">별점</label>
                            <input min={1} max={5} type="number" placeholder="1~5 사이 숫자 입력해 주세요" name="rating" value={reviewData.rating} onChange={handleReviewInput} />
                        </div>
                        <div>
                            <label for="title">제목</label>
                            <input type="text"
                                placeholder="리뷰 제목을 입력해 주세요."
                                onChange={handleReviewInput}
                                name="title" value={reviewData.title}
                            />
                        </div>
                        <div css={s.contentBox}>
                            <label for="content">내용</label>
                            <textarea type="text" placeholder="리뷰 내용을 입력해 주세요." onChange={handleReviewInput} name="content" value={reviewData.content} />
                        </div>
                        <div css={s.buttonBox}>
                            <button onClick={handleWriteReview}>완료</button>
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        );
    }

    export default RegisterReviewModal;

    ```

    <br/>

    - 이 코드는 구매 기록에서 구매한 상품의 구매 후기를 작성하는 모달창 입니다.
    - 평점과 리뷰 제목, 내용을 입력하도록 구현하였습니다. 
    - handleWriteReview 함수는 서버에 post 요청을 보내 해당 상품을 구매한 구매 후기를 작성하도록 설정하였고 성공적으로 구매후기가 작성이 되었다면 자동으로 모달창을 닫고 리뷰가 등록이 되도록 구현하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @PostMapping("/user/review")
    public ResponseEntity<?> addReview(@RequestBody ReqAddReviewDto dto) {
        reviewService.addReview(dto);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에 post요청을 받아 상품을 구매한 후기를 작성하는 로직을 수행합니다.
    - ReqAddReviewDto 객체로 변환하여 addReview 메서드에 전달하고 성공적으로 실행이 되면 클라이언트에 응답을 true로 반환합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Builder
    @Data
    public class ReqAddReviewDto {
        private Long productId;
        private int rating;
        private String title;
        private String content;

        public Review toReview(Long userId) {
            return Review.builder()
                    .userId(userId)
                    .productId(productId)
                    .rating(rating)
                    .title(title)
                    .content(content)
                    .build();
        }
    }

    ```

    <br/>

    - 이 코드는 구매후기를 작성하기 위해 필요한 정보를 담는 dto입니다. 
    - toReview 메서드는 ReqAddReviewDto의 데이터를 바탕으로 구매 후기를 작성하기 위한 Review 객체를 반환하여 이 메서드에 저장합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    @Transactional(rollbackFor = Exception.class)
    public void addReview(ReqAddReviewDto dto) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        reviewMapper.addReview(dto.toReview(principalUser.getId()));
    }

    ```

    <br/>

    - 이 코드는 로그인한 해당 사용자의 구매 후기를 mapper를 통해 사용자가 작성한 구매후기 데이터 값을 추가하는 작업을 수행하여 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    int addReview(Review review);

    ```

    <br/>

    - addReview 메서드는 review 객체를 이용하여 sql 쿼리문에서 작성한 구매 후기 값을 추가하고 이 메서드에 담아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <insert id="addReview">
        insert into reviews_tb
        values(0, #{userId}, #{productId}, #{rating}, #{title}, #{content}, now())
    </insert>

    ```

    <br/>

    - 해당 사용자가 구매한 상품 후기는 평점, 제목, 내용을 작성하여 데이터베이스에 추가하는 형식으로 구현한 sql 쿼리문입니다. 

---

<br/><br/>

#### 구매후기  

**전체 코드**

**프론트**

```jsx

function ReviewInfo(props) {

    // 모달 띄우는 상태 추가
    const [openEditModal, setOpenEditModal] = useState(false);

    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenEditModal(false);
    };

    // 리뷰 가져오는 쿼리
    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            return await instance.get("/user/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                setReviews(response.data)
            },
        }
    )

    // 리뷰 삭제 뮤테이션
    const deleteReviewMutation = useMutation(
        async (id) => {
            const checkedIds = [id]
            return await instance.delete("user/review", {data : {checkedIds: checkedIds}})
        },
        {
            retry: 0,
            onSuccess: () => {
                alert("삭제가 완료되었습니다.")
            }
        }
    )

    const handleDelectOnClick = (id) => {
        if(window.confirm("리뷰가 삭제됩니다.")) {
            deleteReviewMutation.mutate(id);
        }
    }

    const handleProductImgOnClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                    <div css={s.subLayout}>
                        <h2>나의 리뷰</h2>
                    </div>
                    <ul >
                    { reviews.map((review) => (
                        <li key={review.reviewId} css={s.productStyle}>
                            <div css={s.ReviewList}>
                                <div css={s.productImgLayout}>
                                    <img src={review?.product?.thumbnailImg} onClick={() => handleProductImgOnClick(review.productId)}/>
                                </div>
                                <div css={s.productReviewLayout}>
                                    <div css={s.iconBox}>
                                        <Star rating={review?.rating}/>
                                        <div>
                                            <FaTrash onClick={() => handleDelectOnClick(review.reviewId)}/>
                                            <FaRegEdit onClick={() => setOpenEditModal(true)}/>
                                                <ReviewEditModal isOpen={openEditModal} onClose={closeModal} reviews={reviews} reviewId={review.reviewId} refetch={getReviewAll.refetch}/>
                                        </div>
                                    </div>
                                    <h2>{review?.title}</h2>
                                    <p>{review?.content}</p>
                                    <div css={s.createData}>
                                        <p>{review?.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    );
}

export default ReviewInfo;

```

<br/>

- 이 코드는 해당 사용자가 구매한 상품의 후기들을 조회, 수정, 삭제 기능을 수행하는 코드입니다.
- handleProductImgOnClick 함수는 해당 상품의 이미지를 클릭할 시 상품의 상세 페이지로 이동이 됩니다. 
- 세부적인 기능은 밑에서 설명하겠습니다. 

---

<br/><br/>

- **구매후기 조회 기능**

    **프론트**

    ```jsx

    // 리뷰 가져오는 쿼리
    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            return await instance.get("/user/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                setReviews(response.data)
            },
        }
    )

    ```

    <br/>

    - getReviewAll 함수는 useQuery를 사용하여 서버에서 리뷰 데이터를 가져와서 setReviews 함수를 통해 상태를 업데이트합니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("/user/review")
    public ResponseEntity<?> getAllMyReviews() { // 마이 페이지 리뷰
        return ResponseEntity.ok().body(reviewService.getAllMyReviews());
    }

    ```

    <br/>

    - 클라이언트에서 get요청을 받아 reviewService를 통해 본인이 쓴 구매후기를 조회한 데이터를 반환하여 응답하는 controller 입니다.

    ---

    <br/><br/>

    **Service**

    ```java

    public List<Review> getAllMyReviews() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return reviewMapper.findMyReviewByUserId(principalUser.getId());
    }

    ```

    <br/>

    - 로그인한 사용자의 구매후기를 사용자의 Id를 findMyReviewByUserId 메서드에 넘겨 데이터베이스에서 조회한 결과 값을 controller에 반환하는 역할을 합니다. 

    ---

    **Mapper**

    ```java

    List<Review> findMyReviewByUserId(Long userId);

    ```

    <br/>

    - findMyReviewByUserId 메서드는 로그인한 사용자의 ID를 통해 sql 쿼리문에서 조회하고 이 메서드에 담아 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="findMyReviewByUserId" resultMap="reviewResultMap">
        select
            rt.review_id,
            rt.user_id,
            rt.product_id,
            rt.rating,
            rt.title,
            rt.content,
            rt.created_at,
            pt.thumbnail_img
        from
            reviews_tb rt
            left outer join users_tb ut on (rt.user_id = ut.user_id)
            left outer join products_tb pt on (rt.product_id = pt.product_id)
        where
            ut.user_id = #{userId}
        order by rt.created_at desc
    </select>

    ```

    <br/>

    - 해당 로그인한 사용자의 아이디를 조건으로 본인이 쓴 구매한 후기 목록을 조회하는 sql 쿼리문입니다.
    - 날짜를 최신순으로 정렬하며 보여주고 있습니다.

---

<br/><br/>

- **구매후기 수정 기능**

    **프론트**

    ```jsx

    // 모달 띄우는 상태 추가
    const [openEditModal, setOpenEditModal] = useState(false);

    const closeModal = () => {
        setOpenEditModal(false);
    };

    <FaRegEdit onClick={() => setOpenEditModal(true)}/>
        <ReviewEditModal isOpen={openEditModal} onClose={closeModal} reviews={reviews} reviewId={review.reviewId} refetch={getReviewAll.refetch}/>

    ```

    <br/>

    - 해당 사용자의 본인이 쓴 구매 후기의 수정 아이콘을 클릭할 시 모달창을 띄워 글 제목, 내용과 평점을 수정하는 기능을 구현하였습니다. 

    ---

    <br/><br/>

    **모달**

    ```jsx

    function Modal({ isOpen, onClose, reviews, reviewId, refetch }) {

    const editReview = reviews.find((review) => review.reviewId === reviewId);

    const [review, setReview] = useState({
        reviewId: editReview.reviewId || '',
        title: editReview.title || '',
        content: editReview.content || '',
        rating: editReview.rating || 0,
    })

    const modifyReviewMutation = useMutation(
        async () => {
            return await instance.put("/user/review/{review.reviewId}", review)
        },
        {
            retry: 0,
            onSuccess: () => {
                refetch();
            }
        }
    )

    const handleModifyOnClick = () => {
        modifyReviewMutation.mutate();
        onClose(true);
    }

    const inputOnChange = (e) => {
        setReview((review) => ({
            ...review,
            [e.target.name] : e.target.value
        }))
    }


        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 100,
                    },
                    content: {
                        position: "static",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "300px",
                        maxWidth: "90%",
                        overflow: "auto",
                        inset: "auto",
                    },
                }}
            >
                <div
                    css={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "300px",
                    }}
                >
                    <h2>리뷰 수정</h2>
                    <input type="number" name="rating" onChange={inputOnChange} defaultValue={review.rating} placeholder='1 - 5까지 정수를 넣어주세요'/>
                    <input type="text" name="title" onChange={inputOnChange} defaultValue={review.title} placeholder='리뷰 제목을 입력해주세요'/>
                    <textarea type="text" name="content" onChange={inputOnChange} defaultValue={review.content} placeholder='내용을 입력해주세요'/>
                    <button onClick={handleModifyOnClick}>완료</button>
                    <button onClick={onClose}>닫기</button>
                </div>
            </ReactModal>
        );
    };


    export default Modal;

    ```

    <br/>

    - 이 코드는 상품을 구매한 후기의 평점과 제목, 내용을 수정하는 모달창 입니다.
    - useMutation 훅을 사용하여 서버에 put 요청을 보내 리뷰를 수정할 수 있게 하였고 성공적으로 응답이 오면 refetch하여 데이터를 다시 불러옵니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @PutMapping("/user/review/{id}")
    public ResponseEntity<?> modifyReview(@RequestBody ReqModifyReviewDto dto) {
        reviewService.modifyReview(dto);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에 put 요청을 받아 리뷰를 수정하는 로직을 수행합니다.
    - ReqModifyReviewDto 객체로 변환하여 modifyReview 메서드에 전달하고 성공적으로 실행이 되면 클라이언트에 응답을 true로 반환합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Builder
    @Data
    public class ReqModifyReviewDto {
        private int reviewId;
        private int rating;
        private String title;
        private String content;

        public Review toReview() {
            return Review.builder()
                    .reviewId(reviewId)
                    .rating(rating)
                    .title(title)
                    .content(content)
                    .build();
        }
    }

    ```

    <br/>

    - 이 코드는 사용자가 쓴 구매 후기를 수정하기 위한 필요한 정보를 담는 dto 입니다. 
    - toReview 메서드는 ReqModifyReviewDto의 데이터를 바탕으로 구매한 상품의 후기를 수정하기 위한 Review 객체로 반환하여 이 메서드에 저장합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    @Transactional(rollbackFor = SQLException.class)
    public void modifyReview(ReqModifyReviewDto dto) {
        reviewMapper.updateReview(dto.toReview());
    }

    ```

    <br/>

    - 이 코드는 reviewMapper를 통해 사용자가 구매한 상품의 후기를 데이터베이스에서 수정한 결과 값을 modifyReview 메서드에에 담아 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    int updateReview(Review review);

    ```

    <br/>

    - updateReview 메서드는 review 객체를 이용하여 sql 쿼리문에서 구매한 상품의 후기를 수정하여 이 메서드에 담아 service에 전달하는 역할을 합니다.

    ---

    <br/><br/>

    **xml**

    ```java

    <update id="updateReview">
        update reviews_tb
        set
            rating = #{rating},
            title = #{title},
            content = #{content}
        where
            review_id = #{reviewId}
    </update>

    ```

    <br/>

    - 해당 사용자가 구매한 상품의 구매후기한 Id 값을 통해 평점, 제목, 내용을 수정하는 sql 쿼리문입니다. 

---

<br/><br/>

- **구매후기 삭제 기능**

    **프론트**

    ```jsx

    // 리뷰 삭제 뮤테이션
    const deleteReviewMutation = useMutation(
        async (id) => {
            const checkedIds = [id]
            return await instance.delete("user/review", {data : {checkedIds: checkedIds}})
        },
        {
            retry: 0,
            onSuccess: () => {
                alert("삭제가 완료되었습니다.")
            }
        }
    )

    const handleDelectOnClick = (id) => {
        if(window.confirm("리뷰가 삭제됩니다.")) {
            deleteReviewMutation.mutate(id);
        }
    }

    ```

    <br/>

    - 이 코드는 mutation 훅을 사용하여 delete 요청을 서버에 보내어 사용자가 쓴 구매후기를 삭제하는 기능을 합니다. 
    - 서버에서 성공적으로 응답이 오면 알람창을 띄워 삭제 완료되었다고 알려줍니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @DeleteMapping("/user/review")
    public ResponseEntity<?> deleteReview(@RequestBody ReqDeleteReviewDto dto) {
        reviewService.deleteReview(dto);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에서 delete 요청을 받아 사용자가 작성한 리뷰를 삭제하는 로직을 수행합니다.
    - ReqDeleteReviewDto 객체로 변환하여 service에 전달하여 삭제한 결과 값을 반환받아 클라이언트에 전달합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Data
    public class ReqDeleteReviewDto {
        private List<Long> checkedIds;
    }

    ```

    <br/>

    - 이 dto는 구매후기를 삭제하는 데이터 정보를 담는 dto입니다.

    ---

    <br/><br/>

    **Service**

    ```java

    @Transactional(rollbackFor = SQLException.class)
    public void deleteReview(ReqDeleteReviewDto dto) {
        reviewMapper.deleteReview(dto.getCheckedIds());
    }

    ```

    <br/>

    - 이 코드는 reviewMapper에 dto 정보를 전달하여 데이터베이스에서 리뷰를 삭제하여 그 결과값을 service에 deleteReview 메서드에 담아 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    int deleteReview(List<Long> checkedIds);

    ```

    <br/>

    - deleteReview 메서드는 checkedIds를 이용하여 sql 쿼리문에서 구매한 상품의 후기를 삭제한 결과값을 이 메서드에 저장하여 service에 전달합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <delete id="deleteReview">
        delete from reviews_tb
        where review_id in
        <foreach item="id" index="index" collection="checkedIds" open="(" separator="," close=")">
            #{id}
        </foreach>
    </delete>

    ```

    <br/>

    - 이 코드는 사용자가 작성한 구매후기를 삭제하는 sql 쿼리문입니다.
    - 사용자가 구매한 상품의 후기에 Id 값을 이용하여 리뷰를 삭제하도록 설정하였습니다.

 ---

<br/><br/>

#### 회원탈퇴  

**프론트**

```jsx

function LeaveUser({ userInfo }) {
  const navigate = useNavigate();

  const deleteUserMutation = useMutation(
    async () => {
      return await instance.delete(`/user/${userInfo.userId}`)
    },
    {
      onSuccess: () => {
        localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem("role");
        alert("회원탈퇴가 완료되었습니다.\n홈화면으로 이동합니다.")
        navigate("/");
        window.location.reload(); // 페이지를 새로 고침하여 상태를 초기화
      }
    }
  )

  const handleLeaveButtonOnClick = () => {
    if (
      window.confirm("계정 정보가 전부 삭제됩니다.\n정말 삭제하시겠습니까?")
    ) {
      if (window.confirm("정말?ㅠㅠㅠㅠㅠ")) {
        deleteUserMutation.mutate();
      }
      return;
    }
    return;
  };

  return (
    <div css={s.container}>
      <div css={s.containerStyle}>
        <h2 css={s.headingStyle}>회원탈퇴 약관</h2>

        <h3 css={s.subHeadingStyle}>제1조 (목적)</h3>
        <p css={s.paragraphStyle}>
          이 약관은 [ㅁㅁㅁ] (이하 "회사")이 제공하는 서비스의 회원탈퇴에 관한
          사항을 규정함을 목적으로 합니다.
        </p>

        <h3 css={s.subHeadingStyle}>제2조 (회원탈퇴 절차)</h3>
        <ol css={s.listStyle}>
          <li>
            회원은 언제든지 서비스 내 설정 메뉴를 통해 회원탈퇴를 신청할 수
            있습니다.
          </li>
          <li>
            탈퇴 신청 후, 회사는 해당 회원의 탈퇴 요청을 확인하고, 탈퇴 처리를
            진행합니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제3조 (회원탈퇴의 효과)</h3>
        <ol css={s.listStyle}>
          <li>
            회원탈퇴가 완료되면 해당 회원의 모든 개인 정보와 데이터는 회사의
            정책에 따라 삭제되며, 복구가 불가능합니다.
          </li>
          <li>
            회원 탈퇴 후에는 해당 계정으로 다시 로그인할 수 없으며, 서비스
            이용에 제한이 있습니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제4조 (탈퇴 후의 권리 및 의무)</h3>
        <ol css={s.listStyle}>
          <li>
            탈퇴 후에도 회원이 작성한 게시물 및 댓글 등은 삭제되지 않으며,
            회사의 정책에 따라 일정 기간 보관될 수 있습니다.
          </li>
          <li>
            탈퇴에 따른 서비스 이용 중 발생한 미지급 금액이나 손해는 회원이
            책임지며, 회사는 이에 대해 책임을 지지 않습니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제5조 (약관의 개정)</h3>
        <p css={s.paragraphStyle}>
          회사는 이 약관을 변경할 수 있으며, 변경 사항은 사전에 공지합니다.
          회원은 변경된 약관에 동의하지 않을 경우 탈퇴를 신청할 수 있습니다.
        </p>

        <h3 css={s.subHeadingStyle}>제6조 (기타)</h3>
        <ol css={s.listStyle}>
          <li>이 약관은 [2024.11.04]부터 시행합니다.</li>
          <li>
            본 약관과 관련하여 발생하는 모든 분쟁은 [무슨무슨지방법원]의 법률에
            따릅니다.
          </li>
        </ol>
      </div>
      <div css={s.buttonBox}>
        <button onClick={handleLeaveButtonOnClick}>회원 탈퇴</button>
      </div>
    </div>
  );
}

export default LeaveUser;

```

<br/>

- 이 코드는 사용자가 이 사이트의 회원임을 삭제(탈퇴)하는 로직을 수행하는 클라이언트 입니다.
- useMutation 훅을 사용하여 서버에 delete 요청을 보내 성공적으로 응답이 오면 localStorage 에 사용자가 로그인한 토큰과 권한을 삭제하고 홈화면으로 되돌리고 reload 하도록 설정하였습니다. 
- 회원탈퇴 버튼을 클릭 시 정말 삭제할 것인지 두번 물어보고 삭제가 되도록 구현하였습니다. 

---

<br/><br/>

**백엔드**

**Controller**

```java

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteUser() {
    userService.deleteUser();
    return ResponseEntity.ok().body(true);
}

```

<br/>

- 클라이언트에 delete 요청을 받아 해당 사용자의 정보를 삭제하는 결과값을 service를 통해 성공적으로 응답을 받아 true로 반환합니다. 

---

**Service**

```java

@Transactional(rollbackFor = SQLException.class)
public void deleteUser() {
    PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getPrincipal();

    userMapper.deleteByUserId(principalUser.getId());
    userRolesMapper.deleteUserRole(principalUser.getId());
}

```

<br/>

- deleteUser 메서드는 해당 로그인한 사용자의 Id와 Role 데이터 값을 deleteByUserId와 deleteUserRole 메서드에 담아 controller에 전달하는 역할을 합니다.
- deleteByUserId 메서드에는 로그인한 사용자의 Id 값을 넘겨 사용자의 Id를 삭제하도록 구현하였습니다.
- deleteUserRole 메서드에는 로그인한 사용자의 Id 값을 넘겨 사용자의 role(권한) 데이터 값을 삭제하도록 구현하였습니다. 

---

**UserMapper**

```java

int deleteByUserId(Long userId);

```

<br/>

- 이 코드는 로그인한 사용자의 Id를 이용하여 sql 쿼리문에서 사용자의 정보를 삭제하고 deleteByUserId 메서드에 담아 service에 전달하는 역할을 합니다.  

---

<br/><br/>

**UserRolesMapper**

```java

int deleteUserRole(Long userId);

```

<br/>

- 이 코드는 로그인한 사용자의 Id 값을 이용하여 sql 쿼리문에서 사용자의 권한을 삭제하고 deleteUserRole 메서드에 담아 service에 전달하는 역할을 합니다. 

---

<br/><br/>

**user.xml**

```java

<delete id="deleteByUserId">
    delete from users_tb
    where
        user_id = #{userId}
</delete>

```

<br/>

- users_tb 테이블안에 사용자의 Id를 삭제하면서 해당 사용자의 정보가 모두 삭제되도록 구현한 sql 쿼리문입니다.  

---

<br/><br/>

**user_role.xml**

```java

<delete id="deleteUserRole">
    delete from user_roles_tb
    where user_id = #{userId}
</delete>

```

<br/>

- user_roles_tv 테이블안에 userId를 이용하여 해당 사용자의 정보와 권한이 모두 삭제되도록 구현한 sql 쿼리문입니다.

---

<br/><br/>

### 주문 페이지

#### 전체 코드

**프론트**

```jsx

function OrderPage(props) {
    const [searchParams] = useSearchParams();

    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        let orderProducts = [];
        searchParams.getAll("cartId").forEach((cartId, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        cartId,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            cartId,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        searchParams.getAll("cartItemId").forEach((cartItemId, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        cartItemId,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            cartItemId,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        searchParams.getAll("quantity").forEach((quantity, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        quantity,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            quantity,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        setOrderProducts(orderProducts);
    }, []);

    // 결제 상태
    const [payMentState, setPayMentState] = useState("");

    const [productList, setProductList] = useState([]);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        point: 0,
        address: {
            address: "",
            detailAddress: "",
            zipCode: "",
        },
        message: "",
    });

    // 가겨 * 수량 함수
    const calculateTotalPrice = (product) => {
        return product.product.price * product.quantity;
    };

    const calculateTotals = () => {
        let totalProductAmount = 0;
        let deliveryFee = 0;
        let totalAmount = 0;

        if (Array.isArray(productList) && productList.length > 0) {
            totalProductAmount = productList.reduce((total, product) => {
                return total + calculateTotalPrice(product);
            }, 0);
        }

        deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    const {
        data: userInfoData,
        isLoading: isUserInfoLoading,
        isError: isUserInfoError,
    } = useQuery(
        "userInfo",
        async () => {
            return await instance.get("/user"); // 유저 정보 가져오는 API 호출
        },
        {
            onSuccess: (response) => {
                setUserInfo(response.data); // 성공 시 userInfo 상태 업데이트
            },
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    // 다건 조회시 사용하는 쿼리
    const {
        data: products,
        isLoading: isProductsLoading,
        isError: isProductsError,
    } = useQuery(
        ["selectedProducts"],
        async () => {
            const cartItemIds = orderProducts.map((item) => item.cartItemId);
            return await instance.get("/user/cart/order", {
                params: { id: cartItemIds.join(",") },
            });
        },
        {
            onSuccess: (response) => {
                setProductList(response.data.cartItemList);
            },
            enabled: orderProducts.length > 0,
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    if (isProductsLoading) {
        return <div>로딩 중...</div>;
    }

    if (isProductsError) {
        return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
    }

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <UserInfo
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    isUserInfoLoading={isUserInfoLoading}
                    isUserInfoError={isUserInfoError}
                />
                <ProductInfo
                    productList={productList}
                    deliveryFee={deliveryFee}
                    point={userInfo.point}
                />
                <PaymentMethod setPayMentState={setPayMentState} />
            </div>
            <OrderSummary
                totalProductAmount={totalProductAmount}
                deliveryFee={deliveryFee}
                totalAmount={totalAmount}
                userInfo={userInfo}
                payMentState={payMentState}
                productList={productList}
            />
        </div>
    );
}

export default OrderPage;

```

<br/>

- 이 코드는 장바구니에서 상품을 구매하기 버튼을 클릭하였을 때 이동되는 상품을 주문(결제)하는 페이지 입니다.
- 사용자의 정보는 useQuery를 이용하여 조회하는 기능을 수행합니다. 
- 가격 * 수량 함수 파트는 결제 할 총 합계를 계산한 기능을 구현하였습니다. 
- 세부적인 것은 밑에서 설명하겠습니다.  

---

<br/><br/>

- **주문 상품 목록을 조회하는 기능**

    **프론트**

    ```jsx

    useEffect(() => {
        let orderProducts = [];
        searchParams.getAll("cartId").forEach((cartId, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        cartId,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            cartId,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        searchParams.getAll("cartItemId").forEach((cartItemId, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        cartItemId,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            cartItemId,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        searchParams.getAll("quantity").forEach((quantity, index) => {
            if (!orderProducts[index]) {
                orderProducts = [
                    ...orderProducts,
                    {
                        quantity,
                    },
                ];
            } else {
                orderProducts = orderProducts.map((orderProduct, index2) => {
                    if (index === index2) {
                        return {
                            ...orderProduct,
                            quantity,
                        };
                    }
                    return orderProduct;
                });
            }
        });

        setOrderProducts(orderProducts);
    }, []);

    ```

    <br/>

    - 이 코드는 주문 페이지에서 useEffect 훅을 사용하여 URL의 쿼리 파라미터를 읽고, 이를 바탕으로 주문 상품 목록을 설정하는 코드입니다.
    - 각 파트 searchParams.getAll() 는 URL의 쿼리 문자열에서 특정 파라미터(예 : cartId, cartItemId, quantity)의 모든 값을 배열로 반환하기 위해 forEach 반복문을 돌고 있으며 각 쿼리 파라미터 값은 index와 함께 전달되어, 각 항목을 하나씩 처리합니다. 
    - 각 쿼리 파라미터 값을 orderProducts 배열에 순서대로 추가하거나 업데이트하고 모든 값이 추가된 후, setOrderProducts를 사용해 orderProducts를 상태로 설정하고, 주문 상품 목록을 마운트될 때마다 업데이트하는 역할을 합니다. 

 ---

<br/><br/>

- **주문 상품 다건 조회**

    **프론트**

    ```jsx

    // 다건 조회시 사용하는 쿼리
    const {
        data: products,
        isLoading: isProductsLoading,
        isError: isProductsError,
    } = useQuery(
        ["selectedProducts"],
        async () => {
            const cartItemIds = orderProducts.map((item) => item.cartItemId);
            return await instance.get("/user/cart/order", {
                params: { id: cartItemIds.join(",") },
            });
        },
        {
            onSuccess: (response) => {
                setProductList(response.data.cartItemList);
            },
            enabled: orderProducts.length > 0,
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    ```

    <br/>

    - 사용자가 구매할려는 상품을 여러개 조회하는 기능을 합니다. 
    - cartItemIds 는 orderProducts(구매할려는 상품들)을 map을 돌려 그 데이터 값을 저장한 함수입니다.
    - 서버에 파라미터로 cartItemIds 배열에 여러개가 들어 있으면 ","를 join 하여 id 형태로 데이터를 넘기고 get 요청을 보냅니다. 
    - 성공적으로 응답이 오면 productList 상태를 업데이트하여 구매할 상품을 조회하도록 구현하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("/cart/order") // 장바구니에서 체크 한 상품만 결제창으로
    public ResponseEntity<?> getCartOrder(ReqCartListDto dto) {
        return ResponseEntity.ok().body(orderService.getCartOrderList(dto));
    }

    ```

    <br/>

    - 클라이언트에 get 요청을 받아 장바구니에 체크 한 상품만 조회하는 작업을 수행합니다.
    - 체크된 상품의 정보를 dto로 변환하고 service에 넘겨 성공적으로 데이터를 받게 되면 클라이언트에 응답을 반환합니다. 

    ---

    <br/><br/>

    **ReqCartListDto**

    ```java

    @Data
    public class ReqCartListDto {
        private List<Long> id;
        private String address;
        private String detailAddress;
        private String zipCode;

        public Address toAddress(Long userId) {
            return Address.builder()
                    .userId(userId)
                    .address(address)
                    .detailAddress(detailAddress)
                    .zipCode(zipCode)
                    .build();
        }
    }

    ```

    <br/>

    - 장바구니에 체크한 상품의 정보와 사용자의 주소를 담는 dto 입니다. 
    - toAddress 메서드는 ReqCartListDto의 데이터를 바탕으로 사용자의 주소를 조회하기 위한 Address 객체를 반환하여 이 메서드에 저장합니다. 

    ---

    <br/><br/>

    **RespCartOrderDto**

    ```java

    @Builder
    @Data
    public class RespCartOrderDto {
        private Long userId;
        private String name;
        private String email;
        private Long addressId;
        private String address;
        private String detailAddress;
        private String zipCode;
        private List<CartItem> cartItemList;
    }

    ```

    <br/>

    - 주문할려는 해당 사용자의 정보와 선택된 장바구니의 상품의 정보를 담는 dto 입니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public RespCartOrderDto getCartOrderList(ReqCartListDto dto) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userMapper.findUserByUserId(principalUser.getId());
        List<CartItem> cartItemList = cartItemMapper.findCartItemList(principalUser.getId(), dto.getId());
        Address address = addressMapper.findAddressByUserId(principalUser.getId());

        return RespCartOrderDto.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .addressId(address.getAddressId())
                .address(address.getAddress())
                .detailAddress(address.getDetailAddress())
                .zipCode(address.getZipCode())
                .cartItemList(cartItemList)
                .build();
    }

    ```

    <br/>

    - 이 코드는 선택한 장바구니의 상품을 조회하고 해당 사용자의 정보도 조회하여 그 데이터를 controller에 전달하는 service 입니다. 
    - user, cartItemList, address 변수는 로그인한 사용자의 정보의 id를 이용하여 mapper를 통해 조회하여 그 데이터 값을 각 변수에 저장합니다.
    - 저장한 해당 변수들을 이용하여 RespCartOrderDto의 빌더 패턴을 사용하여 controller에 응답을 반환하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    List<CartItem> findCartItemList(Long userId, List<Long> cartItemIdList);

    Address findAddressByUserId(Long userId);

    ```

    <br/>

    - findCartItemList 메서드는 체크한 장바구니의 리스트와 해당 userId를 sql 쿼리문에 넘겨 조회하여 그 데이터를 이 메서드에 저장하여 service에 전달하는 역할을 합니다.
    - findAddressByUserId 메서드는 해당 userId를 이용하여 사용자의 주소를 조회하여 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **cart_item.xml**

    ```java

    <select id="findCartItemList" resultMap="cartItemResultMap">
        select
            cit.cart_item_id,
            cit.quantity,
            cit.product_id,
            pt.title,
            pt.price,
            pt.thumbnail_img
        from
            cart_items_tb cit
            left outer join cart_tb ct on (cit.cart_id = ct.cart_id)
            left outer join products_tb pt on (cit.product_id = pt.product_id)
            left outer join users_tb ut on (ut.user_id = ct.user_id)
        where
            ut.user_id = #{userId}
            and cit.cart_item_id in
            <foreach item="id" index="index" collection="cartItemIdList" open="(" separator="," close=")">
                #{id}
            </foreach>
    </select>

    ```

    <br/>

    - 장바구니에서 선택된 상품의 리스트와 해당 사용자의 id를 이용하여 상품의 정보를 조회하는 sql 쿼리문입니다.  
    - 상품의 정보는 사용자가 장바구니에서 구매할려는 상품의 수량과 제목, 가격, 상세 이미지로 구현되어 있습니다. 

    ---

    <br/><br/>

    **address.xml**

    ```java

    <select id="findAddressByUserId" resultMap="addressResultMap">
        select
            address_id,
            address,
            detail_address,
            zip_code
        from
            shipping_addresses_tb
        where
            user_id = #{userId}
        limit 1
    </select>

    ```

    <br/>

    - 이 코드는 사용자의 id를 이용하여 주소를 하나만 조회하는 sql 쿼리문입니다.  

---

<br/><br/>

#### UserInfo

**프론트**

```jsx

function UserInfo({
    userInfo,
    setUserInfo,
    isUserInfoLoading,
    isUserInfoError,
}) {
    // 주소 선택 완료 시 호출될 함수
    const handleAddressComplete = (address) => {
        setUserInfo((user) => ({
            ...user,
            address: {
                address: address.address, // 지역 주소 업데이트
                detailAddress: address.detailAddress, // 나머지 주소 업데이트
                zipCode: address.zipCode,
            },
        }));
    };

    // 유저 정보 변경 시 사용
    const handleInputChange = (e) => {
        setUserInfo((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 로딩 상태 처리
    if (isUserInfoLoading) {
        return <div>로딩 중...</div>;
    }

    // 에러 발생 시 처리
    if (isUserInfoError) {
        return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
    }

    console.log(userInfo);

    return (
        <>
            <div css={s.userInfo}>
                <h2>주문자 정보</h2>
                <div css={s.inputBox}>
                    <span>이름 : </span>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        defaultValue={userInfo.name}
                        placeholder="이름을 입력해 주세요"
                    />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="email">이메일 : </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="email"
                        defaultValue={userInfo.email}
                        placeholder="이메일 주소를 입력해 주세요"
                    />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="phoneNumber">연락처 : </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="phoneNumber"
                        defaultValue={userInfo.phoneNumber}
                        placeholder="연락처를 입력해 주세요"
                    />
                </div>
                <div css={s.addressInput}>
                    <p css={s.adressButton}>
                        <DaumPost onComplete={handleAddressComplete} />
                    </p>
                    <input
                        type="text"
                        name="zipCode"
                        readOnly
                        value={userInfo?.address?.zipCode}
                    />
                </div>
                <div css={s.adressInputBox}>
                    <label htmlFor="address">지역 주소 : </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="address"
                        defaultValue={userInfo?.address?.address}
                        placeholder="배송지 입력해 주세요"
                    />
                </div>
                <div css={s.adressInputBox}>
                    <label htmlFor="detailAddress">나머지 주소 : </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="detailAddress"
                        defaultValue={userInfo?.address?.detailAddress}
                        placeholder="배송지 입력해 주세요"
                    />
                </div>
            </div>
        </>
    );
}

export default UserInfo;

```

<br/>

- 주문 페이지에서 조회한 사용자의 정보를 받아 해당 컴포넌트에 입력되는 방식으로 구현하였습니다.
- 해당 사용자가 주소가 저장이 안되어 있는 경우 DaumPost 컴포넌트를 이용하여 주소를 추가할 수 있게 하였습니다.

---

<br/><br/>

#### ProductInfo

**프론트**

```jsx

// 주문상품 정보 불러오는 기능
function ProductInfo({productList, deliveryFee }) {

  return (
    <div css={s.productInfo}>
      <h2>주문상품 정보</h2>
      <table css={s.productTable}>
        {/* 다건 조회 */}
        {productList.map((product) => (
          <tr key={product.product.cartItemId}>
            <td>
              <img src={product.product.thumbnailImg} alt={product.title} />
            </td>
            <td>{product.product.title}</td>
            <td>수량: {product.quantity}</td>
            <td>상품금액: {product.product.price.toLocaleString()}원</td>
            <td>할인금액: 0원</td>
            <td>
              합계금액:{" "}
              {(product.product.price * product.quantity).toLocaleString()}원
            </td>
          </tr>
        ))}
      </table>
      <p>배송비 : {deliveryFee.toLocaleString()}원</p>
    </div>
  );
}

export default ProductInfo;

```

<br/>

- 장바구니에 체크한 상품의 정보와 배송비 정보를 받아 조회하는 컴포넌트입니다. 

---

<br/><br/>

#### PaymentMethod

**프론트**

```jsx

// 결제창 띄우는 기능
function PaymentMethod({ setPayMentState }) {

    // 신용카드
    const [ cardRedOutLine, setCardRedOutLine ] = useState(false);

    const handleCardClick = () => {
        setPayMentState("CARD");
        setCardRedOutLine(true); // 카드의 상태가 true로 바뀌면서 테두리 o
    };

    return (
        <div css={s.payInfo}>
            <h2>결제수단 선택</h2>
            <button css={s.selectClick(cardRedOutLine)} 
                onClick={handleCardClick}>신용카드</button>
        </div>
    );
}

export default PaymentMethod;

```

<br/>

- 해당 결제 상태를 주문페이지에서 받고 결제수단을 선택하는 컴포넌트입니다.
- 결제수단에서 신용카드 선택할 시 "CARD" 상태로 업데이트하여 카드로 결제할 수 있게 구현하였습니다. 

---

<br/><br/>

#### OrderSummary

**프론트**

```jsx

// 오른쪽 결제 박스
function OrderSummary({ productList, payMentState, userInfo, totalAmount, deliveryFee, totalProductAmount }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const [orderData, setOrderData] = useState({
        customerId: "",
        fullName: "",
        products: [],
        totalAmount: 0,
        orderItemCount: 0,
        orderName: "",
        zipCode: "",
        addressDefault: "",
        addressDetail: "",
        phoneNumber: "",
        email: "",
        request: "",
        paymentId: "", //포트원에서 받아온 아이디
        paymentMethod: "",
        payMethod: "",
        currency: "",
        country: "",
        card: ""
    });

    const portoneData = {
        storeId: "store-da6c7cb4-5165-42e3-8184-e54dd94d2b78",
        paymentId: crypto.randomUUID(), // 랜덤uuid 
        orderName: "Cuisson",
        totalAmount: totalAmount,
        currency: 'CURRENCY_KRW',
        products: products
    };

    useEffect(() => {
        setOrderData({
            customerId: userInfo.userId,
            fullName: userInfo.name,
            products: productList.map((item) => ({
                productId: item.productId.toString(),
                name: item.product.title,
                price: item.product.price,
                quantity: item.quantity,
            })),
            totalAmount: totalAmount,
            orderItemCount: productList.length,
            orderName: "Cuisson",
            zipCode: userInfo.address.zipCode,
            address: userInfo.address.address,
            detailAddress: userInfo.address.detailAddress,
            phoneNumber: userInfo.phoneNumber,
            email: userInfo.email,
            paymentId: "", //포트원에서 받아온 아이디
            payMethod: payMentState,
            currency: "KRW",
            country: "KR",
            card: "CARD"
        })
    }, [userInfo, productList, payMentState])

    const registerOrderMutaion = useMutation(
        async (registerOrderData) => await instance.post("/user/order", registerOrderData),
        {
            onSuccess: response => console.log(response), //결제완료창 띄우기
            onError: error => console.log(error)
        }
    );

    const isEmpty = () => {
        if(!userInfo.name || !userInfo.phoneNumber 
            || !userInfo.address.zipCode || !userInfo.address.address 
            || !userInfo.address.detailAddress
            || !userInfo.email) {
                Swal.fire({
                    icon:"error",
                    text: "주문정보를 확인하세요",
                    timer: 1500,
                    confirmButtonColor: "#9d6c4c",
                    confirmButtonText: "확인",
                });
                return true;
        }
        if (!payMentState || !channelKey) {
            Swal.fire({
                icon:"error",
                text: "결제방법을 선택하세요",
                timer: 1500,
                confirmButtonColor: "#9d6c4c",
                confirmButtonText: "확인",
            });
            return true;
        }
        return false;
    }


    const handlePaymentButtonOnClick = () => {
        if (isEmpty()) {
            return;
        }
        const requestData = {
            ...portoneData,
            paymentId: crypto.randomUUID(),
            channelKey: channelKey,
            payMethod: payMentState,
            totalAmount: totalAmount,
            customer: {
                userId: userInfo?.userId,
                fullName: userInfo.name,
                phoneNumber: userInfo.phoneNumber,
                email: userInfo.email,
            },
            products: products,
            productType: "PRODUCT_TYPE_REAL",
        }
        PortOne.requestPayment(requestData).then(response => {
            if (!response.code) { //성공했을 때
                //(추가)결제완료창 만들어서 넘기기
                setOrderData(order => ({
                    ...order,
                    paymentId: response.paymentId
                }));
                const registerOrderData = {
                    ...orderData,
                    paymentId: response.paymentId
                }

                registerOrderMutaion.mutateAsync(registerOrderData);

                let timerInterval;
                Swal.fire({
                    title: "결제가 완료되었습니다!",
                    color: "#9d6c4c",
                    html: "<b>5</b>초 뒤 자동으로 홈화면으로 이동합니다!",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        const b = Swal.getHtmlContainer().querySelector('b');
                        timerInterval = setInterval(() => {
                            b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                        }, 1000)
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then(result => {
                    navigate("/");
                })
            }
        }
        ).catch(error => {
            Swal.fire({
                icon: "error",
                text: "결제에 실패했습니다.",
                timer: 1500,
                confirmButtonColor: "#9d6c4c",
                confirmButtonText: "확인"
            });
        });
    };

    return  (
        <div css={s.rightBox}>
            <div css={s.payInfoMain}>
                <div css={s.payinfo}>
                    <h2>결제금액</h2>
                </div>
                <div css={s.payinfo}>
                    <p>상품 금액 : </p>
                    <p>{totalProductAmount.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>할인 금액 : </p>
                    <p>0원</p>
                </div>
                <div css={s.payinfo}>
                    <p>배송비 : </p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>적립금 : </p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>총 결제 금액 : </p>
                    <p>{totalAmount.toLocaleString()}원</p>
                </div>
            </div>
            <div css={s.submitButton}>
                <button onClick={handlePaymentButtonOnClick}>결제하기</button>
            </div>
        </div>
    );
}

export default OrderSummary;

```

<br/>

- 이 코드는 주문 페이지에서 사용되는 컴포넌트인 OrderSummary이며 사용자가 결제를 진행하는 단계에서, 결제 정보와 결제 버튼을 보여주고 결제 처리를 담당하는 로직이 포함되어 있습니다.
- PortOne 결제 시스템을 위한 데이터 구조이며 storeId는 결제 시스템에 등록된 상점 ID, paymentId는 결제 고유 ID (랜덤 UUID), orderName은 주문명, totalAmount는 결제 총액, currency는 화폐 단위, products는 주문한 상품들의 정보를 담고 있습니다.
- useEffect 훅은 사용자 정보, 제품 리스트, 결제 방법 상태가 변경될 때마다 orderData 상태를 업데이트하며 productList.map을 사용하여 상품들의 정보를 orderData에 맞게 변환하여 저장합니다.
- userInfo와 payMentState를 기반으로 주문 정보를 세팅합니다.
- registerOrderMutaion 함수는 mutation 훅을 사용하여 상품을 결제하기 위해 서버에 post 요청을 보내고 성공적으로 응답이 오면 결제 완료창을 띄우도록 구현하였습니다. 
- isEmpty 함수는 주문 정보를 확인하여 필수 정보가 빠지지 않았는지 체크하여 사용자의 이름, 전화번호, 주소, 이메일 등이 없으면 오류 메시지를 띄우고, 결제 방법이 선택되지 않은 경우에도 오류 메시지를 띄웁니다. 필요한 정보가 다 채워져 있으면 false를 반환하고, 그렇지 않으면 true를 반환하여 결제 처리를 중단합니다.
- handlePaymentButtonOnClick 함수는 결제하기 버튼을 클릭했을 때 실행되며 isEmpty 함수로 필수 정보를 체크하고, 정보가 모두 올바르면 결제 요청 데이터 를 준비합니다.
- PortOne.requestPayment(requestData)를 호출하여 결제를 처리하고 결제 성공 시, 결제 완료 화면을 띄우고, registerOrderMutaion.mutateAsync를 사용하여 주문을 데이터베이스에 저장합니다.
- 결제가 완료되면 5초 후에 홈 화면으로 이동합니다.

---

<br/><br/>

**백엔드**

**Controller**

```java

@PostMapping("/order")
public ResponseEntity<?> addOrder(@RequestBody ReqOrderDto dto) {
    orderService.addOrder(dto);
    return ResponseEntity.ok().body(true);
}

```

<br/>

- 클라이언트에 post요청을 받아 사용자가 장바구니에서 선택된 상품을 결제하는 로직을 처리하는 controller 입니다.
- ReqOrderDto 객체로 변환하여 service에 넘겨 결제 기능을 수행하고 성공적으로 응답을 받아 클라이언트에 반환합니다.

---

<br/><br/>

**Dto**

```java

@Data
public class ReqOrderDto {
    private String customerId;
    private String fullName;
    private Long totalAmount;
    private List<OrderItem> products;
    private String payMethod;
    private String paymentId;
    private int orderItemCount;
    private String address;
    private String detailAddress;
    private String zipCode;

    public Order toOrder() {
        return Order.builder()
                .userId(Long.parseLong(customerId))
                .totalAmount(totalAmount)
                .build();
    }

    public Payment toPayment(Long orderId) {
        return Payment.builder()
                .orderId(orderId)
                .paymentMethod(payMethod)
                .paymentStatus("completed")
                .paymentNum(paymentId)
                .amount(totalAmount)
                .build();
    }

    public Address toAddress(Long userId) {
        return Address.builder()
                .userId(userId)
                .address(address)
                .detailAddress(detailAddress)
                .zipCode(zipCode)
                .build();
    }
}

```

<br/>

- 사용자의 정보, 결제 정보, 결제할려는 상품의 정보를 담는 dto 입니다.
- toOrder 메서드는 ReqOrderDto의 데이터를 바탕으로 주문을 생성한 고객의 id와 상품의 총 가격의 정보를 Order 객체로 변환하여 이 메서드에 저장합니다. 
- toPayment 메서드는 ReqOrderDto의 데이터를 바탕으로 주문한 상품의 id와 결제수단, 결제상태, 결제 번호, 총 상품의 가격의 정보 등을 Payment 객체로 변환하여 이 메서드에 저장합니다. 
- toAddress 메서드는 ReqOrderDto의 데이터를 바탕으로 해당 사용자의 주소 정보를 Address 객체로 변환하여 이 메서드에 저장합니다.  

---

<br/><br/>

**Service**

```java

@Transactional(rollbackFor = SQLException.class)
public void addOrder(ReqOrderDto dto) {
    PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getPrincipal();
    Order order = dto.toOrder();

    orderMapper.addOrder(order);
    orderItemMapper.addOrderItem(order.getOrderId(), dto.getProducts());
    paymentsMapper.addPayment(dto.toPayment(order.getOrderId()));
    productMapper.updateSalesCountAndStock(dto.getProducts());

    if (addressMapper.findAddressByUserId(principalUser.getId()) == null) {
        addressMapper.addAddress(dto.toAddress(principalUser.getId()));
        return;
    }

    addressMapper.updateAddress(dto.toAddress(principalUser.getId()));

}

```

<br/>

- 이 코드는 해당 상품을 결제하는 로직을 mapper를 통해 처리하고 처리한 데이터를 응답받아 controller에 전달하는 역할을 합니다.  

---

<br/><br/>

**orderMapper**

```java

int addOrder(Order order);

```

<br/>

- order 객체를 sql 쿼리문에 넘겨 주문에 대한 기본 정보를 addOrder 메서드에 저장하고 service에 전달하는 역할을 합니다. 

---

<br/><br/>

**orderItemMapper**

```java

@Mapper
public interface OrderItemMapper {
    int addOrderItem (Long orderId, List<OrderItem> orderItemList);
}


```

<br/>

- addOrderItem 메서드는 결제할려는 상품의 id와 상품의 항목들을 sql 쿼리문에 넘겨 각 상품의 항목을 데이터베이스에 추가하는 로직을 처리하고 이 메서드에 저장하여 service에 전달하는 역할을 합니다.   

---

<br/><br/>

**paymentsMapper**

```java

int addPayment (Payment payment);

```

<br/>

- addPayment 메서드는 결제 정보를 sql 쿼리문에 넘겨 상품을 결제하는 로직을 처리하여 이 메서드에 저장하여 service에 전달하는 역할을 합니다.

---

<br/><br/>

**productMapper**

```java

int updateSalesCountAndStock(List<OrderItem> orderItemList);

```

<br/>

- updateSalesCountAndStock 메서드는 각 주문할려는 각 상품의 항목을 sql 쿼리문에 넘겨 상품의 판매 수량과 재고를 업데이트하여 이 메서드에 저장하고 service에 전달하는 역할을 합니다.

---

<br/><br/>

**xml**

```java

<insert id="addOrder" useGeneratedKeys="true" keyProperty="orderId">
    insert into orders_tb (order_id, user_id, total_amount, created_at)
    values(0, #{userId}, #{totalAmount}, now())
</insert>

```

<br/>

- 해당 사용자의 id와 총 상품의 금액과 날짜를 생성하여 주문의 기본 정보를 데이터베이스에 추가하고 성공적으로 추가가 되면 mapper에 전달한는 sql 쿼리문입니다. 

---

<br/><br/>

**xml**

```java

<insert id="addOrderItem">
    insert into order_items_tb
    values
    <foreach collection="orderItemList" item="item" index="index" open="(" separator="),(" close=")">
        0, #{orderId}, #{item.productId}, #{item.quantity}, #{item.price}
    </foreach>
</insert>

```

<br/>

- 사용자가 구매할려는 각 상품의 항목의 정보(수량, 가격 등)를 데이터베이스에 추가하는 로직을 처리하는 sql 쿼리문입니다.  

---

<br/><br/>

**xml**

```java

<insert id="addPayment">
    insert into payments_tb
    values (0, #{orderId}, #{paymentMethod}, #{paymentStatus}, #{amount}, #{paymentNum}, now())
</insert>

```

<br/>

- 사용자가 선택한 결제 수단과 결제 상태, 상품의 총 가격, 결제 번호, 날짜 등의 정보를 데이터베이스에 추가하여 결제 로직을 처리하는 sql 쿼리문입니다. 

---

<br/><br/>

**xml**

```java

<update id="updateSalesCountAndStock" parameterType="java.util.List">
    update products_tb
    set
        sales_count =
        case
            <foreach collection="orderItemList" item="item" separator=" ">
                when product_id = #{item.productId}
                then sales_count + #{item.quantity}
            </foreach>
            else sales_count
        end,

        stock =
        case
            <foreach collection="orderItemList" item="item" separator=" ">
                when product_id = #{item.productId}
                then stock - #{item.quantity}
            </foreach>
            else stock
        end

    where
        product_id in(
            <foreach collection="orderItemList" item="item" separator=",">
                #{item.productId}
            </foreach>
        )
</update>

```

<br/>

- 사용자가 구매할려는 상품의 재고와 수량을 월래 상품의 재고와 상품의 수량(1)에서 업데이트하여 사용자가 원하는 상품을 원하는 수만큼 구매하도록 처리한 sql 쿼리문입니다. 
- 사용자가 구매한 상품의 수량이 아무 변화가 없으면 그대로 두면서 상품을 결제할 수 있도록 구현하였습니다.  

---

<br/><br/>

### 관리자페이지

#### 로그인

**프론트**

```jsx

function AdminSignin(props) {
    const [admin, setAdmin] = useState({
        username: "",
        password: "",
    });

    const handleInputOnChange = (e) => {
        setAdmin((admin) => ({
            ...admin,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubminOnClick = async () => {
        const signinData = await adminSigninApi(admin);
        if (!signinData.isSuccess) {
            // 로그인 실패하면?
            if (signinData.errorStatus === "loginError" || "fieldError") {
                alert("로그인 실패");
            }
            return;
        }
        localStorage.setItem("accessToken", "Bearer " + signinData.token.accessToken);

        // role 값을 localStorage에 저장
        localStorage.setItem("role", signinData.role.name)

        instance.interceptors.request.use(config => {
            config.headers["Authorization"] = localStorage.getItem("accessToken");
            return config;
        });
        window.confirm(signinData.successMessage);
        window.location.replace("/admin/main");

    };

    const handleLoginOnkeyDown = async(e) => {
        if(e.keyCode === 13) {
            handleSubminOnClick();
        }
    }

    return (
        <div css={s.container}>
            <div css={s.signin}>
                <div css={s.signinHeader}>
                    <h1>관리자 페이지</h1>
                </div>
                <input
                    type="text"
                    value={admin.username}
                    onChange={handleInputOnChange}
                    name="username"
                    placeholder="아이디"
                />
                <input
                    type="password"
                    value={admin.password}
                    onChange={handleInputOnChange}
                    onKeyDown={handleLoginOnkeyDown}
                    name="password"
                    placeholder="비밀번호"
                />
                <button onClick={handleSubminOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default AdminSignin;

```

<br/>

- 이 코드는 따로 관리자 페이지를 관리하기 위한 관리자 로그인 화면입니다. 
- 로그인 버튼이나 비밀번호 창에서 엔터키를 누를 시 adminSigninApi를 통해 로그인이 되어 관리자 메인페이지로 이동합니다. 
- 유저 로그인 기능을 구현한 흐름과 같습니다. 

---

<br/><br/>

**백엔드**

**Controller**

```java

@RestController
@RequestMapping("/admin")
public class AdminAuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody ReqSigninDto dto) {
        return ResponseEntity.ok().body(authService.signin(dto));
    }

}

```

<br/>

- 클라이언트에서 api를 이용하여 post 요청을 받아 관리자 로그인 로직을 처리합니다. 
- service를 통해 로그인 기능 작업을 수행하여 성공적으로 응답이 오면 클라이언트에 반환하는 controller 입니다. 

---

**그 외**

<br/>

- dto 부터해서 sql 쿼리문 까지 위에 유저 로그인한 백엔드와 같은 흐름입입니다.

<br/><br/>

#### 관리자 메인 페이지

**프론트**

```jsx

const menus = [
    {
        id: 1,
        name: "상품 등록",
        path: "/admin/main/product/register",
        icon: <IoBagAddOutline />,
    },
    {
        id: 2,
        name: "상품 관리",
        path: "/admin/main/product",
        icon: <RiProductHuntLine />,
    },
    {
        id: 3,
        name: "매출 관리",
        path: "/admin/main/sales",
        icon: <IoBusinessOutline />,
    },
    {
        id: 4,
        name: "주문 관리",
        path: "/admin/main/order",
        icon: <IoBusinessOutline />,
    },
    {
        id: 5,
        name: "직원 관리",
        path: "/admin/main/staff",
        icon: <PiUsersFourLight />,
    },
    {
        id: 6,
        name: "유저 관리",
        path: "/admin/main/user",
        icon: <LuUser />,
    },
];

function AdminMainPage(props) {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem("role");
        navigate("/admin");
        window.location.reload(); // 페이지를 새로 고침하여 상태를 초기화
    };

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <div css={s.menuBox}>
                    {/* 메뉴 선택 페이지 */}
                    <Link to={"/admin"} css={s.logo}>
                        LOGO
                    </Link>
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            to={menu.path}
                            css={s.selectedMenu(pathname === menu.path)}
                        >
                            {menu.icon} <span>{menu.name}</span>
                        </Link>
                    ))}
                    <div css={s.menuBotton}>
                        <button css={s.logoutButton} onClick={handleLogout}>
                            <IoLogOutOutline />
                            로그아웃
                        </button>
                    </div>
                </div>
                <div css={s.contentBox}>
                    <Routes>
                        <Route path="/" element={<DefaultComponent />} />
                        <Route path="/product/register" element={<ProductRegister />} />
                        <Route path="/product" element={<ProductEdit />} />
                        <Route path="/sales" element={<Management />} />
                        <Route path="/order" element={< ProductOrder />} />
                        <Route path="/staff" element={<StaffManagement />} />
                        <Route path="/user" element={<UserView />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminMainPage;

```

<br/>

- 관리자가 해당 웹페이지를 관리할 수 있게 상품 등록, 상품 관리, 매출 관리, 직원 관리, 유저 관리를 구현한 관리자 메인 페이지 입니다. 
- 라운트를 사용하여 상품 등록, 상품 관리, 매출 관리, 직원 관리, 유저 관리 등을 이동하여 처리할 수 있게 구현하였습니다.
- 로그아웃 버튼을 클릭 시 관리자 메인 페이지를 들어갈 수 없고 다시 로그인하면 들어올 수 있게 하였습니다. 

---

<br/><br/>

#### 상품 등록

**프론트**

```jsx

function ProductRegister(props) {

    const [isUploading, setUploading] = useState(false);

    const [product, setProduct] = useState({
        title: "",
        price: 0,
        stock: 0,
        categoryId: 0,
        semiCategoryId: 0,
        description: "",
        origin: "대한민국",
        thumbnailImg: "",
        contentsImg: []
    });

    const handleMainCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((product) => ({
            ...product,
            categoryId: selectedId,
            semiCategoryId: 0
        }));
    };

    const handleSubCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((prevProduct) => ({
            ...prevProduct,
            semiCategoryId: selectedId
        }));
    };

    const inputOnChange = (e) => {
        const { name, value } = e.target;

        // 금액 입력일 때 숫자만 허용
        if (name === "price" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        if (name === "stock" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitOnClick = async () => {
        try {
            const response = await instance.post("/admin/product/add", product);
            alert("상품 등록이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            // 중복되었을때 에러
        }
        setProduct({
            title: "",
            price: 0,
            stock: 0,
            categoryId: 0,
            semiCategoryId: 0,
            description: "",
            origin: "대한민국",
            thumbnailImg: "",
            contentsImg: []
        });
    };


    const handleImageUpload = useCallback((type) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');

        if (type === "contentsImg") {
            input.setAttribute('multiple', 'multiple');
        }

        input.click();

        input.onchange = async () => {
            const files = Array.from(input.files);
            const urls = [];

            if (type === "contentsImg" && files.length > 4) {
                alert(`최대 4장의 이미지만 업로드할 수 있습니다.`);
                return;
            }

            const storage = getStorage();
            setUploading(true);

            files.forEach((file) => {
                const storageRef = ref(storage, `admin/product/${uuid()}_${file.name}`);
                const task = uploadBytesResumable(storageRef, file);

                task.on(
                    'state_changed',
                    () => { }, // 업로드 중 상태 핸들링 (옵션)
                    (e) => {
                        console.error(e);
                        setUploading(false);
                    },
                    async () => {
                        try {
                            const url = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                            urls.push(url);

                            if (type === "thumbnailImg" && urls.length === 1) {
                                setProduct((product) => ({
                                    ...product,
                                    thumbnailImg: urls[0]
                                }));
            
                            } else if (type === "contentsImg") {
                                setProduct((product) => ({
                                    ...product,
                                    contentsImg:  [...new Set([...product.contentsImg, ...urls])]
                                }));
                            }
                        } catch (e) {
                            console.error(e);
                        } finally {
                            setUploading(true);
                        }
                    }
                );
            });
        };
    }, []);

    return (

        <div css={s.layout}>
            <h1>상품 등록</h1>
            <div css={s.mainBox}>
                <div css={s.registerBox}>
                    <div css={s.inputBox}>
                        <div>
                            <label for="category">카테고리</label>
                            <select
                                name="categoryId"
                                value={product.categoryId}
                                onChange={handleMainCategoryChange}
                                css={s.selectBox}
                            >
                                {
                                    menus[0].subMenus.map(category => (
                                        <option value={category.id}>{category.name}</option>
                                    ))
                                }
                            </select>
                            <label for="semiCategory">서브 카테고리</label>
                            <select
                                name="semiCategoryId"
                                value={product.semiCategoryId}
                                onChange={handleSubCategoryChange}
                                css={s.selectBox}
                            >
                                {
                                    menus[0].subMenus.find(menu => menu.id === product.categoryId)?.subSideMenus.map((subMenu) => (
                                        <option key={subMenu.id} value={subMenu.id}>
                                            {subMenu.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label for="title">상품명</label>
                            <input
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="price">금액</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="description">상품 설명</label>
                            <input
                                type="text"
                                name="description"
                                value={product.description}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="origin">원산지</label>
                            <input
                                type="text"
                                name="origin"
                                value={product.origin}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="stock">재고</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div >
                            <label>상품 이미지</label>
                            <button onClick={() => handleImageUpload("thumbnailImg")}>상품 이미지 등록</button>
                        </div>
                        <div>
                            <label>상세 이미지</label>
                            <button onClick={() => handleImageUpload("contentsImg")}>상세 이미지 등록</button>
                        </div>
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleSubmitOnClick}>상품 등록</button>
                    </div>
                </div>
                <div css={s.rightBox}>
                    {
                        // 상품 이미지(thumbnailImg) 등록을 눌렀을 때 이미지가 옆으로 뜨도록 설정 
                        isUploading && (
                            <>
                                <p>상품 이미지</p>
                                <div css={s.thumbnailImgBox}>
                                    {/* 이미지 등록 시 다른 이미지의 경계선이 보이지 않도록 설정 */}
                                    {product.thumbnailImg && <img src={product.thumbnailImg} />}
                                </div>
                            </>
                        )
                    }
                    {
                        // 상세 이미지(contentsImg) 등록을 눌렀을 때 이미지가 옆으로 뜨도록 설정
                        isUploading && ( 
                            <>
                                <div css={s.contentsImgLayout}>
                                    <div css={s.contentsImgBox}>
                                        {/* 이미지 등록 시 다른 이미지의 경계선이 보이지 않도록 설정 */}
                                        { product.contentsImg[0] && <img src={product.contentsImg[0]} />} 
                                        { product.contentsImg[1] && <img src={product.contentsImg[1]} /> }
                                        { product.contentsImg[2] &&<img src={product.contentsImg[2]} /> }
                                        { product.contentsImg[3] && <img src={product.contentsImg[3]} /> }
                                    </div>  
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductRegister;

```

<br/>

- 이 코드는 새로운 상품을 등록하는 코드입니다.
- select 를 이용하여 메인 카테고리(안주, 밀키드 등), 서브 카테고리(냉동, 냉장)를 변경할 수 있도록 하였고 서브 카테고리는 메인 카테고리인 밀키트가 아니면 선택이 안뜨게 하였습니다. 
- 상품 등록은 카테고리 선택, 상품명, 금액, 상품 설명, 원산지, 재고, 상품 이미지, 상세 이미지 등으로 구성 되어있습니다. 
- 금액을 입력할 시 숫자만 입력할 수 있도록 설정하였습니다. 
- 상품 등록 버튼을 클릭할 시 서버에 post 요청을 보내고 성공적으로 응답이 오면 product 상태를 업데이트하여 상품이 등록되도록 설정하였습니다. 


---

<br/><br/>

**handleImageUpload 함수**

```jsx

const handleImageUpload = useCallback((type) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');

    if (type === "contentsImg") {
        input.setAttribute('multiple', 'multiple');
    }

    input.click();

    input.onchange = async () => {
        const files = Array.from(input.files);
        const urls = [];

        if (type === "contentsImg" && files.length > 4) {
            alert(`최대 4장의 이미지만 업로드할 수 있습니다.`);
            return;
        }

        const storage = getStorage();
        setUploading(true);

        files.forEach((file) => {
            const storageRef = ref(storage, `admin/product/${uuid()}_${file.name}`);
            const task = uploadBytesResumable(storageRef, file);

            task.on(
                'state_changed',
                () => { }, // 업로드 중 상태 핸들링 (옵션)
                (e) => {
                    console.error(e);
                    setUploading(false);
                },
                async () => {
                    try {
                        const url = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                        urls.push(url);

                        if (type === "thumbnailImg" && urls.length === 1) {
                            setProduct((product) => ({
                                ...product,
                                thumbnailImg: urls[0]
                            }));
        
                        } else if (type === "contentsImg") {
                            setProduct((product) => ({
                                ...product,
                                contentsImg:  [...new Set([...product.contentsImg, ...urls])]
                            }));
                        }
                    } catch (e) {
                        console.error(e);
                    } finally {
                        setUploading(true);
                    }
                }
            );
        });
    };
}, []);


```

<br/>

- 이 함수는 이미지 업로드 기능을 구현한 함수입니다. 
- input 요소를 동적으로 생성하여 type = "file"로 설정되어 있어 관리자가 파일을 업로드할 수 있게 설정하였습니다. 
- 상세 이미지 등록은 여러개 파일을 선택할 수 있게 하였고 최대 4장까지 업로드 할 수 있습니다. 만약 4장 초과되면 경고 알람창을 띄웁니다.
- input.click()를 호출하여 파일 선택 창을 자동으로 엽니다. 
- 파일선택이 완료되면 onchange 이벤트가 발생하고 선택된 파일들은 files 배열로 가져옵니다.
- urls 배열은 업로드된 파일들의 URL을 저장하기 위해 사용됩니다.
- Firebase Storage에 파일을 업로드하기 위해, 먼저 getStorage()로 스토리지 인스턴스를 가져와 setUploading(true)로 업로드 상태를 true로 설정합니다
- 각 파일에 대해 storageRef를 생성하고, uploadBytesResumable를 사용하여 파일을 업로드합니다. 
- uuid()는 각 파일 이름을 고유하게 만들어 충돌을 방지하는 역할을 합니다. 
- 업로드 상태(state_changed)가 변화할 때마다 실행되는 콜백 함수이며 실패 시, 에러를 콘솔에 출력하고 setUploading(false)로 업로드 상태를 종료하고 성공 시, getDownloadURL을 호출하여 Firebase Storage에서 업로드된 파일의 URL을 가져옵니다.
- type이 "thumbnailImg"인 경우: 업로드된 첫 번째 이미지를 thumbnailImg(상세 이미지)에 저장합니다.
- type이 "contentsImg"인 경우: 여러 개의 이미지를 contentsImg 배열에 추가하고 중복을 방지하기 위해 new Set([...product.contentsImg, ...urls])를 사용합니다.
- 파일 업로드 중 발생할 수 있는 오류를 catch로 처리하고, finally에서는 setUploading(true)를 호출하여 업로드 상태를 유지합니다. 

---

<br/><br/>

**백엔드**

**Controller**

```java

@PostMapping("/add")
public ResponseEntity<?> addProduct(@Valid  @RequestBody ReqAddProductDto dto, BindingResult bindingResult) {
    adminProductService.addProduct(dto);
    return ResponseEntity.ok().body(true);
}

```

<br/>

- 클라이언트에서 상품을 추가하는 post 요청을 받아 처리합니다. 
- adminProuductService를 이용하여 상품이 성공적으로 추가가 되면 클라이언트에 응답을 true로 반환합니다.  

---

<br/><br/>

**Dto**

```java

@Data
public class ReqAddProductDto {
    @NotBlank(message = "상품명은 공백일 수 없습니다.")
    private String title;
    @NotBlank(message = "가격은 공백일 수 없습니다.")
    private int price;
    @NotBlank(message = "재고는 공백일 수 없습니다.")
    private int stock;
    @NotBlank(message = "설명은 공백일 수 없습니다.")
    private String description;
    @NotBlank(message = "원산지는 공백일 수 없습니다.")
    private String origin;
    @NotBlank(message = "카테고리는 공백일 수 없습니다.")
    private int categoryId;
    private int semiCategoryId;
    @NotBlank(message = "이미지는 공백일 수 없습니다.")
    private String thumbnailImg;
    private List<String> contentsImg;

    public Product toProduct(String contentsImg1, String contentsImg2, String contentsImg3, String contentsImg4) {
        return Product.builder()
                .title(title)
                .price(price)
                .stock(stock)
                .description(description)
                .origin(origin)
                .thumbnailImg(thumbnailImg)
                .contentsImg1(contentsImg1)
                .contentsImg2(contentsImg2)
                .contentsImg3(contentsImg3)
                .contentsImg4(contentsImg4)
                .build();
    }
}

```

<br/>

- 이 dto는 상품명, 금액, 재고, 상품 설명, 원산지, 카테고리, 이미지 등의 정보를 담는 dto이고 입력할 시엔 공백으로 작성할 수 없게 설정하였습니다. 
- toProduct 메서드는 ReqAddProductDto의 데이터를 바탕으로 상품을 새로 추가하기 위해 Product 객체로 반환하여 이 메서드에 저장합니다.

---

<br/><br/>

**Service**

```java

@Transactional(rollbackFor = SQLException.class)
public void addProduct(ReqAddProductDto dto) {
    String[] images = dto.getContentsImg().stream()
            .toArray(String[]::new);

    String img1 = images.length > 0 ? images[0] : null;
    String img2 = images.length > 1 ? images[1] : null;
    String img3 = images.length > 2 ? images[2] : null;
    String img4 = images.length > 3 ? images[3] : null;

    Product product = dto.toProduct(img1, img2, img3, img4);
    adminProductMapper.addProduct(product);

    ProductCategory productCategory = ProductCategory.builder()
            .productId(product.getProductId())
            .categoryId(dto.getCategoryId())
            .semiCategoryId(dto.getSemiCategoryId())
            .build();
    adminProductMapper.addProductCategory(productCategory);
}

```

<br/>

- 이 코드는 새로운 상품을 추가하기 위한 메서드(addProduct)입니다. 
- 이미지 배열 처리 : getContentsImg() 메서드에서 받은 이미지 URL들을 배열로 변환한 후, 최대 4개의 이미지를 img1, img2, img3, img4에 각각 할당합니다.
- dto를 사용하여 product 객체를 생성하고 이미지 URL들을 Product 객체로 전달합니다.
- 상품 추가 : adminProductMapper.addProduct(product)를 호출하여 새 상품을 데이터베이스에 추가하는 역할을 합니다.
- 상품 카테고리 추가 : 상품이 추가된 후, 해당 상품의 카테고리 정보를 ProductCategory 객체로 만들어 adminProductMapper.addProductCategory(productCategory)로 데이터베이스에 추가하는 역할을 합니다.

---

<br/><br/>

**adminProductMapper**

```java

int addProduct(Product product);

```

<br/>

- addProduct 메서드는 product 객체를 이용하여 데이터베이스에서 새로운 상품을 추가한 데이터 결과값을 이 메서드에 담아 service에 전달합니다. 

---

<br/><br/>

**adminProductMapper**

```java

int addProductCategory(ProductCategory productCategory);

```

<br/>

- addProductCategory 메서드는 productCategory 객체를 이용하여 데이터베이스에서 카테고리별로 상품을 새로 추가한 데이터 결과값을 이 메서드에 담아 service에 전달합니다.

---

<br/><br/>

**admin_product.xml**

```java

 <insert id="addProduct" useGeneratedKeys="true" keyProperty="productId">
    insert into products_tb(product_id, title, price, stock, description, origin, thumbnail_img
    , contents_img1, contents_img2, contents_img3, contents_img4, created_date)
    values(
        0, #{title}, #{price}, #{stock}, #{description}, #{origin}, #{thumbnailImg},
            #{contentsImg1}, #{contentsImg2}, #{contentsImg3}, #{contentsImg4}, now()
        )
</insert>

```

<br/>

- 상품명, 금액, 재고, 상품 설명, 원산지, 이미지, 날짜 등의 정보를 이용하여 새로운 상품을 추가하는 sql 쿼리문입니다. 

---

<br/><br/>

**admin_product.xml**

```java

<insert id="addProductCategory">
    insert into product_categories_tb
    values(0, #{productId}, #{categoryId}, #{semiCategoryId})
</insert>

```

<br/>

- 이 코드는 카테고리 별로 새로운 상품을 추가하는 sql 쿼리문입니다. 

---

<br/><br/>

#### 상품 관리

**전체 코드**

**프론트**

```jsx

function ProductEdit(props) {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [checkedIds, setCheckedIds] = useState([]);
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    console.log(keyword)
    const [selectPage, setSelectPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 모달을 여는 함수
    const openModal = () => setIsModalOpen(true);
    const [isUploading, setUploading] = useState(false);

    const [product, setProduct] = useState({
        checkedIds: 0,
        title: "",
        price: 0,
        stock: 0,
        categoryId: 0,
        semiCategoryId: 0,
        description: "",
        origin: "대한민국",
        thumbnailImg: "",
        contentsImg: []
    });

    // 상품 불러오는 쿼리
    const productQuery = useQuery(
        ["productQuery", selectPage],
        async () => {
            const response = await instance.get(`/admin/product?page=${selectPage}&limit=${limit}`);
            setProductList(response?.data?.products);
            return response?.data;
        },
        {
            enabled: !keyword,
            retry: 0,
            refetchOnWindowFocus: 0,
        }
    );

    // 상품 검색 쿼리
    const searchProduct = useQuery(
        ["searchQuery", keyword, selectPage],
        async () => {
            const response = await instance.get(`/admin/product/search?page=${selectPage}&keyword=${keyword}&limit=${limit}`);
            setProductList(response?.data?.products);
        },
        {
            enabled: !!keyword,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    useEffect(() => {
        if (productQuery.data) {
            const calculatedPageCount = productQuery.data?.count % limit === 0
                ? productQuery.data?.count / limit
                : Math.floor(productQuery.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
        if (searchProduct.data) {
            const calculatedPageCount = searchProduct.data?.count % limit === 0
                ? searchProduct.data?.count / limit
                : Math.floor(searchProduct.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
    }, [productQuery.data, searchProduct.data]);

    const handleCheckBoxOnChange = (product) => {
        const productId = product.productId;

        setCheckedIds((ids) => {
            if (ids.includes(productId)) {
                return ids.filter(id => id !== productId);
            } else {
                return [...ids, productId];
            }
        });
        setProduct({
            checkedIds: product.productId,
            title: product.title,
            price: product.price,
            stock: product.stock,
            categoryId: product.productCategories[0].category.categoryId,
            semiCategoryId: product.semiCategories[0].semiCategoryId,
            description: product.description,
            origin: product.origin,
            thumbnailImg: product.thumbnailImg,
            contentsImg: [product.contentsImg1, product.contentsImg2, product.contentsImg3, product.contentsImg4]
        })
    };



    const deleteMutation = useMutation(
        async () => {
            await instance.delete("/admin/product", { data: { checkedIds } });
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                alert("삭제가 완료되었습니다.");
                setPageCount(selectPage ? parseInt(selectPage) : 1);
                productQuery.refetch();
            }
        }
    );


    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/admin/main/product?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    const handleMainCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((product) => ({
            ...product,
            categoryId: selectedId,
            semiCategoryId: 0
        }));
    };

    const handleSubCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((prevProduct) => ({
            ...prevProduct,
            semiCategoryId: selectedId
        }));
    };

    const inputOnChange = (e) => {
        const { name, value } = e.target;

        // 금액 입력일 때 숫자만 허용
        if (name === "price" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        if (name === "stock" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitOnClick = async () => {
        try {
            const response = await instance.put("/admin/product/edit", product);
            alert("상품 수정이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            // 중복되었을때 에러
        }
        setProduct({
            checkedIds: 0,
            title: "",
            price: 0,
            stock: 0,
            categoryId: 0,
            semiCategoryId: 0,
            description: "",
            origin: "대한민국",
            thumbnailImg: "",
            contentsImg: []
        });
        setPageCount(selectPage ? parseInt(selectPage) : 1);
        productQuery.refetch();
        setIsModalOpen(false);
    };


    const handleImageUpload = useCallback((type) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');

        if (type === "contentsImg") {
            input.setAttribute('multiple', 'multiple');
        }

        input.click();

        input.onchange = async () => {
            const files = Array.from(input.files);
            const urls = [];

            if (type === "contentsImg" && files.length > 4) {
                alert(`최대 4장의 이미지만 업로드할 수 있습니다.`);
                return;
            }

            const storage = getStorage();
            setUploading(true);
            files.forEach((file) => {
                const storageRef = ref(storage, `admin/product/${uuid()}_${file.name}`);
                const task = uploadBytesResumable(storageRef, file);
                task.on(
                    'state_changed',
                    () => { }, // 업로드 중 상태 핸들링 (옵션)
                    (e) => {
                        console.error(e);
                        setUploading(false);
                    },
                    async () => {
                        try {
                            const url = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                            urls.push(url);

                            if (type === "thumbnailImg" && urls.length === 1) {
                                setProduct((product) => ({
                                    ...product,
                                    thumbnailImg: urls[0]
                                }));

                            } else if (type === "contentsImg") {
                                setProduct((product) => ({
                                    ...product,
                                    contentsImg: [...new Set([...product.contentsImg, ...urls])]
                                }));
                            }
                        } catch (e) {
                            console.error(e);
                        } finally {
                            setUploading(false); // false로 할 시 이미지가 자동으로 사라짐 
                        }
                    }
                );
            });
        };
    }, []);


    return (
        <div css={s.layout}>
            <h1>상품 관리</h1>
            <AdminSearch setPageCount={setPageCount} type={"title"} />
            <div css={s.buttonLayout}>
                <button onClick={openModal} disabled={checkedIds.length !== 1}>수정</button>
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        content: {
                            position: "static",
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "5px",
                            width: "400px",
                            maxWidth: "90%",
                            overflow: "auto",
                            inset: "auto",
                        },
                    }}
                >
                    <div css={s.modalLayout}>
                        <h1>상품 수정</h1>
                        <div css={s.mainBox}>
                            <div css={s.registerBox}>
                                <div css={s.inputBox}>
                                    <div>
                                        <label for="category">카테고리</label>
                                        <select
                                            name="categoryId"
                                            value={product.categoryId}
                                            onChange={handleMainCategoryChange}
                                            css={s.selectBox}
                                        >
                                            {
                                                menus[0].subMenus.map(category => 
                                                    <option key={category.id} value={category.id}>{category.name}</option>      
                                                )
                                            }
                                        </select>
                                        <label for="semiCategory">서브 카테고리</label>
                                        <select
                                            name="semiCategoryId"
                                            value={product.semiCategoryId}
                                            onChange={handleSubCategoryChange}
                                            css={s.selectBox}
                                        >
                                            {
                                                menus[0].subMenus.find(menu => menu.id === product.categoryId)?.subSideMenus.map((semiCategory) => 
                                                    <option key={semiCategory.id} value={semiCategory.id}>{semiCategory.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <label for="title">상품명</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={product.title}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="price">금액</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={product.price}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="description">상품 설명</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={product.description}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="origin">원산지</label>
                                        <input
                                            type="text"
                                            name="origin"
                                            value={product.origin}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="stock">재고</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={product.stock}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div >
                                        <label>상품 이미지</label>
                                        <button onClick={() => handleImageUpload("thumbnailImg")}>상품 이미지 등록</button>
                                    </div>
                                    <div>
                                        <label>상세 이미지</label>
                                        <button onClick={() => handleImageUpload("contentsImg")}>상세 이미지 등록</button>
                                    </div>
                                </div>
                                <div css={s.buttonBox}>
                                    <button onClick={handleSubmitOnClick}>수정</button>
                                    <button onClick={() => setIsModalOpen(false)}>취소</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactModal>
                <button onClick={() => deleteMutation.mutateAsync()}>삭제</button>
            </div>
            <div css={s.container}>
                <table css={s.theadLayout}>
                    <tr>
                        <td css={s.theadItems}>선택</td>
                        <td css={s.theadItems}>카테고리</td>
                        <td css={s.theadItems}>서브 카테고리</td>
                        <td css={s.theadItems}>이름</td>
                        <td css={s.theadItems}>원산지</td>
                        <td css={s.theadItems}>가격</td>
                        <td css={s.theadItems}>재고</td>
                        <td css={s.theadItems}>판매량</td>
                        <td css={s.theadItems}>등록일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {productList?.map(product => (
                        product?.productCategories?.map(() => (
                            <tr key={product.id}>
                                <td css={s.productItem}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckBoxOnChange(product)}
                                        checked={checkedIds.includes(product.productId)}
                                    />
                                </td>
                                {
                                    product?.productCategories?.map(category => (
                                        <td css={s.productItem} key={category.category.categoryId}>{category.category.name}</td> // 카테고리
                                    ))
                                }
                                {
                                    product?.productCategories?.semiCategoryId === 0
                                        ?
                                        <td css={s.productItem}></td>
                                        :
                                        product?.semiCategories?.map(category => ( // 데이터가 없을때 빈 td
                                            <td css={s.productItem} key={category.semiCategoryId}>{category.name}</td> /* 서브카테고리 */
                                        ))
                                }
                                <td css={s.productItem}>{product.title}</td> {/* 상품명 */}
                                <td css={s.productItem}>{product.origin}</td>
                                <td css={s.productItem}>{product.price.toLocaleString()}</td>
                                <td css={s.productItem}>{product.stock}</td>
                                <td css={s.productItem}>{product.salesCount}</td>
                                <td css={s.productItem}>{product.createdDate}</td>
                            </tr>

                        ))
                    ))}
                </table>
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );
}

export default ProductEdit;

```

<br/>

- 이 코드는 상품을 조회, 검색, 삭제, 수정 기능을 넣은 상품관리 코드입니다. 
- 이미지 업로드 함수는 상품등록 파트에서 설명한 내용과 같습니다. 

---

<br/><br/>

- **상품 조회 기능**

    **프론트**

    ```jsx

    // 상품 불러오는 쿼리
    const productQuery = useQuery(
        ["productQuery", selectPage],
        async () => {
            const response = await instance.get(`/admin/product?page=${selectPage}&limit=${limit}`);
            setProductList(response?.data?.products);
            return response?.data;
        },
        {
            enabled: !keyword,
            retry: 0,
            refetchOnWindowFocus: 0,
        }
    );

    useEffect(() => {
        if (productQuery.data) {
            const calculatedPageCount = productQuery.data?.count % limit === 0
                ? productQuery.data?.count / limit
                : Math.floor(productQuery.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
        if (searchProduct.data) {
            const calculatedPageCount = searchProduct.data?.count % limit === 0
                ? searchProduct.data?.count / limit
                : Math.floor(searchProduct.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
    }, [productQuery.data, searchProduct.data]);

    ```

    <br/>

    - 이 코드는 useQuery를 사용하여 등록된 상품들의 목록을 조회하는 작업을 수행하고 있습니다.
    - useEffect를 사용하여 producjtQuery가 한번 씩 바뀔 때마다 한 페이지당 조회되는 상품의 갯 수만큼 나오게 하였고 20개까지 나올 수 있도록 구현하였습니다.

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("")
    public ResponseEntity<?> getAllProducts(ReqSearchDto dto) {
        return ResponseEntity.ok().body(productService.getAllProducts(dto));
    }

    ```

    <br/>

    - 클라이언트에서 get 요청을 받아 service에 dto 정보를 넘겨 성공적으로 조회된 결과값을 getAllProducts 메서드에 담아 응답을 클라이언트에 반환하는 역할을 합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Data
    public class ReqSearchDto {
        private int page;
        private String keyword;
        private int limit;
        private String categoryId;
    }

    ```

    <br/>

    - 이 dto는 상품을 조회하기 위한 필요한 정보를 담는 역할을 합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public RespSearchProductDto getAllProducts(ReqSearchDto dto) {
        int startIndex = (dto.getPage() - 1) * dto.getLimit();

        Map<String, Object> paging = Map.of(
                "startIndex", startIndex,
                "limit", dto.getLimit()
        );

        List<Product> productList = productMapper.findAllProductsList(startIndex, dto.getLimit());

        int productCount = productMapper.findAllProductCount();

        return RespSearchProductDto.builder()
                .products(productList)
                .count(productCount)
                .build();
    }

    ```

    <br/>

    - 이 코드는 한 페이지 마다 상품의 갯 수를 최대 20개까지 조회하는 service 입니다. 
    - startIndex 는 시작 페이지 숫자를 1로 시작해서 총 상품의 갯 수대로 페이지의 수가 나오도록 지정하였습니다.
    - productList는 startIndex와 limit(한 페이지 당 상품 제한 수)을 넘겨 데이터베이스에서 상품을 조회한 결과값을 이 변수에 저장합니다.
    - productCount는 mapper를 통해 상품의 총 갯수를 가지고와 저장합니다. 
    - dto의 builder 패턴을 통해 productList와 productCount를 controller에 반환합니다.  

    ---

    <br/><br/>

    **ProductMapper**

    ```java

    List<Product> findAllProductsList(int startIndex, int limit);

    ```

    <br/>

    - findAllProductsList 메서드는 service에서 받은 startIndex 값과 limit을 이용하여 상품을 sql 쿼리문에서 조회하여 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **ProductMapper**

    ```java

    Integer findAllProductCount();

    ```

    <br/>

    - findAllProductCount 메서드는 상품의 총 갯수를 sql 쿼리문에서 조회하고 이 메서드에 저장하여 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **product.xml**

    ```java

    <select id="findAllProductsList" resultMap="productResultMap">
        select
            pt.product_id,
            pt.title,
            pt.price,
            pt.stock,
            pt.sales_count,
            pt.description,
            pt.origin,
            pt.thumbnail_img,
            pt.contents_img1,
            pt.contents_img2,
            pt.contents_img3,
            pt.contents_img4,
            pt.created_date,
            ct.category_id as ct_category_id,
            ct.name,
            sct.semi_category_id,
            sct.name as sct_name
        from
            products_tb pt
            left outer join product_categories_tb pct on (pt.product_id = pct.product_id)
            left outer join categories_tb ct on (pct.category_id = ct.category_id)
            left outer join semi_categories_tb sct on (sct.semi_category_id = pct.semi_category_id)
        group by
            pt.product_id
        limit #{startIndex}, #{limit}
    </select>

    ```

    <br/>

    - 이 코드는 상품들을 그룹으로 묶어 한 페이지당 상품이 20개씩 나올 수 있도록 조회한 sql 쿼리문입니다. 

    ---

    <br/><br/>

    **product.xml**

    ```java

    <select id="findAllProductCount" resultType="java.lang.Integer">
        select
            count(*)
        from
            products_tb
    </select>

    ```

    <br/>

    - 상품의 총 갯수를 조회한 sql 쿼리문입니다. 

---

<br/><br/>

- **상품 검색 기능**

    **프론트**

    ```jsx

    // 상품 검색 쿼리
    const searchProduct = useQuery(
        ["searchQuery", keyword, selectPage],
        async () => {
            const response = await instance.get(`/admin/product/search?page=${selectPage}&keyword=${keyword}&limit=${limit}`);
            setProductList(response?.data?.products);
        },
        {
            enabled: !!keyword,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    useEffect(() => {
        if (productQuery.data) {
            const calculatedPageCount = productQuery.data?.count % limit === 0
                ? productQuery.data?.count / limit
                : Math.floor(productQuery.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
        if (searchProduct.data) {
            const calculatedPageCount = searchProduct.data?.count % limit === 0
                ? searchProduct.data?.count / limit
                : Math.floor(searchProduct.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
    }, [productQuery.data, searchProduct.data]);

    return (
        ...

        <h1>상품 관리</h1>
        <AdminSearch setPageCount={setPageCount} type={"title"} />

        ...

    )

    ```

    <br/>

    - useQuery를 이용하여 상품 검색 기능을 처리하였습니다.
    - 서버에 get요청을 보내 성공적으로 응답이오면 검색한 값(keyword)의 상품이 조회되도록 구현하였습니다.
    - 검색하였을 때 한 페이지 당 상품이 20개 까지 나오도록 설정하였습니다.

    ---

    <br/><br/>

    **AdminSearch**

    ```jsx

    function AdminSearch({ setPageCount, type }) {
        const navigate = useNavigate();
        const limit = 20;

        const [searchProduct, setSearchProduct] = useState({
            title: "", // 카테고리
            name: ""  // 고객 이름
        });

        const handleSearchOnChange = (e) => {
            setSearchProduct({
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmitButtonOnClick = () => {
            if(type === "title") {
                navigate(`/admin/main/product?page=1&keyword=${searchProduct.title}&limit=${limit}`);
            }

            if(type === "name") {
                navigate(`/admin/main/user?page=1&name=${searchProduct.name}&limit=${limit}`)
            }
            setPageCount(1);
            setSearchProduct({
                title: "",
                name: ""
            });
        };

        const handleOnKeyDownEnter = (e) => {
            if(e.keyCode === 13) {
                handleSubmitButtonOnClick();
            }
        }

        return (
            <div css={s.layout}>
                <div css={s.searchSection}>
                    <input
                        type="text"
                        name={type}
                        value={type === "title" ? searchProduct.title : searchProduct.name}
                        onChange={handleSearchOnChange}
                        onKeyDown={handleOnKeyDownEnter}
                        placeholder="검색어를 입력하세요"
                        css={s.searchInput}
                    />
                    <button onClick={handleSubmitButtonOnClick} css={s.searchButton}>
                        검색
                    </button>
                </div>
            </div>
        );
    }

    export default AdminSearch;

    ```

    <br/>

    - 타입을 지정하여 이 컴포넌트를 여러 곳(유저관리 등)에서도 검색할 수 있게 구현하였습니다. 
    - 나머지는 통합검색 파트에서 MainSerch 부분의 설명과 비슷하기에 생략하겠습니다. 

    ---

    <br/><br/>

    **백엔드**

    <br/>

    - 검색파트의 백엔드는 통합검색의 백엔드와 요청 url 빼고는 코드가 다 비슷하므로 생략하겠습니다. 

---

<br/><br/>

- **상품 체크박스 기능**

    **프론트**

    ```jsx

    const handleCheckBoxOnChange = (product) => {
        const productId = product.productId;

        setCheckedIds((ids) => {
            if (ids.includes(productId)) {
                return ids.filter(id => id !== productId);
            } else {
                return [...ids, productId];
            }
        });
        setProduct({
            checkedIds: product.productId,
            title: product.title,
            price: product.price,
            stock: product.stock,
            categoryId: product.productCategories[0].category.categoryId,
            semiCategoryId: product.semiCategories[0].semiCategoryId,
            description: product.description,
            origin: product.origin,
            thumbnailImg: product.thumbnailImg,
            contentsImg: [product.contentsImg1, product.contentsImg2, product.contentsImg3, product.contentsImg4]
        })
    };

    return (

        ...

        <td css={s.productItem}>
            <input
                type="checkbox"
                onChange={() => handleCheckBoxOnChange(product)}
                checked={checkedIds.includes(product.productId)}
            />
        </td>
        
        ...

    )

    ```

    <br/>

    - 조회된 상품들을 체크하여 수정이나 삭제를 할 수 있게 하기 위한 목적으로 구현하였습니다.
    - 선택한 상품을 구별하기 위해 productId를 사용하였습니다. 
    - setCheckedIds 라는 상태는 현재 선택된 상품들의 ID를 저장하는 배열 checkedIds 상태를 갱신합니다. 
    - checkedIds 배열에 중복되는 productId가 있을 경우 productId를 제거하여 체크박스를 해제하고 중복되지 않은 경우 productId를 추가하여 체크박스를 체크하는 역할을 합니다. 
    - setProduct 상태는 선택한 상품의 여러 속성들(productId, title, price, stock 등)을 상태로 설정합니다.

---

<br/><br/>

- **상품 삭제 기능**

    **프론트**

    ```jsx

    const deleteMutation = useMutation(
        async () => {
            await instance.delete("/admin/product", { data: { checkedIds } });
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                alert("삭제가 완료되었습니다.");
                setPageCount(selectPage ? parseInt(selectPage) : 1);
                productQuery.refetch();
            }
        }
    );

    return (
        <button onClick={() => deleteMutation.mutateAsync()}>삭제</button>
    )

    ```

    <br/>

    - mutation 훅을 사용하여 서버에 체크된 상품의 항목을 전달하고 delete 요청을 보냅니다.
    - 성공적으로 응답이 오면 해당 상품이 삭제되었다는 알람이 뜨고 페이지의 갯수도 상품의 갯수에 따라 상태를 업데이트하도록 설정하였고 refetch를 이용하여 바로 데이터를 새로 불러오도록 하였습니다. 

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @DeleteMapping("")
    public ResponseEntity<?> deleteProduct(@RequestBody ReqDeleteCheckDto dto) {
        adminProductService.deleteProduct(dto);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에서 체크된 상품의 항목들을 전달받아 삭제 처리하여 성공적으로 삭제처리가 되면 응답을 true로 반환합니다.
    - 체크된 항목 상품 정보를 dto에서 받아 service에 전달하여 해당 상품의 삭제를 처리합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Data
    public class ReqDeleteCheckDto {
        private List<Long> checkedIds;
    }

    ```

    <br/>

    - 체크된 상품의 항목들을 리스트로 받아 이 dto에 저장합니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    @Transactional(rollbackFor = SQLException.class)
    public void deleteProduct(ReqDeleteCheckDto dto) {
        adminProductMapper.deleteProductById(dto.getCheckedIds());
        adminProductMapper.deleteProductCategoryById(dto.getCheckedIds());
    }

    ```

    <br/>

    - 이 코드는 mapper를 통해 체크된 상품을 데이터베이스에서 삭제하여 그 데이터값을 전달받아 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    int deleteProductById(List<Long> checkedIds);

    int deleteProductCategoryById(List<Long> checkedIds);

    ```

    <br/>

    - deleteProductById 메서드는 체크된 상품항목을 가지고 sql 쿼리문에서 삭제 처리하여 이 메서드에 담아 service에 전달합니다.
    - deleteProductCategoryById 메서드는 체크된 해당 상품의 카테고리도 sql 쿼리문에서 삭제 처리하여 이 메서드에 담아 service에 전달합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <delete id="deleteProductById">
        delete from products_tb
        where product_id in
        <foreach item="id" collection="checkedIds" open="(" separator="," close=")">
            #{id}
        </foreach>
    </delete>

    ```

    <br/>

    - 체크된 상품의 항목들을 foreach를 이용하여 삭제 처리하는 sql 쿼리문입니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <delete id="deleteProductCategoryById">
        delete from product_categories_tb
        where product_id in
        <foreach item="id" collection="checkedIds" open="(" separator="," close=")">
            #{id}
        </foreach>
    </delete>

    ```

    <br/>

    - 체크된 상품의 카테고리를 삭제하는 sql 쿼리문입니다. 

---

<br/><br/>

- **상품 수정 기능**

    **프론트**

    ```jsx

    const handleMainCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((product) => ({
            ...product,
            categoryId: selectedId,
            semiCategoryId: 0
        }));
    };

    const handleSubCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((prevProduct) => ({
            ...prevProduct,
            semiCategoryId: selectedId
        }));
    };

    const inputOnChange = (e) => {
        const { name, value } = e.target;

        // 금액 입력일 때 숫자만 허용
        if (name === "price" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        if (name === "stock" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitOnClick = async () => {
        try {
            const response = await instance.put("/admin/product/edit", product);
            alert("상품 수정이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            // 중복되었을때 에러
        }
        setProduct({
            checkedIds: 0,
            title: "",
            price: 0,
            stock: 0,
            categoryId: 0,
            semiCategoryId: 0,
            description: "",
            origin: "대한민국",
            thumbnailImg: "",
            contentsImg: []
        });
        setPageCount(selectPage ? parseInt(selectPage) : 1);
        productQuery.refetch();
        setIsModalOpen(false);
    };

    ```

    <br/>

    - 이 코드는 모달 창을 띄워 상품의 정보를 수정하는 기능들을 구현하였습니다. 
    - 위에 체크 기능을 통해 하나의 상품을 선택하고 수정을 누를 수 있고 여러개 체크됐을 땐 수정 버튼이 안보이도록 설정하였고 수정을 클릭할 시 선택한 상품의 정보들을 가지고와 수정할 수 있게 하였습니다. 
    - handleMainCategoryChange, handleSubCategoryChange 함수는 상품의 카테고리를 바꾸는 기능을 합니다.
    - inputOnChange 함수는 금액이나 재고를 입력하였을 때 숫자가 아닐 경우 입력이 안되도록 하였습니다. 
    - handleSumitOnClick 함수는 상품 수정이 완료 버튼을 클릭할 시 작동이 됩니다.
    - 이 함수는 put 요청을 서버에 보내 성공적으로 응답이 오면 수정이 완료되었다는 알람을 띄우고 페이지 수도 업데이트 해주고 refetch를 이용하여 데이터를 다시 불러오고 모달창이 자동으로 닫히게 구현하였습니다. 

    ---

    <br/><br/>

    **모달**

    ```jsx

    <button onClick={openModal} disabled={checkedIds.length !== 1}>수정</button>
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            content: {
                position: "static",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                width: "400px",
                maxWidth: "90%",
                overflow: "auto",
                inset: "auto",
            },
        }}
    >
        <div css={s.modalLayout}>
            <h1>상품 수정</h1>
            <div css={s.mainBox}>
                <div css={s.registerBox}>
                    <div css={s.inputBox}>
                        <div>
                            <label for="category">카테고리</label>
                            <select
                                name="categoryId"
                                value={product.categoryId}
                                onChange={handleMainCategoryChange}
                                css={s.selectBox}
                            >
                                {
                                    menus[0].subMenus.map(category => 
                                        <option key={category.id} value={category.id}>{category.name}</option>      
                                    )
                                }
                            </select>
                            <label for="semiCategory">서브 카테고리</label>
                            <select
                                name="semiCategoryId"
                                value={product.semiCategoryId}
                                onChange={handleSubCategoryChange}
                                css={s.selectBox}
                            >
                                {
                                    menus[0].subMenus.find(menu => menu.id === product.categoryId)?.subSideMenus.map((semiCategory) => 
                                        <option key={semiCategory.id} value={semiCategory.id}>{semiCategory.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div>
                            <label for="title">상품명</label>
                            <input
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="price">금액</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="description">상품 설명</label>
                            <input
                                type="text"
                                name="description"
                                value={product.description}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="origin">원산지</label>
                            <input
                                type="text"
                                name="origin"
                                value={product.origin}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div>
                            <label for="stock">재고</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={inputOnChange}
                            />
                        </div>
                        <div >
                            <label>상품 이미지</label>
                            <button onClick={() => handleImageUpload("thumbnailImg")}>상품 이미지 등록</button>
                        </div>
                        <div>
                            <label>상세 이미지</label>
                            <button onClick={() => handleImageUpload("contentsImg")}>상세 이미지 등록</button>
                        </div>
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleSubmitOnClick}>수정</button>
                        <button onClick={() => setIsModalOpen(false)}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    </ReactModal>

    ```

    <br/>

    - 카테고리, 서브 카테고리, 상품명, 금액, 상품 설명, 원산지, 재고, 상품 이미지, 상세 이미지 등 상품의 정보를 수정하는 모달창입니다. 
    - 선택한 상품의 정보가 모달창에 그대로 가지고 오도록 구현하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @PutMapping("/edit")
    public ResponseEntity<?> modifyProduct(@RequestBody ReqModifyProductDto dto) {
        adminProductService.modifyProduct(dto);
        return ResponseEntity.ok().body(true);
    }

    ```

    <br/>

    - 클라이언트에 요청을 받아 dto로 변환하여 service에 전달하고 성공적으로 응답이 오면 true로 클라이언트에 응답을 반환합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Builder
    @Data
    public class ReqModifyProductDto {
        private Long checkedIds;
        private String title;
        private int price;
        private int stock;
        private String description;
        private String origin;
        private String thumbnailImg;
        private List<String> contentsImg;
        private int categoryId;
        private int semiCategoryId;

        public Product toProduct(String contentsImg1, String contentsImg2, String contentsImg3, String contentsImg4) {
            return Product.builder()
                    .productId(checkedIds)
                    .title(title)
                    .price(price)
                    .stock(stock)
                    .description(description)
                    .origin(origin)
                    .thumbnailImg(thumbnailImg)
                    .contentsImg1(contentsImg1)
                    .contentsImg2(contentsImg2)
                    .contentsImg3(contentsImg3)
                    .contentsImg4(contentsImg4)
                    .build();
        }

        public ProductCategory toProductCategory() {
            return ProductCategory.builder()
                    .categoryId(categoryId)
                    .semiCategoryId(semiCategoryId)
                    .productId(checkedIds)
                    .build();
        }
    }

    ```

    <br/>

    - 상품의 정보를 수정하기 위한 필요한 정보를 담는 dto 입니다.
    - toProduct 메서드는 상품의 정보를 빌더 패턴을 이용하여 product 객체로 반환하여 이 메서드에 저장합니다. 
    - toProductCategory 메서드는 상품의 카테고리 정보를 빌더 패턴을 이용하여 ProductCategory 객체로 반환하여 이 메서드에 저장합니다.

    ---

    <br/><br/>

    **Service**

    ```java

    @Transactional(rollbackFor = SQLException.class)
    public void modifyProduct(ReqModifyProductDto dto) {
        String[] images = dto.getContentsImg().stream()
                .toArray(String[]::new);

        String img1 = images.length > 0 ? images[0] : null;
        String img2 = images.length > 1 ? images[1] : null;
        String img3 = images.length > 2 ? images[2] : null;
        String img4 = images.length > 3 ? images[3] : null;

        Product product = dto.toProduct(img1, img2, img3, img4);
        adminProductMapper.updateProduct(product);
        adminProductMapper.updateProductCategory(dto.toProductCategory());
    }

    ```

    <br/>

    - 이 코드는 상품의 정보를 수정하기 위해 mapper를 통해 데이터베이스에서 수정처리한 데이터 값을 받아 controller에 전달하는 역할을 합니다.
    - 이미지 파일을 img1, img2, img3, img4 변수에 할당한 뒤, Product 객체를 생성하여 수정된 이미지들을 product 변수에 저장합니다.

    ---

    <br/><br/>

    **adminProductMapper**

    ```java

    int updateProduct(Product product);

    int updateProductCategory(ProductCategory productCategory);

    ```

    <br/>

    - updateProduct 메서드는 product 객체를 받아 sql 쿼리문에서 상품의 정보를 수정하여 이 메서드에 담고 service에 전달하는 역할을 합니다.
    - updateProductCategory 메서드는 productCategory 객체를 받아 sql 쿼리문에서 상품의 카테고리 정보를 수정하여 이 메서드에 담고 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **admin_product.xml**

    ```java

    <update id="updateProduct">
        update products_tb
        set
            title = #{title},
            price = #{price},
            stock = #{stock},
            description = #{description},
            origin = #{origin},
            thumbnail_img = #{thumbnailImg},
            contents_img1 = #{contentsImg1},
            contents_img2 = #{contentsImg2},
            contents_img3 = #{contentsImg3},
            contents_img4 = #{contentsImg4}
        where
            product_id = #{productId}
    </update>

    ```

    <br/>

    - 이 코드는 체크된 상품의 Id로 상품의 정보를 수정하는 sql 쿼리문입니다.

    ---

    <br/><br/>

     **admin_product.xml**

    ```java

    <update id="updateProductCategory">
        update product_categories_tb
        set
            category_id = #{categoryId},
            semi_category_id = #{semiCategoryId}
        where
            product_id = #{productId}
    </update>

    ```

    <br/>

    - 체크된 상품의 아이디를 통해 상품의 카테고리를 별도로 수정하는 sql 쿼리문입니다. 

---

<br/><br/>

- **페이징처리 기능**

    **프론트**

    ```jsx

    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/admin/main/product?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    return (

        ...

        <div css={s.pageNumber}>
            <ReactPaginate
                breakLabel="..."
                previousLabel={<><MdNavigateBefore /></>}
                nextLabel={<><MdNavigateNext /></>}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                onPageChange={handleOnPageChange}
            />
        </div>

        ...

    )

    ```

    <br/>

    - 한 페이지 당 상품이 20개 씩 나오도록 하는 기능은 paginate를 사용하여 구현하였고 페이지를 넘길 때 상품의 다음 목록이 나오도록 설정하였습니다. 

---

<br/><br/>


#### 직원 관리, 주문 관리, 유저 관리

<br/>

- 상품 관리 코드의 설명과 방식이 똑같아 설명은 생략하겠습니다. 

---

<br/><br/>

#### 매출 관리

**전체 코드**

**프론트**

```jsx

function Management(props) {
    const navigate = useNavigate();
    const [sales, setSales] = useState([]);
    const [graph, setGraph] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const [pageCount, setPageCount] = useState(1);
    const limit = 10;

    const graphData = useQuery(
        ["graphDataQuery"],
        async () => {
            const response = await instance.get("admin/sales/graph")
            return response?.data?.products
        },
        {
            enabled: true,
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (response) => {
                const newTop5FoodsData = [];
                try {
                    for (let i = 0; i < 5; i++) {
                        newTop5FoodsData.push({
                            name: response[i]?.title,
                            amt: response[i]?.stock
                        })
                        setGraph(newTop5FoodsData);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        }
    )

    const businessData = useQuery(
        ["businessDataQuery", searchParam.get("page")],
        async () => {
            return await instance.get(`admin/sales?page=${searchParam.get("page")}&limit=${limit}`)
        },
        {
            enabled: !!searchParam.get("page"),
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (resopnse) => {
                setSales(resopnse?.data?.paymentList);
            }
        }
    )
    
    useEffect(() => {
        if (businessData.data) {
            const calculatedPageCount = businessData.data?.data?.count % limit === 0
                ? businessData.data?.data?.count / limit
                : Math.floor(businessData.data?.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
    }, [businessData.data])

    useEffect(() => {
        if(!searchParam.get("page")) {
            setSearchParam(searchParam => ({
                ...searchParam,
                page: 1
            }))
        }
    },[])

    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const handleOnPageChange = (e) => {
        navigate(`/admin/main/sales?page=${e.selected + 1}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>매출 관리</h1>
            <div css={s.contentsBox}>
                <div css={s.topBox}>
                    <h3>매출량 TOP5</h3>
                    <LineChart width={1000} height={500} data={graph}>
                        <XAxis dataKey="name" tick={{ fontSize: 20 }} tickFormatter={(name) => truncate(name, 10)} />
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div css={s.container}>
                    <table css={s.theadLayout}>
                        <tr>
                            <td css={s.productItem}>
                                <input type="checkbox" />
                            </td>
                            <td css={s.theadItems}>주문ID</td>
                            <td css={s.theadItems}>주문방법</td>
                            <td css={s.theadItems}>결제상태</td>
                            <td css={s.theadItems}>구매자</td>
                            <td css={s.theadItems}>주문 상품</td>
                            <td css={s.theadItems}>수량</td>
                            <td css={s.theadItems}>금액</td>
                            <td css={s.theadItems}>주문 날짜</td>
                        </tr>
                    </table>
                    <table css={s.theadLayout}>
                        {sales?.map(sales => {
                            return (
                                <tr key={sales.paymentId}>
                                    <td css={s.productItem}>
                                        <input type="checkbox" />
                                    </td>
                                    <td css={s.productItem}>{sales?.paymentId}</td>
                                    <td css={s.productItem}>{sales?.paymentStatus}</td>
                                    <td css={s.productItem}>{sales?.paymentMethod}</td>
                                    <td css={s.productItem}>{sales?.order?.userList[0]?.name}</td>
                                    <td css={s.productItem}>{sales?.orderItem?.product?.title}</td>
                                    <td css={s.productItem}>{sales?.orderItem?.quantity}</td>
                                    <td css={s.productItem}>{sales?.amount}</td>
                                    <td css={s.productItem}>{sales?.paymentDate}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div css={s.pageNumber}>
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={<><MdNavigateBefore /></>}
                        nextLabel={<><MdNavigateNext /></>}
                        pageCount={pageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={5}
                        onPageChange={handleOnPageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Management;

```

<br/>

- 이 코드는 상품의 판매량을 이용하여 그래프와 표로 매출을 나탄낸 코드 입니다. 

---

<br/><br/>

- **grapData 함수(그래프 기능)**

    **프론트**

    ```jsx

    const graphData = useQuery(
        ["graphDataQuery"],
        async () => {
            const response = await instance.get("admin/sales/graph")
            return response?.data?.products
        },
        {
            enabled: true,
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (response) => {
                const newTop5FoodsData = [];
                try {
                    for (let i = 0; i < 5; i++) {
                        newTop5FoodsData.push({
                            name: response[i]?.title,
                            amt: response[i]?.stock
                        })
                        setGraph(newTop5FoodsData);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        }
    )

    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    return (

        ...

            <h3>매출량 TOP5</h3>
            <LineChart width={1000} height={500} data={graph}>
                <XAxis dataKey="name" tick={{ fontSize: 20 }} tickFormatter={(name) => truncate(name, 10)} />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            </LineChart>

        ...

    )


    ```

    <br/>

    - 이 코드는 useQuery를 사용하여 데이터를 비동기적으로 가져오고, 성공적으로 데이터를 가져온 후 그래프 데이터를 설정하는 코드입니다. 
    - 서버에 get요청을 보내 성공적으로 데이터를 가지고 오면 상위 5개의 상품의 title과 stock을 추출하여 newTop5FoodsData 배열에 추가하고, 이를 setGraph를 통해 상태로 설정하여 그래프 데이터를 업데이트합니다.
    - truncate 함수는 문자열(str)을 주어진 길이(n)로 자르는 함수 입니다. 
    - LineCart 태그를 이용하여 그래프를 구현하였습니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("/graph")
    public ResponseEntity<?> getGraphData() {
        return ResponseEntity.ok().body(adminSalesService.getGraphData());
    }

    ```

    <br/>

    - 클라이언트에 get 요청을 받아 service를 통해 판매량을 이용하여 그래프 데이터를 조회하고 전달을 받아 클라이언트에 응답을 반환합니다. 

    ---

    <br/><br/>

    **Dto**

    ```java

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public class RespGraphDataDto {

        private List<Product> products;

    }

    ```

    <br/>

    - 상품의 정보를 담는 dto입니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public RespGraphDataDto getGraphData() {
        List<Product> productList = paymentsMapper.getGraphData();
        return RespGraphDataDto.builder()
                .products(productList)
                .build();
    }

    ```

    <br/>

    - mapper를 통해 그래프의 데이터를 조회한 값을 가지고와 prductList에 담고 controller에 응답을 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **Mapper**

    ```java

    List<Product> getGraphData();

    ```

    <br/>

    - getGraphData 메서드는 sql 쿼리문에서 판매량을 이용하여 그래프 데이터를 조회하여 이 메서드에 저장하고 service에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **xml**

    ```java

    <select id="getGraphData" resultMap="productResultMap">
        select
            title,
            stock
        from
            products_tb
        order by
            stock desc
        limit 5
    </select>

    ```

    <br/>

    - 판매량이 많은 순으로 5개 까지만 상품 데이터를 조회하는 sql 쿼리문입니다. 

---

<br/><br/>

- **businessData(표)**

    **프론트**

    ```jsx

    const businessData = useQuery(
        ["businessDataQuery", searchParam.get("page")],
        async () => {
            return await instance.get(`admin/sales?page=${searchParam.get("page")}&limit=${limit}`)
        },
        {
            enabled: !!searchParam.get("page"),
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (resopnse) => {
                setSales(resopnse?.data?.paymentList);
            }
        }
    )

    ```

    <br/>

    - 이 함수는 useQueyr를 이용하여 전체적인 매출 데이터를 한 페이지당 10개까지 상품의 판매량을 조회기능을 처리하는 비동기 함수입니다. 
    - 서버에 get 요청을 보내 성공적으로 응답이 오면 매출 데이터를 조회하는 역할을 합니다. 

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java

    @GetMapping("")
    public ResponseEntity<?> getSales(ReqSearchSalesDto dto) {
        return ResponseEntity.ok().body(adminSalesService.getSalesList(dto));
    }

    ```

    <br/>

    - 클라이언트에 요청을 받아 dto 정보를 service에 넘겨 성공적으로 조회되면 응답을 받아 응답을 클라이언트 반환합니다. 

    ---

    <br/><br/>

    **ReqSearchSalesDto**

    ```java

    @Data
    public class ReqSearchSalesDto {
        private int page;
        private int limit;
    }

    ```

    <br/>

    - 이 dto는 페이지 수, 상품의 제한 수의 정보를 담는 코드입니다. 

    ---

    <br/><br/>

    **RespSearchSalesDto**

    ```java

    @Builder
    @Data
    public class RespSearchSalesDto {
        private List<Payment> paymentList;
        private int count;
    }

    ```

    <br/>

    - 이 dto는 결제 정보를 담는 코드입니다. 

    ---

    <br/><br/>

    **Service**

    ```java

    public RespSearchSalesDto getSalesList(ReqSearchSalesDto dto) {
        String paymentStatus = "completed";
        int startIndex = (dto.getPage() - 1) * dto.getLimit();

        return RespSearchSalesDto.builder()
                .paymentList(paymentsMapper.findPaymentList(dto.getLimit(), paymentStatus, startIndex))
                .count(paymentsMapper.findPaymentCount(paymentStatus))
                .build();
    }

    ```

    <br/>

    - 이 코드는 전체 상품의 매출량을 mapper를 통해 조회하여 controller에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **PaymentsMapper**

    ```java

    List<Payment> findPaymentList(@Param("limit") int limit, @Param("paymentStatus") String paymentStatus, @Param("startIndex") int startIndex); // 일 별 매출 목록

    ```

    <br/>

    - 한 페이지 당 상품의 항목의 제한 수와 결제상태를 sql 쿼리문으로 넘겨 매출량을 조회하고 결과 값을 전달받아 service에 반환하는 역할을 합니다. 

    ---

    <br/><br/>

    **PaymentsMapper**

    ```java

    int findPaymentCount(String paymentStatus);

    ```

    <br/>

    - 상품을 구매한 결제 상태를 이용하여 판매 수를 조회한 데이터를 응답받아 sevice에 전달하는 역할을 합니다. 

    ---

    <br/><br/>

    **payments.xml**

    ```java

    <select id="findPaymentList" resultMap="paymentResultMap">
        select
            pt.payment_id,
            pt.order_id,
            pt.payment_method,
            pt.payment_status,
            pt.amount,
            pt.payment_date,
            ot.order_status,
            ot.total_amount,
            ut.user_id,
            ut.username,
            ut.name,
            oit.quantity,
            oit.price,
            prt.title
        from
            payments_tb pt
            left outer join orders_tb ot on(ot.order_id = pt.order_id)
            left outer join order_items_tb oit on(oit.order_id = pt.order_id)
            left outer join users_tb ut on(ut.user_id = ot.user_id)
            left outer join products_tb prt on(prt.product_id = oit.product_id)
        where
            payment_status = #{paymentStatus}
        limit #{startIndex}, #{limit}
    </select>

    ```

    <br/>

    - 결제 상태와 한 페이지 당 정해진 제한 수를 이용하여 상품을 조회하는 sql 쿼리문입니다. 

    ---

    <br/><br/>

    **payments.xml**

    ```java

    <select id="findPaymentCount" resultType="java.lang.Integer">
        select
            count(*)
        from
            payments_tb
        where
            payment_status = #{paymentStatus}
    </select>

    ```

    <br/>

    - 사용자 구매한 상품의 결제 상태의 갯수를 조회한 sql 쿼리문입니다. 

---

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
 