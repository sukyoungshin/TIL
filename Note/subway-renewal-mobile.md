# Subway-renewal-mobile

subway-renewal-mobile를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

  
## JavaScript 
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

### 속성 접근자(bracket notation)
Menu페이지를 구현할 때 속성접근자를 사용하여 구현하였다. 프로젝트 진행하며 처음 알게 된 JS문법.<br/>

- 속성접근자? <br/>
변수에 따라 변수값에 동적으로 접근할 수 있게 하는 것. <br/>
key값을 동적으로 할당할 수 있다는 장점이 있다. (key값에는 문자열만 올 수 있음)
```
// Basic syntax
const Object = {
  [function(){}] : 'hi'
};
Object['function(){}']; // 'hi'

// Ex
const NAME = 'NAME';
const obj = {
  MY: 'my',
  [NAME]: 'name', // key에 변수값 NAME을 지정함
};
console.log(obj); // {MY: 'my', NAME: 'name'}

const NAME = '길동';
const obj = {
  MY: 'my',
  [NAME]: 'name',
};
console.log(obj); // {MY: 'my', 길동: 'name'}

const NAME = prompt('what is your name');
const obj = {
  MY: 'my',
  [NAME]: 'name',
};
console.log(obj); // {MY: 'my', sukyoung: 'name'} - 이런식으로 prompt에서 받아온 값을 key값으로 '동적으로' 할당할 수 있다.
```

<br/>

> 속성 선택자를 적용한 코드 <br/>
> 조건 : Menu페이지에서 카테고리을 선택하면, 선택된 카테고리에 맞는 메뉴목록을 불러와서 화면에 나타내준다.

```
// Datas.js

// 메뉴카테고리
export const MenuCategories = [
  {
    id: 0,
    title: '기본메뉴',
    titleEng : 'Default',
    imgSrc : '/sandwich/italianbmt.png', // 수정
  },
  {
    id: 1,
    title: '샌드위치',
    titleEng : 'Sandwiches',
    imgSrc : '/sandwich/eggmayo.png',
  },
  {
    id: 2,
    title: '샐러드',
    titleEng: 'Salads',
    imgSrc : '/salad/shrimp.png',
  },
  {
    id: 3,
    title: '랩기타',
    titleEng: 'Wraps',
    imgSrc : '/wrap/shrimp_egg_grilled_wrap.png',
  },
];

export const TabContents = {
  // 속성 접근자(bracket notation), Routing Design Patterns
  [ MenuCategories[0].titleEng ] : Default,
  [ MenuCategories[1].titleEng ] : Sandwiches,
  [ MenuCategories[2].titleEng ] : Salads,
  [ MenuCategories[3].titleEng ] : Wraps,
};
```

```
// Menu.js
import { MenuCategories, TabContents, BASEURL } from '../common/Datas';

// 선택된 카테고리 저장
const [ CategoryTitle, setCategoryTitle ] = useState(MenuCategories[0].titleEng); // 'Default'
const currentSelectedMenuItems = TabContents[CategoryTitle]; // 리액트에서는 Object를 child를 사용할 수 없다.

(...)

return (

(...)

  // 카테고리선택
  {
    MenuCategories
      .map((category) => (
        <li key={category.id}>
          <CategoryBtn 
            type="button"
            isBtnSelected={category.id === categoryId}
            onClick={handleButtonActive(category.id, category.titleEng)}
          >
            <img src={`${BASEURL}${category.imgSrc}`} alt={category.title} />
            <span>{category.title}</span>
          </CategoryBtn>
        </li>
    ))
  }

(...)

  // 선택된 카테고리에 맞는 아이템메뉴를 화면에 렌더링
  {
    currentSelectedMenuItems
    .map((menu) => (
      <MenuArticle 
        key={menu.id}
        isMenuSelected={menuId === menu.id} 
      >
        <OrderIconButton 
          isMenuSelected={menuId === menu.id} 
          onClick={handleOrderMenu(menu.id)}
        >
          <BsCart2 />
        </OrderIconButton>
        <div className="menu-name-wrapper">
          <h3 className="menu-name-kor">{menu.nameKor}</h3>
          <p className='menu-name-eng'>{menu.nameEng}</p>
        </div>
        <div className="menu-img-wrapper">
          <img src={`${BASEURL}${menu.imgSrc}`} alt={`${menu.nameKor}`} className="menu-img" />
          <span className="menu-description">{menu.description}</span>
        </div>
        <p className="menu-price">{menu.price} KRW</p>
      </MenuArticle>
    ))
  }
);
```

<br/>

### Call by reference
각 다른 reducer 함수에서 동일한 값을 초기값으로 가지며, 다른 리듀서에서 업데이트한 값이 동일하게 변경되어야 했다. <br/>
call by reference를 사용하여 해결하였다. 🔗[생활코딩 참조](https://opentutorials.org/course/743/6507)<br/>

```
// call by value --> primitive type을 복사
// - primitive type은 사용이나 선언 될 때 마다 새로 메모리에 올라간다.
// - call by value는 스코프가 중요하다.
a = {a:123}
b = a
b.a = 333
a.a // 333
a === b; // true

// call by reference --> 배열의 값을 참조
// - 불변성을 지켜준다
// - call by reference 특징이 있으므로 객체는 사용시 주의해야한다.
a = () => ({val:123})
a() === a() // false
```
<br/>

실제 코드
```
// reducers/index.js
export const initialState = () => ({
"category": {
    "id": 0,
    "nameKor": "에그마요",
    "nameEng": "Egg Mayo",
    "imgSrc": "/sandwich/eggmayo.png",
    "kcal": 480,
    "description": "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    "price": 4300,
    "amount": 1
  },
 (...생략)
});
```
<br/>

### Named Exports 

라우터 컴포넌트를 한 페이지에서 처리하여 한 번에 내보내기 위해 export 구문을 다음과 같이 사용하였다. 
```
// pages/router.js
export { default as SplashScreen} from './SplashScreen';
export { default as Layout} from './Layout';
export { default as Main} from "./Main";
export { default as Login} from "./Login";
export { default as Signin} from "./Signin";
export { default as Signup} from "./Signup";
export { default as Addr} from './Addr';
export { default as PostSearch} from './PostSearch';
export { default as Menu} from './Menu';
export { default as Bread} from './Bread';
export { default as Cheese} from './Cheese';
export { default as Veggie} from './Veggie';
export { default as Sauce} from './Sauce';
export { default as OrderPageLayout} from './OrderPageLayout';
export { default as OrderCart} from './OrderCart';
export { default as OrderInfo} from './OrderInfo';
export { default as OrderMenu} from './OrderMenu';
export { default as OrderConfirmLayout} from './OrderConfirmLayout';
export { default as Auth} from './Auth';
export { default as NoMatch} from './NoMatch';
```

> 💡 참고 링크 <br/>
> MDN: [Exports](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export) <br/>
> React 공식문서 : [Named Exports](https://ko.reactjs.org/docs/code-splitting.html#named-exports) <br/>

<br/>

### WebAPI (window 관련)

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

### 제어컴포넌트 Controlled Component (React)

`input type="range"`에 value 속성만 주었더니 제대로 작동되지 않았다. onChange 이벤트를 등록하니 해결되었다. <br/>

```
// Veggie.js

<RangeButton 
  id={veg.id}
  type="range" 
  min="0"
  max="100"
  step="10"
  value={step[veg.id]} /* 폼요소를 제어하기 위해, 대화형 속성 value을 사용한다. */
  onChange={handleStepChange(veg.id)} /* onChange 이벤트를 함께 등록하여 value 속성을 읽을 수 있다. */
/>
```

> 💡 Note : 제어컴포넌트는 value값을 state를 이용해서 제어해야한다. [React에서 폼을 다루기 위한 권장 방법](https://thebook.io/006961/part01/ch07/01-04/)
> 
> React는 변경 가능한 속성인 value, checked, selected를 두어 폼 요소를 특별하게 다루고 있다. 이 특별한, 변경 가능한 속성을 대화형 속성(interactive properties)이라고 부른다. 폼 요소에 연결한 onChange 같은 이벤트에서 이 속성을 읽을 수 있다.
> 

<br/>

### form
회원가입 페이지를 작업할 때, form 외부에 submit 버튼을 배치하였더니, 폼 내부 input의 `required` 속성이 제대로 작동되지 않았다. 

```
<form id='my-form' onSubmit={alert('Form submitted!')}>
    // Form Inputs go here    
</form>
<button form='my-form' type="submit">Outside Button</button>
```
> 💡 Solution : HTML의 속성을 이용하면 간단히 해결된다. form에 id값을 주고, button에 동일한 id값을 전달해주면 된다. [StackOverFlow](https://stackoverflow.com/questions/52577141/how-to-submit-form-from-a-button-outside-that-component-in-react)

<br/>

### input type="checkbox"
회원가입 페이지를 작성할 때 겪은 이슈.
여러개 input의 값을 하나의 Object로 관리하고, 여러개 input을 하나의 함수로 컨트롤 하려고 하였는데 checkbox input이 제대로 실행되지 않았다. <br/>

문제가 되었던 코드 : 
```
// SignUp.js

const [ userInfo, setUserInfo ] = useState({
  username : '',
  userpassword : '',
  userphone: '',
  useraddr : '',
  agreement: false,
});
const handleUserInput = (e) => {
  setUserInfo({
    ...userInfo,
    [e.target.id] : e.target.value || e.target.checked, 
    // 예상 : 해당 input에 e.target.value 값을 지정해주지 않았으니까 
    //        userInfo Object의 value는 e.target.checked으로 업데이트가 되어서, 
    //        {agreement : true 또는 false} 형태로 업데이트가 될 것이라 생각했다.
    // 결과 : 그러나 userInfo Object는 {agreement : 'on'}으로 업데이트가 되었다.
  });
};

/* input */
<input 
  type="checkbox" 
  id="agreement" 
  className='checkbox' 
  checked={userInfo.id} // input에 value값을 지정해준 적이 없음
  onChange={handleUserInput}
  required
/>
<label htmlFor="agreement">본인은 만 14세 이상입니다. (필수)</label>
```

> 💡 Note : `input type="checkbox"`는 value값이 생략되어있으면 기본값이 on으로 들어가는 특징이 있다. [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

따라서, 아래 방법으로 해결했다 :
```
// SignUp.js
const handleUserInput = (e) => {
  if (e.target.type === 'checkbox') {
    setUserInfo({
      ...userInfo,
      [e.target.id] : e.target.checked,
    });
    setIsBtnActivated(e.target.checked);
  } else {
    setUserInfo({
      ...userInfo,
      [e.target.id] : e.target.value,
    });
  }
};
```

<br/>

### 엣지케이스
야채 선택하는 페이지에서, 야채 옵션을 전체선택 / 해제 체크박스를 구현하는 것이 어려웠다. <br/>

```
// Veggie.js

// 체크박스 선택 관련
- 체크박스가 클릭되었을 때, 1) 전체 step을 50으로 조정한다. 2) CTA버튼을 활성화시킨다.
- 체크박스가 해제되었을 때, 전체 step을 0으로 바꾼다. <br/>

// 수량조절 버튼 관련, 
- 야채 중 하나라도 step이 0이 되면, 전체선택 체크박스가 해제된다.
- 야채 전체 step이 10이상이면, 전체 선택 체크박스가 체드된다. 

// range 조정 관련, 
- 클릭한 index의 id값을 받아와서, 해당 id값을 key값으로 사용하고 (속성접근자 bracket notation 사용)
- 클릭한 index의 value값을 숫자로 바꿔온다. (valueAsNumber)

// range값은 useState(step)을 사용하여 Object형태로 관리
```

> 💡 Note : [valueAsNumber](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
<br/>

## React Structure 관련

프로젝트 시작 시에는 공통 styles와 데이터만 처리하고 페이지는 한 디렉토리 내에서 핸들링하였는데, 프로젝트가 커지다보니 유지보수 및 가독성이 좋지 않아 구조 변경의 필요성을 느끼게 되었다. [리액트 공식문서](https://ko.reactjs.org/docs/faq-structure.html)에 따르면, React는 파일을 어떤 식으로 폴더에 분류할 것인지에 대해서 명확하게 제시하고 있지 않기에 여러가지 패턴을 찾아보고 가장 유지보수가 수월할 것 같은 방식으로 구조를 설계하였다. 
> 💡 Note : 참고한 링크 [React Architecture Patterns for Your Projects](https://blog.openreplay.com/react-architecture-patterns-for-your-projects)

<br/>

## Array.prototype.fill()

- 기본 사용법 (참고 : [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill))
```
const array1 = [1, 2, 3, 4];

console.log(new Array(10).fill('🥪'));
console.log([array1].fill('서브웨이'));
```

코드에 적용한 예 :
```
// OrderCart.js

const Full = ({ AddedCartItem, itemCount }) => {
  const { nameKor, nameEng, imgSrc, description, price } = AddedCartItem;
  const ItemArray = new Array(itemCount).fill(null);  // ✅

  return (
    <>
    <SectionStyled>
      <h2>장바구니 내역</h2>
      {
        ItemArray.map((item, index) => (
          <MenuCardStyled key={index}>
            <article className="card-img">
              <img 
                src={`${BASEURL}${imgSrc}`} 
                alt={`${nameKor}, ${nameEng}`}
              />
            </article>
            <article className="card-content">
              <h3>
                {nameKor}
                <span>{price} krw</span>
              </h3>
              <p>
                {description}
              </p>
            </article>
          </MenuCardStyled>
        ))
      }
    </SectionStyled>
    </>
  );
};
```
<br/>

### HOC
여러 페이지에 잘못된 방식으로 접근하면, 동일한 페이지(NoMatch)가 보이도록 구현해야했다. <br/>
이 로직을 한 곳에서 정의하고 많은 컴포넌트에서 로직을 공유할 수 있게 하기 위해 [HOC](https://ko.reactjs.org/docs/higher-order-components.html#dont-mutate-the-original-component-use-composition)(컴포넌트를 가져와 새 컴포넌트를 반환하는 함수)을 사용하여 구현하였다.
 
```
const goToMainIfAddrIsNotExistHOC = (Component) => {
  
  return () => {
    /* 리덕스 및 라우터 */
    const addr = useSelector(addrSelector);
    const navigate = useNavigate();

    useEffect(() => {
      if (addr === undefined) {
        setTimeout(() => navigate(LINK.ROOT), 1000) // 잘못된 접근 시, 메인페이지로 이동
      }
    // eslint-disable-next-line
    }, []);
    if (addr === undefined) return <NoMatch />;

    return <Component />;
  }
};

export default goToMainIfAddrIsNotExistHOC;
```

> 💡 `useNavigate`를 바로 사용하였더니 작동되지 않았다. 렌더 단계에선 동작하지 않게 설계되어 있으므로, setTimeout()내부에서 사용하도록 한다.
>  [참고 : react-router issue](https://github.com/remix-run/react-router/issues/8248#issuecomment-962470602)

```
// router.js

const render = (C) => <C/>;
const elementLists = [
  {
    path : RouterPath.ROOT,
    element : <AppLayout/>,
    children : [
      {
        index: true,
        element : <Main />,
      },
      {
        path : RouterPath.MAIN,
        element : <Main />,
      },
      {
        path : RouterPath.ADDR,
        element : <Addr />,
      },
      {
        path : RouterPath.MENU,
        element: render(goToMainIfAddrIsNotExistHOC(Menu)),
      },
      {
        path : RouterPath.BREAD,
        element: render(goToMainIfAddrIsNotExistHOC(Bread)),
      },
      (......생략)
];
```



<br/>


## 라이브러리 관련
### React-router & Custom Hook

프로젝트 초기에는 App.js의 구조가 아래와 같았다. 
```
// App.js

const App = () => {

  // Splash Screen
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
      { 
        isLoading
        ? <Route path="/" element={<SplashScreen />} />
        : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="order" element={<Order />} />
            <Route path="menu" element={<Menu />} />
            <Route path="search" element={<PostSearch />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
          </Route>          
          )
      }
      </Routes>
    </BrowserRouter>
  );
};
export default App;
```
1) 프로젝트 규모가 커지면서 App.js에서 사용하는 Route elements의 갯수가 늘어나다보니 정돈이 필요해졌다. <br/>
Route elements 요소들을 배열로 꺼내어 map을 돌리고자 하였으나, React Router 6는 기존 버전과 달리 배열 형태로 Route property를 전달할 수 없으며, 공식문서에 따르면 아래의 두 가지 방법중 하나로 해결해야 한다. 
  - `<Routes> and <Route>` if you're using JSX
  - `useRoutes` if you'd prefer a JavaScript object-based config
> 💡 Note : StackOverFlow [Update for React Router v6](https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router), react-router 공식문서 [useRoutes](https://reactrouter.com/docs/en/v6/api#useroutes)

따라서, 좀 더 깔끔하게 컴포넌트를 정리하기 위해 `useRoutes` 훅을 이용하였다. (참고 : router.js)<br/>

2) router.js로 router elements를 분리시켰더니 메인페이지에 접속할 때마다 SplashScreen이 3초동안 실행되는 문제가 발생했다. <br/>
Session Storage를 이용하여, 최초 1회만 SplashScreen이 실행되도록 설정해주었다. 컴포넌트를 간결하게 하기 위해 비즈니스 로직은 커스텀훅으로 따로 빼내어주었다.
> 💡 커스텀 훅 : [React공식문서](https://ko.reactjs.org/docs/hooks-custom.html), <br/>
> [Custom hook의 return value를 array or object 중 무엇으로 해야할까](https://blog.doitreviews.com/development/2020-07-01-return-value-of-custom-hooks/)

<br/>


```
// Main.js
const Main = () => {

  /* 라우터 */
  const navigate = useNavigate(); 
  const handleNavAddr = () => navigate(LINK.ADDR);

  /* 스플래쉬스크린 커스텀훅 */
  const isLoading = useSplashScreen();

  return (
    <>
      {   
        isLoading 
        ? <SplashScreen />
        : <MainScreen handleNavAddr={handleNavAddr} />
      }  
    </>
  );
};

export default Main;
```

```
// hooks.js
import { useState, useEffect } from "react";

export const useSplashScreen = () => {

  const LOADING = 'loading';
  const [ isLoading, setIsLoading ] = useState(
    JSON.parse(sessionStorage.getItem(LOADING))
  );

  useEffect(() => {
    if (isLoading === null) {
      sessionStorage.setItem(LOADING, true);
      setIsLoading(true);
    } 
    setTimeout(() => {
      sessionStorage.setItem(LOADING, false)
      setIsLoading(false);
    }, 3000);

    // eslint-disable-next-line
  }, []);

  return isLoading;
};
```


<br/>

- `<Link>`나 `useNavigate()`를 사용하여 페이지 이동 시, `state`를 다음 페이지로 전달해줄 수 있다. (type : Object).
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

### 카카오맵 API

jQuery로 카카오맵API를 사용할 때는 Geocoder 라이브러리를 따로 불러오지 않아도 에러없이 구현이 되었는데, React로 구현할 때는 import 되지 않는 문제가 있었다. `var geocoder = new kakao.maps.services.Geocoder();`

> 💡 Solution : index.html에 Geocoder 라이브러리를 셋팅하여 해결. 왜 실행이 다르게 되는지 아직 잘 모르겠다. 🔗[카카오 지도API 가이드](https://apis.map.kakao.com/web/guide/#whatlibrary)

<br/>

### OAuth 프로토콜 관련
🔗[OAuth Protocol process](https://gdtbgl93.tistory.com/180)


### 카카오 OAuth 로그인 관련
- 인가코드를 받아오기 위해 새로운 페이지를 만들어서 진행하였다.
> Flow : KakaoLogin 로그인요청 -> Auth 페이지에서 인가코드 받아옴 -> 메인 페이지로 이동

- 검색해보면 대부분 axios로 post 요청을 날리는데, 라이브러리 의존성을 낮춰서 요청해보고 싶어서 [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)를 사용하였다.
- fetchAPI를 사용 시, 에러 핸들링을 쉽게 하기 위해 `.catch`를 넣는다. 🔗[에러핸들링](https://ko.javascript.info/promise-error-handling)

- [POST 요청](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/POST) 시, Content-Type이 x-www-form-urlencoded;charset=utf-8인 경우에, [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)을 사용하여 parameters를 전달해준다. 🔗[StackOverFlow](https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch)

```
const PARAMS = new URLSearchParams(); // URL 쿼리스트링 객체로 반환해준다

PARAMS.append('a', 123);
PARAMS.append('b', 456);
PARAMS.append('c', 789);
PARAMS.append('d', 012);

PARAMS.toString(); // 'a=123&b=456&c=789&d=10'
```

```
// Auth.js

const getToken = () => {

  const payload = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: CLIENT_SECRET,
  });

  // access token 가져오기
  const fetchOption = {
    method : 'POST',
    body : payload,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
  };

  fetch('https://kauth.kakao.com/oauth/token', fetchOption)
  .then((response) => response.json())
  .then((json) => {
    window.Kakao.Auth.setAccessToken(json.access_token); // access token 설정
    navigate('/');
  })
  .catch((error) => {
    console.log('error', error);
  });
};

useEffect(() => {
  getToken();
}, []);

```
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

## HTTP Method

<br/>

### Styled-components (CSS in JS)

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
