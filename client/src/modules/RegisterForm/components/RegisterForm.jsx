import React from "react";
import { Form, Icon } from "antd";
import { Link } from "react-router-dom";

import { Button, Block, FormField } from "components";

const success = false;

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Գրանցում</h2>
        <p>Զրուցարան մուտք գործելու համար <br />պետք է գրանցվել</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <FormField
              name="email"
              icon="mail"
              placeholder="Էլ․ փոստ"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="fullname"
              icon="user"
              placeholder="Ձեր անունը և ազգանունը"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="password"
              icon="lock"
              placeholder="Գաղտնաբառ"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="password_2"
              icon="lock"
              placeholder="Հաստատել գաղտնաբառը"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <Form.Item>
              {isSubmitting && !isValid && <span>Սխալ!</span>}
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="primary"
                size="large"
              >
                Գրանցվել
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Մուտք
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon type="info-circle" theme="twoTone" />
            </div>
            <h2>Հաստատեք Ձեր հաշիվը</h2>
            <p>
              Ձեր էլ․ փոստին ուղարկվել է հաղորդագրություն ՝ հաստատման հղումով
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
