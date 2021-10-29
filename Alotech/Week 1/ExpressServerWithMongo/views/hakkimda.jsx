var React = require("react");
var DefaultLayout = require("./layouts/default.jsx");

const Hakkımda = (props) => {
  return (
    <DefaultLayout title={props.title}>
      <div>{props.title}</div>
    </DefaultLayout>
  );
};

module.exports = Hakkımda;
