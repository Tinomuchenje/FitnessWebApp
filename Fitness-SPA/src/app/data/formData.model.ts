export class FormData {
    isMale: boolean;
    isFemale: boolean;
    work: string;
    age: number;
    height: number;
    weight: number;
    activity: number;
    goal: number;
    maleCategory: MaleGoalCategories;
    femaleCategory: FemaleGoalCategories;

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

enum MaleGoalCategories{
    categoryOne = 1,
    categoryTwo = 2,
    categoryThree = 3,
    categoryFour = 4,
}
enum FemaleGoalCategories {
    categoryOne = 1,
    categoryTwo = 2,
    categoryThree = 3,
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

export class Goal {
    goal: number;
}
