require('dotenv').config();

exports.handler = async () => ({
  statusCode: 200,
  body: `NODE_ENV: ${process.env.NODE_ENV}`,
});
