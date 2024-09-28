import * as Yup from "yup";

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
    Name: Yup.string().required("* Name is Required."),
  });

export default schema