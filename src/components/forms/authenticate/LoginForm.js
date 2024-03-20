import React from 'react'


function LoginForm(props)
{

    return (
        <form onSubmit={props.handleSubmit} className="pa0 measure center">
            <fieldset className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Felhasználók</legend>

                <div className="mt3">
                    <label className="fw6 lh-copy f6" >Felhsználónév</label>
                    <input
                        className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="username"
                        defaultValue={""}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6">Jelszó</label>
                    <input
                        className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        defaultValue={""}
                        onChange={props.handleChange}
                    />
                </div>

            </fieldset>
            <div className="mt3">
                <a href="*"
                    className="b pv2 input-reset b--black bg-transparent grow pointer f6 dib"
                    onClick={props.handleCountState}
                >
                    Regisztrálok
                </a>
            </div>

            <div className="mt3">
                <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Belépés"
                />
            </div>
        </form>
    )
}

export default LoginForm