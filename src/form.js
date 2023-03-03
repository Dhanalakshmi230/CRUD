
import React, { useState, useEffect } from 'react';
import './form.css';
import { useNavigate, useParams } from 'react-router-dom';
function Form() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [id, setid] = useState('');


  const [FnameErr, setFnameErr] = useState('');
  const [LnameErr, setLnameErr] = useState('');
  const [MailErr, setMailErr] = useState('');
  const navigate = useNavigate();
  var {parid}  = useParams();
 

  const checkValidation = (e) => {
    e.preventDefault();

    let isValid = true;

    if (FirstName === '') {
      setFnameErr('Enter your Firstname');
      isValid = false;
    } else {
      setFnameErr('');
    }
    if (LastName === '') {
      setLnameErr('Enter your Lastname');
      isValid = false;
    } else {
      setLnameErr('');
    }
    if (!EmailId.includes('@', '.')) {
      setMailErr('Enter valid email address');
      isValid = false;
    } else {
      setMailErr('');
    }

    if (isValid) {
  if((parid)){
      fetch('https://63cfb761e52f587829a384e5.mockapi.io/Form/'+ parid, {
        method: 'PUT',
        body: JSON.stringify({
          'Firstname': FirstName,
          'Lastname': LastName,
          'Email': EmailId,
          'id': id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        
        .then((data) => {
          console.log('data:',data);
          navigate('/table');
        })
       
      
  }else{
  fetch('https://63cfb761e52f587829a384e5.mockapi.io/Form', {
    method: 'POST',
    body: JSON.stringify({
      'Firstname': FirstName,
      'Lastname': LastName,
      'Email': EmailId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      navigate('/table');
    })
    .catch((err)=>{
      alert(err.message)
    })
    
  }
}
}
  useEffect(() => {
    if (parid) {
      fetch(`https://63cfb761e52f587829a384e5.mockapi.io/Form/${parid}`,{
        method:'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          setFirstName(data.Firstname);
          setLastName(data.Lastname);
          setEmailId(data.Email);
          setid(data.id);

        })
       
    }
  }, [parid]);

 

    return (
        <div>
        <div className="container-fluid">
            <div className="row main-content text-center">
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Employee Form</h2>
                            </div>
                            <div className="row">
                                <form control="" className="form-group text-white">
                                    <div className="row">
                                        <input type="text" name="Firstname" value={FirstName} onChange={e=>setFirstName(e.target.value)} id="firstname" className="form__input" placeholder="Firstname" />
                                    </div>
                                    <p className='text-danger'>{FnameErr}</p>
                                    <div className="row">
                                        <input type="text" name="Lastname"value={LastName} onChange={e=>setLastName(e.target.value)} id="lastname" className="form__input" placeholder="Lastname" />
                                    </div>
                                    <p className='text-danger'>{LnameErr}</p>
                                    <div className="row">
                                        <input type="text" name="Email" value={EmailId} onChange={e=>setEmailId(e.target.value)} id="email" className="form__input" placeholder="Email" />
                                    </div>
                                    <p className='text-danger'>{MailErr}</p>

                                    <div className="row">
                                        <input type="submit" onClick={checkValidation} className="btn" />
                                    </div>
                                </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center footer">

            </div>
        </div>
    )
}

 export default Form;

