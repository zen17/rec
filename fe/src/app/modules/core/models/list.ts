import { Deserialize } from './deserialize.interface';
import { Root } from './root';
import { Pagination } from './pagination';

export class List {
    elements: Root[] = [];
    pagination = new Pagination();
    public apiSuccess = false;
    public apiLoading = false;
    public apiError = false;

    constructor() {

    }

    public setApiLoading() {
        this.apiLoading = true;
        this.apiSuccess = false;
        this.apiError = false;
    }
    public setApiSuccess() {
        this.apiLoading = false;
        this.apiSuccess = true;
    }

    public setApiError() {
        this.apiLoading = false;
        this.apiSuccess = true;
    }


    add(element: Root) {
        this.elements.push(element);
    }


    removeById(id: number) {
        this.elements = this.elements.filter(element => element.id === id)

    }

}