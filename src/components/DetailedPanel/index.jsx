import React, {useRef, useEffect} from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close} from '../../styles'
import Book from '../Book'

const DetailedPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailedPanel

// const DetailedPanel = ({book, closePanel}) => (
//     <>
//       <BG onClick={closePanel} />
//       <Panel>
//         <CloseWrapper onClick={closePanel}>
//           <Close />
//         </CloseWrapper>

//         {book && (
//           <>
//             <Book book={book} isLarge={true} />
//             {/* <figure>
//         <img alt="" src={book.image} />
//         <h3>{book.title}</h3>
//         <h4>by {book.author}</h4>
//       </figure> */}
//             <P>{book.description}</P>
//             <P>
//               <Em>Published in {book.published}</Em>
//             </P>
//           </>
//         )}
//       </Panel>
//     </>
//   )
