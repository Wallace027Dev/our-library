import mongoose from 'mongoose';

const UserBooksSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:[
      true,
      "User id is required"
    ]
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required:[
      true,
      "Book id is required"
    ]
  },
  startedReadingAt: { type: Date },
  finishedReadingAt: { type: Date },
  status: {
    type: String,
    enum: {values: ['ALREADY_READ', 'READING', 'NOT_READ'],
    message: "Status must be 'ALREADY_READ', 'READING', or 'NOT_READ'"
    },
    required:[
      true,
      "Status has be 'ALREADY_READ', 'READING' or 'NOT_READ'"
    ]
  }
}, {versionKey: false});

const UserBook = mongoose.model('UserBook', UserBooksSchema);
export default UserBook;
