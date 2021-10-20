# 유용한 도구들

(참고) 밸로퍼트 깃북 : https://react.vlpt.us/basic/27-useful-tools.html
<br/><br/>

## 1. prettier

공식사이트 : https://prettier.io/docs/en/configuration.html <br>
<br/><br/>

### HOW TO

1. .prettierrc 파일을 생성하고, 파일 안에 configuration을 설정한다. (공식문서를 찾아보고 필요에 따라 더 추가가능.)

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

<br/><br/> 2. 해당 prettier을 사용하고 싶은 파일 (App.js)에 가서, F1키를 누르고, Format Document를 클릭한다.
<br/><br/> 3. VScode 셋팅창(ctrl + ,)에서, 'format on save'을 검색하고, 체크표시해준다.<br/>

```
✅ Format a file on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.
```

<br/><br/>

## 2. ESLint

공식사이트 : https://eslint.org/ <br/><br/>

### HOW TO

1. VScode 셋팅창(ctrl + ,)에서, 'ESLint'을 검색하고, 체크표시해준다.<br/>

```
ESlint: Auto Fix On Save
✅ Turns auto fix on save on or off
```

2. ESLint 스타일을 셋팅해줄 수 있다. CRA로 생성된 프로젝트 내부의 package.json을 확인해보면 ESLint가 React-app으로 설정되어있는데, 다른 스타일로도 변경할 수 있다.

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

- airbnb eslint 스타일 설치 : yarn add eslint-config-airbnb <br>
- prettier eslint 설치: yarn add eslint-config-prettier<br>
  그리고 package.json에 아래와 같이 입력한다.

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "airbnb",
      "prettier",
      "react-app/jest"
    ]
  },
```

<br/><br/>

## React Snippet

### HOW TO

1. 아래처럼 Sample 코드를 만들고, (Sample.js)

```
import React from 'react';

function ${TM_FILENAME_BASE}() {
  return (
    <div>
      Hello React!
    </div>
  );
};

export default ${TM_FILENAME_BASE};
```

<br/><br/> 2. snippet-generator.app에 접속하여

- Description : Create React Functional Component
- Tab Trigger : fc
- Your snippet : (방금전 그 코드)

입력하고, 오른쪽 화면에 나타난 snippet을 복사.
<br/><br/>

3. Sample.js 화면에서 VScode 오른쪽 하단의 `JavaScript`를 클릭하여 `JavaScript React`로 변경. 상단에 뜨는 창에서, `Configure File Association for '.js'` 클릭.
   그리고 다시한번, `JavaScript React`로 설정

<br/><br/>

4. [File] -> [Preferences] -> [Your snippets] 클릭하고, `JavaScript React`입력. javascriptreact.json에 생성한 snippet 입력

```
{
	"Create React Functional Component": {
		"prefix": "fc",
		"body": [
			"import React from 'react';",
			"",
			"function ${TM_FILENAME_BASE}() {",
			"  return (",
			"    <div>",
			"      ${1:Hello React!}",
			"    </div>",
			"  );",
			"};",
			"",
			"export default ${TM_FILENAME_BASE};"
		],
		"description": "Create React Functional Component"
	}
}
```

- ${1:Hello React!} : 해당 텍스트에 autoFocus가 되어짐 (우선순위 1). ${1} 이렇게만 써도 됨

5. 새 .js 파일에서 fc 탭/엔터를 누르면 snipper이 뿅 나타남
