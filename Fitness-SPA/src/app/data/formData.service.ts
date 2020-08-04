import { Injectable } from '@angular/core';

import { FormData, Sex, Age } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isSexFormValid: boolean;
    private isWorkFormValid: boolean;
    private isAddressFormValid: boolean;

    constructor(private workflowService: WorkflowService) {
    }

    getSex(): Sex {
        // Return the Sex data
        let sex: Sex = {
            isMale: this.formData.isMale,
            isFemale: this.formData.isFemale
        };
        return sex;
    }

    // tslint:disable-next-line: typedef
    setSex(data: Sex) {
        // Update the Sex data only when the Sex Form had been validated successfully
        this.isSexFormValid = true;
        this.formData.isMale = data.isMale;
        this.formData.isFemale = data.isFemale;
        // Validate Sex Step in Workflow
        this.workflowService.validateStep(STEPS.sex);
    }

    getage(): Age{
        let sex: Age = {
            age: this.formData.age,
        };
        return sex;
    }

    // tslint:disable-next-line: typedef
    setAge(data: Age){
        this.isAddressFormValid = true;
        this.formData.age = data.age;
        this.workflowService.validateStep(STEPS.age);
    }

    getWork(): string {
        // Return the work type
        return this.formData.work;
    }

    // tslint:disable-next-line: typedef
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isSexFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    // tslint:disable-next-line: typedef
    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isSexFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }
}
