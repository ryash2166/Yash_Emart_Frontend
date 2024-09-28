import React, { useState } from "react";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";


// Form Schema Validation
const schema = Yup.object().shape({
  FirstName: Yup.string()
    .required("* First Name is Required.")
    .matches(/^[a-zA-Z]+$/, "* Name must be only characters.")
    .min(2, "* First Name must be at least 2 character.")
    .max(10, "* First Name must be at most 10 character."),
  LastName: Yup.string()
    .required("* Last Name is Required.")
    .matches(/^[a-zA-Z]+$/, "* Name must be only characters.")
    .min(2, "* Last Name must be at least 2 character.")
    .max(10, "* Larst Name must be at most 10 character."),
  CompanyName: Yup.string()
    .required("* Company Name is Required.")
    .min(5, "* Company Name must be at least 5 character.")
    .max(20, "* Company Name must be at most 10 character."),
  Country: Yup.string()
    .required("* Country Name is Required.")
    .matches(/^[a-zA-Z]+$/, "* Name must be only characters."),
  AddressLine1: Yup.string().required("* Address Line 1 is Required."),
  AddressLine2: Yup.string().required("* Address Line 2 Name is Required."),
  City: Yup.string()
    .required("* City Name is Required.")
    .matches(/^[a-zA-Z]+$/, "* Name must be only characters."),
  State: Yup.string()
    .required("* State Name is Required.")
    .matches(/^[a-zA-Z]+$/, "* Name must be only characters."),
  Postcode: Yup.string()
    .required("* Postcode / ZIP is Required.")
    .matches(/^[0-9]+$/, "* Postcode / ZIP must be only digits.")
    .min(6, "* PostCode / ZIP must be at least 6 digits.")
    .max(10, "* Postcode / ZIP must be at most 10 digits."),
  Phone: Yup.string()
    .required("* Contact Number is Required.")
    .matches(/^[0-9]+$/, "* Contact Number must be only digits.")
    .min(10, "* Contact Number must be at least 10 digits.")
    .max(10, "* Contact Number must be at most 10 digits."),
  Email: Yup.string()
    .email("* Email is Invalid.")
    .required("* Email is Required."),
});

const Checkout = () => {
  const CartData = useSelector((state) => state.Reducer);
  const amount =
    CartData.length &&
    CartData.map((item) => item.d_price * item.quantity).reduce(
      (prev, next) => (prev += next)
    );

  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  let navigate = useNavigate();

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xqkrodla",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Your Order was placed!");
        navigate("/success");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      {CartData.length === 0 ? (
        <div className="">
          <section
            className="py-[180px] px-[15px] "
            style={{
              backgroundImage:
                "linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)",
            }}
          >
            <div className="mx-[272px] max-2xl:mx-[50px] max-lg:mx-2">
              <div>
                <div className="">
                  <p className="px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100">
                    Your cart is currently empty.
                  </p>
                  <p className="mb-[40px] hover:-translate-y-1 duration-300 ease-in-out">
                    <NavLink
                      to="/shopnow"
                      className="border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black"
                    >
                      Return to shop
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div
          className="py-[120px] px-[15px] max-[1024px]:py-20"
          style={{
            backgroundImage:
              "linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)",
          }}
        >
          <div className="container">
            <div>
              <div className="mb-[25px] bg-[#fff] shadow-lg">
                <div className="px-[25px] py-[15px] text-[#565656]">
                  Have a coupon? &nbsp;
                  <span className="hover:text-black cursor-pointer">
                    Click here to enter your code
                  </span>
                </div>
              </div>
              <div className="">
                <Formik
                  initialValues={{
                    Email: "",
                    Message: "",
                    FirstName: "",
                    Phone: "",
                    LastName: "",
                    CompanyName: "",
                    Country: "",
                    AddressLine1: "",
                    AddressLine2: "",
                    City: "",
                    State: "",
                    Postcode: "",
                  }}
                  onSubmit={handleOnSubmit}
                  validationSchema={schema}
                >
                  {({ isSubmitting }) => (
                    <Form
                      id="fs-frm"
                      className="flex justify-between max-[1024px]:block"
                      noValidate
                    >
                      <div className="bg-[#fff] w-[65%] h-full px-[25px] py-[30px] shadow-lg max-[1024px]:w-auto max-[1024px]:mb-[20px]">
                        <div className="">
                          <h4 className="text-[25px] font-[Jost] text-[#00a12] mb-[20px] ">
                            Billing Details
                          </h4>
                          <div className="">
                            <div className="row max-[1024px]:block">
                              <p className="mb-[15px] w-1/2 max-[1024px]:w-full">
                                <span className="">
                                  <label htmlFor="FirstName"></label>
                                  <Field
                                    type="text"
                                    name="FirstName"
                                    id="FirstName"
                                    placeholder="First Name"
                                    className="border-[1px] placeholder-black px-[20px] py-[12px] w-full outline-none"
                                  />
                                  <ErrorMessage
                                    name="FirstName"
                                    className="text-red-500  errorMsg"
                                    component="span"
                                  />
                                </span>
                              </p>
                              <p className="mb-[15px] w-1/2 max-[1024px]:w-full">
                                <span className="">
                                  <label htmlFor="LastName"></label>
                                  <Field
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    placeholder="Last Name"
                                    className="border-[1px] placeholder-black px-[20px] py-[12px] w-full outline-none"
                                  />
                                  <ErrorMessage
                                    name="LastName"
                                    className="text-red-500 errorMsg"
                                    component="span"
                                  />
                                </span>
                              </p>
                            </div>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="CompanyName"></label>
                                <Field
                                  type="text"
                                  name="CompanyName"
                                  id="CompanyName"
                                  placeholder="Company Name"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="CompanyName"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="Country"></label>
                                <Field
                                  type="text"
                                  name="Country"
                                  id="Country"
                                  placeholder="Country"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="Country"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="AddressLine1"></label>
                                <Field
                                  type="text"
                                  name="AddressLine1"
                                  id="AddressLine1"
                                  placeholder="Address"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="AddressLine1"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="AddressLine2"></label>
                                <Field
                                  type="text"
                                  name="AddressLine2"
                                  id="AddressLine2"
                                  placeholder="Aprtment, suite, unit, etc."
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="AddressLine2"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="City"></label>
                                <Field
                                  type="text"
                                  name="City"
                                  id="City"
                                  placeholder="City"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="City"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="State"></label>
                                <Field
                                  type="text"
                                  name="State"
                                  id="State"
                                  placeholder="State"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="State"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="Postcode"></label>
                                <Field
                                  type="text"
                                  name="Postcode"
                                  id="Postcode"
                                  placeholder="Postcode / Zip"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="Postcode"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="Phone"></label>
                                <Field
                                  type="text"
                                  name="Phone"
                                  id="Phone"
                                  placeholder="Phone"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="Phone"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                            <p className="mb-[15px]">
                              <span>
                                <label htmlFor="Email"></label>
                                <Field
                                  type="text"
                                  name="Email"
                                  id="Email"
                                  placeholder="Email Address"
                                  className="border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full"
                                />
                                <ErrorMessage
                                  name="Email"
                                  className="text-red-500 errorMsg"
                                  component="span"
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="mb-[20px]">
                            <label htmlFor="Checkbox"></label>
                            <Field
                              type="checkbox"
                              name="Checkbox"
                              id="Checkbox"
                              className="mr-[10px]"
                            />
                            <span className="align-middle font-[Jost] text-[16px]">
                              Ship to a different address?
                            </span>
                          </p>
                          <p className="">
                            <span className="">
                              <label htmlFor="Message"></label>
                              <Field
                                cols="40"
                                rows="10"
                                className="w-[100%] h-[150px]  border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] pt-[20px] placeholder-black outline-none"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Notes about your order, e.g. special notes for delivery"
                                name="Message"
                                id="Message"
                                component="textarea"
                              ></Field>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#fff] w-[33.3%] px-[25px] py-[30px] shadow-lg max-[1024px]:w-auto">
                        <h4 className="mb-[20px] text-[#00a12] font-[Jost] leading-[1.45rem] text-[25px]">
                          Your Order
                        </h4>
                        <table className="text-left table-fixed w-full">
                          <thead>
                            <tr>
                              <th className="pb-[9px] pr-[12px]"></th>
                              <th className="pb-[9px] pr-[12px]"></th>
                            </tr>
                          </thead>
                          {CartData.map((item) => {
                            return (
                              <tbody key={item.id}>
                                <tr className="">
                                  <td className="py-[25px] pr-[12px] border-t-1">
                                    <img
                                      src={item.img}
                                      alt=""
                                      className="w-[70px] h-[70px] object-cover"
                                    />
                                  </td>
                                  <td className="border-t-1 py-[10px] mr-[12px]">
                                    <div className="text-[15px]">
                                      {item.name}
                                    </div>
                                    <div className="mt-[5px] text-[15px] font-[600]">
                                      $ {item.d_price * item.quantity}.00
                                    </div>
                                  </td>
                                  <td className="border-t-1 py-[10px] pr-[12px] text-right">
                                    <p className="text-[16px] align-middle">
                                      QTY &nbsp;
                                      <span className="font-[600]">
                                        {item.quantity}
                                      </span>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                          <tfoot className="border-t-1">
                            <tr>
                              <td className="border-t-1 py-[30px] pr-[12px]">
                                Subtotal
                              </td>
                              <td className="border-t-1 py-[30px] pr-[12px]"></td>
                              <td className="border-t-1 py-[30px] pr-[12px] text-right font-[600]">
                                ${amount}.00
                              </td>
                            </tr>
                            <tr>
                              <td className="py-[30px]" colSpan="2">
                                <p className="pr-[40px]">Shipping</p>
                                <p className="">Flat rate:</p>
                              </td>
                              <td className="pt-[25px] pr-[12px] align-middle text-right font-[600]">
                                $10.00
                              </td>
                            </tr>
                            <tr>
                              <td className="border-t-1 pt-[30px] pb-[20px] pr-[12px]">
                                Total
                              </td>
                              <td className="border-t-1 pt-[30px] pb-[20px] pr-[12px]"></td>
                              <td className="border-t-1 pt-[30px] pb-[20px] pr-[12px] text-right font-[600]">
                                ${amount + 10}.00
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                        <div>
                          <p className="pb-[10px] text-[#515151]">
                            Sorry, it seems that there are no available payment
                            methods for your state. Please contact us if you
                            require assistance or wish to make alternate
                            arrangements.
                          </p>
                        </div>
                        <div className="py-[15px] border-t-1 botder-[#d3ced2]">
                          <p className="mb-[20px] text-[13px] text-[#666666]">
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our
                            <span className="text-black">privacy policy.</span>
                          </p>
                          <button
                            className="h-[50px] bg-black text-white px-[33px] py-[11px] border-[1px] border-black hover:!bg-white hover:!text-black hover:-translate-y-2 duration-300 ease-in-out w-full font-[500] "
                            type="submit"
                          >
                            Place Order
                          </button>
                          <NavLink to="/shopnow">
                            <button className="bg-black text-white px-[33px] py-[11px] mt-[15px] border-[1px] border-black hover:!bg-white hover:!text-black hover:-translate-y-2 duration-300 ease-in-out w-full font-[500]">
                              Return Shop
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}

      <Mail />
      <Footer_1 />
    </div>
  );
};

export default Checkout;
