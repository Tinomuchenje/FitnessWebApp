import { Injectable } from '@angular/core';

import { FormData, Sex, Age, Height, Weight, Activity } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isSexFormValid: boolean;
    private isWorkFormValid: boolean;
    private isAddressFormValid: boolean;
    private isHeightValid: boolean;
    private isweightValid: boolean;
    private isActivityValid: boolean;

    constructor(private workflowService: WorkflowService) {
    }

    getSex(): Sex {
        // Return the Sex data
        const sex: Sex = {
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

    getAge(): Age{
        const age: Age = {
            age: this.formData.age,
        };
        return age;
    }

    // tslint:disable-next-line: typedef
    setAge(data: Age) {
        this.isAddressFormValid = true;
        this.formData.age = data.age;
        this.workflowService.validateStep(STEPS.age);
    }

    // tslint:disable-next-line: typedef
    setHeight(data: Height){
        this.isHeightValid = true;
        this.formData.height = data.height;
        this.workflowService.validateStep(STEPS.height);
    }

    getHeight(): Height {
        const height: Height = {
            height: this.formData.height,
        };
        return height;
    }

    setWeight(data: Weight): void {
        this.isHeightValid = true;
        this.formData.weight = data.weight;
        this.workflowService.validateStep(STEPS.weight);
    }

    getWeight(): Weight {
        const weight: Weight = {
            weight: this.formData.weight,
        };
        return weight;
    }

    setActivity(data: Activity): void {
        this.isHeightValid = true;
        this.formData.activity = data.activity;
        this.workflowService.validateStep(STEPS.ActivityLevel);
    }

    getActivity(): Activity {
        const activity: Activity = {
            activity: this.formData.activity,
        };
        return activity;
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
