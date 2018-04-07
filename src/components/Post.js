import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Rehover from "rehover";

const Container = styled.div``;

const PostTopic = styled.div`
  padding: 15px;
`;

const Button = styled.button`
  transition: all 0.3s ease 0s;
  border: medium none;
  outline: medium none currentcolor;
  background-image: linear-gradient(
    270deg,
    rgb(254, 210, 157),
    rgb(165, 139, 102),
    rgb(122, 186, 232),
    rgb(86, 160, 214)
  );
  background-size: 720% auto;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.125em;
  text-align: center;
  color: white;
  font-weight: 400;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 3px;
  -moz-user-select: none;
  text-decoration: none;
  cursor: pointer;
  padding: 5px 15px;
  float: ${props => (props.pos ? props.pos : null)};
`;

const ContainerEachPost = styled.a`
  margin: 10px 0;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  color: black;

  &:hover {
    transition: 0.4s;
    background: #eff2f6;
    color: black;
  }
`;

const Title = styled.h4`
  margin: 0;
`;

const Infos = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
`;

const Meta = styled.div`
  margin: 0 5px;
  background: red;
  padding: 3px;
  border-radius: 5px;
  font-size: 11px;
  color: white;
`;

export const Post = props => (
  <ContainerEachPost href="/">
    <div>
      <Title>Titre topic</Title>
      <span>
        Last reply 6 minutes ago by <b>Polo</b>
      </span>
    </div>
    <Infos>
      <Meta>BLOG</Meta>
      <div>
        <Icon name="discussions" /> 12
      </div>
    </Infos>
  </ContainerEachPost>
);

function ContainerPost(props) {
  return (
    <Container>
      <Button>Latest</Button>
      <Button pos="right">Check</Button>
      <PostTopic>
        <Post />
        <Post />
        <Post />
      </PostTopic>
    </Container>
  );
}

export default ContainerPost;
