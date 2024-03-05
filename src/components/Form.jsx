const Form = (props) => {
    const { formData, errorMessage, isValidEmail, handleChange, handleSubmit } = props

    return (
        <form className='form'>
            <div className='field'>
                <label htmlFor="name" className={`label required ${!formData.name.length ? 'error' : ''}`}>User Name</label><br />
                <input
                    className={`form-control ${!formData.name.length ? 'error' : ''}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData?.name}
                    onChange={handleChange} />
            </div>
            <div className='field'>
                <label htmlFor="email" className={`label required ${(!formData.email.length || !isValidEmail) ? 'error' : ''}`}>User Email</label><br />
                <input
                    className={`form-control ${(!formData.email.length || !isValidEmail) ? 'error' : ''}`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData?.email}
                    onChange={handleChange}
                />
            </div>
            <div className="field-submit">
                {!!errorMessage && <p>{errorMessage}</p>}
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