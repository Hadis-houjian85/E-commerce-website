
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    // =========================
    // States
    // =========================

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);

    // =========================
    // Login
    // =========================

    const handleLogin = async () => {

        // پاک کردن خطای قبلی
        setErrorText("");

        // -------------------------
        // Phone validation
        // -------------------------

        if (!phone) {
            setErrorText("لطفاً شماره تلفن را وارد کنید.");
            return;
        }

        if (!/^09\d{9}$/.test(phone)) {
            setErrorText(
                "شماره تلفن باید 11 رقم باشد و با 09 شروع شود."
            );
            return;
        }

        // -------------------------
        // Password validation
        // -------------------------

        if (!password) {
            setErrorText("لطفاً رمز عبور را وارد کنید.");
            return;
        }

        // -------------------------
        // Loading
        // -------------------------

        setLoading(true);

        try {

            // -------------------------
            // Send request to backend
            // -------------------------

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        phone: phone,
                        password: password,
                    }),
                }
            );

            // -------------------------
            // Convert response to JSON
            // -------------------------

            const data = await response.json();

            // -------------------------
            // Backend error
            // -------------------------

            if (!response.ok) {

                setErrorText(
                    data.message ||
                    "شماره تلفن یا رمز عبور اشتباه است."
                );

                return;
            }

            // -------------------------
            // Login successful
            // -------------------------

            console.log("Login successful:", data);

            // -------------------------
            // Save token
            // -------------------------

            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            // -------------------------
            // Save user
            // -------------------------

            if (data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );
            }

            // -------------------------
            // Go to dashboard
            // -------------------------

            navigate("/");

        } catch (error) {

            console.error("Login error:", error);

            setErrorText(
                "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید."
            );

        } finally {

            setLoading(false);

        }
    };


    // =========================
    // JSX
    // =========================

    return (

        <div className="container login">

            <div className="login-main">

                <h2 style={{ marginBottom: "30px" }}>
                    Login
                </h2>


                {/* Phone */}

                <input
                    className="input-login"
                    placeholder="number"
                    id="in1"
                    type="tel"
                    value={phone}
                    onChange={(e) => {

                        setPhone(e.target.value);

                        // پاک کردن error هنگام تایپ
                        if (errorText) {
                            setErrorText("");
                        }

                    }}
                    disabled={loading}
                />


                {/* Password */}

                <input
                    className="input-login"
                    placeholder="password"
                    id="in2"
                    type="password"
                    value={password}
                    onChange={(e) => {

                        setPassword(e.target.value);

                        if (errorText) {
                            setErrorText("");
                        }

                    }}
                    disabled={loading}
                />


                {/* Register */}

                <p className="text-login">

                    you haven't an account?

                    <Link to="/register">
                        create account
                    </Link>

                </p>


                {/* Forgot password */}

                <Link to="/forgot-password">
                    forgot password?
                </Link>


                {/* Error */}

                {errorText && (
                    <p id="error">
                        {errorText}
                    </p>
                )}


                {/* Login button */}

                <button
                    className="btn-login"
                    onClick={handleLogin}
                    disabled={loading}
                >

                    {loading
                        ? "Logging in..."
                        : "Login"
                    }

                </button>

            </div>

        </div>

    );
}

