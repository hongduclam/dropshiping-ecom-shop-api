import {BaseError} from "../utils/ErrorUtils";
import {HttpStatusCode} from "../../constant";

const parsePaging = async (req, res, next) => {
  try {
    const {order, limit, offset} = req.params;
    req.params = {
      ...req.params,
      pagingQuery: {
        order: JSON.parse(order),
        limit,
        offset
      }
    };
    return next();
  } catch (validationErrors) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
        name: 'parsePaging',
        description: 'parsePaging_wrong'
      }
    );
  }
  return res.status(HttpStatusCode.INTERNAL_SERVER)
    .json(new BaseError('parsePaging', HttpStatusCode.INTERNAL_SERVER, 'parsePaging_wrong', true));
}

export default parsePaging;

