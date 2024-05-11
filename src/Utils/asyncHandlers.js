const asyncHandlers = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(req,res,next).catch((err) => next(err))
    }
}

export {asyncHandlers};


/*

const asyncHandlers = (func) => async (req,res,next) => {
    try {
        await func(req,res,next)
    } catch (error) {
        res.status(error.code||500).json({
            success: false,
            message: error.message
        })
    }
}

*/