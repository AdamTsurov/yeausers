import PopupControl from '@components/PopupControl/PopupControl'
import IconImage from '@ui/IconImage/IconImage'
import React from 'react'

const UserCardInfo = ({
    name,
    age,
    iconUser,
    iconMenuButton,
    type: gender,
    className = {},
    style = {},
    altForUserIcon,
    popupItems,
}) => {
    return (
        <div className={className.containerInfo}>
            <div className={className.block}>
                <IconImage
                    className={className.icon}
                    icon={iconUser}
                    alt={altForUserIcon}
                />
                <div className={className.basicInfo}>
                    <p>
                        {name} {age ? `(age: ${age})` : '(age: no info)'}
                    </p>
                    <p>gender: {gender}</p>
                </div>
            </div>

            <PopupControl
                control={
                    <button className={className.buttonMenu}>
                        <IconImage
                            alt={'icon-image-menu'}
                            icon={iconMenuButton}
                        />
                    </button>
                }
                popup={popupItems}
                position="left"
            />
        </div>
    )
}

export default UserCardInfo
