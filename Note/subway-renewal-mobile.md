# Subway-renewal-mobile
subway-renewal-mobile를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Issues
### Styled-components
- li태그에 가상선택자::before, ::after (pseudo elements)가 제대로 적용되지 않는 이슈<br/>
 
> 💡 Solution : JSX에서는 escaping 문자를 두 번 써야한다.

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

## Lesson
### 커링함수 Currying

<br/><br/>

## Reference
[깃허브코드](https://github.com/sukyoungshin/subway-renewal-mobile)
