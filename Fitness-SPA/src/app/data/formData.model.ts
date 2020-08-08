export class FormData {
    isMale: boolean;
    isFemale: boolean;
    work: string;
    age: Int32Array;
    height: Int32Array;
    weight: Int32Array;
    activity: Int32Array;

    // tslint:disable-next-line: typedef
    clear() {
        this.isMale = false;
        this.isFemale = false;
        this.work = '';
    }
}

export class Sex {
    isMale: boolean;
    isFemale: boolean;
}

export class Age {
    age: Int32Array;
}

export class Height {
    height: Int32Array;
}

export class Weight {
    weight: Int32Array;
}

export class Activity {
    activity: Int32Array;
}
