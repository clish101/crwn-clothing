import React from 'react'
import './form-input.styles.scss'

export const FormInput = ({ ChangeHandler, label, ...otherProps }) => {

    return (
        <div className="group">
            <input className="form-input" onChange={ChangeHandler} {...otherProps} />
            {
                label ? (<label className={`${otherProps.value.length} ? 'shrink' : '' form-input-label`}>{label}</label>) : null
            }
        </div>
    )
}
