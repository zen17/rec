import { Root } from "./root";
import { Pagination } from "../../common/models/pagination";

export class List {
    elements: Root[] = [];
    pagination = new Pagination();
    constructor() {

    }

    add(element: Root) {
        this.elements.push(element);
    }


    removeById(id: number) {
        this.elements = this.elements.filter(element => element.id === id)

    }
}