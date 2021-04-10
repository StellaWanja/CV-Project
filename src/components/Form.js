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
                  value={props.formData.firstName}     
                  placeholder='Enter your first name' 
                  onChange={props.handleChange}       
                />

                <label>Last Name: </label>
                <input 
                  name='lastName'  
                  type='text' 
                  value={props.formData.lastName}     
                  placeholder='Enter your last name' 
                  onChange={props.handleChange}       
                />

                <label>Profession Title: </label>
                <input 
                  name='professionTitle'  
                  type='text' 
                  value={props.formData.professionTitle}     
                  placeholder='Enter your professional title' 
                  onChange={props.handleChange}       
                />


                <label>Email: </label>
                <input 
                  name='email'
                  type='email'   
                  value={props.formData.email}     
                  placeholder='Enter your email' 
                  onChange={props.handleChange}       
                />

                <label>Phone Number: </label>
                <input 
                  name='phoneNumber'   
                  type='number'
                  value={props.formData.phoneNumber}     
                  placeholder='Enter your phone number' 
                  onChange={props.handleChange}       
                />

                <label>Upload Profile Photo: </label>
                <input 
                  type='file'
                  onChange={props.handleChange}       
                />
              </div>

              <div className='exp-info'>
                <h2>Work Experience</h2>

                <label>Job Position: </label>
                <input 
                  name='jobPosition'   
                  type='text'
                  value={props.formData.jobPosition}     
                  placeholder='Enter your position' 
                  onChange={props.handleChange}       
                />

                <label>Company: </label>
                <input 
                  name='company'   
                  type='text'
                  value={props.formData.company}     
                  placeholder='Enter the company' 
                  onChange={props.handleChange}       
                />

                <label>City: </label>
                <input 
                  name='city'   
                  type='text'
                  value={props.formData.city}     
                  placeholder='Enter the city' 
                  onChange={props.handleChange}       
                />

                <label>Responsibilities: </label>
                <textarea 
                  name='respoTextArea'
                  value={props.formData.respoTextArea}
                  placeholder='Enter the responsibilities'
                  onChange={props.handleChange}
                />

              </div>
          </form>
    )
}

export default Form;