import React from 'react'
import {Logo, HeaderContainer, RightConatiner} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <RightConatiner>{children}</RightConatiner>
  </HeaderContainer>
)

export default Header
