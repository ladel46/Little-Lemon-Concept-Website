import React from "react";
import { useFormik } from "formik";
import { YupSchema } from "./YupSchema";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function Form(props) {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = React.useState(false);
  // handle submit function that resets form then redirects user to home page
  const onSubmit = () => {
    setSubmitted(true);
    formik.resetForm();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  // formik object to handle form state changes + validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      occassion: "birthday",
      information: "",
    },
    validationSchema: YupSchema,
    onSubmit,
  });
  return (
    // form section
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      {/* flex container for the form elements */}
      <div className="w-[90vw] xlg:w-[1000px]  mt-[50px] h-[500px] sm:h-[600px] md:h-[650px] border-Pgreen border-[5px] drop-shadow-2xl rounded-[5%] xlg:rounded-[10%] flex flex-col items-center justify-center  bg-white">
        {/* display different elements based if form was submitted or not  */}
        {submitted ? (
          <>
            <h1 className=" sm:text-[50px] text-Pgreen border-Sgray font-primary font-bold">
              Form Submitted
            </h1>
            <h1 className=" sm:text-[40px] text-Pgreen border-Sgray font-primary font-bold">
              taking you back to home page
            </h1>
            <Spinner></Spinner>
            {}
          </>
        ) : (
          <div
            key="modal"
            className="  flex flex-col scale-[0.75] sm:scale-[0.9] md:scale-[1] items-center justify-center  bg-white"
          >
            <h2 className=" text-[30px] lg:text-[40px] text-Pgreen border-Sgray font-primary font-bold ">
              fill the information below
            </h2>
            <label>
              <h2 className="text-[25px] scale-[1.2]  text-Pgreen font-medium font-primary ">
                Name
              </h2>
            </label>
            <div className="flex flex-row h-[40px] scale-[1.2] space-x-3">
              <div className="flex-col space-y-0">
                {" "}
                <input
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  id="firstName"
                  type={"text"}
                  className={`text-center   w-[150px] text-Sgray border-[3px] border-Pgreen h-[35px] rounded-[5%] font-secondary font-medium ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="First Name"
                ></input>
                {formik.errors.firstName && formik.touched.firstName ? (
                  <p className="text-[10px] text-red-500 text-start font-secondary">
                    {formik.errors.firstName}
                  </p>
                ) : null}
              </div>
              <div className="flex-col space-y-0">
                <input
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="lastName"
                  type={"text"}
                  className={`text-center  w-[150px] text-Sgray border-[3px] border-Pgreen h-[35px]  rounded-[5%] font-secondary font-medium ${
                    formik.errors.lastName && formik.touched.lastName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Last Name"
                ></input>
                {formik.errors.lastName && formik.touched.lastName ? (
                  <p className="text-[10px] text-red-500 text-start font-secondary">
                    {formik.errors.lastName}
                  </p>
                ) : null}
              </div>
            </div>
            <label>
              <h2 className="text-[25px] mt-[20px] scale-[1.2]  text-Pgreen font-medium font-primary ">
                Occasion
              </h2>
            </label>
            <select
              className="border-[3px]  w-[300px] scale-[1.2] border-Pgreen text-center  font-medium font-secondary"
              id="occassion"
              value={formik.values.occassion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <label>
              <h2 className="text-[25px] mt-[20px] scale-[1.2]  text-Pgreen font-medium font-primary ">
                Email
              </h2>
            </label>
            <div className="flex-col space-y-1">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                type={"email"}
                className={`text-center  w-[300px] text-Sgray scale-[1.2] border-[3px] border-Pgreen  rounded-[5%] font-secondary font-medium ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="@"
              ></input>
              {formik.errors.email && formik.touched.email ? (
                <p className="text-[13px] text-red-500 text-center font-secondary">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <label>
              <h2 className="text-[25px] text-center mt-[20px] scale-[1.2]  text-Pgreen font-medium font-primary ">
                Additional information
              </h2>
              <textarea
                value={formik.values.information}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="information"
                className="w-[300px] px-[10px] h-[130px] mt-[10px] text-Sgray scale-[1.2] border-[3px] border-Pgreen  rounded-[5%] font-secondary font-medium"
              ></textarea>
            </label>
            <button
              type="submit"
              className={
                "py-1 px-[100px] rounded-full font-primary text-[25px] mt-[25px] text-Pyellow  bg-Pgreen hover:bg-Sorange hover:text-Swhite"
              }
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
