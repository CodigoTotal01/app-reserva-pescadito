export const RegisterPage = () => {
    return (
        <main className="main" id="top">
            <div className="container-fluid">
                <div className="row min-vh-100 flex-center g-0">
                    <div className="col-lg-8 col-xxl-5 py-3 position-relative">
                        <img
                            className="bg-auth-circle-shape"
                            src="../../../assets/img/icons/spot-illustrations/bg-shape.png"
                            alt=""
                            width="250"
                        />
                        <img
                            className="bg-auth-circle-shape-2"
                            src="../../../assets/img/icons/spot-illustrations/shape-1.png"
                            alt=""
                            width="150"
                        />
                        <div className="card overflow-hidden z-index-1">
                            <div className="card-body p-0">
                                <div className="row g-0 h-100">
                                    <div className="col-md-5 text-center bg-card-gradient">
                                        <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                                            <div
                                                className="bg-holder bg-auth-card-shape"
                                                style={{
                                                    backgroundImage:
                                                        'url(../../../assets/img/icons/spot-illustrations/half-circle.png)',
                                                }}
                                            ></div>
                                            {/* .bg-holder */}
                                            <div className="z-index-1 position-relative">
                                                <a
                                                    className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder"
                                                    href="../../../index.html"
                                                >
                                                    falcon
                                                </a>
                                                <p className="opacity-75 text-white">
                                                    With the power of Falcon, you can now focus only on
                                                    functionaries for your digital products, while leaving
                                                    the UI design on us!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                                            <p className="pt-3 text-white">
                                                Have an account?<br/>
                                                <a
                                                    className="btn btn-outline-light mt-2 px-4"
                                                    href="../../../pages/authentication/card/login.html"
                                                >
                                                    Log In
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex flex-center">
                                        <div className="p-4 p-md-5 flex-grow-1">
                                            <h3>Register</h3>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="card-name">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        autoComplete="on"
                                                        id="card-name"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="card-email">
                                                        Email address
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        autoComplete="on"
                                                        id="card-email"
                                                    />
                                                </div>
                                                <div className="row gx-2">
                                                    <div className="mb-3 col-sm-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="card-password"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            autoComplete="on"
                                                            id="card-password"
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-sm-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="card-confirm-password"
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            autoComplete="on"
                                                            id="card-confirm-password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="card-register-checkbox"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="card-register-checkbox"
                                                    >
                                                        I accept the{' '}
                                                        <a href="#!">terms </a>and{' '}
                                                        <a href="#!">privacy policy</a>
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <button
                                                        className="btn btn-primary d-block w-100 mt-3"
                                                        type="submit"
                                                        name="submit"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="position-relative mt-4">
                                                <hr className="bg-300"/>
                                                <div className="divider-content-center">
                                                    or register with
                                                </div>
                                            </div>
                                            <div className="row g-2 mt-2">
                                                <div className="col-sm-6">
                                                    <a
                                                        className="btn btn-outline-google-plus btn-sm d-block w-100"
                                                        href="#"
                                                    >
                            <span
                                className="fab fa-google-plus-g me-2"
                                data-fa-transform="grow-8"
                            ></span>{' '}
                                                        google
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a
                                                        className="btn btn-outline-facebook btn-sm d-block w-100"
                                                        href="#"
                                                    >
                            <span
                                className="fab fa-facebook-square me-2"
                                data-fa-transform="grow-8"
                            ></span>{' '}
                                                        facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
