require('dotenv').config();

exports.handler = async () => {
  const { NODE_ENV, SECOND_VAR, THIRD_VAR } = process.env;
  return {
    statusCode: 200,
    body: `NODE_ENV: ${NODE_ENV}, SECOND_VAR: ${SECOND_VAR}, THIRD_VAR: ${THIRD_VAR}`,
  };
};
