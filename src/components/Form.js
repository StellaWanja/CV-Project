import React from 'react';

function Form(props){
    return(
        <form className='main-form'>
              <div className='gen-info'>
              <h2>General Information</h2>  

                <label>First Name: </label>
                <input 
                  name='firstName'   
                  type='text'
                  value={props.firstName}     
                  placeholder='Enter your first name' 
                  onChange={props.handleChange}       
                />

                <label>Last Name: </label>
                <input 
                  name='lastName'  
                  type='text' 
                  value={props.lastName}     
                  placeholder='Enter your last name' 
                  onChange={props.handleChange}       
                />

                <label>Profession Title: </label>
                <input 
                  name='professionTitle'  
                  type='text' 
                  value={props.professionTitle}     
                  placeholder='Enter your professional title' 
                  onChange={props.handleChange}       
                />


                <label>Email: </label>
                <input 
                  name='email'
                  type='email'   
                  value={props.email}     
                  placeholder='Enter your email' 
                  onChange={props.handleChange}       
                />

                <label>Phone Number: </label>
                <input 
                  name='phoneNumber'   
                  type='number'
                  value={props.phoneNumber}     
                  placeholder='Enter your phone number' 
                  onChange={props.handleChange}       
                />

                <label>Upload Profile Photo: </label>
                <input 
                  type='file'
                  onChange={props.handleChange}       
                />

              </div>
          </form>
    )
}

export default Form;