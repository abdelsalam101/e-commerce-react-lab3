import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (/\s/.test(formData.username))
      newErrors.username = "Username must not contain spaces";
    if (!formData.password || !passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be 8+ characters with uppercase, lowercase, number, and special character";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(formData, null, 2));
      navigate("/");
    } else {
      const errorMessages = Object.values(validationErrors).join("\n");
      alert("Please fix the following errors:\n" + errorMessages);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
}
