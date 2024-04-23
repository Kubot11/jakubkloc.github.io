// needed to react elastic carousel 
import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  margin: 0;
  font-size: 4em;

  @media (prefers-color-scheme: dark) {
    background-color: #141616;
    color: #fff;
  }

  @media (max-width: 640px) {
    overflow-y: auto;
    height: calc(100vh - 50px);
  }
`;
