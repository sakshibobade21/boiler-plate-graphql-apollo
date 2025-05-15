import {books, authors} from './data.js'

export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Author: {
    books: (parent) => {
      return books.filter(book => book.authorId === parent.id)
    }
  }
 
};

/*
query {
  authors{
    id
    name
    books {
      id
      title
    }
  }
}
*/