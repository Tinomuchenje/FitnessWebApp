export class FormData {
    isMale: boolean;
    isFemale: boolean;
    work: string;
    age: number;
    height: number;
    weight: number;
    activity: number;

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
    age: number;
}

export class Height {
    height: number;
}

export class Weight {
    weight: number;
}

export class Activity {
    activity: number;
}
