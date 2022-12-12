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
import {Books} from './test.js'
import { getBooks } from './gqlApi'

const client = inject(DefaultApolloClient)
const result = ref([])
const queryString = `
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
`
const getResult = async () => {
  const data = await getBooks(queryString, {title: 'will'})
  console.log(data)
  result.value = data?.data || []
}
</script>