import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  const types = device.types;

  return (
    <div>
      <ListGroup>
        {types.map((type) => {
          return (
            <ListGroup.Item
              active={type.id === device.selectedType.id}
              onClick={() => device.setSelectedType(type)}
              key={type.id}
              style={{ cursor: "pointer" }}
            >
              {" "}
              {type.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
