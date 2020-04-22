import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserRole } from '@bn-enum/user-role.enum';

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  fullName: {
    type: String,
  },
  role: { type: Number, enum: Object.values(UserRole), default: UserRole.User },
});

UserSchema.pre('save', function(next) {

  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {

    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (hErr, hash) => {

      if (hErr) {
        return next(hErr);
      }
      user.password = hash;
      next();

    });

  });

});

UserSchema.methods.checkPassword = function(attempt) {
  const user = this;
  return bcrypt.compare(attempt, user.password);
};
