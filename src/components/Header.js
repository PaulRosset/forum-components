import React from "react";
import styled from "styled-components";
import { Icon, Label } from "semantic-ui-react";
import Rehover from "rehover";

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  grid-area: logo;
  margin: auto;
  padding-right: 10px;
`;

const Profil = styled.img`
  height: 4em;
  margin: auto;
  border-radius: 50%;
`;

const Tab = styled.a`
  grid-area: ${props => props.area};
  padding: 0px 15px 0px 4px;
  margin: auto;
  color: black;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto) 1fr repeat(2, auto);
  grid-template-rows: 1fr;
  grid-template-areas: "logo home faq contact . notifications profile";
  box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 8px;
  padding: 5px 16px;
  flex: 0 0 49px;
  width: 100%;
`;

const NotificationsCounter = styled.span`
  position: relative;
  top: -1em;
  right: 11px;
  background-color: red;
  padding: 3px;
  border-radius: 50%;
`;

const MenuUser = styled.div`
  position: absolute;
  background: white;
  border: solid 1px grey;
  border-radius: 5px;
  padding: 10px;
  top: 63px;
  right: 25px;
  display: inline-flex;
  flex-direction: column;
  color: black;
  font-size: 15px;
`;

const TabUser = styled.a`
  border-bottom: solid 1px black;
  padding: 5px 0;
  color: black;
`;

const TabUserLast = styled(TabUser)`
  border-bottom: none;
`;

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav>
        <Image src="/static/img/edubot-logo-brand.png" />
        <Tab href="#" area="home">
          Home
        </Tab>
        <Tab href="#" area="faq">
          FAQ
        </Tab>
        <Tab href="#" area="contact">
          Contact
        </Tab>
        <div
          style={{
            gridArea: "notifications",
            margin: "auto",
            padding: "0px 24px 0px 4px"
          }}
        >
          <Icon name="bell" link size="large" />
          {this.props.notifications ? (
            <NotificationsCounter>
              {this.props.notifications.length}
            </NotificationsCounter>
          ) : null}
        </div>
        <div style={{ gridArea: "profile" }}>
          <Rehover delay={150}>
            <Profil src="http://via.placeholder.com/50x50" source="true" />
            <MenuUser destination="false">
              <TabUser href="#">Edubot</TabUser>
              <TabUser href="#">Support</TabUser>
              <TabUserLast href="#">Log out</TabUserLast>
            </MenuUser>
          </Rehover>
        </div>
      </Nav>
    );
  }
}

export default Header;
