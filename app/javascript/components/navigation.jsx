import React, { Component } from "react"
import { Menu, Input } from "semantic-ui-react"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: "Movies"
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === "Logout") {
      this.props.handleLogout()
    }
  }

  render() {
    console.log(this.props)
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name="Movies"
          active={activeItem === "Movies"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="TV Shows"
          active={activeItem === "TV Shows"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Games"
          active={activeItem === "Games"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="Logout"
            active={activeItem === "Logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}