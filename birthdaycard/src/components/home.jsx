import React,{useState} from 'react';
import Form from "./form";
import '../assets/css/style.css';

const Home = () => {
    const [form, setForm] = useState(false);

    return (
       <>
                       <div className="homeContainer"></div>
                       <div className='wishHead'>
                           {
                               !form ? (
                           <>
                               <p className='wishHeadText'>It's Twinkle's Birthday</p>
                               <p className='desc'><div className="divider"></div>Let Twinkle know how much you care for her and make her birthday awesome by sending your warm wishes</p>
                               <button className='formBtn' onClick={() => setForm(true)}> Click here to wish</button>
                           </>
                               ) : (
                                   <Form/>
                               )
                           }
                       </div>

       </>
    )
}

export default Home;