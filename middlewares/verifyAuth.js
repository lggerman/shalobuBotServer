const verifyAuth = (req, res, next) => {
  const token = req.headers["Authorization"];
  if (!token) return res.status(400).json({ error: "No token provided" });
};

export default verifyAuth;
