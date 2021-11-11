# firebase 사용방법

> 🔗 관련레포 : [트위터 클론코딩](https://github.com/sukyoungshin/twitter-clone) <br>

## 1. 환경변수 셋팅

- `.env `
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

- `firebase.js`
  : firebase프로젝트를 만들기 위해 작성한다.<br/>
  자세한 사용법은 [firebase공식문서](https://firebase.google.com/docs/web/setup?hl=ko) 참고 <br/>
  
## 2. method
- App.js<br/>

  > [onAuthStateChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#onauthstatechanged) : auth상태에 변화가 있음을 감지하는 observer. <br/>

- Auth.js<br/>
  > [createUserWithEmailAndPassword](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#createuserwithemailandpassword) : promise를 반환함<br/> 
  > [UserCredential](https://firebase.google.com/docs/reference/js/v8/firebase.auth?authuser=0#usercredential)<br/>

<br>

## Reference

- [firebase공식문서](https://firebase.google.com/docs/web/setup?hl=ko)
- [WEB : javascript - version 8](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#setpersistence)
- [Authentication State Persistence](https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-8)
