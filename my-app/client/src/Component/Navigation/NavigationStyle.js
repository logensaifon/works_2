import styled from "styled-components";

export const StyleComponent = styled.div`
  height: 100%;
  padding-top: 20px;

  .boxHeader {
    height: 45px;
  }

  .ant-layout-header {
    width: 100%;
    position: absolute;
    z-index: 100;
    height: auto;
    background: #403b2c !important;
    line-height: 40px;
    padding-top: 2px;
  }

  .ant-menu-horizontal {
    text-align: center;
  }

  .ant-menu-submenu-title {
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(199, 199, 199, 0.51);
  }

  .ant-menu-submenu-title span {
    pointer-events: auto;
    display: inline-flex;
  }

  .ant-menu-item {
    border-bottom: 1px solid rgba(199, 199, 199, 0.51);
  }
`;


