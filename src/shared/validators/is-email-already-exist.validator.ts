import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BnCollections, getCollectionToken } from '@bn-database/database.constant';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {

  constructor(@Inject(getCollectionToken(BnCollections.User)) private readonly userModel: Model) {
  }

  async validate(email: any, args: ValidationArguments) {
    return this.userModel.find({ email }).select('_id').limit(1).then(user => !!user);
  }

}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint,
    });
  };
}
