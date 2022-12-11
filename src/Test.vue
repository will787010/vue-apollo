<template>
  <div class="test">
    <button @click="getResult">get result</button>
    <div v-if="result">
      <ul>
        <li v-for="item in result.books" :key="item.title">
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { DefaultApolloClient } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { inject } from 'vue'
import Books from './test.gql'


const client = inject(DefaultApolloClient)

const title = ref('')
const enabled = ref(false)
let name = 'name'
const getResult = () => {
  // client.cache.reset()
  client.query({
    query:  gql`
      query Query($title: String) {
        books(title: $title) {
          title,
          tags,
          name {
            firstName
          }
        }
        name {
          firstName
          lastName
        }
      }
    `, variables: {
      title: name
    }
  }).then(res => {
    console.log(res)
  })
}

const {result} = useQuery(gql`
    query Query($title: String) {
      books(title: $title) {
        title,
        tags,
        name {
          firstName
        }
      }
      name {
        firstName
        lastName
      }
    }
  `, {
  title: 'name'
})
const a = ref('')
onMounted(() => {
  a.value = 'name'
})
</script>