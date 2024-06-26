import { useState } from "react";
import axios from 'axios'
import './LoginForm.css';
function LoginForm() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [post, setPost] = useState("");
  const [data, setData] = useState(null);

  const firstNamehandleChange = (e) => {
    setFirstName(e.target.value);


  }

  const lastNamehandleChange = (e) => {
    setLastName(e.target.value);

  }

  const EmailhandleChange = (e) => {
    setEmail(e.target.value);

  }
  const PhonehandleChange = (e) => {
    setPhone(e.target.value);

  }
  const posthandleChange = (e) => {
    setPost(e.target.value);

  }

  const buttonhandleChange = (e) => {
    e.preventDefault();


    if (firstname.length < 3) {

      alert('Only String with Minimum 3 characters')
    }
    if (lastname.length < 2) {
      alert('Only String with Minimum 2 characters')
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert(' email should included with @ and dot')
    }

    if (phone.charAt(0) === '0') {
      if (phone.length !== 11) {
        alert(' phone length should be 11')
      }
    }
    if (phone.charAt(0) !== '0') {
      if (phone.length !== 10) {
        alert(' phone length should be exactly 10')

      }
    }
    var RegEx = /^[a-zA-Z0-9_ ]*$/i;
    if (!RegEx.test(post)) {
      alert('post code should be alphanumberic wiht white allowed')
    }

    fetch('http://localhost:4000/create-user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        phone:phone,
        email:email,
        post:post
      })
    })
  }



  return (
    <div className="entire-from">
      <form className="form-class">
        <label className="label-class">First Name:
          <input className="input-class"
            type="text"
            name="firstname"
            onChange={firstNamehandleChange}

          />
        </label>

        <label className="label-class">Last Name:
          <input className="input-class"
            type="text"
            name="lastName"
            onChange={lastNamehandleChange}
          />
        </label>

        <label className="label-class">Email add:
          <input className="input-class"
            type="text"
            name="email"
            onChange={EmailhandleChange}
          />
        </label>


        <label className="label-class">Phone Num:
          <input className="input-class"
            type="text"
            name="phone"
            onChange={PhonehandleChange}
          />
        </label>


        <label className="label-class">PostCode:
          <input className="input-class"
            type="text"
            name="postcode"
            onChange={posthandleChange}
          />
        </label>

        <button className='button-class' type="button" onClick={buttonhandleChange}> button</button>
      </form>
    </div>

  );
}

export default LoginForm;