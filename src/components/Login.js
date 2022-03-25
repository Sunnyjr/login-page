import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Pagination from "./Pagination";


function Login() {


  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("myPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("myEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  


  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin} class="needs-validation" novalidate>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
              required  
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
              required
            />
          </div>
       
          <button type="submit" id="logbtn" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          <button  type="submit" id="logbtn" className="btn btn-dark btn-lg btn-block">
            forgot 
          </button>
          

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else Register your self first.
            </Alert>
          )}
        </form>
      ) : (
        <Pagination />
      )}
    </div>
  );
}

export default Login;


