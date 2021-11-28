# lol-mbti
롤 mbti를 작업하며 겪었던 이슈를 정리한 파일입니다.

## Issues
### Node Version Upgrade
- Node 버전을 17.0.1로 업그레이드 하였더니 local에서 yarn start가 작동되지 않았다. (openssl이슈)<br/>

> 💡 Solution : package.json에 아래 코드 추가입력하여 문제해결 🔗 [StackOverFlow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)
```
"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    }
``` 
<br/>

- Node버전 업그레이드 후, Netlify서버에서 deploy 실패하였다. (Node버전 이슈)<br/>


> 💡 Solution :
> 1) Node버전을 downgrade하는 방법이 있었으나 팀 프로젝트 진행으로 인해 버전다운을 진행 할 수 없었음 <br/>
> 2) 서버 Node버전과 로컬Node버전을 일치시켜서 해결 🔗[Netlify QnA](https://answers.netlify.com/t/deploy-failed-build-script-returned-non-zero-exit-code-2/44263/2), [Netlify 공식문서](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)

<br/>

### styled-components
- input태그에 가상선택자::before, ::after (pseudo elements)가 적용되지 않았다.
> 💡 Solution : empty태그는 가상선택자가 적용되지 않는다. 가상선택자 대신 span태그를 활용하여 문제해결 🔗[StackOverFlow](https://stackoverflow.com/questions/2587669/can-i-use-a-before-or-after-pseudo-element-on-an-input-field/4660434#4660434)
> 
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
      content: '🔗'; // 실행안됨. 가상선택자 after 대신 input태그 뒤에 span태그를 사용하여 문제해결
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

<br/>

- li태그에 가상선택자::before, ::after (pseudo elements)가 제대로 적용되지 않는 이슈 (li는 empty 태그가 아닌데!)
> 💡 Solution : JSX에서는 escaping 문자를 두 번 써야한다.

```
const PaginationList = styled.li`
    display: block;
    font-size: 16px;

    &::before{
        content: '\25CF'; // 실행안됨. 역슬래쉬를 한 번 더 사용하면 문제해결 '\\25CF';
        color: var(--color-white);
    }
`;
```


<br/><br/>
## Reference
> 🔗 [LIVE DEMO](https://mbtilol.netlify.app/), [깃허브 코드](https://github.com/sukyoungshin/lol-mbti)
