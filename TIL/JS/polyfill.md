# Transpiler & Polyfill

## 트랜스파일러/변환기 Transpiler
최신 문법의 자바스크립트를 브라우저에서 호환되도록 변환하는 역할을 한다. cf. 바벨(Babel)

- Transpiler ( translate + complier )
- es6 -> es5
- react jsx -> javascript

<br/>

## 폴리필 Polyfill
- 최신 JS를 사용하면 구 버전의 브라우저에서 호환이 안 될 수 있다. 따라서 최신 자바스크립트를 사용하여 개발했다면, 브라우저가 그것을 알아들을 수 있도록 해주어야 한다.
- 폴리필(polyfill)은 개발자가 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인을 말한다. 즉, 폴리필은 HTML5 및 CSS3와 오래된 브라우저 사이의 간격을 메꾸는 역할을 담당한다. 🔗[링크](https://webdir.tistory.com/328)

```
// ex
if (typeof window.localStorage === 'undefined') {
	window.localStorage = {...};
};
```

<br/>

## Reference

- [모던자바스크립트](https://ko.javascript.info/polyfills)
- [대한민국의 웹 호환성 문제 (위키백과)](https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%9B%B9_%ED%98%B8%ED%99%98%EC%84%B1_%EB%AC%B8%EC%A0%9C)
- [Polyfill 용어](https://developer.mozilla.org/ko/docs/Glossary/Polyfill)
- [폴리필, 폴리필 리스트](https://webdir.tistory.com/328)
- [폴리필과 트랜스파일러](https://www.reimaginer.me/entry/ECMAscript-6-%ED%8F%B4%EB%A6%AC%ED%95%84polyfill-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8C%8C%EC%9D%BC%EB%9F%ACtranspiler)
- [HTTP/CSS 폴리필 - Modernizer](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
