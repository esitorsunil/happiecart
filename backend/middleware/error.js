module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === "DEVELOPMENT") {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack,
            error: err
        })
    }

    if(process.env.NODE_ENV === "PRODUCTION") {
        let message = err.message;
        let error = {...err};

        if(err.name === "ValidationError") {
            message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }
        res.status(err.statusCode).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }
};  