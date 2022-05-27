import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import styles from './styles/home.module.css';

axios.defaults.withCredentials = true;

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [paymentMethodName, setPaymentMethod] = useState('');
  const [state, setState] = useState({
    value: 'Register-Page',
  });

  const submitHandlerRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error('Passwords does not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        email,
        mobileno,
        password,
      });
      // ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const logout = () => {
    axios
      .get('http://localhost:8888/logout')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    window.location.reload();
  };
  return (
    <div className={styles}>
      <div className={styles.top}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>201b153</p>
      </div>
      <div className={styles.bottom}>
        <button onClick={logout} className={styles.logout}>
          Log out
        </button>
        <Form.Check
          className="mb-3"
          type="checkbox"
          id="isAdmin"
          label="isAdmin"
          // checked={isAdmin}
          // onChange={(e) => setIsAdmin(e.target.checked)}
        />
        <div className="mb-3">
          Already have an account{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
        <div className={styles.card} />
        <div className={styles.words}> {state.value}</div>
      </div>
    </div>
  );
}
