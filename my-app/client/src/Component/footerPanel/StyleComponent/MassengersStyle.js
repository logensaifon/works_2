import styled from 'styled-components';

export const MassengersStyle = styled.div`
  width: 45px;
  margin-bottom: 35px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  button {
    all: unset;
    margin-left: 3px;
  }

  i {
      padding: 5px;
      border: solid 0;
      border-radius: 50% 50% 50% 50%;
      display: inline-block;
      margin-top: 3px;
      margin-bottom: 3px;
      cursor: pointer;
      opacity: 0.7;
      
      :hover {
        opacity: 1;
      }
  }

  .iIconRiTelegramLine {
    background-color: DarkTurquoise;

    & {
      color: white;
    }
  }

  .iconwhatsapp {
    background-color: LimeGreen;

    & {
      color: white;
    }
  }

  .iViber {
    background-color: BlueViolet;

    .iconviber {
      color: white;
    }
  }

  .ant-back-top {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -30px;
      width: 45px;
    }
`;