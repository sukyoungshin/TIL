# Git / GitHub

Git(버전관리툴) 및 GitHub를 사용하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Git

### Gitignore

Git bash를 처음 사용할 때, `/node_modules`폴더를 remote repo에 업로드하려했다가 엄청난 에러 + 컴퓨터 다운을 경험했다.. <br/>

> 💡 Solution : 업로드 할 필요없는 파일(build, node_modules, API key등이 들어있는 env 파일 등)은 깃이그노어(gitignore)에 등록하여 remote repo에 업로드하지 않도록 한다. 🔗[gitignore](https://www.toptal.com/developers/gitignore)

<br/>

### Git init

프로젝트A를 생성하여 git init을 한 뒤, 해당 폴더 내부에 하위폴더(프로젝트B)를 만들었다. 그리고 프로젝트B 내부에서도 git init을 했다.
그랬더니 git history가 꼬이는 바람에 remote에 하위 폴더(프로젝트B) 껍데기만 업로드되고 내부 파일은 전혀 업로드되지 않는 문제가 발생했다. (<strike>원인조차 몰라서 이틀을 허비했다</strike>)

> 💡 Solution : 여기저기 도움을 요청하여 해결하긴 했는데 여전히 해결방법을 모르겠다. 해결방벙은 그냥 앞으로 이런 무식한 짓은 안하면 된다(...) 그리고 이를 계기로 git bash를 버리고 좀 더 쉽게 버전관리를 하기 위해서 GUI인 포크(fork)로 갈아탔다. 🔗[git-fork](https://git-fork.com/)

<br/>

### Conflict

포크로 갈아탄 뒤 본격적으로 repo 관리를 시작했다. 로컬에서 코드 작업을 진행하면서 readme 수정 좀 하고, 원격저장소에서도 readme 수정도 하고 룰루랄라 신나게 작업하다가 로컬에서(!) conflict를 냈다. (<strike>그 어려운 일을... 제가 해냅니다.. </strike>)

> 💡 Solution : 로컬에서 commit을 하기 전에, 원격저장소에 있는 내용으로 최신화를 먼저 진행해야 한다. (fetch + merge를 하거나, pull을 하거나). 그리고 merge는 로컬이 아니라 리모트에서 진행해야 한다는 교훈을 얻음. <br/>

<br/>

### Git Detached Head

과거의 특정 커밋으로 체크아웃했다가, 현재 작업하던 곳으로 다시 체크아웃을 하면 git detached Head 이슈가 발생했다. 해당 블로그 글([detached HEAD](https://www.devhak.com/blog/git-detached-head))을 참고하여 임시브랜치를 만들어서 해결했다. 다만, 이 과정에서 불필요한 깃 히스토리 커밋이 남아있어서 지워버리고 싶다... 나중에 방법 배워서 지워야겠다.

<hr />

## GitHub

### Syncing a fork

Naver/FE-News 레포틑 fork 떠왔는데 2달동안 업데이트가 없어서 의문이었는데 알고보니 설정해주는 방법이 따로 있었다.....

> 💡 Solution : fork한 repository 최신으로 동기화하는 방법.
>
> 1. fork를 한다.
> 2. 내 레포의 remote upstream에 원본레포를 추가한다. (`remote upstream set-url <원본레포명>`)
> 3. 가끔씩 fork해온 내 깃허브 레포에서 원본레포를 끌어온다. 🔗 참고 : [GitHub 공식문서](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

## Reference

🔗 [LIVE DEMO](), [깃허브코드]()
