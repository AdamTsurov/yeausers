import PopupControl from '@components/PopupControl/PopupControl'
import IconImage from '@ui/IconImage/IconImage'
import React from 'react'

const UserCardContactInfo = ({ className, email, phone }) => {
    return (
        <div className={className.contactInfo}>
            <p>
                <b>Email: </b>
                {email}
            </p>
            <p>
                <b>Phone: </b>
                {phone}
            </p>
        </div>
    )
}

export default UserCardContactInfo
