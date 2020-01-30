import React, { Component } from "react"
import { Menu, Input, Dropdown } from "semantic-ui-react"
import "./navigation.scss"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleItemClick = (e, { name }) => this.props.history.push(`/${name}`)

  handleLogoutClick = () => {
    fetch('/logout', {
      method: 'delete'
    }).then(response => {
      this.props.handleLogout()
      this.props.history.push("/")
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Menu className="custom-nav">
        <Menu.Header content="My Media Library" className="custom-menu-header" />
        <Dropdown item text="Movies" name="movies" className="custom-nav-dropdown">
          <Dropdown.Menu>
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Favorites Only"
              name="movies"
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="TV Shows" className="custom-nav-dropdown">
          <Dropdown.Menu>
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Favorites Only"
              name="movies"
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Games" className="custom-nav-dropdown">
          <Dropdown.Menu>
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              className="custom-menu-item"
              text="Favorites Only"
              name="movies"
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item className="custom-nav-dropdown" name={`${this.props.loggedInStatus.user.first_name} ${this.props.loggedInStatus.user.last_name}`} />
          <Menu.Item
            name="Logout"
            onClick={this.handleLogoutClick}
            className="custom-nav-dropdown"
          />
        </Menu.Menu>
      </Menu>
    )
  }
}