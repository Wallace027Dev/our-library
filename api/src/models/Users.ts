import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required:[
    true,
    "Name is required"
  ]},
  wishlist: [{ type: String }]
}, { versionKey: false });

const Users = mongoose.model('User', UsersSchema);
export default Users;
