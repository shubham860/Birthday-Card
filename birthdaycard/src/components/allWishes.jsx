import React, {useState, useEffect} from 'react';
import '../assets/css/style.css'
import axios from 'axios';

const AllWishes = () => {
    const [formDataObj, setFormData] = useState({
        passcode:""
    })
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false);
    const [message, setMessage] = useState([]);
    const [currentObj, setCurrentObj] = useState(0)

    const wish = [
        {
            name:"samra khan",
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            nickname: "samra"
        },
        {
            name:"shubham Chauhan",
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            nickname: "Shub"
        },
        {
            name:"samra khan",
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            nickname: "samra"
        },
        {
            name:" teuec",
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            nickname: "samrcdca"
        }
    ]

    useEffect(() =>{

    },[])

    const checker = () => {
        if(formDataObj.passcode === 'twinkle@123'){
            setSuccess(true);
            axios.get('https://birthday26-10.herokuapp.com/wishes')
                .then(res => console.log('res',res))
                .catch(err => console.log('err',err))
        }else{
            setError(true);
        }

        setFormData({passcode: ''})
    }

    const formData = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }


    return (
        <div className='cardsData'>
           <div className='formContainers'>
               <p className='messageHead'>Happy Birthday Twinkle</p>
               {
                   success ? (
                      <div>
                          <div className='cardContainer'>
                              <p className='descr'><p className='nickName'>Hi,{wish[currentObj]?.nickname} </p>  {wish[currentObj]?.message}
                              </p>
                              <p className='name'>{wish[currentObj]?.name}</p>
                          </div>

                          <div className='btnGrp'>
                              <button className='previous' onClick={() => {
                                  currentObj > 0 && setCurrentObj(prevState => prevState - 1)
                              }}>Previous</button>

                              <button className='next' onClick={() => {
                                  currentObj < wish.length -1 && setCurrentObj(prevState => prevState + 1)
                              }}>Next</button>
                          </div>
                      </div>
                   ) : (
                       <div className='forms'>
                           <div className="form-group">
                               <input type="password" className="form-control passcode" name="passcode"
                                      placeholder="Enter passcode" onChange={formData} required={true}/>
                               {
                                   error && <p className='passcodeCheck'>Invalid passcode</p>
                               }
                               <button className="btn submitBtn" onClick={checker}>Check</button>
                           </div>
                       </div>
                   )
               }
           </div>

        </div>

            )
}

export default AllWishes;