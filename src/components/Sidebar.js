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

const Tool = styled.button`
  padding: 10px;
  background: orange;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const ToolBar = styled.div`
  text-align: center;
  padding-top: 10px;

  & a {
    margin-right: 5px;
  }
`;

const ContainerFilter = styled.div`
  margin-top: 20px;
`;

const Filter = styled.div`
  margin: 15px 0;
  cursor: pointer;
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
        <Rehover delay={150} states={this.getStates}>
          <Tool source="true">Tools</Tool>
          <ToolBar destination="true">
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
        <ContainerFilter>
          <Filter>
            <Icon name="discussions" /> All discussions
          </Filter>
          <Filter>
            <Icon name="star" /> Following
          </Filter>
          <Filter>
            <Icon name="tags" /> Tags
          </Filter>
        </ContainerFilter>
      </ContainerSidebar>
    );
  }
}

export default SideBarTools;
