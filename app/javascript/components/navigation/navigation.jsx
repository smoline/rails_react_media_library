import React, { Component } from "react"
import { Menu, Input, Dropdown } from "semantic-ui-react"
import "./navigation.scss"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: "Movies",
      user: this.props.user
    }
  }

  handleItemClick = (e, { name, text }) => this.setState({ activeItem: name })

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
    console.log(this.props)
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Header content="My Media Library" className="custom-menu-header" />
        <Dropdown item text="Movies" name="Movies">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="Movies"
              active={activeItem === "Movies"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="Movies"
              active={activeItem === "Movies"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="Movies"
              active={activeItem === "Movies"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Favorites Only"
              name="Movies"
              active={activeItem === "Movies"}
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="TV Shows">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="TV Shows"
              active={activeItem === "TV Shows"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="TV Shows"
              active={activeItem === "TV Shows"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="TV Shows"
              active={activeItem === "TV Shows"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Favorites Only"
              name="TV Shows"
              active={activeItem === "TV Shows"}
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Games">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Sort by Title"
              name="Games"
              active={activeItem === "Games"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by Release Date"
              name="Games"
              active={activeItem === "Games"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Sort by When Added"
              name="Games"
              active={activeItem === "Games"}
              onClick={this.handleItemClick}
            />
            <Dropdown.Item
              text="Favorites Only"
              name="Games"
              active={activeItem === "Games"}
              onClick={this.handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name={`${this.props.user.first_name} ${this.props.user.last_name}`} />
          <Menu.Item
            name="Logout"
            active={activeItem === "Logout"}
            onClick={this.handleLogoutClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}