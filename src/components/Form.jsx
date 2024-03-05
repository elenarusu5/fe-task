import '@fortawesome/fontawesome-free/css/all.css'

const Form = (props) => {
    const { formData, message, isValidEmail, handleChange, handleSubmit } = props

    const errorClassName = !!message.error && !formData?.name?.length ? 'error' : ''
    const errorClassEmail = !!message.error && (!formData?.email?.length || !isValidEmail) ? 'error' : ''

    return (
        <form className='form'>
            <p className="title">Welcome!</p>
            {!!message.error && <p className="error">{message.error}</p>}
            {!!message.success && <p className="success">{message.success}</p>}
            <div className='field'>
                <label htmlFor="name" className={`label required ${errorClassName}`}>User Name</label><br />
                <i className="fa-regular fa-user" />
                <input
                    className={`form-control ${errorClassName}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData?.name}
                    onChange={handleChange} />
            </div>
            <div className='field'>
                <label htmlFor="email" className={`label required ${errorClassEmail}`}>User Email</label><br />
                <i className="fa-regular fa-envelope" />
                <input
                    className={`form-control ${errorClassEmail}`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData?.email}
                    onChange={handleChange}
                />
            </div>
            <div className="field-submit">
                <button
                    type="button"
                    className="btn"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form