import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailedPanel from './components/DetailedPanel'
import Search from './components/Search'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
        setFilteredBooks(books)
      } catch (error) {}
    }
    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    // setSelectedBook(null)
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm),
        ),
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length

  // const filteredBooks = (searchTerm) => {

  //   if (!searchTerm) {
  //     return books
  //   } else {
  //     return books.filter(
  //       (book) =>

  //         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  //     )
  //   }
  // }

  // console.log(filteredBooks('Octavia'))
  // console.log(filteredBooks(null))
  // console.log(filteredBooks('beale'))

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      {/* <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null} /> */}
      {/* {selectedBook && <DetailedPanel book={selectedBook} closePanel={closePanel} />} */}
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailedPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
