import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Table } from "antd";

const { Column } = Table;

const TruckTireFittingData = [
  {
    key: '1',
    jobe: 'СНЯТИЕ/УСТАНОВКА',
    valuesR16bk: "250",
    valuesR16kolco: "250",
    valuesR17_5: "300",
    valuesR19_5: "300",
    valuesR20kolco: "300",
    valuesR21Kolco: "500",
    valuesR22_5: "300",
    valuesSpectechnik: "250",
    valuesSpectechnikR18: "300",
    valuesSpectechnikR24: "500",
    valuesSpectechnikR26: "500",
    valuesSpectechnikR28: "500",
    valuesSpectechnikR30: "600",
    valuesSpectechnikR38: "100",
  },
  {
    key: '2',
    jobe: 'СНЯТИЕ/УСТАНОВКА СПАРКА',
    valuesR16bk: "300",
    valuesR16kolco: "300",
    valuesR17_5: "350",
    valuesR19_5: "350",
    valuesR20kolco: "500",
    valuesR21Kolco: "500",
    valuesR22_5: "350",
    // valuesSpectechnik: "",
    // valuesSpectechnikR18: "",
    // valuesSpectechnikR24: "",
    // valuesSpectechnikR26: "",
    // valuesSpectechnikR28: "",
    // valuesSpectechnikR30: "",
    // valuesSpectechnikR38: "",
  },
  {
    key: '3',
    jobe: 'МОНТАЖ/ДЕМОНТАЖ',
    valuesR16bk: "300",
    valuesR16kolco: "500",
    valuesR17_5: "350",
    valuesR19_5: "500",
    valuesR20kolco: "800",
    valuesR21Kolco: "2000",
    valuesR22_5: "400",
    valuesSpectechnik: "500",
    valuesSpectechnikR18: "800",
    valuesSpectechnikR24: "1000",
    valuesSpectechnikR26: "1500",
    valuesSpectechnikR28: "2000",
    valuesSpectechnikR30: "2500",
    valuesSpectechnikR38: "3000",
  },
  {
    key: '4',
    jobe: 'БАЛАНСИРОВКА',
    valuesR16bk: "250",
    valuesR16kolco: "250",
    valuesR17_5: "250",
    valuesR19_5: "350",
    valuesR20kolco: "600",
    valuesR21Kolco: "350",
    // valuesR22_5: "",
    // valuesSpectechnik: "",
    // valuesSpectechnikR18: "",
    // valuesSpectechnikR24: "",
    // valuesSpectechnikR26: "",
    // valuesSpectechnikR28: "",
    // valuesSpectechnikR30: "",
    // valuesSpectechnikR38: "",
  },
];

const AdditionalWorkData = [
  {
    key: '1',
    jobe: 'ПОДКАЧКА',
    valuesR16bk: "50",
    valuesR16kolco: "50",
    valuesR17_5: "50",
    valuesR19_5: "50",
    valuesR20kolco: "50",
    valuesR21Kolco: "100",
    valuesR22_5: "50",
    valuesSpectechnik: "50",
    valuesSpectechnikR18: "50",
    valuesSpectechnikR24: "100",
    valuesSpectechnikR26: "100",
    valuesSpectechnikR28: "100",
    valuesSpectechnikR30: "100",
    valuesSpectechnikR38: "100",
  },
  {
    key: '2',
    jobe: 'ЗАМЕНА ВИНТИЛЯ БЕЗ УЧЕТА СТОИМОСТИ ВИНТИЛЯ',
    valuesR16bk: "150",
    valuesR16kolco: "150",
    valuesR17_5: "150",
    valuesR19_5: "150",
    valuesR20kolco: "150",
    valuesR21Kolco: "150",
    valuesR22_5: "150",
    valuesSpectechnik: "150",
    valuesSpectechnikR18: "150",
    valuesSpectechnikR24: "150",
    valuesSpectechnikR26: "150",
    valuesSpectechnikR28: "150",
    valuesSpectechnikR30: "150",
    valuesSpectechnikR38: "150",
  },
  {
    key: '3',
    jobe: 'ДОП. РАБОТЫ МЯСОРУБКА И ДР.',
    valuesR16bk: "ОТ 150",
    valuesR16kolco: "ОТ 150",
    valuesR17_5: "ОТ 150",
    valuesR19_5: "ОТ 150",
    valuesR20kolco: "ОТ 150",
    valuesR21Kolco: "ОТ 150",
    valuesR22_5: "ОТ 150",
    valuesSpectechnik: "ОТ 150",
    valuesSpectechnikR18: "ОТ 150",
    valuesSpectechnikR24: "ОТ 150",
    valuesSpectechnikR26: "ОТ 150",
    valuesSpectechnikR28: "ОТ 150",
    valuesSpectechnikR30: "ОТ 150",
    valuesSpectechnikR38: "ОТ 150",
  },
  {
    key: '4',
    jobe: 'Зачистка борта диска железной щеткой',
    valuesR16bk: "100",
    valuesR16kolco: "100",
    valuesR17_5: "100",
    valuesR19_5: "100",
    valuesR20kolco: "100",
    valuesR21Kolco: "100",
    valuesR22_5: "100",
    valuesSpectechnik: "100",
    valuesSpectechnikR18: "100",
    valuesSpectechnikR24: "100",
    valuesSpectechnikR26: "100",
    valuesSpectechnikR28: "100",
    valuesSpectechnikR30: "100",
    valuesSpectechnikR38: "100",
  },
  {
    key: '5',
    jobe: 'Зачистка борта диска УШМ',
    valuesR16bk: "200",
    valuesR16kolco: "200",
    valuesR17_5: "200",
    valuesR19_5: "250",
    valuesR20kolco: "350",
    valuesR21Kolco: "500",
    valuesR22_5: "300",
    valuesSpectechnik: "100",
    valuesSpectechnikR18: "300",
    valuesSpectechnikR24: "300",
    valuesSpectechnikR26: "500",
    valuesSpectechnikR28: "500",
    valuesSpectechnikR30: "600",
    valuesSpectechnikR38: "600",
  },
  {
    key: '6',
    jobe: 'ГЕРМЕТИК БОРТА С ДВУХ СТОРОН',
    valuesR16bk: "200",
    valuesR16kolco: "200",
    valuesR17_5: "300",
    valuesR19_5: "300",
    valuesR20kolco: "500",
    valuesR21Kolco: "500",
    valuesR22_5: "500",
    valuesSpectechnik: "200",
    valuesSpectechnikR18: "500",
    valuesSpectechnikR24: "500",
    valuesSpectechnikR26: "500",
    valuesSpectechnikR28: "500",
    valuesSpectechnikR30: "500",
    valuesSpectechnikR38: "500",
  },
  {
    key: '7',
    jobe: 'Установка жгута со съемом колеса',
    valuesR16bk: "150",
    valuesR16kolco: "150",
    valuesR17_5: "150",
    valuesR19_5: "150",
    valuesR20kolco: "150",
    valuesR21Kolco: "150",
    valuesR22_5: "150",
    valuesSpectechnik: "150",
    valuesSpectechnikR18: "300",
    valuesSpectechnikR24: "300",
    valuesSpectechnikR26: "300",
    valuesSpectechnikR28: "300",
    valuesSpectechnikR30: "300",
    valuesSpectechnikR38: "300",
  },
];

const PatchesData = [
  {
    key: '11',
    jobe: 'R25',
    values: "1000",
  },
  {
    key: '2',
    jobe: 'R19',
    values: "800",
  },
  {
    key: '3',
    jobe: 'R18',
    values: "650",
  },
  {
    key: '4',
    jobe: 'R15',
    values: "500",
  },
  {
    key: '5',
    jobe: 'R10',
    values: "350",
  },
  {
    key: '6',
    jobe: 'R52/62	250',
    values: "150",
  },
  {
    key: '7',
    jobe: 'Камерная R52/62',
    values: "200",
  },
];

function TruckTireFitting() {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h3>Грузовой шиномонтаж</h3>
      </Col>
      <Col span={24}>
        <div style={{textAlign: "center", backgroundColor: "#fafafa", borderBottom: "1px solid #f0f0f0"}}>
          <strong>Грузовой шиномонтаж, стоимость</strong>
        </div>
          <Table
            dataSource={TruckTireFittingData}
            pagination={false}
            bordered
            scroll={{ x: 1500 }}
            size="small"
          >
              <Column
                fixed
                title={'НАИМЕНОВАНИЕ РАБОТ'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-16 Б/К'}
                dataIndex={'valuesR16bk'}
                key={'valuesR16bk'}
              />
              <Column
                title={'R-16 КОЛЬЦО'}
                dataIndex={'valuesR16kolco'}
                key={'valuesR16kolco'}
              />
              <Column
                title={'R-17,5'}
                dataIndex={'valuesR17_5'}
                key={'valuesR17_5'}
              />
              <Column
                title={'R-19,5'}
                dataIndex={'valuesR19_5'}
                key={'valuesR19_5'}
              />
              <Column
                title={'R-20 КОЛЬЦО'}
                dataIndex={'valuesR20kolco'}
                key={'valuesR20kolco'}
              />
              <Column
                title={'R-21 КОЛЬЦО'}
                dataIndex={'valuesR21Kolco'}
                key={'valuesR21Kolco'}
              />
              <Column
                title={'R-22,5'}
                dataIndex={'valuesR22_5'}
                key={'valuesR22_5'}
              />
              <Column
                title={'Спец тех Бобкэт'}
                dataIndex={'valuesSpectechnik'}
                key={'valuesSpectechnik'}
              />
              <Column
                title={'Спец тех R-18'}
                dataIndex={'valuesSpectechnikR18'}
                key={'valuesSpectechnikR18'}
              />
              <Column
                title={'Спец тех R-24'}
                dataIndex={'valuesSpectechnikR24'}
                key={'valuesSpectechnikR24'}
              />
              <Column
                title={'Спец тех R-26'}
                dataIndex={'valuesSpectechnikR26'}
                key={'valuesSpectechnikR26'}
              />
              <Column
                title={'Спец тех R-28'}
                dataIndex={'valuesSpectechnikR28'}
                key={'valuesSpectechnikR28'}
              />
              <Column
                title={'Спец тех R-30'}
                dataIndex={'valuesSpectechnikR30'}
                key={'valuesSpectechnikR30'}
              />
              <Column
                title={'Спец тех R-38'}
                dataIndex={'valuesSpectechnikR38'}
                key={'valuesSpectechnikR38'}
              />
          </Table>
      </Col>
      <Col span={24}>
        <div style={{textAlign: "center", backgroundColor: "#fafafa", borderBottom: "1px solid #f0f0f0"}}>
          <strong>Дополнительные работы</strong>
        </div>
          <Table
            dataSource={AdditionalWorkData}
            pagination={false}
            bordered
            scroll={{ x: 1700 }}
            size="small"
          >
            
              <Column
                fixed
                title={'НАИМЕНОВАНИЕ РАБОТ'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-16 Б/К'}
                dataIndex={'valuesR16bk'}
                key={'valuesR16bk'}
              />
              <Column
                title={'R-16 КОЛЬЦО'}
                dataIndex={'valuesR16kolco'}
                key={'valuesR16kolco'}
              />
              <Column
                title={'R-17,5'}
                dataIndex={'valuesR17_5'}
                key={'valuesR17_5'}
              />
              <Column
                title={'R-19,5'}
                dataIndex={'valuesR19_5'}
                key={'valuesR19_5'}
              />
              <Column
                title={'R-20 КОЛЬЦО'}
                dataIndex={'valuesR20kolco'}
                key={'valuesR20kolco'}
              />
              <Column
                title={'R-21 КОЛЬЦО'}
                dataIndex={'valuesR21Kolco'}
                key={'valuesR21Kolco'}
              />
              <Column
                title={'R-22,5'}
                dataIndex={'valuesR22_5'}
                key={'valuesR22_5'}
              />
              <Column
                title={'Спец тех Бобкэт'}
                dataIndex={'valuesSpectechnik'}
                key={'valuesSpectechnik'}
              />
              <Column
                title={'Спец тех R-18'}
                dataIndex={'valuesSpectechnikR18'}
                key={'valuesSpectechnikR18'}
              />
              <Column
                title={'Спец тех R-24'}
                dataIndex={'valuesSpectechnikR24'}
                key={'valuesSpectechnikR24'}
              />
              <Column
                title={'Спец тех R-26'}
                dataIndex={'valuesSpectechnikR26'}
                key={'valuesSpectechnikR26'}
              />
              <Column
                title={'Спец тех R-28'}
                dataIndex={'valuesSpectechnikR28'}
                key={'valuesSpectechnikR28'}
              />
              <Column
                title={'Спец тех R-30'}
                dataIndex={'valuesSpectechnikR30'}
                key={'valuesSpectechnikR30'}
              />
              <Column
                title={'Спец тех R-38'}
                dataIndex={'valuesSpectechnikR38'}
                key={'valuesSpectechnikR38'}
              />
            
          </Table>
      </Col>
      <Col span={24}>
          <Table
            dataSource={PatchesData}
            pagination={false}
            size="small"
          >
              <Column
                title={'Заплатки'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                dataIndex={'values'}
                key={'values'}
              />
          </Table>
      </Col>
    </Row>
  );
}

export default TruckTireFitting;
