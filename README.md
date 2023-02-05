# 리액트 블로그

## 1. 소개
React.js로 만든 작한 싱글 페이지 어플리케이션입니다. 
개인용 블로그로, 메인페이지와 상세페이지가 있습니다. 

## 2. 사용 기술
JavaScript, React.js, CSS

## 3. 상세 설명
1. 컴포넌트 단위로 UI개발
2. React Router(version 6)로 라우팅 처리
3. URL 파라미터로 detail페이지 만들기
4. 페이지를 불러오지 않고 DOM만 조작해서 페이지를 보여주도록 <Link/>로 페이지 연결
5. ContextAPI와 useContext로 여러 컴포넌트에 props를 통해 데이터 전달
6. Axios 라이브러리로 ajax요청을 해서 json 데이터 불러오기
7. useEffect로 첫 랜더링시에만 ajax 요청하기
8. useState로 로그인 상태를 감지하려 state처리에 따라 header 버튼의 UI 변경하기
9. 로그인이 true인 상태면 <About /> 컴포넌트를 보여주고, 로그아웃 상태라면 보여주지 않기
9. 데이터 불러오는 동안 undefined인 상태면 삼항연산자로 로딩중인 상태 추가
10. map()메서드로 반복되는 컴포넌트 리스트를 간단하게 만들기


