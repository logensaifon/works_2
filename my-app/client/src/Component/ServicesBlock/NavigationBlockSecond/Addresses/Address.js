import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import { Link } from "react-router-dom";


function Address({addressState}) {

  const GetPlacemark = () => {
    let dataArr = []

    for (const key in addressState) {
      let splitData = addressState[key].geoData.split(",")
      let geoIndex = null
      
      if ( typeof +splitData[0] === "number" && typeof +splitData[1] === "number") {
        geoIndex = splitData.map((index)=> +index)
        
      } else {

        geoIndex = [0, 0]
      }

      dataArr.push(
        <Placemark
          key={addressState[key].textBody}
          geometry={geoIndex}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          properties={{
            balloonContentBody: addressState[key].textBody,
          }}
        />
      )
    }

    return dataArr
  }
  

  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h3>Адреса</h3>
      </Col>
      <Col span={24} style={{height: 405, border: "solid 1px rgb(217, 217, 217)", paddingTop: 0}}>
        <YMaps>
            <Map
              style={{height: 400, width: "99.9%"}}
              state={{
                zoom: 9,
                center: [55.76, 37.64],
                controls: [],
              }}
            >
              <GetPlacemark />
              <ZoomControl options={{ float: 'right' }} />
            </Map>
        </YMaps>
      </Col>
      <Col span={6} style={{fontWeight: 700, fontSize: 16}}>
        <Link to="/tire-fitting">Шиномонтаж</Link>
        <Link to="/services" style={{marginLeft: 20}}>Услуги</Link>
      </Col>
    </Row>
  );
}

export default Address;
