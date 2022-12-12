import client from './apollo'
import gql from 'graphql-tag'

export function getBooks (queryString, variables={}) {
  return client.query({
    query:  gql(queryString),
    variables: {
      ...variables,
      t: new Date().getTime()
    }
  })
}