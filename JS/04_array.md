### 1. HTMLCollection (유사배열)

```
<table>
  <tr>
    <td colspan="4" class="result">
      <input id="result" type="text" value="0" disabled>
    </td>
  </tr>
  <tr>
    <td><span class="number">7</span></td>
    <td><span class="number">8</span></td>
    <td><span class="number">9</span></td>
    <td><span class="operator">&divide;</span></td>
  </tr>
  <tr>
    <td><span class="number">4</span></td>
    <td><span class="number">5</span></td>
    <td><span class="number">6</span></td>
    <td><span class="operator">&times;</span></td>
  </tr>
  <tr>
    <td><span class="number">1</span></td>
    <td><span class="number">2</span></td>
    <td><span class="number">3</span></td>
    <td><span class="operator">&minus;</span></td>
  </tr>
  <tr>
    <td><span class="comma">.</span></td>
    <td><span class="number">0</span></td>
    <td><span class="operator">&plus;</span></td>
    <td><span class="equal">&equals;</span></td>
  </tr>
</table>
```

```
const NUMBER = document.getElementsByClassName('number'); // 숫자
const arr = Array.isArray(NUMBER);
console.log(arr); // false
```

NUMBER은 HTMLCollection(유사배열)이고 배열이 아니므로 배열 메서드를 쓸 수 없다.<br />
배열 프로토타입에서 메서드를 빌려오면 배열메서드를 사용할 수 있다. <br/>

```
const NUMBERS = Array.from(NUMBER).map((arr) => console.log(arr.innerText));
```
