# CI/CD

DevOps 엔지니어의 핵심 업무

## CI

CI는 Continuous Integration 즉, 지속적인 통합이라는 의미입니다.
지속적인 통합이란,
어플리케이션의 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트 되어
공유 레포지토리에 통합히는 것을 의미합니다. (가능하다면 하루에 여러번까지)

CI가 필요한 환경에는 어떤 조건들이 있을까요?

- 다수의 개발자가 형상관리 툴을 공유하여 사용하는 환경
  : N년차 개발자 분들이시라면, 형상관리 툴(Git, SVN 등)을 사용하고 계시죠?
  지속적으로 서비스해야 하는 어플리케이션이나 현재 개발 중인 어플리케이션은
  기능 추가 시마다 commit 등을 날려 레포지토리(Repository)에 버전 업데이트를 하는데요.
  다수의 개발자가 한 팀으로 작업할 경우, 이 공유 레포지토리에 수많은 commit들이 쌓이게 됩니다.
  그럴 때마다, 기능별로 빌드/테스트/병합(Merge)까지 하려면 상당히 번거롭겠죠?
  이런 상황에서, 자동화된 빌드&테스트는 원천 소스코드의 충돌 등을 방어하는 Benefit을 제공할 수 있습니다.

- MSA(Micro Service Archietecture) 환경
  : 최근 IT 업계에 붐처럼 떠오르고 있는 아키텍처 모델입니다.
  기존의 어플리케이션이 모든 기능을 포함하는 하나의 거대한 서비스이었다면,
  MSA는 작은 기능별로 서비스를 잘게 쪼개어 개발하는 형태를 의미합니다.
  MSA 환경에서는 대부분 Agile(소규모 기능 단위로 빠르게 개발 & 적용을 반복하는 개발방법론) 방법론이 적용되기 때문에, 기능 추가가 매우 빈번하게 발생하게 됩니다.
  작은 micro service의 긴밀한 동작 테스트도 중요해지고요.
  그러한 상황에서 CI의 적용은 기능 충돌 방지 등의 Benefit을 제공할 수 있습니다.

이러한 CI의 핵심 목표는,
버그를 신속하게 찾아 해결하고,
소프트웨어의 품질을 개선하고,
새로운 업데이트의 검증 및 릴리즈의 시간을 단축시키는 것에 있습니다.

## CD (Continuous Delivery)

CD는 Continuous Delivery 혹은 Continuous Depolyment 두 용어 모두의 축약어 입니다.
해석하자면, 지속적인 서비스 제공 혹은 지속적인 배포 라는 의미죠.

Continuous Delivery는 공유 레포지토리로 자동으로 Release 하는 것,
Continuous Deployment는 Production 레벨까지 자동으로 deploy 하는 것을 의미합니다.
정리하자면, CI가 새로운 소스코드의 빌드, 테스트, 병합까지를 의미하였는데,
CD는 개발자의 변경 사항이 레포지토리를 넘어, 고객의 프로덕션(Production) 환경까지 릴리즈 되는 것을 의미합니다.

CI에서 예로 든 MSA와 같은 환경에서 Agile 방법론이 적용될 경우,
서비스의 사용자는 최대한 빠른 시간 내에 최신 버전의 Production을 제공받을 필요가 있습니다.
이 때, 소프트웨어가 언제든지 신뢰 가능한 수준의 버전을 유지할 수 있도록 support 하는 것이 CD라고 할 수 있죠.

이는 서비스의 개발팀과 비즈니스팀(영업, CS팀 등) 간의 커뮤니케이션 부족 문제를 해결해 줌으로써,
배포에 이르기까지의 노력을 최소한으로 단축시켜 준다는 Benefit을 제공합니다

## REFERENCE

- [출처](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)
- [Basics of CI/CD](https://levelup.gitconnected.com/basics-of-ci-cd-a98340c60b04)
- [CI/CD (지속적 통합/지속적 제공) 개념과 과정](https://devuna.tistory.com/56)
- [CI/CD fundamentals (Gitlab)](https://about.gitlab.com/topics/ci-cd/)
- 
