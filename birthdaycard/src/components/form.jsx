import React from 'react';
import '../assets/css/style.css'

const Form = () => {
    return (
        <div className='formContainer'>
            <form className='cards'>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter your mobile no."
                         />
                </div>

                <div className="form-group">
                    <input type="enter your email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                              placeholder="Enter your message"></textarea>
                </div>

                <div className="form-group">
                    <input type="enter your email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Any nickname for her"
                         />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form;