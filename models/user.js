var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);