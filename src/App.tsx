import React from "react";
import styled from "styled-components";
import "./App.css";
import XmasTree from "./components/XmasTree";

const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 3, 66, 1) 42%,
    rgba(0, 0, 0, 1) 100%
  );
`;

function App() {
  return (
    <Layout>
      <XmasTree />
    </Layout>
  );
}

export default App;
