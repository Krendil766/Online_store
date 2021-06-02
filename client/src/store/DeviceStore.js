import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники', active:false },
            { id: 2, name: 'Телевизоры', active:false },
            { id: 3, name: 'Компьютеры', active:false }
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: 'Sony' },
            { id: 3, name: "Apple" }
        ];
        this._devices = [
            {
                id: 1,
                name: "Iphone 12",
                price: 2500,
                rating: 7,
                img: "https://content2.onliner.by/catalog/device/main/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg"
            },
            {
                id: 2,
                name: "Sony KD-55XH9505",
                price: 3300,
                rating: 10,
                img: "https://content2.onliner.by/catalog/device/main/a24b9f8d49eb99ddd2b2d0a1164b9b3c.jpeg"
            },
            {
                id: 3,
                name: "Apple Macbook Air 13",
                price: 3000,
                rating: 8,
                img: "https://content2.onliner.by/catalog/device/main/dced3c38dbb7067687bb1f766396eeb0.jpeg"
            }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        return this._types = types;
    }
    setBrands(brands) {
        return this._brands = brands;
    }
    setDevices(devices) {
        return this._devices = devices;
    }
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }

}