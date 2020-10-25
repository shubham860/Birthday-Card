import React,{useState} from 'react';
import '../assets/css/style.css'
import axios from 'axios';

const FormComponent = ({setForm}) => {
    const [formDataObj, setFormData] = useState({
        name:"",
        message:"",
        nickname: ""
    })

    const submitForm = () => {
        const formData =  new FormData();;
        formData.append('name', formDataObj.name);
        formData.append('message', formDataObj.message);
        formData.append('nickname', formDataObj.nickname);
        let config = {
            method: 'post',
            url: 'https://birthday26-10.herokuapp.com/add',
            data : formData
        };

        axios(config)
            .then(function (response) {
                if(response){
                    alert('Thank you..')
                    setForm(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const formData = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <div className='formContainer'>
            <p className='messageHead'> Warm wishes</p>
            <div className='cards'>
                <div className="">
                    <input type="text" className="form-control" name="name"
                           placeholder="Enter your name"  onChange={formData} required={true}/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="nickname" placeholder="Any nickname for her"
                           onChange={formData} required={true}
                    />
                </div>

                <div className="form-group">
                    <textarea className="form-control" name="message" rows="3"
                              placeholder="Enter your message" onChange={formData} required={true}></textarea>
                </div>


                <button onClick={submitForm} className="btn submitBtn">Send</button>

            </div>


        </div>
    )
}

export default FormComponent;