export class FormData {
    isMale: false;
    isFemale: false;
    work: string;
    age: Int32Array;
    weight: Int32Array;

    // tslint:disable-next-line: typedef
    clear() {
        this.isMale = false;
        this.isFemale = false;
        this.work = '';
    }
}

export class Sex {
    isMale: false;
    isFemale: false;
}

export class Age {
    age: Int32Array;
}
