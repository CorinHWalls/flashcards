import React, { Component } from "react";
import { Dropdown, } from "react-bootstrap";
import { firebase } from "../Services/firebase";

export default class CategoryMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);

      ///Try if statement if showMenu: true
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      // document.removeEventListener("click", this.closeMenu);

    });
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Pick a Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={this.closeMenu}>Javascript</Dropdown.Item>
          <Dropdown.Item onClick={this.closeMenu}>React</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      // <div>
      //   <button onClick={this.showMenu}>
      //     Show menu
      //   </button>

      //   {
      //     this.state.showMenu
      //       ? (
      //         <div className="menu">
      //           <button> Menu item 1 </button>
      //           <button> Menu item 2 </button>
      //           <button> Menu item 3 </button>
      //         </div>
      //       )
      //       : (
      //         null
      //       )
      //   }
      // </div>
    );
  }
}
