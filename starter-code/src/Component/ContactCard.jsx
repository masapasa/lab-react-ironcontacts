import React from 'react'
const ContactCard = props => {
     return (
        <tr>
            <td>
                <img src={props.pictureUrl} alt=""/>
            </td>
            <td>
                {props.popularity}
            </td>
            <td>
                {props.name}
            </td> 
        </tr>
    )
}
export default ContactCard
