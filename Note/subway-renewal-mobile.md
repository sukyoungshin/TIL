# Subway-renewal-mobile
subway-renewal-mobile를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Issues

### 구글OAuth 로그인 관련 
- 구글OAuth 로그인함수는 localhost에서 정상 동작하지 않는다. <strike>(3시간 삽질하고 알게 된 사실...)</strike>
> 💡 Solution : 서버에 업로드하면 정상 작동된다. Netlify에 업로드하여 해결.

<br/>

- 다른 프로젝트(blog-project)에서 구글oauth 로그인 연동을 해본 뒤 해당 프로젝트에 똑같은 코드를 적용했음에도 불구하고, 구글 OAuth 로그인함수가 정상적으로 작동하지 않았다. (현재 프로젝트에는 kakao API도 있기 때문에 js 렌더링 순서에 문제가 생긴 것으로 추정됨)
> 💡 Solution : useEffect 훅 내부에서 script파일을 생성하여 동적으로 구글oauth 스크립트를 호출해서 해결.

<br/>

- 구글 로그인버튼 custom design이 제대로 적용되지 않는 이슈. 
    - 구글링하여 [몇 가지 방법](https://developers.google.com/identity/sign-in/web/build-button)을 찾았으나, 
    - 1) 첫번째 방법은 내가 원하는 방식으로 예쁘게 커스텀 할 수가 없고, 
    - 2) 두번째 방법은 CORS 이슈가 있었다. 디자인때문에 굳이 프록시까지 건들고 싶지는 않았다.
> 💡 Solution : CSS OVERRIDE를 사용하니 간단하게 해결되었다. 다만 `!important;`를 사용한 것이 찜찜하다.



### Styled-components
- li태그에 가상선택자::before, ::after (pseudo elements)가 제대로 적용되지 않는 이슈<br/>
 
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
<br/>

### Netlify CI/CD Deploy
- Netlify 환경에서 eslint warning을 error로 간주해서 배포실패
```
2:53:13 AM: $ yarn build
2:53:13 AM: yarn run v1.22.10
2:53:13 AM: $ react-scripts --openssl-legacy-provider build
2:53:15 AM: Creating an optimized production build...
2:53:38 AM: 
2:53:38 AM: Treating warnings as errors because process.env.CI = true.
2:53:38 AM: Most CI servers set it automatically.
2:53:38 AM: 
2:53:38 AM: Failed to compile.
2:53:38 AM: 
2:53:38 AM: src/components/Carousel.js
2:53:38 AM:   Line 9:10:  'isSelected' is assigned a value but never used  no-unused-vars
2:53:38 AM: src/components/GoogleLogin.js
2:53:38 AM:   Line 7:11:  'userInfo' is assigned a value but never used  no-unused-vars
2:53:38 AM: error Command failed with exit code 1.
2:53:38 AM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
> 💡 Solution : Deploy settings -> Environment Variables -> Set `Key: CI` and `Value: false`.  [StackOverFlow](https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n/67503150)

<br/>

## Lesson
### 커링함수 Currying

<br/><br/>

## Reference
[깃허브코드](https://github.com/sukyoungshin/subway-renewal-mobile)
