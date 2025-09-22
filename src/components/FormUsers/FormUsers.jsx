import React from 'react'
import styles from './FormUsers.module.css'
import { useForm } from 'react-hook-form'

const FormUsers = ({ initialValues = {}, onSubmit, submitButtonTitle }) => {
    const {
        name = '',
        age = '',
        gender = '',
        email = '',
        phone = '',
    } = initialValues
    const [firstname = '', lastname = ''] = name ? name.split(' ') : []

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstname,
            lastname,
            age,
            gender,
            email,
            phone,
        },
    })

    const onSubmitForm = (data) => {
        const fullName = `${data.firstname} ${data.lastname}`.trim()
        const userData = {
            ...data,
            name: fullName,
        }

        onSubmit(userData)
    }

    return (
        <form className={styles['form']} onSubmit={handleSubmit(onSubmitForm)}>
            <div className={styles['field']}>
                <label className={styles['label']}>First Name *</label>
                <input
                    {...register('firstname', {
                        required: 'First name is required',
                        minLength: {
                            value: 2,
                            message: 'Minimum 2 characters',
                        },
                    })}
                    type="text"
                    className={`${styles['input']} ${errors.firstname ? styles['input-error'] : ''}`}
                    placeholder="Enter first name"
                />
                {errors.firstname && (
                    <span className={styles['error']}>
                        {errors.firstname.message}
                    </span>
                )}
            </div>

            <div className={styles['field']}>
                <label className={styles['label']}>Last Name *</label>
                <input
                    {...register('lastname', {
                        required: 'Last name is required',
                        minLength: {
                            value: 2,
                            message: 'Minimum 2 characters',
                        },
                    })}
                    type="text"
                    className={`${styles['input']} ${errors.lastname ? styles['input-error'] : ''}`}
                    placeholder="Enter last name"
                />
                {errors.lastname && (
                    <span className={styles['error']}>
                        {errors.lastname.message}
                    </span>
                )}
            </div>

            <div className={styles['field-age']}>
                <label className={styles['label']}>Age</label>
                <input
                    {...register('age', {
                        min: {
                            value: 1,
                            message: 'Age must be positive',
                        },
                        max: {
                            value: 120,
                            message: 'Age must be reasonable',
                        },
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Age must be a number',
                        },
                    })}
                    type="number"
                    className={`${styles['input']} ${errors.age ? styles['input-error'] : ''}`}
                    placeholder="Enter age"
                />
                {errors.age && (
                    <span className={styles['error']}>
                        {errors.age.message}
                    </span>
                )}
            </div>

            <div className={styles['field-gender']}>
                <label className={styles['label']}>Gender</label>
                <select {...register('gender')} className={styles['input']}>
                    <option value="" hidden>
                        Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="">Other</option>
                </select>
            </div>

            <div className={styles['field']}>
                <label className={styles['label']}>Email *</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    type="email"
                    className={`${styles['input']} ${errors.email ? styles['input-error'] : ''}`}
                    placeholder="Enter email"
                />
                {errors.email && (
                    <span className={styles['error']}>
                        {errors.email.message}
                    </span>
                )}
            </div>

            <div className={styles['field']}>
                <label className={styles['label']}>Phone *</label>
                <input
                    {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                            value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                            message: 'Invalid phone number',
                        },
                    })}
                    type="tel"
                    className={`${styles['input']} ${errors.phone ? styles['input-error'] : ''}`}
                    placeholder="Enter phone number"
                />
                {errors.phone && (
                    <span className={styles['error']}>
                        {errors.phone.message}
                    </span>
                )}
            </div>

            <div className={styles['submit-button-block']}>
                <button type="submit" className={styles['button']}>
                    {submitButtonTitle}
                </button>
            </div>
        </form>
    )
}

export default FormUsers
