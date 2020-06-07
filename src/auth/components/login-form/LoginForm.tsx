import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
      uk-height-viewport="uk-height-viewport"
    >
      <div className="uk-width-1-1">
        <div className="uk-container">
          <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
            <div className="uk-width-1-1@m">
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <h3 className="uk-card-title uk-text-center">Welcome back!</h3>
                <form>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: mail"
                      ></span>
                      <input className="uk-input uk-form-large" type="text" />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: lock"
                      ></span>
                      <input
                        className="uk-input uk-form-large"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">
                      Login
                    </button>
                  </div>
                  <div className="uk-text-small uk-text-center">
                    Not registered? <a href="#">Create an account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
