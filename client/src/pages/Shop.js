import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { fetchType, fetchBrand, fetchDevice } from "../http/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    try {
      fetchType().then((data) => {
        device.setTypes(data);
      });
      fetchBrand().then((data) => {
        device.setBrands(data);
      });
      fetchDevice().then((data) => {
        device.setDevices(data.rows);
      });
    } catch (e) {
      alert(e.data.message);
    }
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
