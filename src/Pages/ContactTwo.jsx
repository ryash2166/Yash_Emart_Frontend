import React, { useState } from "react";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { Alert } from "@mui/material";
import * as Yup from "yup";

// Form Schema Validation
const schema = Yup.object().shape({
  Phone: Yup.string()
    .required("* Contact Number is Required.")
    .matches(/^[0-9]+$/, "* Contact Number must be only digits.")
    .min(10, "* Contact Number must be at least 10 digits.")
    .max(10, "* Contact Number must be at most 10 digits."),
  Email: Yup.string()
    .email("* Email is Invalid.")
    .required("* Email is Required."),
  Name: Yup.string().required("* Name is Required."),
  Message: Yup.string().required("*Message is Required.")
});


const ContactTwo = () => {

  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xzbnqbzw",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks! Your Request was sent.");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <div className="pt-[70px] pb-3">
        <div>
          <section>
            <div className="flex max-xl:block">
              <div className="w-[49%] max-xl:w-auto max-md:mx-[20px]">
                <section className="">
                  <div className="">
                    <img
                      decoding="async"
                      width="975"
                      height="603"
                      src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg"
                      className="w-full h-[100vh] max-[1024px]:h-[40vh] object-cover"
                      alt="Contact_picture"
                      // loading="lazy"
                    />
                  </div>
                </section>
              </div>
              <div className="w-[51.09%] max-xl:w-auto">
                <div>
                  <section>
                    <div>
                      <div className="pl-[50px] pr-[15px] max-xl:pl-[20px] max-xl:pt-[30px] ">
                        <div className="">
                          <p className="text-[#d87f7f] font-[Jost] text-[18px]">
                            We Are Happy To Answer You
                          </p>
                        </div>
                        <div className="pt-[23px] pb-[30px] max-md:pb-[15px] max-md:pt-[15px]">
                          <p className="font-[Jost] text-[45px] max-md:text-[30px] font-[400]">
                            Contact
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="pb-[10px]">
                    <div className="flex max-md:block">
                      <div>
                        <div className="pl-[50px] pr-[15px] max-xl:pl-[20px]">
                          <div className="pb-[14px]">
                            <div className="text-[18px] font-[Jost] font-[500]">
                              Address:
                            </div>
                          </div>
                          <div className="">
                            <div className="pr-[25px] pb-[20px] text-[17px] font-[Jost] text-[#666]">
                              121 King St, Melbourne VIC 3000, Australia
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="pl-[30px] pr-[15px] max-md:pl-[20px]">
                          <div className="pb-[14px]">
                            <p className="text-[18px] font-[Jost] text-[#666]">
                              <span className="text-[#000] font-[500]">
                                Telephone:
                              </span>
                              &nbsp;888 321 9874
                            </p>
                          </div>
                          <div>
                            <div className="pb-[20px]">
                              <p className="text-[18px] font-[Jost] text-[#666]">
                                <span className="text-[#000] font-[500]">
                                  Email:
                                </span>
                                &nbsp;info@example.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="">
                    <div>
                      <div className="pl-[50px] pr-[15px] mr-[47px] max-xl:pl-[20px]">
                        <div>
                          <p className="text-[#d87f7f] text-[18px] font-[Jost]">
                            Need Help
                          </p>
                        </div>
                        <div className="pb-[13px]">
                          <p className="font-[Jost] text-[45px] max-md:text-[27px] font-[400]">
                            Send Your Request
                          </p>
                        </div>
                      </div>
                      <div className="pl-[50px] pr-[30px] max-xl:pl-[20px] max-md:pr-[20px]">
                        <Formik
                          initialValues={{
                            Email: "",
                            Message: "",
                            Name: "",
                            Phone: "",
                          }}
                          onSubmit={handleOnSubmit}
                          validationSchema={schema}
                        >
                          {({ isSubmitting }) => (
                            <Form id="fs-frm" noValidate>
                              <div>
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                  <div className="form-row">
                                    <p>
                                      <span className="text-[#666]">
                                        <label htmlFor="Name"></label>
                                        <Field
                                          size="40"
                                          className="w-[100%] h-[50px]  border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black outline-none"
                                          aria-required="true"
                                          aria-invalid="false"
                                          placeholder="Name"
                                          name="Name"
                                          id="Name"
                                          type="text"
                                        />
                                        <ErrorMessage
                                          name="Name"
                                          className="text-red-500 errorMsg"
                                          component="span"
                                        />
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                  <p>
                                    <span className="text-[#666]">
                                      <label htmlFor="Email"></label>
                                      <Field
                                        size="40"
                                        className="w-[100%] h-[50px] mt-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black outline-none"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Email Address"
                                        type="Email"
                                        id="Email"
                                        name="Email"
                                      />
                                      <ErrorMessage
                                        name="Email"
                                        className="text-red-500 errorMsg"
                                        component="span"
                                      />
                                    </span>
                                  </p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                  <p>
                                    <span className="text-[#666]">
                                      <label htmlFor="Phone"></label>
                                      <Field
                                        size="40"
                                        className="w-[100%] h-[50px] mt-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black outline-none"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Phone"
                                        type="text"
                                        name="Phone"
                                        id="Phone"
                                      />
                                      <ErrorMessage
                                        name="Phone"
                                        className="text-red-500 errorMsg"
                                        component="span"
                                      />
                                    </span>
                                  </p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                  <p>
                                    <span className="text-[#666]">
                                      <label htmlFor="Message"></label>
                                      <Field
                                        cols="40"
                                        rows="10"
                                        className="w-[100%] h-[150px] mt-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] pt-[20px] placeholder-black outline-none"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Message"
                                        name="Message"
                                        id="Message"
                                        component="textarea"
                                      ></Field>
                                      <ErrorMessage
                                        name="Message"
                                        className="text-red-500 errorMsg"
                                        component="span"
                                      />
                                    </span>
                                  </p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12 ">
                                  <p className="bg-black mt-[20px]">
                                    <span className="text-[#fff]">
                                      <button
                                        className="w-[100%] h-[50px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] outline-none"
                                        type="submit"
                                      >
                                        Send Message
                                      </button>
                                    </span>
                                  </p>
                                  {serverState && (
                                    <p
                                      className={
                                        !serverState.ok ? "errorMsg" : ""
                                      }
                                      style={{ marginTop: "10px" }}
                                    >
                                      <Alert
                                        variant="filled"
                                        severity="success"
                                      >
                                        {serverState.msg}
                                      </Alert>
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Mail />
      <Footer_1 />
    </div>
  );
};

export default ContactTwo;
