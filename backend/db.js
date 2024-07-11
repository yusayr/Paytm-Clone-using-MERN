const mongoose = require("mongoose");
const { Schema } = mongoose;

async function mongoDbConnect() {
try {
    await mongoose.connect('mongodb+srv://yusayr:H1R72W5PDSkRFFft@cluster0.o9g2cko.mongodb.net/paytm');
    
  } catch (error) {
    console.log(error);
  }
}


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username Required"]
    },
    password: {
        type: String,
        required: [true, "Password Required"],
        minlength: [6, "Password has insufficient length"]
    },
    firstName: {
        type:String,
        required: [true, "First Name Required"],
        maxlength: 50
    },
    lastName: {
        type: String,
        required: [true, "Last Name Required"],
        maxlength: 50
    }
});


User = mongoose.model('User', userSchema);

module.exports = {
    User
}


mongoDbConnect();