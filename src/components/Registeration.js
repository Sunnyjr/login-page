
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  
// const validate =()=>{
//     if(email.includes("@") && password.length<7){
//         setEmail("Invalid email");
//         setPassword("Password length should be more than 7 characters");
//     }
// }


  function handleFormSubmit(e) {
    e.preventDefault();
    
    // if (!email) {
    //   setFlag("email is required");
    // }  else if (!/\S+@\S+\.\S+/.test(email)) {
    //     setFlag(email = 'Email address is invalid');
    // }
    // if(!password){
    //     setFlag('Password is required');
    // }else if (password.length < 8 ){
    //     setFlag('Password need to be at least 8 characters')
    // }
    if(!name || !email || !password || !phone ){
        setFlag(true);
    }
    else {
      setFlag(false);
      localStorage.setItem("myEmail", JSON.stringify(email));
      localStorage.setItem("myPassword",JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} class ="needs-validation" novalidate>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                 
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>

              

              <button type="submit" id="btn" className="btn btn-dark btn-lg btn-block ">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered {" "} log in?
                
           </p>
              {flag && (
                <Alert color="primary" variant="danger">
                    
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;










// import React, { useState } from 'react';
// import { Form, Alert } from 'bootstrap';
// import Login from './Login';

// function Registeration() {

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [phone, setPhone] = useState("");
// const [flag, setFlag] = useState(false);
// const [login, setLogin] = useState(true);


// const handleSubmit = (e) => {
//     e.preventDefault(); //on submit pe refresh na ho so we use preventdefalt.

//     if(!name || !email || !password || !phone){ //form validate //if filds me data nahi hay to flag ko true karo or error show karao
//         setFlag(true);
//     }else{
//         setFlag(false); //if data in form
//         localStorage.setItem("Email", JSON.stringify(email)); //storing data in json formate 
//         localStorage.setItem("Password", JSON.stringify(password));

//         console.log("saved in local storage");
//         setLogin(!login); // not login so we show register page and when login is true then show login page
//     }
// }

// const handleClick =() =>{
//     setLogin(!login);
// }

//     return (
//         <div class='class-responsive m-5'>

//     {login ? ( //if login is true then show registration form.
//             <form onSubmit={handleSubmit}>
//                 <div class="mb-3">
//                     <label class="form-label">Name</label>
//                     <input 
//                     type="text"
//                     class="form-control" 
//                     placeholder="Enter full name"
//                     onChange={(e) => setName(e.target.value)} />
//                 </div>

//                 <div class="mb-3">
//                     <label class="form-label">Email address</label>
//                     <input 
//                     type="email" 
//                     class="form-control" 
//                     placeholder="Email" 
//                     onChange={(e) => setEmail(e.target.value)}/>
//                     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div class="mb-3">
//                     <label class="form-label">Password</label>
//                     <input 
//                     type="password" 
//                     class="form-control" 
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <div class="mb-3">
//                     <label  class="form-label">Phone no.</label>
//                     <input 
//                     type="phone" 
//                     class="form-control" 
//                     placeholder="Number" 
//                     onChange={(e) => setPhone(e.target.value)}/>
//                 </div>

//                 <div class="mb-3 form-check">
//                     <input type="checkbox" class="form-check-input" />
//                     <label class="form-check-label" >Check me out</label>
//                 </div>
//                 <button type="submit" class="btn btn-dark">Register</button>

//                 <p onClick={handleClick}> Already registered {""} login in?</p>

//                 {flag && ( //if flage is true(when data is not there ) then alert will render
//                     <Alert color="primary" variant='danger'>
//                         Please enter every field
//                     </Alert>
//                 )}
//             </form>

//     ):(
//             <Login />
       
//     )}
//      </div>
//     )
// }

// export default Registeration;

// <form>
// <div className="form-group">
//     <lable>Name</lable>
//     <input
//     type="text"
//     className="form-control"
//     placeholder="type full name"
//     value={}
//     />
// </div>
// <div className="form-group">
//     <lable>Email</lable>
//     <input
//     type="email"
//     className="form-control"
//     placeholder="type email"
//     value={}
//     />
// </div>
// <div className="form-group">
//     <lable>Password</lable>
//     <input
//     type="password"
//     className="form-control"
//     placeholder="type password"
//     value={}
//     />
// </div>
// <div className="form-group">
//     <lable>Phone no.</lable>
//     <input
//     type="phone"
//     className="form-control"
//     placeholder="type name"
//     value={}
//     />
// </div>