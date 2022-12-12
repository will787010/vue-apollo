export const Books = `
  query Books ($title: String) {
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