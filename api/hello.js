require('dotenv').config();

exports.handler = async () => {
  return {
    statusCode: 200,
    body: `NODE_ENV: ${process.env.NODE_ENV}, SECOND_VAR: ${process.env.SECOND_VAR}, THIRD_VAR: ${process.env.THIRD_VAR}`,
  };
};
