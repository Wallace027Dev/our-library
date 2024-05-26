import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema ({
  title: {
    type: String,
    unique: true,
    required: [ true, 'Title is required' ]
  }
}, { versionKey: false });

const Categories = mongoose.model('Category', CategoriesSchema);
export default Categories;
