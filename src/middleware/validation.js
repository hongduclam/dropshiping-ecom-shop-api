import {FieldError, BaseError} from "../utils/ErrorUtils";
import {HttpStatusCode} from "../../constant";

const validate = (schema, property) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req[property], { stripUnknown: true, abortEarly: false });
      return next();
    } catch (validationErrors) {
      if (validationErrors.inner && validationErrors.inner. length) {
        const allErrors = validationErrors.inner.map(value =>  {
          const name = value.path;
          const code = value.message.replace(/"/g, '').replace(/ /g, '_').toUpperCase();
          const {message} = value;
          return new FieldError(name, code, message)
        });
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            name: 'validator',
            description: 'validator_wrong',
            details: allErrors,
          }
        );
      }
      return res.status(HttpStatusCode.INTERNAL_SERVER)
        .json(new BaseError('validator', HttpStatusCode.INTERNAL_SERVER, 'validator_wrong', true));
    }
  };
};

export default validate;
