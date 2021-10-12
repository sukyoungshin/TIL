## 1. prettier

공식사이트 : https://prettier.io/docs/en/configuration.html
<br/><br/>

### HOW TO

1. .prettierrc 파일을 생성하고, 파일 안에 configuration을 설정한다

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

<br/><br/> 2. 해당 prettier을 사용하고 싶은 파일 (App.js)에 가서, F1키를 누르고, Format Document를 클릭한다.
<br/><br/> 3. VScode 셋팅창(ctrl + ,)에서, 'format on save'을 검색하고, 체크표시해준다. <br>
✅ Format a file on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.
