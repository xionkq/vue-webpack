<script setup lang="ts">
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client/core'
import { onMounted } from 'vue'

const api = 'https://httpbin.org/post'
const client = new ApolloClient({
  link: new HttpLink({
    uri: api // 'https://httpbin.org/post'
    // useGETForQueries: true
  }),
  cache: new InMemoryCache()
})

onMounted(() => {
  loadData().then((data) => {
    console.log(data)
  })
})

async function loadData () {
  const query = gql(`
    {
       args
    }
  `)
  return await client.query({ query })
}
</script>

<template>
  <div>use apollo graphql</div>
</template>

<style scoped>

</style>
