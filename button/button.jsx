import React from 'react';
import styles from './button.module.css'
import cn from 'classnames'

const Button = ({isLoading,children}) => {
    return ( 
        <button type="button" 
                className={cn(styles.btn, isLoading && styles.loading)}>
                     {children} 
                </button>
     );
}
 
export default Button;