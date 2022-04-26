import app from "./app";

app.listen(app.get("port"), () => {
  console.log(
    `App is running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
  );
});
