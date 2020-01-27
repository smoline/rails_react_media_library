import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = { activeItem: 'Movies' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='Movies'
          active={activeItem === 'Movies'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='TV Shows'
          active={activeItem === 'TV Shows'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Games'
          active={activeItem === 'Games'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}