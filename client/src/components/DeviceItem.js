import { useHistory } from "react-router-dom";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { TYPE_ROUTER } from "../utils/const";

const DeviceItem = ({ device: { id, name, price, img, rating } }) => {
  const history = useHistory();
  console.log(history);

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(TYPE_ROUTER.DEVICE_ROUTER + "/" + id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width='150' height="150" src={img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
