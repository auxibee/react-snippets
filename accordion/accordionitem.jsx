import React from 'react';
import styles from './accordionItem.module.css'
import cn from 'classnames'
import PropTypes from 'prop-types'

const AccordionItem = ({children, label,index, onToggle , isCollapsed}) => {
    
    return ( 
        <div className={styles.accordionItemWrapper}>
            <button onClick={() => onToggle(index,isCollapsed)}>{label}</button>
            <div className={cn(styles.accordionText, isCollapsed && styles.hide)}>{children}</div>
        </div>
       
     );
}

 
AccordionItem.propTypes = {
    children : PropTypes.node.isRequired,
    label : PropTypes.string.isRequired,
    index : PropTypes.number,
    onToggle : PropTypes.func,
    isCollapsed : PropTypes.bool,

}

export default AccordionItem