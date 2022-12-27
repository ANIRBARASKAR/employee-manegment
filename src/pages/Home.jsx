import React from 'react'

function Home() {
  return (
   <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-2">
        <div>
        <strong>  Note : Hello i used here json server for data storing.</strong>
           
  <p> 1 :-  So firstly you need to start json server .</p>      
  <p> A :- open json-backend folder in terminal </p>
  <p> B :- &  run this command :- json-server --watch --port=5000 db.json</p>
    </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Home
