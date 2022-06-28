# Apollo GraphQL

> Apollo-GraphQL [튜토리얼](https://www.apollographql.com/tutorials/lift-off-part1/) 및 [공식문서](https://www.apollographql.com/docs/apollo-server/testing/mocking) 참고하여 정리
> 

## 기본 mock 데이터 생성하기

```jsx
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
```

NOTE: GraphQL의 type은 자바스크립트의 object와 비슷하지만 다릅니다. (끝에 쉼표를 붙이지 않습니다.)

### scalar types

Type / Default Mock Value
- `Int` Returns a random positive or negative integer.
- `String` Returns "Hello World"
- `Float` Returns a random positive or negative double-precision floating-point value.
- `Boolean` Randomly returns either true or false.
- `ID` Returns a randomized UUID containing a combination of integers and letters.

## Using lists in mocks

mock 데이터의 길이를 바꾸기 위해선 차이점 n번재 길이의 new Array를 리턴해주면 됩니다. <br/>
단, 공식문서에 나와있는 예문과 튜토리얼에 나와있는 예문 스타일이 다른데 차이점이 있는지 확인이 필요합니다.

```jsx
// 공식문서 예문
const casual = require('casual');

const mocks = {
  Person: () => ({
    // a list of length between 2 and 6, using the "casual" npm module
    // to generate a random integer
    friends: [...new Array(casual.integer(2, 6))],
    // a list of three lists of two items: [[1, 1], [2, 2], [3, 3]]
    listOfLists: () => [...new Array(3)].map((i) => [...new Array(2)]),
  }),
};

```

```jsx
// apollo-graphQL 튜토리얼 예문
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    postForHome: () => [...new Array(9)],
  }),
  Post: () => ({
    id: () => 1, 
    title: () => "어쩌구",
    content: () => "저쩌구",
    createDate: () => "2022-06-22",
    imgSrc: () => "/dd",
    postUrl: () => "/zz",
    user: () => {
      return {
        id: 11, // 왠지는 모르겠는데, 이 안에서 () => {} 형태로 불러오면 에러뜸
        name: "suKyoung",
        userId: "zzzz01",
      };
    },
    likeInfo: () => {
      return {
        numberOfLikes: 1,
        isLikeClickUser: false,
      };
    },
    commentInfo: () => {
      return {
        numberOfComments: 1,
      };
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at <https://studio.apollographql.com/dev>
  `);
});
```

With mocks enabled, Apollo Server always returns exactly two entries for every list field. To get more entries at a time, let's say 6, we'll add a `Query.tracksForHome` to our `mocks` object and return an Array of that given length like so: `[...new Array(6)]`.

### QnA

1. 왜 mock 데이터 값은 `() => {}` 형태로 되어있는지?
    
    ```jsx
    const mocks = {
      Track: () => ({
        id: () => 'track_01',
        title: () => 'Astro Kitty, Space Explorer',
        author: () => {
          return {
            name: 'Grumpy Cat',
            photo:
              'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
          };
        },
        thumbnail: () =>
          'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 1210,
        modulesCount: () => 6
      })
    };
    ```
    
    To serve mocked data that's closer to reality, we'll pass an *object* to the `mocks` property instead of just `true`. This object contains functions that provide the mocked data we want the server to return for each queried field.
    
    [https://www.apollographql.com/tutorials/lift-off-part1/apollo-server](https://www.apollographql.com/tutorials/lift-off-part1/apollo-server)
    

## checklist

- [x]  apollo-server를 실행하고, [apollo studio explorer](https://studio.apollographql.com/org/sukyoungs-team/graphs)에서 데이터가 제대로 동작하는지 확인한다. (**기본**)

## Reference

[Mocking](https://www.apollographql.com/docs/apollo-server/testing/mocking)
