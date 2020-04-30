import {FormGroup} from "@angular/forms";

export abstract class Root {
    public id = 0;
    public apiSuccess = false;
    public apiLoading = false;
    public apiError = false;

    // public isPlainObject(variable) {
    //     return typeof variable === 'object';
    // }

    // public populateFromDTO(dto: any) {
    //     Object.keys(this).forEach(property => {
    //         if (dto.hasOwnProperty(property)) {
    //             if (this.isPlainObject(dto[property])) {
    //                 if (Array.isArray(dto[property])) {
    //                     this.populateArrayOfObjectsFromDTO(dto[property]);
    //                 } else {
    //                     this[property].populateFromDTO(dto[property]);
    //                 }

    //             } else {
    //                 this[property] = dto[property]
    //             }
    //         }
    //     });
    // }

    //  public abstract populateFromDTO(dto:any);

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

    populateObjectFormReactiveFormGroup(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(key => {
            if (this.hasOwnProperty(key)) {
                this[key] = formGroup.controls[key].value;
            }
        });
    }

}
