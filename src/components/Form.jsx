const Form = (props) => {
    const { formData, handleChange, handleSubmit } = props

    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const disableSave = !formData?.name?.length
        || !formData?.email?.length

    return (
        <form className='form'>
            <div className='field'>
                <label htmlFor="name" className='label required'>Name</label><br />
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData?.name}
                    onChange={handleChange} />
            </div>
            <div className='field'>
                <label htmlFor="email" className='label required'>Email</label><br />
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData?.email}
                    onChange={handleChange}
                />
            </div>
            <div className="field-submit">
                <button
                    type="submit"
                    className="btn"
                    disabled={disableSave}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form