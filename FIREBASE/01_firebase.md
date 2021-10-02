# firebase 사용방법

## 1. 환경변수 셋팅

- .env  
  : 깃허브에 민감한 정보(ex. API KEY)를 업로드하지 않기 위해 사용. <br/>
  민감한 정보(ex.app key)는 이 파일에 저장하고, firebase.js에서 import해서 사용한다. <br/>
  .env파일은 gitignore에 추가한다.<br/><br/>

```
ex)
REACT_APP_API_KEY=앱키
REACT_APP_AUTH_DOMAIN=도메인
REACT_APP_PROJECT_ID=프로젝트아이디
REACT_APP_STORAGE_BUCKET=저장소보관함
REACT_APP_MESSAGING_SENDER_ID=메세지sender아이디
REACT_APP_APP_ID=앱아이디
```

- firebase.js
  : firebase프로젝트를 만들기 위해 작성한다.<br/>
  자세한 사용법은 공식문서 참고 (https://firebase.google.com/docs/web/setup?hl=ko)<br/>

NOTE : firebase 버전에 맞는 doc을 확인할 것<br>

- WEB : javascript - version 8
  https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#setpersistence

- Authentication State Persistence
  https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-8

<br>
<br>

## useCase

트위터클론코딩 (코드) : https://github.com/sukyoungshin/twitter-clone <br><br>

App.js<br/>

- onAuthStateChanged : auth상태에 변화가 있음을 감지하는 observer. <br/>
  https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#onauthstatechanged<br/>

Auth.js<br/>

- createUserWithEmailAndPassword : promise를 반환함<br/>
  https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#createuserwithemailandpassword

- UserCredential : https://firebase.google.com/docs/reference/js/v8/firebase.auth?authuser=0#usercredential<br/>
