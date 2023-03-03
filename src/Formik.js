import { useFormik } from 'formik';
import React from 'react'
import './Formik.css';
const validate = values => {
    const errors = {};
    if (!values.Name) {
        errors.Name = 'Enter your name';
      } else if (!/^[a-zA-Z ]+$/.test(values.Name)) {
        errors.Name = 'Enter letters only';
      }
      
      

   

    if (!values.email) {
        errors.email = 'Enter Your Email Address'
    }

    else if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(values.email)) {
        errors.email = 'Enter Valid Email Address'
    }

    if (!values.phonemumber) {
        errors.phonemumber = 'Phonenumber must be 10 digits';
    }
    else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phonemumber)){
        errors.phonemumber ='Enter only numbers ' 
    }
    
    
    return errors;
}

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            phonemumber: ''

        },

        validate,

        // onSubmit: values => {
        //     alert(`${values.Name}`)
           
        // }


    });
    console.log(formik.values)
    return (
        <div className='container justify-content-center  rounded w-50   my-3   ' >
            <div className='row  justify-content-center '>

                <h1 className='text-center'>Sign UP</h1>
                <hr></hr>

                <form onSubmit={formik.handleSubmit} className='border  border-dark  rounded bg-dark  my-3'>
                    <div className='my-5  '>
                        <div className='row mb-4 d-flex ms-auto me-auto  '>
                            <label className='fs-5'>Name</label>
                            
                            {/* {` ${formik.touched.Name && formik.errors.Name ? 'is-invalid' : ''}`} */}
                            <input className={`p-2 ${formik.touched.Name && formik.errors.Name ? '4px-border border-danger' : ''}`} type={'text'}
                                     placeholder='Enter Your  Name'
                                     name='Name'
                                      onChange={formik.handleChange}
                                      value={formik.values.Name}
                                       onBlur={formik.handleBlur}
                                       />

                               {
                               formik.touched.Name && formik.errors.Name ? <span  className='text-danger  fw-bold'>{formik.errors.Name}</span> : null
                           
}
                        </div>

                        
                        <div className='row mb-4 d-flex ms-auto me-auto'>
                            <label className='fs-5'>Email</label>
                            <input className={`p-2 ${formik.touched.email && formik.errors.email ? '4px-border border-danger' : ''}`} type={'email'}
                                placeholder='Enter Your Email Address'
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.email && formik.errors.email ? <span className='text-danger fw-bold'>{formik.errors.email}</span> : null

                            }
                        </div>
                        <div className='row mb-4 d-flex ms-auto me-auto'>
    <label className='fs-5'>Phonemumber</label>
    <input
        className={`p-2 ${formik.touched.phonemumber && formik.errors.phonemumber ? '4px-border border-danger' : ''}`}
        type={'number'}
        placeholder='Enter Your phonemumber'
        name='phonemumber'
        onChange={formik.handleChange}
        value={formik.values.phonemumber}
        onBlur={formik.handleBlur}
    />
    {
    formik.touched.phonemumber && formik.errors.phonemumber ? 
        <span className='text-danger fw-bold'>{formik.errors.phonemumber}</span> : null
    }
</div>


                        <div className='row  d-flex ms-auto me-auto  '>
                            <button type='submit' className='btn btn-primary '>submit</button>
                        </div>
                    </div>
                </form >
            </div>

        </div >
    )
}
export default FormikForm;