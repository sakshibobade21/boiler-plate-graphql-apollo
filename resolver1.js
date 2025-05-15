import {books, authors} from './data.js'

export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
};

/*
query {
  books{
    id
    title
  }
  authors{
    name
  }
}
*/