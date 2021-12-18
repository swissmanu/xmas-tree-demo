import React from "react";
import styled from "styled-components";
import Lights from "./lights.svg";
import Tree from "./tree.svg";

interface XmasTreeProps {
  turnLightsOn?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 300px;
`;

const Light = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const XmasTree: React.FC<XmasTreeProps> = ({ turnLightsOn = false }) => {
  return (
    <Container data-testid="xmas-tree">
      <img src={Tree} width={300} />
      {turnLightsOn && <Light src={Lights} width={300} data-testid="lights" />}
    </Container>
  );
};
export default XmasTree;
