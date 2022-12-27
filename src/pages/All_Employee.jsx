import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from "yup"
export default function All_Employee() {

    const [data, setdata] = useState([])
    const [updateData, setupdateData] = useState()
    //  console.log("updateData.id = : ",updateData?.id);
    const getData =async () => {
         const {data} = await axios.get("http://localhost:5000/employeeData")
         console.log("allEmp's data",data);
         setdata(data)
    }

  

    // 
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

            console.log("modal update data",values);

            const  {data} = await axios.put(`http://localhost:5000/employeeData/${updateData.id}`,values)
            console.log("Edit wala data Data",data);

            getData()

            resetForm()
        }
    })
    // 
    const handelDelete = async (deleteItem) => {
        console.log("deleteItem",deleteItem);
        const {data} = await axios.delete(`http://localhost:5000/employeeData/${deleteItem}`)
    console.log("deletedData",data)
    getData()

    }



    useEffect(() => {
       getData()
    }, [])
    
  return (
    <>
    
      <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">
            <h4 className='text-center'>  <strong >All Employee Details</strong></h4>
                {
                    data.map((item) =>  <div key={item.id} className="card my-3">
  <div className="card-header text-center">
    <strong>Employee Id : {item.emp_id}</strong>
  </div>
  <div className="card-body">
    <p><strong>Name : {item.name}</strong></p>
    <p><strong>Email : {item.email}</strong></p>
    <p><strong>Designation : {item.designation}</strong></p>
    <p><strong>Mobile : {item.mobile}</strong></p>
  </div>
  <div className="card-footer">
    <div className='d-flex'>
        <button className='btn btn-dark w-50 mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e => setupdateData(item)}>Edit</button>
        <button className='btn btn-dark w-50 mx-2' onClick={e => handelDelete(item.id)}>Delete</button>
    </div>
  </div>
</div>
                    )
                }
            </div>
        </div>
      </div>

      {/* *************** Modal ************* */}

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title ms-5" id="exampleModalLabel" > 
        <strong className='text-center mx-5'>Edit Employee Data</strong>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
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

                                    
                                    <button type="submit" className="btn btn-primary w-100 mt-3" data-bs-dismiss="modal">
                                     Update Data
                                    </button>
                                   
                                </form>
        </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal">Update Data</button>
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}
