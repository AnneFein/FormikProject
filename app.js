import React from "react";
import './App.css';
import {useFormik} from 'formik'

function App() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values =>{
      console.log('form:', values);
      if (!formik.errors.email && !formik.errors.password) {
        alert('Login Successful');
      }
    },
    validate: values =>{
      let errors = {};
      if(!values.email) { 
        errors.email = 'Field Required';
    }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Username should be an email';
  }

      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       <div>Email</div>
       <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}></input>
       {formik.errors.email ? <div style ={{color:'red'}}>{formik.errors.email}</div>: null}
       <div>Password</div>
       <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}></input>
       {formik.errors.password ? <div style ={{color:'red'}}>{formik.errors.password}</div>: null}
       <button type="submit">Submit</button>
      </form>
        
      
    </div>
  );
}

export default App;
