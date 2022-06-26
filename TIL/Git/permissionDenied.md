## ISSUE

VSCode에서 git pull을 해오려하니 아래와 같은 에러가 나타났습니다.
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## SOLUTION

아래 문구를 입력하여 Public/Private RSA 키 pair를 생성합니다. 
```
ssh-keygen -t rsa -C "sukyoung.dev@gmail.com"
```

그 다음, 아래 값을 입력하여 나온 값을 복사합니다.
```
cat ~/.ssh/id_rsa.pub
```
gitHub: Settings -> SSH and GPG Keys > New SSH Keys 등록합니다. <br/>
이제 문제없이 git pull이 됩니다.


## Reference
https://medium.com/@su_bak/git-github-com-permission-denied-publickey-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-76b0ab741c62
https://readystory.tistory.com/170
