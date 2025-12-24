import { ErrorMessage, useField } from "formik"

export const MyInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? 
            (<ErrorMessage className='errorMsg' name={props.name} component="span"/> ) : null}
        </>
    )
}