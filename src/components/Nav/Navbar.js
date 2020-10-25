import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about us'
            active={activeItem === 'about us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact us'
            active={activeItem === 'contact us'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Menu.Item
              name='shopping cart'
              active={activeItem === 'shopping cart'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
