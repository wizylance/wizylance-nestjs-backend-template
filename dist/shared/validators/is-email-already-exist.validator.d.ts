import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { Model } from 'mongoose';
export declare class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
    private readonly userModel;
    constructor(userModel: Model);
    validate(email: any, args: ValidationArguments): Promise<any>;
}
export declare function IsEmailAlreadyExist(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
