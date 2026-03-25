const errorResponse = (res, status, msg) => {

    return res.status(status).json({ success: false, message: msg });

}

const successResponse = (res, status, msg) => {

    return res.status(status).json({ success: true, message: msg });

}

module.exports = { errorResponse, successResponse }