function respond(res, statusCode, message, data={}){
    const successCode = [201, 200]
    return res.status(statusCode).send({
        status: successCode.includes(statusCode) ? "sucesss" : "error",
        message: message,
        data: data
    })
}

module.exports = { respond }
