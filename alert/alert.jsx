import React from 'react';
import cn from 'classnames'
import styles from './alert.module.css'

const Alert = ({isDefaultShown = false, message, timeout=250 , error, warning}) => {
    const [isDisplayed, setIsDisplayed] = React.useState(isDefaultShown)
    const [isLeaving, setIsLeaving] = React.useState(false)

    let timeOutId = null
    
    React.useEffect(() => {
        setIsDisplayed(true)
        clearTimeout(timeOutId)
    },[isDefaultShown, timeOutId, timeout])

    const handleClose = () => {
        setIsLeaving(true)
        timeOutId = setTimeout(() => {
            setIsLeaving(false)
            setIsDisplayed(false)
        }, timeout)
        
    }

    return (
        <>
        {isDisplayed && <div className={ 
            cn(
                styles.AlertWrapper, 
                error && styles.error, 
                warning && styles.warning , 
                isLeaving && styles.leaving) } >    
            
            <div> {message} </div>
            <button type="button" onClick={handleClose}> x </button>
        </div> }
        </>
     );
}
 
export default Alert;