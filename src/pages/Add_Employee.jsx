import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
export default function Add_Employee() {

    // formik
    const formik = useFormik({
        initialValues: ({
            name: "",
            email: "",
            emp_id:"",
            designation:"",
            mobile:"",
            address:""
           
        }),
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Enter Full Name "),
            email: yup
                .string()
                .required("Entre Email ID"),
            emp_id: yup
                .string()
                .required("Entre Employee ID"),
            designation: yup
                .string()
                .required("Entre Employee Designation"),
            mobile: yup
                .string()
                .min("10")
                .max("10")
                .required("Entre Employee Mobile No"),
            address: yup
                .string()
                .required("Entre Employee Address"),
           
        }),
        onSubmit: async (values,{resetForm}) => {

            console.log("Emp Data",values);

            const  {data} = await axios.post("http://localhost:5000/employeeData",values)
            console.log("posted Data",data);
            resetForm()
        }
    })

    
  return (
    <>
      <div className="container my-5 ">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">

                        <div className="card my-2">
                            <strong className="card-header bg-dark text-light text-center">Add new Employee</strong>
                            <div className="card-body bg-light">
                                <form onSubmit={formik.handleSubmit}>  <div>
                                    <label htmlFor="name" className="form-label">Employee Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.name && formik.touched.name ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.name}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                </div>

                                    <div className="mt-2">
                                        <label htmlFor="email" className="form-label"> Email</label>
                                        <input
                                            type="text"
                                            name='email'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                            id="email"
                                            value={formik.values.email}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="emp_id" className="form-label"> Employee Id</label>
                                        <input
                                            type="text"
                                            name='emp_id'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.emp_id && formik.touched.emp_id ? "form-control is-invalid" : "form-control"}
                                            id="emp_id"
                                            value={formik.values.emp_id}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.emp_id}</div>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="designation" className="form-label"> Employee Designation</label>
                                        <input
                                            type="text"
                                            name='designation'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.designation && formik.touched.designation ? "form-control is-invalid" : "form-control"}
                                            id="designation"
                                            value={formik.values.designation}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.designation}</div>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="mobile" className="form-label"> Mobile No</label>
                                        <input
                                            type="text"
                                            name='mobile'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.mobile && formik.touched.mobile ? "form-control is-invalid" : "form-control"}
                                            id="mobile"
                                            value={formik.values.mobile}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.mobile}</div>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="address" className="form-label"> Employee Address</label>
                                        <textarea
                                            type="text"
                                            name='address'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.address && formik.touched.address ? "form-control is-invalid" : "form-control"}
                                            id="address"
                                            value={formik.values.address}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.address}</div>
                                    </div>

                                    
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                       Add Employee
                                    </button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </>
  )
}


// 

