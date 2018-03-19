import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Motion, spring } from "react-motion";

const ContainerSidebar = styled.div`
  float: left;
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const Tool = styled.div`
  padding: 10px;
  transform-origin: 0;
  background: orange;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

const ToolBar = styled.div`
  text-align: center;
  padding-top: 10px;
  transform: ${props => `translateY(${props.x}px)`};
  opacity: ${props => props.y};

  & a {
    margin-right: 5px;
  }
`;

function Tools({ onMouseLeaveMenu, onMouseEnterMenu, openMenu }) {
  return (
    <Motion
      defaultStyle={{ x: -25, y: 0 }}
      style={{ x: spring(openMenu ? 0 : -25), y: spring(openMenu ? 1 : 0) }}
    >
      {({ x, y }) => (
        <ToolBar
          onMouseLeave={onMouseLeaveMenu}
          onMouseEnter={onMouseEnterMenu}
          x={x}
          y={y}
        >
          <a href="#">
            <Icon name="plus" link color="red" circular />
          </a>
          <a href="#">
            <Icon name="sort" link color="blue" circular />
          </a>
          <a href="">
            <Icon name="star" link color="green" circular />
          </a>
        </ToolBar>
      )}
    </Motion>
  );
}

class SideBarTools extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onHoverButton: false,
      onHoverTools: false,
      openMenu: false
    };
  }

  MenuButtonEnter = () => {
    this.setState({
      onHoverButton: true,
      openMenu: true
    });
  };

  MenuButtonClose = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        onHoverButton: false,
        openMenu: !prevState.onHoverTools ? false : true
      }));
    }, 50);
  };

  MenuToolsEnter = () => {
    this.setState({
      onHoverTools: true,
      openMenu: open
    });
  };

  MenuToolsClose = () => {
    this.setState(prevState => ({
      onHoverTools: false,
      openMenu: !prevState.onHoverButton ? false : true
    }));
  };

  render() {
    return (
      <ContainerSidebar>
        <Tool
          onMouseEnter={this.MenuButtonEnter}
          onMouseLeave={this.MenuButtonClose}
          href="#"
        >
          Tools
        </Tool>
        {this.state.onHoverButton || this.state.onHoverTools ? (
          <Tools
            onMouseEnterMenu={this.MenuToolsEnter}
            onMouseLeaveMenu={this.MenuToolsClose}
            openMenu={this.state.openMenu}
          />
        ) : null}
      </ContainerSidebar>
    );
  }
}

export default SideBarTools;
