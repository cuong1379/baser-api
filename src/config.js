exports.port = process.env.PORT || 5000
exports.mongo = {
    uri: `mongodb+srv://clolc:cuong179@cluster0.i1cff.mongodb.net/clolc?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
}
exports.jwtSecetKey = process.env.JWT_SECRET_KEY || 'cuong12345'