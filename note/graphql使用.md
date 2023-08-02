# 学习使用graphql作为客户端查询数据
参考文章：[GraphQL Apollo 客户端](https://www.jiyik.com/w/graphql/graphql-apollo)
### 1.首先安装graphql和@apollo/client
```
npm install graphql
npm install @apollo/client
```

### 2.安装好之后，就可以在组件中使用apollo构建graphql客户端（推荐在单独的js文件中使用组合函数构建）
```
const client = new ApolloClient({
  link: new HttpLink({
    uri: api
    // useGETForQueries: true
  }),
  cache: new InMemoryCache()
})
```

### 3.客户端构建好之后，就可以使用客户端进行数据请求
```
async function loadData () {
  const query = gql(`
    {
       args
    }
  `)
  return await client.query({ query })
}
```

### 4.graphql请求原理是使用post方法请求数据，其中query查询将会作为载荷的query字段，作为参数发送到服务器
> 你可以向 GraphQL 服务器上的入口端点发送一个 HTTP POST 请求，其中将 GraphQL 查询作为 JSON 载荷的 query 字段，就能调用 GraphQL 服务器。（来自 [GraphQL教程：客户端](https://graphql.cn/graphql-js/graphql-clients/)）

### 5.如果想使用get请求，则需要配置项。需要注意的是，此时gqp函数解析的query内容将作为get请求参数错递给服务器
```
const client = new ApolloClient({
  link: new HttpLink({
    ...
    useGETForQueries: true
  }),
})
```

### 6.graphql客户端请求，需要配合graphql服务器来执行查询，对于普通的restful api将无法正确解析query参数
