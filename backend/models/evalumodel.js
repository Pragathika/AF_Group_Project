const mongoose = require('mongoose');


const evaluationSchema = new mongoose.Schema({


    file: { type: String, required: true },
});


module.exports = mongoose.model('evaluationFile', evaluationSchema)