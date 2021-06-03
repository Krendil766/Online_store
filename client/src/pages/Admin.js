import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import { useState } from "react";

const Admin = () => {
  const [brandVisiabel, setBrandVisiable] = useState(false);
  const [typeVisiabel, setTypeVisiable] = useState(false);
  const [deviceVisiabel, setDeviceVisiable] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeVisiable(true)}
      >
        Добавить тип
      </Button>
      <CreateType />
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setBrandVisiable(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setDeviceVisiable(true)}
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisiabel} onHide={() => setTypeVisiable(false)} />
      <CreateDevice
        show={deviceVisiabel}
        onHide={() => setDeviceVisiable(false)}
      />
      <CreateBrand
        show={brandVisiabel}
        onHide={() => setBrandVisiable(false)}
      />
      {/* <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} /> */}
    </Container>
  );
};

export default Admin;
