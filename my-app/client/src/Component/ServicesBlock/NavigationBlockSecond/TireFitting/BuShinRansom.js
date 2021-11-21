import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Table } from "antd";


const columns = [
  {
    title: 'Димаметр',
    dataIndex: 'diameter',
    key: 'diameter',
  },
  {
    title: 'Износ до 15% (за 4 шт.)',
    dataIndex: 'percent_15',
    key: 'percent_15',
  },
  {
    title: 'Износ до 30% (за 4 шт.)',
    dataIndex: 'percent_30',
    key: 'percent_30',
  },
  {
    title: 'Износ до 50% (за 4 шт.)',
    dataIndex: 'percent_50',
    key: 'percent_50',
  },
];

const data = [
  {
    key: '1',
    diameter: 'R13',
    percent_15: 'до 5 т.р',
    percent_30: 'до 3,5 т.р',
    percent_50: 'до 2 т.р',
  },
  {
    key: '2',
    diameter: 'R14',
    percent_15: 'до 6 т.р',
    percent_30: 'до 4,2 т.р',
    percent_50: 'до 3 т.р',
  },
  {
    key: '3',
    diameter: 'R15',
    percent_15: 'до 8 т.р',
    percent_30: 'до 6,5 т.р',
    percent_50: 'до 5 т.р',
  },
  {
    key: '4',
    diameter: 'R16',
    percent_15: 'до 12 т.р',
    percent_30: 'до 9 т.р',
    percent_50: 'до 6,5 т.р',
  },
  {
    key: '5',
    diameter: 'R17',
    percent_15: 'до 15 т.р',
    percent_30: 'до 12 т.р',
    percent_50: 'до 9 т.р',
  },
  {
    key: '6',
    diameter: 'R18',
    percent_15: 'до 17 т.р',
    percent_30: 'до 14 т.р',
    percent_50: 'до 11 т.р',
  },
  {
    key: '7',
    diameter: 'R19',
    percent_15: 'до 20 т.р',
    percent_30: 'до 16 т.р',
    percent_50: 'до 12 т.р',
  },
  {
    key: '8',
    diameter: 'R20-R22',
    percent_15: 'до 24 т.р',
    percent_30: 'до 20 т.р',
    percent_50: 'до 16 т.р',
  },
];

function BuShinRansom() {
  return (
    <Row gutter={[0, 32]}>
      <Col xs={{ span: 24 }} lg={{ span: 18 }}>
        <h3>Выкуп бу Шин</h3>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 18 }} 
        style={{
          border: "1px solid #f0f0f0", 
          background: "#f0f0f0", 
          padding: "25px 5px"
        }}
      >
        <h4>Продать шины БУ. Бесплатный Выезд.</h4>
        <ul style={{listStyleType: "none"}}>
          <li>
            <strong>Выкуп БУ резины:</strong>
          </li>
          <li>
            <strong>
              {"1)"} Отправьте фото Б У шин на Whatsapp, Telegram, Viber или
              E-mail.
            </strong>
          </li>
          <li>
            <strong>
              {"2)"} Мы оценим ваши покрышки и назовем цену в течение 5 минут
              (Покупаем с износом до 50%)
            </strong>
          </li>
          <li>
            <strong>
              {"3)"} Приедем за вашими автошинами, а также вы можете сами
              привезти их по нашим адресам
            </strong>
          </li>
        </ul>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 18 }}>
        <h4 style={{ textAlign: "center" }}>Примерные цены выкупа</h4>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="small"
        />
      </Col>
    </Row>
  );
}

export default BuShinRansom;
