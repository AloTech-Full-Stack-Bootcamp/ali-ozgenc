var React = require("react");
var DefaultLayout = require("./layouts/default.jsx");

const İletisim = (props) => {
  return (
    <DefaultLayout title={props.title}>
      <div>{props.title}</div>
    </DefaultLayout>
  );
};

module.exports = İletisim;
