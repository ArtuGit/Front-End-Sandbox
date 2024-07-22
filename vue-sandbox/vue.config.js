module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/<repo_slug>/" // Set to Deploy
      : "/"
};
