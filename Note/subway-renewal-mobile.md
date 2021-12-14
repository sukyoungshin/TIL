# Subway-renewal-mobile

subway-renewal-mobile를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues

### 커링함수 Currying

아래의 조건으로 캐러셀을 구현하기 위해, JavaScript/jQuery 방식으로 실제 DOM의 index#를 추출하여 구현하고자 하였으나 실패.

1. 페이지네이션(li tag)를 클릭하면 선택된 li태그의 색상이 변해야 한다
2. 클릭한 페이지네이션의 index#에 맞는 광고 캐러셀 컨텐츠를 보여줘야 한다.

> 💡 Solution : 리액트에서는 선택한 index를 상태로 저장하여 업데이트 해주어야 한다. 깔끔하게 코드를 작성하기 위해서 커링함수를 이용하여 해결했다. (함수를 실행해서 새로만든 함수를 리턴하는 방식) 🔗[커링함수](https://code.tutsplus.com/tutorials/understanding-function-currying-in-javascript-and-when-to-use-it--cms-37867), [자바스크립트Info](https://ko.javascript.info/currying-partials)

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

(...)

<AdPagination className="ad_pagination">
{AdContents.map((content) => (
  <AdPaginationList
    key={content.id}
    isSelected={content.id === selectedId}
    onClick={handleClick(content.id)}
  ></AdPaginationList>
  ))}
</AdPagination>
```

<br/>

## WebAPI (window 관련)

카카오맵 API를 이용하여, 새 창을 오픈하여 주소정보를 받아올 때 WebAPI인 `Window.postMessage()`와 `Window.opener`를 이용하여 구현하였다.

```
// Order.js

// postMessage
const HandlePopUp = () => {
  window.open('search', 'addressSearch', "width=380 height=580 left=726 top=306").postMessage('message');
};

// Dispatch Event
useEffect(() => {
  const receiveMessage = (event) => {
    if (event.origin !== window.location.origin) return;
    if (event.source.name !== 'addressSearch') return;

    setAddrValue(event.data); // 고객의 주소지 저장
    getGeocode(event.data); // x좌표 y좌표 셋팅
    setSubwayPlaces([]); // 기존값 삭제
  };

  window.addEventListener("message", receiveMessage, false);
}, []);
```

> 💡 Note : [Window.postMessage()](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)
> [Window.opener](https://developer.mozilla.org/ko/docs/Web/API/Window/opener)

<br/>

## React-router

`<Link>`나 `useNavigate()`를 사용하여 페이지 이동 시, `state`를 다음 페이지로 전달해줄 수 있다. (type : Object).
다음 페이지에서는 `useLocation`을 사용하여 state 전달받는다.

```
// Order.js

const handleBtnSelected = useCallback((id) =>
  () => {
    setSelectedBtnId(id); // 선택한 버튼의 인덱스 저장
    setIsBtnSelected((prev) => !prev); // 버튼 스위치
    navigate('/menu',  { state: isSelectedSubway }); // 선택된 써브웨이매장 정보를 다음페이지(/menu)로 전달한다.
  }
);

(...)

{
  ButtonOptions.map((option) => (
    <BtnContainer key={option.id}>
      <DeliveryButton
        type="button"
        id={option.id}
        isBtnSelected={option.id === selectedBtnId}
        onClick={handleBtnSelected(option.id)}
      >
        {option.text}
      </DeliveryButton>
    </BtnContainer>
  ))
}
```

```
// Menu.js

const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
  if (location.state === null) return navigate(-1); // 이전페이지에서 정보가 넘어오지 않았으면 이전 페이지로 강제이동
  console.log(location.state); // 이전 페이지에서 입력받은 정보가 콘솔에 출력됨
}, []);
```

> 💡 Note : 공식문서의 Location State 내용 참고 🔗 [React-router 공식문서](https://reactrouter.com/docs/en/v6/getting-started/concepts)

<br/>

## 카카오맵 API

jQuery로 카카오맵API를 사용할 때는 Geocoder 라이브러리를 따로 불러오지 않아도 에러없이 구현이 되었는데, React로 구현할 때는 import 되지 않는 문제가 있었다. `var geocoder = new kakao.maps.services.Geocoder();`

> 💡 Solution : index.html에 Geocoder 라이브러리를 셋팅하여 해결. 왜 실행이 다르게 되는지 아직 잘 모르겠다. 🔗[카카오 지도API 가이드](https://apis.map.kakao.com/web/guide/#whatlibrary)

<br/>

### 구글OAuth 로그인 관련

- 구글OAuth 로그인함수는 localhost에서 정상 동작하지 않는다. <strike>(3시간 삽질하고 알게 된 사실...)</strike>
  > 💡 Solution : 서버에 업로드하면 정상 작동된다. Netlify에 업로드하여 해결.

<br/>

- 다른 프로젝트(blog-project)에서 구글OAuth 로그인 연동을 해본 뒤 해당 프로젝트에 똑같은 코드를 적용했음에도 불구하고, 구글 OAuth 로그인함수가 정상적으로 작동하지 않았다. (현재 프로젝트에는 kakao API도 있기 때문에 아마도 js 렌더링 순서에 문제가 있던 것으로 추정됨)
  > 💡 Solution : useEffect 훅 내부에서 script파일을 생성하여 동적으로 구글OAuth 스크립트를 호출해서 해결.

```
// // GoogleLogin.js

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

- 구글 로그인버튼 custom design이 적용되지 않는 이슈. <br/>
  공식문서에서 로그인 버튼을 커스터마이징 할 수 있는 [몇 가지 방법](https://developers.google.com/identity/sign-in/web/build-button)을 확인했으나, 첫번째 방법은 내가 원하는 방식으로 예쁘게 커스텀 할 수가 없고, 두 번째 방법은 내가 원하는 방식으로 커스텀은 가능하지만 CORS 이슈가 있었다. (디자인때문에 굳이 프록시까지 건들고 싶지는 않았다.)
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

### Styled-components (CSS in JS)

프로젝트를 시작할 때는 normal CSS를 사용하여 스타일링을 하였으나, 프로젝트가 커지면서 다음과 같은 단점을 느꼈습니다.

1. 동적으로 css를 변화시킬 수 없음.
2. 컴포넌트마다 css파일을 생성하니 파일이 늘어나서 점점 폴더 구조가 복잡해짐.

> 💡 Solution : 두 가지 단점을 모두 해결해줄 수 있는 styled-components(CSS-in-JS)를 도입하였습니다. 🔗[CSS-in-JS의 장점](https://www.s-core.co.kr/insight/view/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EA%B4%80%EB%A6%AC-css-in-js-vs-css-in-css/)

<br/>

- li태그에 가상선택자::before, ::after (pseudo elements)가 제대로 적용되지 않는 이슈<br/>

> 💡 Solution : 가상선택자 사용을 포기했으나, 후에 알게 된 해결방법 : JSX에서는 escaping 문자를 두 번 써야한다.

```
// Styled.js

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

> 💡 Solution : Deploy settings -> Environment Variables -> Set `Key: CI` and `Value: false`. 🔗 [StackOverFlow](https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n/67503150)

<br/>

## Redirects

Netlify에 deploy 후, WebAPI postMessage를 사용하여 생성한 새 window창이 Page Not Found로 제대로 작동되지 않았음<br/>
Error code : `Looks like you've followed a broken link or entered a URL that doesn't exist on this site.`

> 💡 Solution : 공식문서를 참고하여 Netlify.toml 파일을 생성하여 redirects 설정하여 해결. 🔗 [Syntax for the Netlify configuration file](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file)

<br/>

<br/><br/>

## Reference

🔗 [LIVE DEMO](https://subway-renewal-mobile.netlify.app/),
[깃허브코드](https://github.com/sukyoungshin/subway-renewal-mobile)
