# Portfolio app

React로 작업한 개인 포트폴리오 웹앱을 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues
### Deployment (GitHub Pages)

CRA 공식문서의 🔗[GitHub Pages](https://create-react-app.dev/docs/deployment/)를 참고하여 진행하였으나 Deploy가 정상적으로 완료되지 않았다. (<strike>오늘도 3시간 삽질... 참.좋.다..😂</strike>) <br/>

> 💡 Solution : remote repo 홈페이지URL이 SSH URL이었던것이 문제인 것으로 추정되어, 공식문서 [GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)를 참고하여 SSH URL을 HTTPS URL로 바꾸어주고, package.json의 hompage 주소를 HTTPS URL로 바꾸어주었더니 배포"는" 정상적으로 완료되었다.

<br/>
그러나 해당 URL에 접속하면 404 Not Found 페이지가 나왔다. 아무리 기다려도 Published가 완료되지 않았다.🤔
<br/><br/>

> 💡 Solution : 해당레포의 Settings -> Pages -> Source Branch를 바꿔주니 해결. 해당 페이지에서 배포링크를 확인할 수 있었다

<br/><br/>

## Reference
🔗 [LIVE DEMO](), [깃허브코드]()
