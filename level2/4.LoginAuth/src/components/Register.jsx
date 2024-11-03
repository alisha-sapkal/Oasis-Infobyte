import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some(user => user.username === username);

        if (userExists) {
            alert("User already exists!");
        } else {
            existingUsers.push({ username, password });
            localStorage.setItem("users", JSON.stringify(existingUsers));
            alert("Registration successful!");
            navigate("/login");
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
