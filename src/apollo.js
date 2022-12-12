import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client/core'
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ response, graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    return 'error'
  }
});
// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: 'http://localhost:4000/',
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
  name: 'my-app'
})
export default apolloClient