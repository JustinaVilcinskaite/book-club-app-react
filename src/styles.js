import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 body{
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
 }
`

export const Pill = styled.div`
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  background: #a7e1f8;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const Button = styled.button`
  border: 2px solid #000;
  border-radius: 30px;

  background: transparent;
  font-size: 18px;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  margin-bottom: 10px;

  padding: ${({$hasEmoji}) => ($hasEmoji ? '5px 14px' : '8px')};

  display: block;
  margin-bottom: ${({$isHeader}) => ($isHeader ? '0' : '14px')};
  width: ${({$isHeader}) => ($isHeader ? '140px' : 'unset')};

  @media (max-width: 1000px) {
    font-size: 14px;
    width: ${({$isHeader}) => ($isHeader ? '110px' : 'unset')};
  }
`
