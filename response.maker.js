const responseConstant = require("./constants/status.messages.constants");
const create = (code, status, message, data) => {
  return {
    statusCode: code,
    body: {
      status,
      message,
      data,
    },
  };
};

const success = (message, data) => {
  return create(200, responseConstant.SUCCESS, message, data);
};

const error = (message, data) => {
  return create(400, responseConstant.ERROR, message, data);
};

module.exports = {
  create,
  success,
  error,
};
