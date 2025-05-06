import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    Status: true
  });
  const [validationError, setValidationError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setValidationError('Şifreler eşleşmiyor.');
      return;
    }
    setValidationError('');
    dispatch(registerUser(form))
      .unwrap()
      .then(() => navigate('/login'))
      .catch(() => {});
  };

  return (
    <div className="register-page d-flex">
      <div className="left-panel">
        <img
          src="/assets/img/8416830d-c285-47e2-9a19-0246f13ffc72.png"
          alt="Fashion showcase"
          className="img-fluid full-image"
        />
      </div>
      <div className="right-panel d-flex justify-content-center align-items-center">
        <div className="form-container">
          <h2 className="text-center">Kayıt Ol</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Ad</label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                className="form-control"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Soyad</label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                className="form-control"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Telefon</label>
              <input
                name="phoneNumber"
                type="text"
                id="phoneNumber"
                className="form-control"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Şifre</label>
              <input
                name="password"
                type="password"
                id="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Şifre Tekrar</label>
              <input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                className="form-control"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {validationError && <div className="text-danger mb-3">{validationError}</div>}
            {error && <div className="text-danger mb-3">{error}</div>}
            <div className="mb-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled={loading}
              >
                {loading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
              </button>
            </div>
          </form>
          <div className="text-center">
            Zaten üye misin? <Link to="/login">Hemen giriş yap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
