import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { Alert } from "@mui/material";
import * as Yup from "yup";

// From Schema Validation
const schema = Yup.object().shape({
  Email: Yup.string()
    .email("* Email is Invalid.")
    .required("* Email is Required."),
});

const Mail = () => {

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xzbnlzqv",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "You subscribe to a really good site.");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className="border-t-2 border-b-2">
      <div className="px-[15px] pt-[110px] pb-[100px] max-md:pt-[50px] max-md:pb-[45px]">
        <div className="max-lg:mx-0">
          <div className="mx-[15px]">
            <section className="flex justify-center items-center text-center">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex items-center justify-center pb-[12px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="42"
                      viewBox="0 0 52 42"
                      fill="none"
                    >
                      <path
                        d="M6.00098 1H46.001C48.751 1 51.001 3.25 51.001 6V36C51.001 38.75 48.751 41 46.001 41H6.00098C3.25098 41 1.00098 38.75 1.00098 36V6C1.00098 3.25 3.25098 1 6.00098 1Z"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M51.001 6L26.001 23.5L1.00098 6"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[29px] font-[Jost] pb-[16px]">
                    Subscribe newsletter
                  </div>
                  <div className="text-muted text-[16px] pb-[38px] ">
                    Subscribe Now and get more offers
                  </div>
                  <div className="">
                    <div className="px-[258px] max-xl:px-0">
                      <div className="flex justify-center items-center gap-2 max-md:block">
                        <div className="max-md:mb-3 ">
                          <Formik
                            initialValues={{ Email: "" }}
                            onSubmit={handleOnSubmit}
                            validationSchema={schema}
                          >
                            {({ isSubmitting }) => (
                                <Form className="fs-frm relative" noValidate>
                                  <label htmlFor="Email"></label>
                                  <Field
                                    size="32"
                                    className="bg-[#f2f2f2]  text-[#666] py-3  pl-3 max-md:w-full outline-none "
                                    placeholder="Your email address..."
                                    type="Email"
                                    name="Email"
                                    id="Email"
                                  />
                                  <ErrorMessage
                                    name="Email"
                                    className=" text-red-500 errorMsg absolute block"
                                    component="span"
                                  />
                                <button className="bg-black text-white py-3 px-[30px] ml-3 max-md:ml-0 max-md:mt-[26px]  max-sm:px-0 max-md:w-full " type="submit">Subscribe Now</button>
                                {serverState && (
                                  <div
                                    className={
                                      !serverState.ok ? "errorMsg" : ""
                                    }
                                    style={{ marginTop: "25px" }}
                                  >
                                    <Alert variant="outlined" severity="success">
                                      {serverState.msg}
                                    </Alert>
                                  </div>
                                )}
                                </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
