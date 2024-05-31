import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema ({
  title: {
    type: String,
    unique: true,
    required: [ true, 'Title is required' ]
  },
  author: { type: String },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  imagePath: {
    type: String,
    required: [ true, 'An image file needs to be uploaded to the image path as "image"'],
  }
}, { versionKey: false });

const Books = mongoose.model('Book', BooksSchema);
export default Books;
