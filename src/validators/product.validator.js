import * as yup from 'yup';
import validate from '../middleware/validation';

const productValidatorCreateSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  status: yup.number().required('This field is required.'),
  price: yup.number().required('This field is required.')
});

const productValidator = {
  formCreate: validate(productValidatorCreateSchema, 'body'),
  formEdit: validate(productValidatorCreateSchema, 'body')
};

export default productValidator;
