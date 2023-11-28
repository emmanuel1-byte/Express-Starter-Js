class Respond  {
    constructor(res, status=200, message, data = {}) {
        this.res = res
        this.status = status || 200
        this.message = message
        this.data =  data 
        this.successCodes = [200, 201];
        this.sendResponse()

    }

    sendResponse(){
        this.res.status(this.status).json({
            status: this.successCodes.includes(this.status) ? 'success' : 'error',
            message: this.message,
            data: this.data
        })
    }
}

module.exports = { Respond }
