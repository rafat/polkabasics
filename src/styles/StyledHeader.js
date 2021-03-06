import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #00a8e6;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  .header-left {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
  }

  .header-right {
    margin: 0;
    padding: 0;
    list-style: none;
    float: right;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
  }

  h2 {
    font-family: sans-serif;
    font-size: 20px;
    text-align: center;
    float: left;
    padding: 15px;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;
  }
`;
