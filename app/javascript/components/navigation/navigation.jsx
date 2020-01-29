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
      <Menu inverted>
        <Menu.Header content="My Media Library" className="custom-menu-header" />
        <Dropdown item text="Movies" name="movies">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Favorites Only"
              name="movies"
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="TV Shows">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Favorites Only"
              name="movies"
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Games">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="movies"
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
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
          <Menu.Item name={`${this.props.loggedInStatus.user.first_name} ${this.props.loggedInStatus.user.last_name}`} />
          <Menu.Item
            name="Logout"
            onClick={this.handleLogoutClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}