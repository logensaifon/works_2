import styled from 'styled-components';

export const MassengersContentStyle = styled.div`
  width: 350px;

  @media screen and (max-width: 400px) {
    width: 275px;
  }

  i {
      padding: 5px;
      border: solid 0;
      border-radius: 50% 50% 50% 50%;
      display: inline-block;
      margin-top: 3px;
      margin-bottom: 3px;
  }

  p {
    margin-bottom: 4px;
  }

  .messegeContact {
    border: solid 1px black;
    display: inline;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 1px;
    padding-bottom: 1px;
    background-color: antiquewhite;
    margin-right: 4px;
    font-weight: 700;
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
`;