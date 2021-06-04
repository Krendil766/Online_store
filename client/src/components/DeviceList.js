import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const {
    device: { devices },
  } = useContext(Context);
  console.log(devices);
  
  return (
    <Row className="d-flex">
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
