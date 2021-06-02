import DeviceStore from "./DeviceStore";
import UserStore from './UserStore';

const store = {
    user: new UserStore(),
    device: new DeviceStore()
}

export default store;