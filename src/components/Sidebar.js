import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Motion, spring } from "react-motion";
import Rehover from "rehover";

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

function Tools({ x, y }) {
  return (
    <ToolBar x={x} y={y}>
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
  );
}

class SideBarTools extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  getStates = states => {
    this.setState({
      ...states
    });
  };

  render() {
    return (
      <ContainerSidebar>
        <Motion
          defaultStyle={{ x: -25, y: 0 }}
          style={{
            x: spring(this.state.isOpen ? 0 : -25),
            y: spring(this.state.isOpen ? 1 : 0)
          }}
        >
          {props => (
            <Rehover delay={150} states={this.getStates}>
              <Tool source href="#">
                Tools
              </Tool>
              <ToolBar destination {...props}>
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
            </Rehover>
          )}
        </Motion>
      </ContainerSidebar>
    );
  }
}

export default SideBarTools;
