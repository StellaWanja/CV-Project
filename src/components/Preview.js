import React from 'react';

function Preview(props) {

    return (
        <div className='preview-section'>
            <div className='profile-img'>
                <img src={props.previewData.uploadFile} alt=''/>
            </div>

            <div className='gen-section'>
               <h1>{props.previewData.firstName} <span className='color-span'>{props.previewData.lastName}</span></h1>
               <h3>{props.previewData.professionTitle}</h3>
               <p><span>{props.previewData.email}</span></p>
               <p>{props.previewData.phoneNumber}</p>
            </div>      

            <div className='work-section'>
                <div></div>
            </div>
        </div>
    )
}

export default Preview;