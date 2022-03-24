import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";


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
            register
          </button>
          

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else Register your self.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;



// import React, { useState } from 'react';
// import { Alert } from 'bootstrap';
// import Home from './Home';

// function Login() {

//     const [emaillog, setEmaillog] = useState("");
//     const [passwordlog, setPassordlog] = useState("");
//     const [flag, setFlag] = useState(false);
//     const [home, setHome] = useState(true);


//     const handleLogin = (e) => {
//         e.preventDefault();
//         let mail = localStorage.getItem("Email").replace(/"/g, ""); //  /"/g -- data is in double inverted quama so remove this "" and get value only
//         let pass = localStorage.getItem("Password").replace(/"/g, "");

//         if (!emaillog || !passwordlog) { //if data is nt inserted.then show flag msg
//             setFlag(true);
//             console.log("empty");
//         } else if (passwordlog !== pass || emaillog !== mail) { // user psw and email is not match then show error
//             setFlag(true);
//         } else {
//             setHome(!home); //if match then open home
//             setFlag(false);
//         }

//     }

//     return (
//         <div>

//             {home ? (
//                 <form onSubmit={handleLogin}>
//                     <h3>Login</h3>
//                     <div class="mb-3">
//                         <label class="form-label">Email </label>
//                         <input
//                             type="email"
//                             class="form-control"
//                             placeholder="Email"
//                             onChange={(e) => setEmaillog(e.target.value)}
//                             aria-describedby="emailHelp" />
//                         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div class="mb-3">
//                         <label class="form-label">Password</label>
//                         <input
//                             type="password"
//                             class="form-control"
//                             placeholder="Password"
//                             onChange={(e) => setPassordlog(e.target.value)} />
//                     </div>
//                     <button type="submit" class="btn btn-dark">Login</button>

//                     {flag && ( //if flage is true(when data is not there ) then alert will render
//                         <Alert color="primary" variant='danger'>
//                             Please enter every field
//                         </Alert>
//                     )}
//                 </form>
//             ) : (
//                 <Home />
//             )}
//         </div>
//     );
// }

// export default Login;