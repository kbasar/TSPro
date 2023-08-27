"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// import faker from 'faker';
// import faker from "faker" ;
const faker_1 = __importDefault(require("@faker-js/faker"));
class User {
    constructor() {
        this.name = faker_1.default.name.FirstName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude())
        };
    }
}
exports.User = User;
