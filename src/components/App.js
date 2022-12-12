import React, {useState } from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  const [nameErr, setnameErr] = useState(false)
  let validate = /^[\w\s]+$/   // For Validation

  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)

  const [phone, setPhone] = useState("")
  const [phoneerr, setPhoneerr] = useState(false)
  let phoneexp = /^[0-9]+$/   // For Validation

  const [password, setPassword] = useState("")
  const [passworderr, setPassworderr] = useState(false)

  let [EmailName, setEmailName] = useState("")
  let [isempty, setIsempty] = useState(false)

  function submitHandle(e) {
    e.preventDefault()

    if (name == "" || email == "" || phone == "" || password == "") {
      setIsempty(true)
      return
    }
    else setIsempty(false)

    // name
    if (validate.test(name)) {
      setnameErr(false)
    }
    else {
      setnameErr(true)
      return
    }
    //email
    if (email.includes("@")) {
      setEmailErr(false)

    }
    else {
      setEmailErr(true)
      return
    }
    //phone
    if (phoneexp.test(phone)) {
      setPhoneerr(false)

    }
    else {
      setPhoneerr(true)
      return
    }
    // password
    if (password.length >= 6) {
      setPassworderr(false)

    }
    else {
      setPassworderr(true)
      true
      return
    }

    setEmailName(email.split("@")[0])


  }


  return (
    <div id="main">
      <form onSubmit={submitHandle}>

        <label htmlFor id="name">Name : </label>
        <input type="text" id="name" onChange={(e) => { setName(e.target.value) }} />{nameErr ? <>Name is not alphanumeric</> : ""}
        <br />
        <br />
        <label htmlFor id="email">email : </label>
        <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }} />{emailErr ? <>email must contain @</> : ""}
        {/* {true?<>Email is {email}</>:""} */}
        <br />
        <br />
        <label htmlFor id="gender">Gender : </label>

        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor id="phone">Phone : </label>
        <input type="text" id="phone" onChange={(e) => { setPhone(e.target.value) }} />{phoneerr ? <>Phone Number must contain only numbers</> : ""}
        <br />
        <br />
        <label htmlFor id="password">Password : </label>
        <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />{passworderr ? <>Password must contain atleast 6 letters</> : ""}
        <br />
        <br />
        <input type="submit" />
      </form>
      {isempty ? <>Please fill all inputs</> : ""}
      {(EmailName != "") ? <h1>Hello {EmailName}</h1> : ""}
    </div>

  )
}


export default App;
