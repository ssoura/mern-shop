import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwd: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);



userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.passwd)
}

userSchema.pre('save', async function(next) {
  if(!this.isModified('passwd')){
    next()
  }
  const salt =  await bcrypt.genSalt(10)
  this.passwd = await bcrypt.hash(this.passwd, salt)
})

const User = mongoose.model("User", userSchema);

export default User;
