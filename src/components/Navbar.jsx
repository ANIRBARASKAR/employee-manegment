import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    {/* <div className='my-5' > */}
    <div className="container " style={{marginBottom:100}}>
    <nav className="navbar navbar-expand-lg bg-dark text-light fixed-top">
  <div className="container-fluid">
    <h1 className="navbar-brand" >Employee Management</h1>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon  mt-1">🔽</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className=" text-light nav-link active" to="/">Home</Link>
        <Link className=" text-light nav-link" to="/addEmployee">Add Employee</Link>
        <Link className=" text-light nav-link" to="/allEmployee">All Employee's</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
    {/* </div> */}
    </>
  )
}
