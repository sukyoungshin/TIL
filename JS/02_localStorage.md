# localStorage vs sessionStroage

- localStorage -> 브라우저에 저장
- sessionSotrage -> 휘발성. 브라우저를 닫으면 날라가는 데이터.
  <br/>
  <br/>

# localStorage 문법3개

- 자료저장 `localStorage.setItem('key', 'value');`
- 자료출력 `localStorage.getItem('key');`
- 자료삭제 `localStorage.removeItem('key');`

localStorage에 object자료를 저장할 때 그냥 넣으면 깨짐.<br />
array자료를 저장하면 []가 사라지고 문자열로 바뀜. ==> localStorage에는 문자열만 저장가능.<br />
손실없이 저장하고 싶다면, JSON형태로 넣어주면 됨. <br />

```
localStorage.setItem('obj', JSON.stringify({name: 'kim'}) );
localStorage.getItem('obj'); // '{"name":"kim"}'
let a = localStorage.getItem('obj');
JSON.parse(a); // {name: 'kim'}
```

// (sessionStorage도 사용하는 문법이 동일)
