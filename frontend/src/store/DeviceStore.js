import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Phone'},
            {id: 2, name: 'Laptop'},
            {id: 3, name: 'TV'},
            {id: 4, name: 'Audio'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Lenovo'},
            {id: 5, name: 'Asus'},
            {id: 6, name: 'Xiaomi'},
            {id: 7, name: 'Nokia'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro 1', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 2, name: 'Iphone 12 pro 2', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 3, name: 'Iphone 12 pro 3', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 4, name: 'Iphone 12 pro 4', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 5, name: 'Iphone 12 pro 5', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 6, name: 'Iphone 12 pro 6', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 7, name: 'Iphone 12 pro 7', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
            {id: 8, name: 'Iphone 12 pro 8', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}