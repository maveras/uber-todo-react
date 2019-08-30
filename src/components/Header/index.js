import React from 'react'
import { NavBar, List, Item } from './styles'

const Header = () => (
  <NavBar>
    <span>UBER TODO LIST</span>
    <List>
      <Item>Login</Item>
      <Item>Todos</Item>
      <Item>Logout</Item>
      <Item>Avatar</Item>
    </List>
  </NavBar>
)

export default Header
