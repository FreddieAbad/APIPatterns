exports.success = function(req, res, data, estado) {
    res.status(estado).send( {error:'', body:data } )
}

// exports.error = function(req, res, data, estado) {
//     res.status(estado).send( {error:data, body:'' } )
// }
exports.error = function(req, res, errorMessage, errorCode, additionalDetails) {
    const errorResponse = {
        error: {
            message: errorMessage,
            code: errorCode
        },
        body: additionalDetails || null
    };

    res.status(errorCode).json(errorResponse);
}