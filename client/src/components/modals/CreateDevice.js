import { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const [info, setInfo] = useState([]);

  const {
    device: {
      types,
      brands,
      selectedType,
      selectedBrand,
      setSelectedType,
      setSelectedBrand,
    },
  } = useContext(Context);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item
                  onClick={() => setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            // value={price}
            // onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control
            className="mt-3"
            type="file"
            //   onChange={selectFile}
          />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  //   value={i.title}
                  //   onChange={(e) =>
                  //     changeInfo("title", e.target.value, i.number)
                  //   }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  //   value={i.description}
                  //   onChange={(e) =>
                  //     changeInfo("description", e.target.value, i.number)
                  //   }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
