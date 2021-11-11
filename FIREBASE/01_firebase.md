# firebase 사용방법

## 삽질노트 및 해결방안

### ❌ ISSUE

강의에서 진행하는 firebase 버전과 최근 릴리즈 된 버전이 맞지 않아서 작동되지 않았음. <br/>

### 🧐 시도해본 방법

- 최신 버전을 사용하는 것이 옳다고 생각해서, 공식문서를 확인하여 최신 버전의 doc을 토대로 syntax를 맞춰가며 진행했으나, firebase의 기초적인 사용 방법을 숙지하지 못한 상태에서 억지로 시도하였더니 어렵게 느껴지고 진도가 나가질 않았음.
- 일단 기초적인 사용 방법을 익히는게 중요하다 판단되어, 다운받은 라이브러리 버전을 다운그레이드하여 일단 프로젝트 한 사이클을 진행하였음.
- 차후 뉴 버전으로 변경하여 업데이트 할 예정.

### 💡 배운 점

- firebase 공식문서에서 버전에 맞는 doc을 확인하는 것은 매우 중요하다.
- 한 사이클을 일단락하여 전체적인 흐름을 보는 것이 중요하다.

## <br/><br/>

## firebase 사용방법

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

<br>
<br>

## Reference

- [firebase공식문서](https://firebase.google.com/docs/web/setup?hl=ko)
- [WEB : javascript - version 8](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#setpersistence)
- [Authentication State Persistence](https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-8)

🔗 관련레포 : [트위터 클론코딩](https://github.com/sukyoungshin/twitter-clone) <br>

- 사용했던 메서드
- App.js<br/>

  > [onAuthStateChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#onauthstatechanged) : auth상태에 변화가 있음을 감지하는 observer. <br/>

- Auth.js<br/>
  > [createUserWithEmailAndPassword](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0#createuserwithemailandpassword) : promise를 반환함<br/> > [UserCredential](https://firebase.google.com/docs/reference/js/v8/firebase.auth?authuser=0#usercredential)<br/>
