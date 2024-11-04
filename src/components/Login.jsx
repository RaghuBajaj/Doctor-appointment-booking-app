import { useEffect, useState, useContext } from "react";
import "./Login.css";
import { ItemContext } from "../Context";

function Login() {
  const { allUsers, setAllUsers, setUser, navigate, setAllAppointments } =
    useContext(ItemContext);
  const [login, setLogin] = useState(false);
  const [Invalid, setInvalid] = useState(false);
  const [createInfo, setCreateInfo] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    dob: "",
    address: "",
    userAppointments: [],
  });
  const reset1 = {
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    dob: "",
    address: "",
    userAppointments: [],
  };
  const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  const validatePassword = (password) => {
      const passwordRegex = /^(?=.*\d).{8,}$/;
      return passwordRegex.test(password);
  };
  const handleCreateAccount = () => {
    if (
      createInfo.name !== "" &&
      createInfo.email !== "" &&
      createInfo.password !== ""
    ) {
      if (!validateEmail(createInfo.email)) {
        alert("Please enter a valid email !");
        return;
      }
      if (!validatePassword(createInfo.password)) {
        alert("Please enter a valid password !");
        return;
      }
      setAllUsers((prev) => {
        console.log("prev:", prev);
        if (prev) {
          return [...prev, createInfo];
        } else {
          return [createInfo];
        }
      });
      setUser(createInfo);
      setAllAppointments(createInfo.userAppointments);
      setCreateInfo(reset1);
      navigate("/Home");
      alert("Account created Successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const reset2 = {
    email: "",
    password: "",
  };

  const handleLoginAccount = () => {
    if (loginInfo.email !== "" && loginInfo.password !== "") {
      const account = allUsers.find(
        (account) =>
          account.email === loginInfo.email &&
          account.password === loginInfo.password
      );
      if (account) {
        setUser(account);
        setAllAppointments(account.userAppointments);
        setLoginInfo(reset2);
        navigate("/Home");
        return;
      } else {
        setInvalid(true);
        // alert('Invalid login credentials.');
      }
    } else {
      alert("Please fill in all requierd fields.");
    }
  };

  const handleInputChange = (e, setState, field) => {
    setState((prev) => ({ ...prev, [field]: e.target.value }));
    setInvalid(false);
  };

  useEffect(() => {
    setInvalid(false);
  }, [login]);
  return (
    <div className="full_log">
      {login === false && (
        <div className="container_log">
          <div className="para_log">
            <h1 className="h1_log">Create Account</h1>
            <p className="h3_log">Please sign up to book appointment</p>
          </div>
          <div className="para_log">
            <h3 className="h3_log">Full Name</h3>
            <input
              type="text"
              value={createInfo.name}
              className="input_log"
              onChange={(e) => handleInputChange(e, setCreateInfo, "name")}
            />
          </div>
          <div className="para_log">
            <h3 className="h3_log">Email</h3>
            <input
              type="email"
              value={createInfo.email}
              className={`input_log ${
                !validateEmail(createInfo.email) && "input_error"
              }`}
              onChange={(e) => handleInputChange(e, setCreateInfo, "email")}
            />
            {Invalid === true && (
              <div className="error_log">'! Invalid email Id'</div>
            )}
          </div>
          <div className="para_log">
            <h3 className="h3_log">Password</h3>
            <input
              type="password"
              value={createInfo.password}
              className={`input_log ${
                !validateEmail(createInfo.email) && "input_error"
              }`}
              onChange={(e) => handleInputChange(e, setCreateInfo, "password")}
            />
            {Invalid === true && (
              <div className="error_log">'! Invalid password'</div>
            )}
          </div>
          <div className="para_log">
            <button className="btn_log" onClick={handleCreateAccount}>
              Create account
            </button>
          </div>
          <div className="para_log">
            <p className="h3_log">
              Already have acount?{" "}
              <strong
                className="switch_log"
                onClick={() => {
                  setLogin(true);
                }}
              >
                {" "}
                Login here
              </strong>{" "}
            </p>
          </div>
        </div>
      )}
      {login === true && (
        <div className="container_log">
          <div className="para_log">
            <h1 className="h1_log">Login</h1>
            <p className="h3_log">Please log in to book appointment</p>
          </div>
          <div className="para_log">
            <h3 className="h3_log">Email</h3>
            <input
              type="email"
              value={loginInfo.email}
              className={`input_log ${
                !validateEmail(loginInfo.email) && "input_error"
              }`}
              // {Invalid === true ?'invalid_log':'input_log'}
              onChange={(e) => handleInputChange(e, setLoginInfo, "email")}
            />
            {Invalid === true && (
              <div className="error_log">'! Invalid email Id'</div>
            )}
          </div>
          <div className="para_log">
            <h3 className="h3_log">Password</h3>
            <input
              type="password"
              value={loginInfo.password}
              className={`input_log ${
                !validatePassword(loginInfo.password) && "input_error"
              }`}
              // {Invalid === true ?'invalid_log':'input_log'}
              onChange={(e) => handleInputChange(e, setLoginInfo, "password")}
            />
            {Invalid === true && (
              <div className="error_log">'! Invalid Password'</div>
            )}
          </div>
          <div className="para_log">
            <button className="btn_log" onClick={handleLoginAccount}>
              Login
            </button>
          </div>
          <div className="para_log">
            <p className="h3_log">
              Create a new account?{" "}
              <strong
                className="switch_log"
                onClick={() => {
                  setLogin(false);
                }}
              >
                {" "}
                Click here
              </strong>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
