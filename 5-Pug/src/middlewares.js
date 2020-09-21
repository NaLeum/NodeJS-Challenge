export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "과제";
  next();
};
