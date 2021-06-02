import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from ".."
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { device } = useContext(Context);
    const types = device.types;
    const onActive = (e) => {
        const value = e.target.innerHTML;
        types.filter(item => {
            if (item.name === value.trim()) {
                return [...types, item.active = true]
            }
            return [...types, item.active = false]


        })

    }
    return (
        <div>
            <ListGroup>
                {
                    types.map(type => {
                        return <ListGroup.Item
                            key={type.id}
                            active={type.active}
                            onClick={onActive}
                        > {type.name}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div >
    )
})

export default TypeBar