# Subway-renewal-mobile

subway-renewal-mobile를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues

### 커링함수 Currying
아래의 조건으로 캐러셀을 구현하기 위해, JavaScript/jQuery 방식으로 실제 DOM의 index#를 선택해서 구현하고자 하였으나 실패.
1) 페이지네이션(li tag)를 클릭하면 선택된 li태그의 색상이 변해야 한다
2) 클릭한 페이지네이션의 index#에 맞는 광고 캐러셀 컨텐츠를 보여줘야 한다.

  > 💡 Solution : 리액트에서는 커링함수를 이용하여 해결한다. (함수를 실행해서 새로만든 함수를 리턴하는 방식) (*공부 필요*)

```
// Carousel.js

  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
  const [isSelected, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback((id) => 
  // 커링 : 함수를 실행해서 새로만든 함수를 리턴
    () => {
      console.log(id);
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    }, []); 
```

<br/>

### 구글OAuth 로그인 관련

- 구글OAuth 로그인함수는 localhost에서 정상 동작하지 않는다. <strike>(3시간 삽질하고 알게 된 사실...)</strike>
  > 💡 Solution : 서버에 업로드하면 정상 작동된다. Netlify에 업로드하여 해결.

<br/>

- 다른 프로젝트(blog-project)에서 구글oauth 로그인 연동을 해본 뒤 해당 프로젝트에 똑같은 코드를 적용했음에도 불구하고, 구글 OAuth 로그인함수가 정상적으로 작동하지 않았다. (현재 프로젝트에는 kakao API도 있기 때문에 아마도 js 렌더링 순서에 문제가 있던 것으로 추정됨)
  > 💡 Solution : useEffect 훅 내부에서 script파일을 생성하여 동적으로 구글oauth 스크립트를 호출해서 해결.

```
  useEffect(() => {
    // 동적 script 생성하여 head에 추가
    const script = document.createElement('script');
    script.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.append(script);
  }, [])
```

<br/>

- 전역객체 🔗 [모던자바스크립트](https://ko.javascript.info/global-object) <br/>
구글 OAuth 내부 함수를 전역적으로 사용하기 위해 사용하였다. 프로젝트를 진행하며 처음 알게 된 JS 문법.
```
// GoogleLogin.js
  useEffect(() => {
    window.onSignIn = onSignIn;  // window 전역객체 사용하여 로그인함수 실행
  }, [onSignIn])
```

<br/>

- 구글 로그인버튼 custom design이 제대로 적용되지 않는 이슈. <br/>
구글링하여 [몇 가지 방법](https://developers.google.com/identity/sign-in/web/build-button)을 찾았으나, 첫번째 방법은 내가 원하는 방식으로 예쁘게 커스텀 할 수가 없고, <br/>두번째 방법은 내가 원하는 방식으로 커스텀은 가능하지만 CORS 이슈가 있었다. 디자인때문에 프록시까지 건들고 싶지는 않았다.
> 💡 Solution : CSS OVERRIDE를 사용하니 간단하게 해결되었다. 다만 `!important;`를 남발한 것이 매우 찜찜하다.
```
// Styled.js
export const LoginButton = styled.div`
  border-radius: 8px;
  /* css override - 구글기본스타일을 override하기 위해 어쩔 수 없이 important 사용*/
  div.abcRioButton.abcRioButtonLightBlue{
    width: 100% !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--color-white) !important;
    background-color: var(--color-google) !important;
    .abcRioButtonContentWrapper {
      display: inline-flex !important;
      flex-direction: row !important;
      justify-content: center !important;
      align-items: center !important;
      
      .abcRioButtonContents{
        line-height: 0 !important;
        font-size: var(--font-size-medium) !important;
      }
    }
    .abcRioButtonIcon {
      div {
        width: 14px !important;
        height: 14px !important;
        
        svg {
          width: 14px !important;
          height: 14px !important;
          filter: drop-shadow(0 0 0.1px white) !important;
        }
      }
    }
  }
`;
```

<br/>

### Styled-components

- li태그에 가상선택자::before, ::after (pseudo elements)가 제대로 적용되지 않는 이슈<br/>

> 💡 Solution : 가상선택자 사용을 포기했으나, 후에 알게 된 해결방법 : JSX에서는 escaping 문자를 두 번 써야한다.

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


<br/><br/>

## Reference

[깃허브코드](https://github.com/sukyoungshin/subway-renewal-mobile)
