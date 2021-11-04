let React = require("react");
let DefaultLayout = require("./partials/default");

function Edit(props) {
  const { editObject } = props;
  return (
    <DefaultLayout>
      <div>
        <header
          className="masthead"
          style={{ backgroundImage: `url("/img/contact-bg.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                  <h1>Update Post</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <form
                noValidate
                action={`/post/${editObject._id}?_method=PATCH`}
                method="post"
                encType="multipart/form-data"
              >
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Post Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={editObject.title}
                      name="title"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Post Detail</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                      name="detail"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                      value={editObject.detail}
                    >
                      {}
                    </textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = Edit;
