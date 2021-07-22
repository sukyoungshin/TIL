
## 1. HTML이란?

HyperText Markup Language의 약자로 사용자가 인터넷에서 클릭을 통해 자유롭게 이동하면서 해당 정보를 확인할 때 보는 웹 문서를 의미합니다. 

- HTML는 컨텐츠의 구조를 정의하는 마크업 언어이다.
- HTML문서의 확장자: *.html, *.htm (* 파일명에는 영문 대문자X 공백X. 특수문자는 _언더바와 -하이픈만 사용한다.)
- HTML은 텍스트, 이미지, 도형, 링크 등 다양한 요소를 포함할 수 있다.
- HTML은 작성하는 형식과 브라우저를 통해 표시하는 형식이 달라지는 언어이다.<br>


## 2. HTML5는 웹 표준이다

인터넷 초기에는 대부분 인터넷 익스플로러를 이용해 인터넷에 접속했습니다. 그래서 익스플로러를 제외한 다른 브라우저 (크롬, 오페라, 넷스케이프, 사파리... 등)에서는 웹 페이지가 익스플로러와는 다르게 보여지거나 멀티미디어 기능이 작동하지 않는 경우도 많았습니다. 이런 문제점을 해결하기 위해 W3C(World Wide Web Consortium)를 중심으로 웹 페이지의 표준화에 대한 작업이 진행되었습니다. 브라우저 중심이 아닌 HTML 태그가 중심이며, 사용자 중심이 되는 표준안으로 모든 브라우저에서 공통으로 인터넷을 사용하고 자유롭게 커뮤니티를 만들어가는 것을 웹 표준이라고 합니다.

- 웹 표준이란? 웹사이트를 만들 때 지켜야 할 약속을 정리한 것
- 웹 표준으로 정해진 언어: HTML5, CSS3
- 웹 표준은 다양한 브라우저와 기기 환경으로 인한 문제를 최소화하기 위한 표준안이다.


HTML5는 모든 웹 표준을 지향하는 브라우저에서 웹 페이지가 동일하게 보이는 것을 기본 목표로 하고 있으며, 모든 디지털 장치에서도 HTML5는 쉽게 대응할 수 있도록 HTML 문서를 지원하고 있습니다.
<br>


## 3. HTML 문서의 기본구조

HTML 문서에서 활용되는 태그는 문서의 구조가 어떤 부분인지를 나타내며, 태그를 작성할 경우 정해진 명령어를 <>로 묶어서 표현합니다.

- 태그의 가장 보편적인 형태는 "시작 태그"와 "종료 태그"로 이루어져있다. ```ex. <h1></h1>```
- 끝나는 태그가 없는 경우도 있다.(empty tag) ```ex. <img>, <br>, <hr> ...```
- '알파벳 소문자'를 사용해서 기입한다.
- 필요한 경우, 각각의 태그에는 추가 속성을 기입할 수 있다.<br>


### 📌 HTML 문서의 기본구조

> **HTML 문서의 기본구조**
```<!DOCTYPE html> 
<html lang="ko"> 
 <head> 
   <meta charset="utf-8"> 
  <title>Page Title</title> 
 </head>
 <body> 

 </body>
</html>
```
> **문법이해**<br>
```<!doctype html>``` 
웹 브라우저에게 지금 사용하는 문서 타입은 HTML 유형을 사용했으니 그 버전에 맞는 방법으로 해석(렌더링)하라고 알려주는 것이다. 부분적으로는 쿼크 모드를 피하기 위한 목적도 있다. <br>
```<html lang="ko">```  
HTML 문서의 시작을 알리며, lang 속성을 사용해 문서에서 사용할 언어를 지정한다. 화면 낭독 프로그램(스크린 리더)가 lang 속성의 값을 읽어들여 언어를 인식하여 자동으로 음성을 변환하거나 해당 언어에 적합한 발음을 제공한다. (웹접근성 관련 속성) <br>
```<head> ~ </head>```
브라우저에 정보를 주는 태그. 눈에는 보이지 않지만 웹 페이지를 표현하기 위해 필요한 정보를 담고 있다. ex. CSS파일, script 파일, 웹 폰트 관련 소스 등<br>
```<meta>```
화면에 글자를 표시하는 문자 인코딩 방법을 비롯한 웹 페이지 키워드 등을 지정할 수 있다. HTML5는 대부분 기본 인코딩을 한글, 영문을 비롯한 모든 언어를 표시할 수 있는 UTF-8로 지정하고 있다. (SEO 관련 속성) <br>
```<title> ~ </title>``` 
웹 브라우저의 페이지 제목을 정의하는데 사용된다. 브라우저 탭의 제목으로 표시되고 즐겨찾기를 했을 때 표시되는 제목.<br>
```<body> ~ </body>```
본문 내용을 표시하는 공간. <br>

## 4. HTML5 Contents Model

Contents Model(콘텐츠 모델)은 각 태그별로 사용되는 역할에 따라 분류하고 그 분류에 따른 콘텐츠의 구조를 해당 콘텐츠에 맞게 만드는 것을 말합니다. Contents Model을 알고 있으면, HTML5의 구조에 대해 효율적인 접근이 가능합니다. HTML4까지는 HTML 태그들을 inline, block 두 가지 요소로만 구분했으나 HTML5에서는 태그의 특성에 따라 총 7개의 카테고리로 분류합니다.

![](https://images.velog.io/images/sukyoungshin/post/ebe16877-2b04-481e-bb4f-4221ae8d9ac7/image.png)

>**Metadata Content (메타 데이터 콘텐츠)**
문서의 표현이나 동작을 설정하고, 다른 문서와의 관계 설정 후 다른 문서에 정보를 전달하는 콘텐츠입니다.
```base, command, link, meta, noscript, script, style, title```<br>


> **Flow Content (플로우 콘텐츠)**
문서나 Application의 본문(body 태그) 안에서 사용되는 콘텐츠입니다.
```a, abbr, address, article, aside, audio, b, bdi, bdo, blockquote, br, button, canvas, cite, code, command, datalist, del, details, dfn, div, dl, em, embed, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, i, iframe, img, input, ins, kbd, keygen, label, map, mark, math, menu, meter, nav, noscript, object, ol, output, p, pre, progress, q, ruby, s, samp, script, section, select, small, span, strong, sub, sup, svg, table, textarea, time, ul, var, video, wbr, text```<br>
```area (map 요소의 자식 요소인 경우)```
```style (scoped 속성이 있으면)```<br>

> **Sectioning Content (구획 콘텐츠)**
Headings Content와 footer를 정의하는 콘텐츠입니다.
```article, aside, nav, section ```<br>

> **Heading Content (제목 콘텐츠)**
Sectioning Content의 header를 정의하는 콘텐츠입니다.
```h1, h2, h3, h4, h5, h6```<br>

> **Phrasing Content (구문 콘텐츠)**
텍스트와 텍스트가 포함된 마크업을 정의하는 콘텐츠입니다.
```abbr, audio, b, bdi, bdo, br, utton, canvas, cite, code, command, datalist, dfn, em, embed, i, iframe, img, input, kbd, keygen, label, mark, math, meter, noscript, object, output, progress, q, ruby, s, samp, script, select, small, span, strong, sub, sup, svg, textarea, time, var, video, wbr, text```<br>
```a (구문만을 포함하는 경우)```
```area (map 요소의 자식 요소인 경우)```
```del (구문만을 포함하는 경우)```
```ins (구문만을 포함하는 경우)```
```map (프레이징 콘텐츠만을 포함하는 경우)```<br>

> **Embedded Content (임베디드 콘텐츠)**
다른 리소스나 콘텐츠를 문서에 삽입하는 콘텐츠입니다.
```audio, canvas, embed, iframe, img, math, object, svg, video```<br>

> **Interactive Content (인터렉티브 콘텐츠)**
사용자와의 상호작용을 위해 사용되는 콘텐츠입니다.
```a, button, details, embed, iframe, select, textarea, keygen, label```<br>
```audio (controls 속성이 있으면)```
```video (controls 속성이 있으면)```
```input (type 속성이 hidden 상태가 아니면)```
```menu (type속성이 toolbar 상태면)```
```img (usemap 속성이 있으면) ```
```object (usemap 속성이 있으면)```<br>

  <br><br>
  


## 📖 REFERENCE 

- HTML:
  + MDN: [HTML](https://developer.mozilla.org/ko/docs/Web/HTML), [HTML Contents Model](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)
  + W3SCHOOL: [BASIC HTML](https://www.w3schools.com/tags/ref_byfunc.asp), [HTML Tutorials](https://www.w3schools.com/html/default.asp)
  
- HTML ATTRIBUTES (HTML속성): [HTML Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp), [HTML Attributes References](https://www.w3schools.com/tags/ref_attributes.asp)

- BLOG:
  + [웹접근성 속성 HTML lang](https://mygumi.tistory.com/52)
  + [EUC-KR과 UTF-8](https://velog.io/@sa1341/EUC-KR%EA%B3%BC-UTF-8%EC%9D%84-%EC%95%8C%EA%B3%A0%EA%B0%80%EC%9E%90)
- (도서) 멘토씨리즈 HTML5+CSS3
