import { List } from './list';
import { Deserialize } from './deserialize.interface';
import { Business } from './business';
import { BusinessService } from '../services/business.service';
import { ServicesDependencyInjection } from './services-dependency-injection';
import { Pagination } from './pagination';


export class BusinessList extends List implements Deserialize {

   // private businessService: BusinessService;
    constructor() {
        super();
     //   this.businessService = ServicesDependencyInjection.injector.get(BusinessService);
    }

    deserialize(businessListDto: BusinessList) {
        for (let index = this.elements.length; index >= 0; index--) {
            this.elements.pop();
        }
        this.pagination = new Pagination();
        this.pagination.deserialize(businessListDto.pagination);
        businessListDto.elements.forEach(elementDto => {
            let element = new Business();
            element.deserialize(elementDto as Business);
            this.add(element);
          //  this.elements.push(element as Business)
        });
        return this;
    }

    // loadBusinessList(succesCallback?: () => void, errorCallback?: () => void) {
    //     this.setApiLoading();
    //     this.businessService.loadBusinessList(this.pagination).subscribe(businesList => {
    //         console.log('RES busines list', businesList);
    //         this.deserialze(businesList);
    //         this.setApiSuccess();
    //         if (succesCallback) {
    //             succesCallback();
    //         }
    //     }, error => {
    //         this.setApiError();
    //         if (errorCallback) {
    //             errorCallback();
    //         }
    //     });
    // }

}