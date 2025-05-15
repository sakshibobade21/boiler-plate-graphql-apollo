import {books, authors} from './data.js'

export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Book: {
    author: (parent) => {
      return authors.find(auth => auth.id === parent.authorId)
    }
  }
};

/*
query {
  books{
    id
    title
    authors{
      name
    }
  }
}
*/