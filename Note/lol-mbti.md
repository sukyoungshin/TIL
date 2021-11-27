# lol-mbti
롤 mbti를 작업하며 겪었던 이슈를 정리한 파일입니다.

## Issues
### Node Version Upgrade
- Node 버전을 17.0.1로 업그레이드 하였더니 local에서 yarn start가 작동되지 않았다. (openssl이슈) <br/>

> 💡 Solution :
스크립트에 아래 코드 추가입력하여 문제해결 🔗 [Ref](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)
```
"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    }
``` 
<br/>
- Node버전 업그레이드 후, Netlify서버에서 deploy 실패하였다. (서버 Node version과 로컬 Node version이 일치하지 않아서 생긴 이슈)<br/>

> 💡 Solution :
[이 방법](https://answers.netlify.com/t/deploy-failed-build-script-returned-non-zero-exit-code-2/44263/2)으로 해결. 🔗[Netlify DOC](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)


### styled-components
- 요소에 가상선택자::before, ::after (pseudo elements)가 제대로 적용하지 않는 이슈

```
const URLshareWrapper = styled.div`
  width: 100%;
  
  display: inline-flex;
  flex-direction: row;
  position: relative;
  
  input[type="text"] {
    flex: 1;
    padding-left: 32px;
  
    &::after {
      display: inline-blcok;
      content: '🔗';
      width: 24px;
      height: 24px;

      position: absoloute;
      top: 4px;
      left: 0;
      z-index: 999;

      opacity: 0.6;
    }
  }
`;
```

> 💡 Solution : input에 가상선택자를 주지 않고, span태그를 이용하여 문제해결 🔗[StackOverFlow](https://stackoverflow.com/questions/2587669/can-i-use-a-before-or-after-pseudo-element-on-an-input-field/4660434#4660434)

<br/><br/>
## Reference
> 🔗 [LIVE DEMO](https://mbtilol.netlify.app/), [깃허브 코드](https://github.com/sukyoungshin/lol-mbti)
