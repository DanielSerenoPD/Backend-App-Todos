const isTitle = (req, res, next) => {
    if (req.body.id !== null && req.body.title.length > 0) {
        return next();
    }else{
        return res.status(404).json({message:'Todo requires the title and id field'})
    }
    
};

module.exports = isTitle;