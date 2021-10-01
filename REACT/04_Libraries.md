# React libraries (CODE/react06 참고)

## react-color

App.js <br/><br/>

- color-picker : 컬러피커를 설치해주는 라이브러리 <br>
- URL : https://casesandberg.github.io/react-color/ <br/>
- 설치 : npm install react-color --save<br/><br/>

## formik

클래스형 : Cpp.js, Dpp.js <br>
함수형 : Epp.js + validation.js <br/><br/>

- formik : form wrapper로 폼을 관리해주는 라이브러리 <br />
- URL : https://www.npmjs.com/package/formik <br/>
- 설치: `npm install formik` <br/><br/>

## Yup

validation.js <br/><br/>

- Yup : 유효성검사를 위해 스키마를 작성하여 관리하는 라이브러리 <br/>
- URL : https://www.npmjs.com/package/yup <br>
- 설치 : `npm install yup`<br/><br/>

## react-device-detect

Fpp.js<br><br>

- 사용자의 디바이스를 감지(detect)하여, 코더가 지정한 스타일로 보여주기 위해 사용한다.<br>
- URL : https://www.npmjs.com/package/react-device-detect <br>
- 설치 : npm install react-device-detect

<br/><br/>

### TIPS

- 리액트 프로젝트 배포 :
  터미널에 `npm run build` 또는 `yarn run build` 을 입력하고 엔터.
  생성된 build 폴더에 있는 파일들을 배포한다.<br><br>

- 리액트로 이미지 넣는 방법 : <br>

1. 리액트로 src안에 있는 이미지 넣는 법<br>
   `import 이미지 from './이미지경로.jpg'`<br>
   `<img src={이미지}>`<br>

2. src안에 있는 이미지 css파일에 넣는 법 <br>
   `background-image : url('이미지경로')`<br>

3. public/assets 폴더 안에 있는 이미지 넣는 법 <br>
   `<img src="/assets/이미지명.jpg">`<br>
   (public 안에 assets 폴더를 만드셔야 이용가능)<br>

4. public/assets 폴더 안에 있는 이미지 css파일에 넣는 법 <br>
   (background-image) 없음 하지마셈 혹은 이렇게 해야함<br>
   `<div style={ {backgroundImage:'url(/assets/logo5121.png)'} }>`<br>
   (public 안에 assets 폴더를 만들어야 이용가능)<br>

다만 public 폴더 안에 넣을 경우, 사이트 주소가 좀 이상하거나<br>
리액트프로젝트를 서브경로에 발행하는 경우엔 경로가 망할 수 있으니<br> src를 이용하거나
https://create-react-app.dev/docs/using-the-public-folder 참고하도록 한다. (출처 : [코딩애플](https://online.codingapple.com/forums/topic/image-url-%EC%A7%88%EB%AC%B8-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4/))
