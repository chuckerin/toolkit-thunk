import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(setUser({ email, password }));
    navigate('/toolkit-thunk/');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
            autoComplete='email'
            value={email}
            placeholder='joe@mamma.com'
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            autoComplete='password'
            value={password}
            placeholder='*******'
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
