import React, { useState } from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPhone, faEnvelope, faClipboard, faCopy } from '@fortawesome/free-solid-svg-icons';  
import styles from './CopyText.module.css';  

const CopyText = (props) => {  
    const [coped, setCoped] = useState(false);  

    const copyHandler = async (text) => {  
        try {  
            setCoped(true);  
            setTimeout(() => {  
                setCoped(false);  
            }, 1000);  
            await navigator.clipboard.writeText(text);  
            console.log('Content copied to clipboard');  
        } catch (err) {  
            console.error('Failed to copy: ', err);  
        }  
    };  

    return (  
        <div className={styles.CopyText}>  
            <span onClick={() => copyHandler(props.text.trim())}>  
                {coped ? <FontAwesomeIcon icon={faClipboard} /> : <FontAwesomeIcon icon={faCopy} />}  
            </span>  
            <p className={styles.text}>  
                {props.text}  
            </p>  
            <p>  
                {props.icon === 'phone' ? (  
                    <FontAwesomeIcon icon={faPhone} />  
                ) : (  
                    <FontAwesomeIcon icon={faEnvelope} />  
                )}  
            </p>  
        </div>  
    );  
};  

export default CopyText;