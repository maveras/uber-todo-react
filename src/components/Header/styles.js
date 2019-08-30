import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  background: red;
  align-items: center;
  justify-content: space-between;
  background: #F4F4F4;
  padding: 0 1rem;
`
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width:50%;
`
export const Item = styled.li`
  cursor: pointer;
  padding: 2rem 1rem;
  &:hover {
    background: #F4EDED;
  }
`
