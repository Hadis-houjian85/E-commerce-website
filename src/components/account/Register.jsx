
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    // ========================= States =========================

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);

    // ========================= Register =========================

    const handleRegister = async (e) => {

        e.preventDefault();

        setErrorText("");

        // ------------------------- Required fields -------------------------

        if (!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
            setErrorText("لطفاً تمام فیلدها را پر کنید.");
            return;
        }

        // ------------------------- Phone validation -------------------------

        if (!/^09\d{9}$/.test(phone)) {
            setErrorText("شماره تلفن باید 11 رقم باشد و با 09 شروع شود.");
            return;
        }

        // ------------------------- Email validation -------------------------

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorText("لطفاً یک ایمیل معتبر وارد کنید.");
            return;
        }

        // ------------------------- Password validation -------------------------

        if (password.length < 8) {
            setErrorText(
                "رمز عبور باید حداقل 8 کاراکتر باشد."
            );
            return;
        }

        // ------------------------- Confirm password -------------------------

        if (password !== confirmPassword) {
            setErrorText(
                "رمز عبور و تکرار رمز عبور یکسان نیستند."
            );
            return;
        }

        // ------------------------- Loading -------------------------

        setLoading(true);

        try {

            // ------------------------- Backend request -------------------------

            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            // ------------------------- Backend error -------------------------

            if (!response.ok) {
                setErrorText(
                    data.message ||
                    "ثبت نام انجام نشد."
                );
                return;
            }

            // ------------------------- Register successful -------------------------
            console.log(
                "Register successful:",
                data
            );

            // اگر بک‌اند بعد از ثبت‌نام token بدهد
            if (data.token) {
                localStorage.setItem(
                    "token",
                    data.token
                );

                if (data.user) {

                    localStorage.setItem(
                        "user",
                        JSON.stringify(data.user)
                    );
                }
                navigate("/");
                return;
            }

            // اگر بعد از register نیاز به login داشته باشیم
            navigate("/login");

        } catch (error) {

            console.error(
                "Register error:",
                error
            );

            setErrorText(
                "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید."
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="container register">

            <form className="register-main" onSubmit={handleRegister} >

                <h2> Create Account </h2>

                <div className="register-field">

                    <label htmlFor="firstName"> First name </label>

                    <input className="input-register" id="firstName" type="text" placeholder="Enter your first name"
                        value={firstName} onChange={(e) => {
                            setFirstName(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />

                </div>

                <div className="register-field">
                    <label htmlFor="lastName"> Last name </label>

                    <input className="input-register" id="lastName" type="text" placeholder="Enter your last name" value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />

                </div>

                <div className="register-field">

                    <label htmlFor="phone"> Phone number </label>
                    <input className="input-register" id="phone" type="tel" placeholder="09123456789" value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />

                </div>

                <div className="register-field">

                    <label htmlFor="email"> Email</label>

                    <input className="input-register" id="email" type="email" placeholder="example@gmail.com" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />

                </div>

                <div className="register-field">

                    <label htmlFor="password"> Password </label>

                    <input className="input-register" id="password" type="password" placeholder="Enter your password" value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />
                </div>

                <div className="register-field">

                    <label htmlFor="confirmPassword"> Confirm password </label>

                    <input className="input-register" id="confirmPassword" type="password" placeholder="Repeat your password" value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrorText("");
                        }}
                        disabled={loading}
                    />
                </div>

                {errorText && (
                    <p className="error-register">
                        {errorText}
                    </p>
                )}

                <button
                    className="btn-register" type="submit" disabled={loading}>
                    {loading ? "Creating account..." : "Create Account"}
                </button>

                <p className="text-register"> Already have an account? <Link to="/login"> Login</Link> </p>

            </form>
        </div>
    );
}