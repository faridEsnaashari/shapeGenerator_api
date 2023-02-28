const { IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const putValidator = (req, res, next) => {
    const { id } = req.body;

    if(IsUndefinedOrNull(id)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "id" });
    }

    next();
};

module.exports = putValidator;
