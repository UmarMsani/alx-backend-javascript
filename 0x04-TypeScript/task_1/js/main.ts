export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

export interface Director extends Teacher {
  numberOfReports: number;
}

export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.substring(0, 1)}. ${lastName}`;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
