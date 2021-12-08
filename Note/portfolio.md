# Portfolio app

React로 작업한 개인 포트폴리오 웹앱을 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues
### CSS Variable
- [CSS 변수명 꿀팁](https://ohgyun.com/738)
- [CSS variables var() doesn't work in media query](https://stackoverflow.com/questions/40722882/css-native-variables-not-working-in-media-queries)

### CSS property
CSS속성인 background를 사용할 때 background 보다는 background-color을 쓰라고 권장하는 글을 보았다. <br/>
그러나 이유가 나와있지 않아서 검색해보고 다음과 같은 사실을 알게 되었다. 🔗 [background VS background-color](https://stackoverflow.com/questions/10205464/what-is-the-difference-between-background-and-background-color)

> 💡 Reason : background가 기존의 background-color, background-image 등을 reset을 시킨다. <br/>
> `(우선순위 : background > background-color, background-image 등)`

> 💡 Reason : CSS performance에도 영향을 끼친다. background가 background-color보다 약 2배정도 빠르다고 한다. <br/>
> `(속도 : background > background-color)`

<br/>

### Image 삽입
React에서 JSX 또는 CSS에 이미지 넣는 방법들
1. 리액트로 src안에 있는 이미지 넣는 법<br>
```
import 이미지 from './이미지경로.jpg'
<img src={이미지}>`
```

2. src안에 있는 이미지 css파일에 넣는 법 <br>
```
background-image : url('이미지경로')
```

3. public/assets 폴더 안에 있는 이미지 넣는 법 (* public 안에 assets 폴더를 만들어야 사용가능 *)
```
<img src="/assets/이미지명.jpg">
```

4. public/assets 폴더 안에 있는 이미지 css파일에 넣는 법 (* public 안에 assets 폴더를 만들어야 사용가능 *)

```
<div style={ {backgroundImage:'url(/assets/logo5121.png)'} }>
```

> 💡 Note : 다만 public 폴더 안에 넣을 경우, 사이트 주소가 좀 이상하거나 리액트프로젝트를 서브경로에 발행하는 경우엔 경로가 망할 수 있으니
src를 이용하거나 https://create-react-app.dev/docs/using-the-public-folder 참고하도록 한다. 🔗출처 : [코딩애플](https://online.codingapple.com/forums/topic/image-url-%EC%A7%88%EB%AC%B8-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4/)

<br/>

### Image pathName Issues
위 3번 방식으로 JSX에 이미지를 삽입했는데, local 서버에서는 이미지가 나타났으나 배포 서버에선 이미지가 보이지 않았다. 배포시 경로가 꼬인 것으로 보인다.

> 💡 Solution : 1번 방식으로 바꾸고, background-image 같은 경우에는 url을 props로 전달하여 적용하여 해결.
<br/>

### Deploy (GitHub Pages)

CRA 공식문서의 🔗[GitHub Pages](https://create-react-app.dev/docs/deployment/)를 참고하여 배포 진행하였으나 정상적으로 완료되지 않았다. (<strike>오늘도 3시간 삽질...🛠️</strike>) <br/>

> 💡 Solution : remote repo 홈페이지URL이 SSH URL이었던것이 문제인 것으로 추정되어, 공식문서 [GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)를 참고하여 SSH URL을 HTTPS URL로 바꾸어주고, package.json의 hompage 주소를 HTTPS URL로 바꾸어주었더니 배포"는" 정상적으로 완료되었다.

<br/>
그러나 해당 URL에 접속하면 404 Not Found 페이지가 나왔다. 아무리 기다려도 Published가 완료되지 않았다
<br/><br/>

> 💡 Solution : 해당레포의 Settings -> Pages -> Source Branch를 지정해주니 해결! 또한, Pages탭에서 배포링크를 확인할 수 있다.

<br/>

또한, 해당 레포의 이름은 `sukyoungshin.github.io`로 바꿔주어야 해당 링크가 절대경로가 되어 배포가 진행된다. 매우 중요!! <br/>

> 💡 Solution : 해당레포의 Settings -> Pages -> Source Branch를 지정해주니 해결! 또한, Pages탭에서 배포링크를 확인할 수 있다.

<br/>

### 기기별 테스트 
- 실제 모바일(Galaxy S7 Edge)에서 사이트에 접속했을 때와, 크롬 및 Firefox 화면 뷰에 차이가 있었다. 
<div style="display: flex; flex-direction: row;">
  <img src="https://raw.githubusercontent.com/sukyoungshin/TIL/main/Note/test1.jpg" style="width: 300px"/>
  <img src="https://raw.githubusercontent.com/sukyoungshin/TIL/main/Note/localhost_3000_(Galaxy%20S7%20EDGE).png" style="width: 300px"/>
</div><br/>

> 💡 Solution : 단순 CSS이슈였고 `<p></p>`태그 내부에 `<br/>`태그를 넣어주어 해결. 모바일에선 자연스럽게 줄넘김 처리가 안되는듯

<br/><br/>

## Reference
🔗 [LIVE DEMO](https://sukyoungshin.github.io/githubpage/), [깃허브코드](https://github.com/sukyoungshin/githubpage)
