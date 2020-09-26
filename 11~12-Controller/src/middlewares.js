export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Holly Movies";
  next();
};
