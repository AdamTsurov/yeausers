import React from 'react'
import styles from './FormUsers.module.css'
import { useForm } from 'react-hook-form'

const FormUsers = ({ initialValues = {}, onSubmit, submitButtonTitle }) => {
    console.log(initialValues)
    const {
        name = '',
        age = '',
        gender = '',
        email = '',
        phone = '',
    } = initialValues
    const [firstname = '', lastname = ''] = name ? name.split(' ') : []

    const { register, handleSubmit } = useForm({
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
        console.log(data)
    }
    return (
        <form className={styles['form']} onSubmit={handleSubmit(onSubmitForm)}>
            <div className={styles['field']}>
                <label className={styles['label']}>Name</label>
                <input
                    {...register('firstname', { required: true })}
                    type="text"
                    className={styles['input']}
                />
            </div>
            <div className={styles['field']}>
                <label className={styles['label']}>Last Name</label>
                <input
                    {...register('lastname', { required: true })}
                    type="text"
                    className={styles['input']}
                />
            </div>
            <div className={styles['field']}>
                <label className={styles['label']}>Age</label>
                <input
                    {...register('age')}
                    type="text"
                    className={styles['input']}
                />
            </div>
            <div className={styles['field']}>
                <label className={styles['label']}>Gender</label>
                <input
                    {...register('gender')}
                    type="text"
                    className={styles['input']}
                />
            </div>
            <div className={styles['field']}>
                <label className={styles['label']}>Email</label>
                <input
                    {...register('email', { required: true })}
                    type="text"
                    className={styles['input']}
                />
            </div>
            <div className={styles['field']}>
                <label className={styles['label']}>Phone</label>
                <input
                    {...register('phone', { required: true })}
                    type="text"
                    className={styles['input']}
                />
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
