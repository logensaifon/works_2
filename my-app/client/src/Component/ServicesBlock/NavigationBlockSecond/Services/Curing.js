import React from "react";
import { Row, Col, Table } from "antd";

const Freightcolumns = [
  {
    title: "Грузовые",
    dataIndex: "name",
    key: "name",
  },
  {
    dataIndex: "values",
    key: "values",
  },
];

const Freightdata = [
  {
    key: "1",
    name: "R,RS-24",
    values: "1000",
  },
  {
    key: "2",
    name: "R,RS-26",
    values: "1200",
  },
  {
    key: "3",
    name: "R,RS-28",
    values: "1500",
  },
  {
    key: "4",
    name: "R,RS-30",
    values: "1700",
  },
  {
    key: "5",
    name: "R,RS-40",
    values: "2000",
  },
  {
    key: "6",
    name: "R,RS-42",
    values: "2200",
  },
  {
    key: "7",
    name: "R,RS-44",
    values: "2500",
  },
  {
    key: "8",
    name: "R,RS-46",
    values: "2700",
  },
  {
    key: "9",
    name: "RS-531",
    values: "1000",
  },
  {
    key: "10",
    name: "RS-535",
    values: "1200",
  },
  {
    key: "11",
    name: "RS-537",
    values: "1400",
  },
  {
    key: "12",
    name: "RS-539",
    values: "1800",
  },
  {
    key: "13",
    name: "RS-541",
    values: "2200",
  },
  {
    key: "14",
    name: "RS-543",
    values: "2800",
  },
  {
    key: "15",
    name: "RS-549",
    values: "3700",
  },
  {
    key: "16",
    name: "RS-551",
    values: "4200",
  },
];

const AgriculturalTiresColumns = [
  {
    title: "Сельскохозяйственные шины",
    dataIndex: "name",
    key: "name",
  },
  {
    dataIndex: "values",
    key: "values",
  },
];

const AgriculturalTiresData = [
  {
    key: "1",
    name: "D2",
    values: "700",
  },
  {
    key: "2",
    name: "D3",
    values: "800",
  },
  {
    key: "3",
    name: "D4",
    values: "1000",
  },
  {
    key: "4",
    name: "D5",
    values: "1500",
  },
  {
    key: "5",
    name: "D6",
    values: "2000",
  },
  {
    key: "6",
    name: "D7",
    values: "2500",
  },
  {
    key: "7",
    name: "D8",
    values: "3000",
  },
  {
    key: "8",
    name: "D9",
    values: "3200",
  },
  {
    key: "9",
    name: "D10",
    values: "4000",
  },
  {
    key: "10",
    name: "D20",
    values: "1500",
  },
  {
    key: "11",
    name: "D21",
    values: "2500",
  },
  {
    key: "12",
    name: "D22",
    values: "4200",
  },
  {
    key: "13",
    name: "D23",
    values: "2700",
  },
  {
    key: "14",
    name: "D24",
    values: "3000",
  },
  {
    key: "15",
    name: "D25",
    values: "4500",
  },
  {
    key: "16",
    name: "CDS25",
    values: "5000",
  },
];

const QuarryEquipmentLoadersColumns = [
  {
    title: "Карьерная техника/погрузчики",
    dataIndex: "name",
    key: "name",
  },
  {
    dataIndex: "values",
    key: "values",
  },
];

const QuarryEquipmentLoadersData = [
  {
    key: "1",
    name: "D30",
    values: "4000",
  },
  {
    key: "2",
    name: "D31",
    values: "5500",
  },
  {
    key: "3",
    name: "D32",
    values: "7000",
  },
];

function Curing() {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h3>Вулканизация</h3>
        <p>
          Недорого и качественно Вулканизация особо востребована для грузовых
          автомобилей. Именно на таких машинах часто стирается резина. Поэтому
          становится необходимостью восстанавливать протектор. Вулканизация
          колес позволит вам сэкономить деньги на покупке новой резины. С
          помощью вулканизации мы восстанавливаем шины, где поврежден
          протекторный слой. Отремонтированные покрышки очень прочные и не
          отличаются от новых автошин. Бытует мнение, что восстановленные таким
          образом шины могут взрываться. Но это неверно. Такого не может
          произойти по причине того, что внутренняя часть покрышки не
          соприкасается с дорожной поверхностью.
          <strong style={{ color: "#e20606", marginLeft: "5px" }}>
            Стоимость ремонта одного бокового пореза от 200р
          </strong>
        </p>
      </Col>
      <Col span={24}>
        <Table
          columns={Freightcolumns}
          dataSource={Freightdata}
          pagination={false}
          size="small"
        />
      </Col>
      <Col span={24}>
        <Table
          columns={AgriculturalTiresColumns}
          dataSource={AgriculturalTiresData}
          pagination={false}
          size="small"
        />
      </Col>
      <Col span={24}>
        <Table
          columns={QuarryEquipmentLoadersColumns}
          dataSource={QuarryEquipmentLoadersData}
          pagination={false}
          size="small"
        />
      </Col>
      <Col span={24}>
        <p style={{ fontSize: "18px", marginTop: "50px"}}>
          * Цена может изменяться в зависимости от размера шины и сложности
          работ.
        </p>
      </Col>
    </Row>
  );
}

export default Curing;
