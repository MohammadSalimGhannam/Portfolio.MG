import React, {useState} from "react";
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';

import styles from './Contact.module.css'
import Title from '../Section.Components/Title/Title'
import SubTitle from '../Section.Components/SubTitle/SubTitle'
import CopyText from '../Section.Components/CopyText/CopyText'

const Contact = (props) => {
    const [firstName, setFirstName] = useState('');  
    const [lastName, setLastName] = useState('');  
    const [email, setEmail] = useState('');  
    const [message, setMessage] = useState('');  
    const [success, setSuccess] = useState(false);  
    const [error, setError] = useState(false);  

    // Initialize EmailJS with Public Key  
    emailjs.init('BTq3qeetewBboOdDv');

    const handleSubmit = (e) => {  
        e.preventDefault();  

        const templateParams = {  
            from_name1: firstName,  
            form_name2: lastName,
            from_email: email,  
            message,  
        };  

        emailjs.send('service_5ha474o', 'template_dyp6fxm', templateParams)
            .then((res) => {  
                console.log('SUCCESS!', res.status);  
                setSuccess(true);  
                setError(false);  
                setFirstName('');  
                setLastName('');  
                setEmail('');  
                setMessage('');  
            })  
            .catch((err) => {  
                console.error('FAILED...', err);  
                setError(true);  
                setSuccess(false);  
            });  
    };  

    const leftPart = {
        offscreen: {
            x: -100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }
        }
    }

    const rightPart = {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }
        }
    }

    return(
        <div className={styles.Contact} id="Contact">
            <Title title='Contact'/>
            <div className={styles.ContactContainer}>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{once: true, amount: .5}}
                    variants={leftPart}
                >
                    <SubTitle title='Cntact Info'/>
                    <div>
                        <CopyText text='0984 166 888' icon='phone'/>
                        <CopyText text='mohammadyl69ghannam@gmail.com' icon='email'/>
                    </div>
                </motion.div>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{once: true, amount: .5}}
                    variants={rightPart}
                >
                    <SubTitle title='Send Message'/>
                    <form name="form" id="form" className={styles.Form} onSubmit={handleSubmit}>
                        <div>
                            <input 
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required='required'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                            <input 
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
                        <input 
                            type="email"
                            name=""
                            id=""
                            placeholder="Email"
                            required='required'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        <textarea
                            name="message"
                            placeholder="Message ..."
                            required='required'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                        />
                        <input type="submit" value="Send Message" />
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact