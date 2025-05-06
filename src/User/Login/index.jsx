import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector(state => state.auth);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(credentials))
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {});
  };

  // Eğer zaten giriş yapılmışsa ana sayfaya yönlendir
  if (token) {
    navigate('/');
    return null;
  }

  return (
    <div className="login-page d-flex">
      <div className="left-panel">
        <img
          src="/assets/img/8416830d-c285-47e2-9a19-0246f13ffc72.png"
          alt="Fashion showcase"
          className="img-fluid full-image"
        />
      </div>
      <div className="right-panel d-flex justify-content-center align-items-center">
        <div className="form-container">
          <h2 className="text-center">Giriş Yap</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                placeholder="name@example.com"
                value={credentials.email}
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
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            {(error) && <div className="text-danger mb-3">{error}</div>}
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled={loading}
              >
                {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </button>
            </div>
          </form>
          <div className="text-center">
            Üye değil misin? <Link to="/register"> Hemen üye ol </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
