import React from 'react';
import PropTypes from 'prop-types'
import AccordionItem from './accordionitem';



const Accordion = ({children}) => {
    const [bindIndex, setBindIndex] = React.useState(children.length)
    
    const items = children.filter(item => item.type.name === 'AccordionItem')

    const handleToggle = (index,isCollapsed) => {
        // if the same button is clicked toggle isCollapsed value
        if(!isCollapsed) return setBindIndex(children.length)

        setBindIndex(index)
    }

    return (
        <div>
            {items.map(({props}, index) => <AccordionItem
                                        key={props.label} 
                                        isCollapsed={index !== bindIndex} 
                                        onToggle={handleToggle} 
                                        label={props.label}
                                        index = {index}
                                    >
                                        {props.children}
                                    </AccordionItem>)}
        </div>
    )
   
   
}
 
Accordion.propTypes = {
    children : PropTypes.arrayOf(PropTypes.element).isRequired,
}
 
export default Accordion;
