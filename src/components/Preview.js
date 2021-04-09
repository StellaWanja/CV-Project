import React from 'react';

function Preview(props) {

    return (
        <div className='preview-section'>
            <div className='profile-img'>
                <img src={props.uploadFile} alt=''/>
            </div>

            <div className='title'>
               <h1>{props.firstName} <span className='color-span'>{props.lastName}</span></h1>
               <h3>{props.professionTitle}</h3>
               <p><span>{props.email}</span></p>
               <p>{props.phoneNumber}</p>
            </div>      
        </div>
    )
}

export default Preview;