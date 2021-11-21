import React from 'react';
import "antd/dist/antd.css";
import { Row, Col, Table } from "antd";

const { Column, ColumnGroup } = Table;

const PassengerTireFittingData = [
    {
      key: '1',
      jobe: 'СНЯТИЕ/УСТАНОВКА',
      valuesR13: "100",
      valuesR14: "100",
      valuesR15: "100",
      valuesR16: "150",
      valuesR17: "150",
      valuesR18: "150",
      valuesR19: "200",
      valuesR20: "250",
      valuesR21: "300",
      valuesR22: "300",
    },
    {
      key: '2',
      jobe: 'МОНТАЖ/ДЕМОНТАЖ',
      valuesR13: "100",
      valuesR14: "100",
      valuesR15: "100",
      valuesR16: "150",
      valuesR17: "150",
      valuesR18: "200",
      valuesR19: "200",
      valuesR20: "300",
      valuesR21: "350",
      valuesR22: "400",
    },
    {
      key: '3',
      jobe: 'БАЛАНСИРОВКА',
      valuesR13: "100",
      valuesR14: "100",
      valuesR15: "100",
      valuesR16: "150",
      valuesR17: "150",
      valuesR18: "200",
      valuesR19: "200",
      valuesR20: "200",
      valuesR21: "200",
      valuesR22: "200",
    },
    {
      key: '4',
      jobe: 'КОМПЛЕКС',
      valuesR13: "300",
      valuesR14: "350",
      valuesR15: "400",
      valuesR16: "450",
      valuesR17: "500",
      valuesR18: "550",
      valuesR19: "600",
      valuesR20: "750",
      valuesR21: "800",
      valuesR22: "850",
    },
];

const ComplexOf4WheelsCarsData = [
      {
        key: '1',
        jobe: 'Комплексная переобувка 4-х колес с балансировкой',
        valuesR13: "1100",
        valuesR14: "1300",
        valuesR15: "1500",
        valuesR16: "1700",
        valuesR17: "1900",
        valuesR18: "2100",
        valuesR19: "2300",
        valuesR20: "2900",
        valuesR21: "3300",
        valuesR22: "3500",
      },
      {
        key: '2',
        jobe: "Комплексная переобувка 4-х колес с балансировкой RUNFLAT или низкий профиль 45 и ниже",
        valuesR13: "1250",
        valuesR14: "1450",
        valuesR15: "1650",
        valuesR16: "1850",
        valuesR17: "2050",
        valuesR18: "2250",
        valuesR19: "2450",
        valuesR20: "3050",
        valuesR21: "3450",
        valuesR22: "3650",
      },
      {
        key: '3',
        jobe: 'Замена готового комплекта 4-х колес с балансировкой',
        valuesR13: "800",
        valuesR14: "1000",
        valuesR15: "1000",
        valuesR16: "1200",
        valuesR17: "1400",
        valuesR18: "1400",
        valuesR19: "1600",
        valuesR20: "1800",
        valuesR21: "2000",
        valuesR22: "2000",
      },
];
  
const SUVsMinivansAndMinibusesData = [
    {
        key: '1',
        jobe: 'СНЯТИЕ/УСТАНОВКА',
        valuesR15: "150",
        valuesR16: "200",
        valuesR17: "200",
        valuesR18: "200",
        valuesR19: "250",
        valuesR20: "300",
        valuesR21: "350",
        valuesR22: "350",
      },
      {
        key: '2',
        jobe: "МОНТАЖ/ДЕМОНТАЖ",
        valuesR15: "200",
        valuesR16: "200",
        valuesR17: "200",
        valuesR18: "250",
        valuesR19: "250",
        valuesR20: "350",
        valuesR21: "400",
        valuesR22: "450",
      },
      {
        key: '3',
        jobe: 'БАЛАНСИРОВКА',
        valuesR15: "200",
        valuesR16: "200",
        valuesR17: "250",
        valuesR18: "250",
        valuesR19: "250",
        valuesR20: "250",
        valuesR21: "250",
        valuesR22: "250",
      },
      {
        key: '4',
        jobe: 'КОМПЛЕКС',
        valuesR15: "550",
        valuesR16: "600",
        valuesR17: "650",
        valuesR18: "700",
        valuesR19: "750",
        valuesR20: "900",
        valuesR21: "1000",
        valuesR22: "1050",
      },
];
  
const ComplexOf4WheelsSUVsMinivansAndMinibusesData = [
    {
        key: '1',
        jobe: 'Комплексная переобувка 4-х колес с балансировкой',
        valuesR15: "2100",
        valuesR16: "2300",
        valuesR17: "2500",
        valuesR18: "2700",
        valuesR19: "2900",
        valuesR20: "3500",
        valuesR21: "3900",
        valuesR22: "4100",
      },
      {
        key: '2',
        jobe: "Комплексная переобувка 4-х колес с балансировкой RUNFLAT или низкий профиль 45 и ниже",
        valuesR15: "2250",
        valuesR16: "2450",
        valuesR17: "2650",
        valuesR18: "2850",
        valuesR19: "3050",
        valuesR20: "3650",
        valuesR21: "4050",
        valuesR22: "4250",
      },
      {
        key: '3',
        jobe: 'Замена готового комплекта 4-х колес с балансировкой',
        valuesR15: "1400",
        valuesR16: "1600",
        valuesR17: "1800",
        valuesR18: "1800",
        valuesR19: "2000",
        valuesR20: "2200",
        valuesR21: "2400",
        valuesR22: "2400",
      },
];

const LightTruckExceptForTheRingData = [
    {
      key: '1',
      jobe: 'СНЯТИЕ/УСТАНОВКА',
      valuesR13C: "150",
      valuesR14C: "150",
      valuesR15C: "150",
      valuesR16C: "200",
    },
    {
      key: '2',
      jobe: "МОНТАЖ/ДЕМОНТАЖ",
      valuesR13C: "100",
      valuesR14C: "150",
      valuesR15C: "150",
      valuesR16C: "200",
    },
    {
      key: '3',
      jobe: 'БАЛАНСИРОВКА',
      valuesR13C: "150",
      valuesR14C: "150",
      valuesR15C: "200",
      valuesR16C: "200",
    },
    {
      key: '4',
      jobe: 'КОМПЛЕКС',
      valuesR13C: "400",
      valuesR14C: "450",
      valuesR15C: "500",
      valuesR16C: "600",
    },
];

const StrippingSealingLubricationData = [
    {
      key: '1',
      jobe: 'Зачистка диска УШМ',
      valuesR13: "100",
      valuesR14: "100",
      valuesR15: "100",
      valuesR16: "150",
      valuesR17: "150",
      valuesR18: "150",
      valuesR19: "200",
      valuesR20: "200",
      valuesR21: "200",
      valuesR22: "200",
    },
    {
      key: '2',
      jobe: 'Уплотнение бортов герметиком',
      valuesR13: "50",
      valuesR14: "50",
      valuesR15: "50",
      valuesR16: "100",
      valuesR17: "100",
      valuesR18: "100",
      valuesR19: "150",
      valuesR20: "150",
      valuesR21: "150",
      valuesR22: "150",
    },
    {
      key: '3',
      jobe: 'Медная смазка болтов/шпилек',
      valuesR13: "50",
      valuesR14: "50",
      valuesR15: "50",
      valuesR16: "100",
      valuesR17: "100",
      valuesR18: "100",
      valuesR19: "150",
      valuesR20: "150",
      valuesR21: "150",
      valuesR22: "150",
    },
];

const OtherTypesOfWorkData = [
    {
      key: '1',
      jobe: 'Ремонт камеры заплаткой R 52/62',
      values: "150",
    },
    {
      key: '2',
      jobe: 'Установка жгута со съемом колеса',
      values: "100",
    },
    {
      key: '3',
      jobe: 'Установка жгута без съема колеса с авто',
      values: "200",
    },
    {
      key: '4',
      jobe: 'Установка вентиля',
      values: "50",
    },
    {
      key: '5',
      jobe: 'Замена одного золотника',
      values: "30",
    },
    {
      key: '6',
      jobe: 'Замена колпачка',
      values: "10",
    },
    {
      key: '7',
      jobe: 'Подкачка колеса',
      values: "20",
    },
    {
      key: '8',
      jobe: 'Комплект пакетов (4 шт.)',
      values: "бесплатно",
    },
    {
      key: '9',
      jobe: 'Утилизация легковой шины / грузовой шины',
      values: "100 / 250",
    },
    {
      key: '10',
      jobe: 'Иные работы',
      values: "Договорная",
    },
];

function PassengerTireFitting() {
    return (
        <Row gutter={[0, 32]}>
        <Col span={24}>
        <h3>Легковой шиномонтаж</h3>
        </Col>
        <Col span={24}>
          <div style={{textAlign: "center", backgroundColor: "#fafafa", borderBottom: "1px solid #f0f0f0"}}>
            <strong>Легковой шиномонтаж, стоимость</strong>
          </div>
          <Table
            dataSource={PassengerTireFittingData}
            pagination={false}
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
                title={'R-13'}
                dataIndex={'valuesR13'}
                key={'valuesR13'}
              />
              <Column
                title={'R-14'}
                dataIndex={'valuesR14'}
                key={'valuesR14'}
              />
              <Column
                title={'R-15'}
                dataIndex={'valuesR15'}
                key={'valuesR15'}
              />
              <Column
                title={'R-16'}
                dataIndex={'valuesR16'}
                key={'valuesR16'}
              />
              <Column
                title={'R-17'}
                dataIndex={'valuesR17'}
                key={'valuesR17'}
              />
              <Column
                title={'R-18'}
                dataIndex={'valuesR18'}
                key={'valuesR18'}
              />
              <Column
                title={'R-19'}
                dataIndex={'valuesR19'}
                key={'valuesR19'}
              />
              <Column
                title={'R-20'}
                dataIndex={'valuesR20'}
                key={'valuesR20'}
              />
              <Column
                title={'R-21'}
                dataIndex={'valuesR21'}
                key={'valuesR21'}
              />
              <Column
                title={'R-22'}
                dataIndex={'valuesR22'}
                key={'valuesR22'}
              />
          </Table>
        </Col>
        <Col span={24}>
          <Table
            dataSource={ComplexOf4WheelsCarsData}
            pagination={false}
            scroll={{ x: 1500 }}
            size="small"
          >
              <Column
                fixed
                title={'Комплекс 4х колес (легковые)'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-13'}
                dataIndex={'valuesR13'}
                key={'valuesR13'}
              />
              <Column
                title={'R-14'}
                dataIndex={'valuesR14'}
                key={'valuesR14'}
              />
              <Column
                title={'R-15'}
                dataIndex={'valuesR15'}
                key={'valuesR15'}
              />
              <Column
                title={'R-16'}
                dataIndex={'valuesR16'}
                key={'valuesR16'}
              />
              <Column
                title={'R-17'}
                dataIndex={'valuesR17'}
                key={'valuesR17'}
              />
              <Column
                title={'R-18'}
                dataIndex={'valuesR18'}
                key={'valuesR18'}
              />
              <Column
                title={'R-19'}
                dataIndex={'valuesR19'}
                key={'valuesR19'}
              />
              <Column
                title={'R-20'}
                dataIndex={'valuesR20'}
                key={'valuesR20'}
              />
              <Column
                title={'R-21'}
                dataIndex={'valuesR21'}
                key={'valuesR21'}
              />
              <Column
                title={'R-22'}
                dataIndex={'valuesR22'}
                key={'valuesR22'}
              />
          </Table>
      </Col>
        <Col span={24}>
          <Table
            dataSource={SUVsMinivansAndMinibusesData}
            pagination={false}
            scroll={{ x: 1500 }}
            size="small"
          >
              <Column
                fixed
                title={'Внедорожники, минивены и микроавтобусы'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-15'}
                dataIndex={'valuesR15'}
                key={'valuesR15'}
              />
              <Column
                title={'R-16'}
                dataIndex={'valuesR16'}
                key={'valuesR16'}
              />
              <Column
                title={'R-17'}
                dataIndex={'valuesR17'}
                key={'valuesR17'}
              />
              <Column
                title={'R-18'}
                dataIndex={'valuesR18'}
                key={'valuesR18'}
              />
              <Column
                title={'R-19'}
                dataIndex={'valuesR19'}
                key={'valuesR19'}
              />
              <Column
                title={'R-20'}
                dataIndex={'valuesR20'}
                key={'valuesR20'}
              />
              <Column
                title={'R-21'}
                dataIndex={'valuesR21'}
                key={'valuesR21'}
              />
              <Column
                title={'R-22'}
                dataIndex={'valuesR22'}
                key={'valuesR22'}
              />
          </Table>
        </Col>
        <Col span={24}>
          <Table
            dataSource={ComplexOf4WheelsSUVsMinivansAndMinibusesData}
            pagination={false}
            scroll={{ x: 1500 }}
            size="small"
          >
              <Column
                fixed
                title={'Комплекс 4х колес (внедорожники, минивены и микроавтобусы)'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-15'}
                dataIndex={'valuesR15'}
                key={'valuesR15'}
              />
              <Column
                title={'R-16'}
                dataIndex={'valuesR16'}
                key={'valuesR16'}
              />
              <Column
                title={'R-17'}
                dataIndex={'valuesR17'}
                key={'valuesR17'}
              />
              <Column
                title={'R-18'}
                dataIndex={'valuesR18'}
                key={'valuesR18'}
              />
              <Column
                title={'R-19'}
                dataIndex={'valuesR19'}
                key={'valuesR19'}
              />
              <Column
                title={'R-20'}
                dataIndex={'valuesR20'}
                key={'valuesR20'}
              />
              <Column
                title={'R-21'}
                dataIndex={'valuesR21'}
                key={'valuesR21'}
              />
              <Column
                title={'R-22'}
                dataIndex={'valuesR22'}
                key={'valuesR22'}
              />
          </Table>
        </Col>
        <Col span={24}>
          <Table
            dataSource={LightTruckExceptForTheRingData}
            pagination={false}
            scroll={{ x: 700 }}
            size="small"
          >
              <Column
                fixed
                title={'Легкогрузовые (кроме кольца)'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-13C'}
                dataIndex={'valuesR13C'}
                key={'valuesR13C'}
              />
              <Column
                title={'R-13C'}
                dataIndex={'valuesR13C'}
                key={'valuesR13C'}
              />
              <Column
                title={'R-15C'}
                dataIndex={'valuesR15C'}
                key={'valuesR15C'}
              />
              <Column
                title={'R-16C'}
                dataIndex={'valuesR16C'}
                key={'valuesR16C'}
              />
          </Table>
        </Col>
        <Col span={24}>
          <Table
            dataSource={StrippingSealingLubricationData}
            pagination={false}
            scroll={{ x: 1500 }}
            size="small"
          >
              <Column
                fixed
                title={'Зачистка, герметизация, смазка'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R-13'}
                dataIndex={'valuesR13'}
                key={'valuesR13'}
              />
              <Column
                title={'R-14'}
                dataIndex={'valuesR14'}
                key={'valuesR14'}
              />
              <Column
                title={'R-15'}
                dataIndex={'valuesR15'}
                key={'valuesR15'}
              />
              <Column
                title={'R-16'}
                dataIndex={'valuesR16'}
                key={'valuesR16'}
              />
              <Column
                title={'R-17'}
                dataIndex={'valuesR17'}
                key={'valuesR17'}
              />
              <Column
                title={'R-18'}
                dataIndex={'valuesR18'}
                key={'valuesR18'}
              />
              <Column
                title={'R-19'}
                dataIndex={'valuesR19'}
                key={'valuesR19'}
              />
              <Column
                title={'R-20'}
                dataIndex={'valuesR20'}
                key={'valuesR20'}
              />
              <Column
                title={'R-21'}
                dataIndex={'valuesR21'}
                key={'valuesR21'}
              />
              <Column
                title={'R-22'}
                dataIndex={'valuesR22'}
                key={'valuesR22'}
              />
          </Table>
        </Col>
        <Col span={24}>
          <Table
            dataSource={OtherTypesOfWorkData}
            pagination={false}
            size="small"
          >
            <ColumnGroup title="Другие виды работ">
              <Column
                title={'Установка заплатки (без учета стоимости съема/установки колеса)'}
                dataIndex={'jobe'}
                key={'jobe'}
              />
              <Column
                title={'R25 - 700p. R19 - 500p. R18 - 350p. R15 - 350p. R10 - 250p. R52/62 - 150р.'}
                dataIndex={'values'}
                key={'values'}
              />
            </ColumnGroup>
          </Table>
        </Col>
    </Row>
    )
}

export default PassengerTireFitting
