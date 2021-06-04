import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    return (this._types = types);
  }
  setBrands(brands) {
    return (this._brands = brands);
  }
  setDevices(devices) {
    return (this._devices = devices);
  }
  setSelectedType(type) {
    return (this._selectedType = type);
  }
  setSelectedBrand(brand) {
    return (this._selectedBrand = brand);
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
