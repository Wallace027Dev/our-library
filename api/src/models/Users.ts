import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required:[
    true,
    "Name is required"
  ]},
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
}, { versionKey: false });

const Users = mongoose.model('User', UsersSchema);
export default Users;
