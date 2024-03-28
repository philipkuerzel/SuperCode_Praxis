import { verifyAutorization } from "../utils/verifyAuthorization";

// hier definieren wir custom middleware, die sich um die authentifizierung kuemmern soll
export const checkAuth = async (req, res, next) => {

  const authorizationHeader = req.headers.authorization;
  const result = verifyAutorization(authorizationHeader);

  if (result.status === "error") {
    res.status(401).send("Auth failed");
    return;
  } else if (result.status === "ok") {
    req.user = result.user;
    next();
  }
};
