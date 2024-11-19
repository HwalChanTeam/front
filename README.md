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

<a href="https://smooth-agreement-bd7.notion.site/API-1386c80331b7806ab816eedea773c1e9">API 명세서</a>

### 📐 ERD 설계도

<img />

<br/><br/>

## 📄 메뉴 구조도
### 메인 페이지 (사용자)

(사진)

### 관리자 페이지 (관리자)

(사진)

<br/><br/>

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

<br/>

### 마이페이지
#### 정보조회, 구매후기, 찜목록, 구매기록, 회원탈퇴

(영상)

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

<br/><br/>

## 📖 주요 기능 및 코드리뷰 

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
                console.log(response)
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
    console.log(productTrGroups);

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

- 사용자의 장바구니에 해당 상품의 정보를 추가하고 추가한 데이터를 mapper에 전달해주는 sql문입니다.

---

<br/><br/>

### 로그인 / 회원가입 
#### 회원가입

- __일반__  

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

    - sendEmail 메서드는 이메일 인증 요청을 /user/public/email/send를 통해 받아 사용자가 입력한 정보를 ReqSendMailDto 객체로 변환하여 service에 전달하고 service에서 성공적으로 데이터를 가지고오며 true로 응답하여 클라이언트에 전달하는 역할을 합니다. 
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

    **Service**

    ```java



    ```

    <br/>

    -

    ---

    **Mapper**

    ```java



    ```

    <br/>

    -

    ---

    <br/><br/>

    **xml**

    ```java



    ```

    -

---

<br/><br/>

#### 로그인 

__유저__ 

- __일반__  

    **프론트**

    ```jsx



    ```

    <br/>

    -

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java



    ```

    <br/>

    -

    ---

    **Service**

    ```java



    ```

    <br/>

    -

    ---

    **Mapper**

    ```java



    ```

    <br/>

    -

    ---

    <br/><br/>

    **xml**

    ```java



    ```

    -

---

<br/><br/>

- __OAuth2__  

    **프론트**

    ```jsx



    ```

    <br/>

    -

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java



    ```

    <br/>

    -

    ---

    **Service**

    ```java



    ```

    <br/>

    -

    ---

    **Mapper**

    ```java



    ```

    <br/>

    -

    ---

    <br/><br/>

    **xml**

    ```java



    ```

    -

---

<br/><br/>

- __아이디 찾기 및 비밀번호 찾기__

	__아이디 찾기__

    <br/>

    **프론트**

    ```jsx

    ```

    ---
    <br/><br/>

    **백엔드**

    ```jsx

    ```
    -

    ---

	__비밀번호 찾기__  

    ```jsx



    ```

### 장바구니

- __수정__  

    **프론트**

    ```jsx



    ```

    <br/>

    -

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java



    ```

    <br/>

    -

    ---

    **Service**

    ```java



    ```

    <br/>

    -

    ---

    **Mapper**

    ```java



    ```

    <br/>

    -

    ---

    <br/><br/>

    **xml**

    ```java



    ```

    -

---

<br/><br/>

- __삭제__  

    **프론트**

    ```jsx



    ```

    <br/>

    -

    ---

    <br/><br/>

    **백엔드**

    **Controller**

    ```java



    ```

    <br/>

    -

    ---

    **Service**

    ```java



    ```

    <br/>

    -

    ---

    **Mapper**

    ```java



    ```

    <br/>

    -

    ---

    <br/><br/>

    **xml**

    ```java



    ```

    -

---

<br/><br/>

### 마이페이지  

#### 프로필 변경  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 정보조회  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 찜목록  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 구매기록   

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 구매후기  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 회원탈퇴  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

### 주문 페이지

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

#### 결제  

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

**백엔드**

**Controller**

```java



```

<br/>

-

---

**Service**

```java



```

<br/>

-

---

**Mapper**

```java



```

<br/>

-

---

<br/><br/>

**xml**

```java



```

-

---

<br/><br/>

### 모달

**프론트**

```jsx



```

<br/>

-

---

<br/><br/>

## 💡 느낀점

🐃 문주영(팀장)  
: 프론트엔드와 백엔드 두가지를 다 해보며 요청/응답 주소와 변수를 맞추거나 API 설계를 논의하는 과정에서 원활한 소통과 협력이 얼마나 중요한지 깨달았습니다. 각자의 역할을 이해하며 협업하는 법을 배웠고 이미지 크롤링과 데이터베이스 연동 과정에서 발생한 에러를 해결하며 디버깅 능력과 문제 해결 능력 또한 많이 키웠습니다. 그리고 OAuth2 와 같은 소셜 로그인 기술을 구현하며 원하는 데이터를 받아오고 적용하는 경험을 쌓았던거 같아 아주 만족하는 프로젝트 였던것 같습니다.

<br/>

🦦 이성민  
: 처음으로 해본 웹사이트 만들기 였습니다. 약 5개월 간의 배움으로 누군가애갠 적은 경험이지만, 저는 유의미한 시간이었습니다. 
비롣 한달간의 짧은 시간이었지만 네 명이서 매일매일 합을 맞춘 경험과 기능들을 추가하기 위해 힘 썼던 시간과 오류처리를 한 경험은 그 무었보다 소중한 경험이었다고 생각합니다.
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
: 처음으로 이번 프로젝트를 진행하면서 제가 프로젝트 진행하기 전에 crud 중 조회하는 파트를 어려워 하였는데 이번 프로젝트로 인해 url 요청이나 데이터 정보들을 들고와서 조회하는 과정을 많이 하게 되어 극복하게 되었습니다. 제가 백엔드와 요청한 주소를 같게 써야하는 과정에서 팀원들과 소통하지 않고 제 멋대로 쓴 경우가 있었습니다. 그래서 진도 나가는 과정에서 지연된 경우가 생겨 시간이 오래 걸렸습니다. 저는 이런 점을 보면서 제 행동에 반성하게 되었고 그 후에는 팀원들과 잘 소통하고 잘 안되는 부분이 있으면 팀원들에게 물어보기도 하였고 요청 주소외 변수명도 백엔드에 맞춰 작성하게 되었습니다 이런 과정을 겪으면서 팀원들간의 소통이 정말 중요하다는 것을 깨달았습니다. 그리고 제가 검색해서 조회하는 파트를 맡게되면서 정말 어렵다고 생각이 들었고 이 파트에서 시간을 많이 쏟게 되었습니다 저 혼자 힘으론 안될거 같아서 팀원들의 도움을 받아 검색하는 파트도 무사히 끝마칠 수 있게 되었습니다. 어려웠던 점이 사용자가 검색하였을 때 그 검색한 데이터를 어떻게 조회해야 할지 조회한 페이지를 어떻게 띄워야 할지 주소를 어떻게 전달해야 할지 어려워했었습니다. 그 과정을 하게되면서 searchParams를 사용하여 파라미터 값으로 주소로 설정해 검색한 상품이 조회될 수 있도록 구현하게 되었습니다. 이 과정을 걸치면서 searchParams를 어떻게 써야할지를 알게 되었고 어려운 점이 있으면 팀원에게 도움받는 것이 시간 효율에 좋다는 것을 꺠달았습니다. 이번 프로젝트를 진행하면서 결과물도 중요하지만 무엇보다 팀원들간의 소통과 협력이 정말 중요하다는 사실을 깨닫게 되었습니다. 









