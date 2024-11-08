import React, { useState } from 'react'
import Header from '../common/Header'

export default function MyForm() {


  let [formType, setFormType] = useState(['submit'])

  let [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
      index: '',
    }
  )

  let UpdateForm = (event) => {
    let old_data = { ...formData };
    let input_name = event.target.name;
    let input_value = event.target.value;

    old_data[input_name] = input_value;
    setFormData(old_data);
  }

  let [userData, setUserData] = useState([])

  let SubmitForm = (event) => {
    event.preventDefault();

    let current_user_data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }

    if (formType[0] == 'submit') {

      let check_user_fiter = userData.filter((v) => v.email === current_user_data.email || v.phone === current_user_data.phone)
      if (check_user_fiter.length >= 1) {

        alert('Email or phone number already exist')
      }
      else {

        let old_user_data = [...userData, current_user_data]

        setUserData(old_user_data)

      }
    }

    else {
      let old_user_data = [...userData]
      old_user_data[formType[1]] = current_user_data;

      setUserData(old_user_data)

    }

    setFormData(
      {
        name: "",
        email: "",
        phone: "",
        message: "",
        index: '',
      }
    )


    setFormType(['submit'])
  }

  const editRow = (index) => {
    let user_detail = userData[index]
    setFormData(user_detail);
    setFormType(['update', index]);
  }

  const ShowData =
    userData.map((user_detail, i) => {
      return (
        <tr key={i}>
        
          <td>
            {user_detail.name}
          </td>
          <td>
            {user_detail.email}
          </td>
          <td>
            {user_detail.phone}
          </td>
          <td>
            {user_detail.message}
          </td>
          <td >
            <button className='btn btn-sm btn-info'
              onClick={() => {
                editRow(i)
              }}
            >
              Update
            </button>
            <button className='btn btn-sm btn-danger ' onClick={() => {

              let pending_users = userData.filter((v, index) => index !== i);
              setUserData(pending_users)
            }}>
              Delete
            </button>
          </td>
        </tr>
      )
    })



  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <h2 className='text-center'>Enquery Form</h2>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">

                <form onSubmit={SubmitForm}>
                  <div className="form-group py-2">
                    <label htmlFor="username">Name</label>
                    <input className='form-control' name='name' id='username' onChange={UpdateForm} type="text" placeholder='Enter Your Name' value={formData.name} />
                  </div>
                  <br />
                  <div className="form-group py-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' name='email' placeholder='Enter Your Email' onChange={UpdateForm} id='email' value={formData.email} />
                  </div>
                  <br />
                  <div className="form-group py-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id='phone' name='phone' placeholder='Enter Your Phone Number' value={formData.phone} onChange={UpdateForm} />
                  </div>
                  <br />
                  <div className="form-group py-2">
                    <label htmlFor="message">Message</label>
                    <textarea id="messge" className='form-control' rows={5} name='message' value={formData.message} onChange={UpdateForm} />
                  </div>
                  {
                    (formType[0] === 'submit') ?
                      <div className="form-group py-2">
                        <button className='btn btn-primary'>Submit</button>
                      </div>
                      :
                      <div className="form-group py-2">
                        <input type="hidden" value={formType[1]} />
                        <button className='btn btn-success'>Update</button>
                      </div>
                  }
                </form>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">

                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        Name
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Phone Number
                      </th>
                      <th>
                        Message
                      </th>
                      <th>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ShowData}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
