import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import styles from '@/styles/Login.module.css'
import Link from 'next/link';

  const Signup = () => {
    const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address.');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
  };

    return (
        <>
        <h1 className={styles.header}>
            Signup to Our Blog App
        </h1>
      <form className={styles.form}>
      <div className={styles.name}>
        <AccountCircleIcon color="primary" fontSize="large" />
        <TextField
        className={styles.textField}
        id="username"
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        />
        </div>
        <div className={styles.name}>
        <EmailIcon color="primary" fontSize="large" />
        <TextField
            className={styles.textField}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            />
            </div>
            <div className={styles.name}>
        <LockIcon color="primary" fontSize="large" />
        <TextField
          className={styles.textField}
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={Boolean(errorMessage)}
          helperText={errorMessage}
          />
          </div>
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSubmit}
          >
          Sign Up
        </Button>
        <p>
  Already registered?{' '}
  <Link href="/login">
    Back to login
  </Link>
</p>
      </form>
    </>
    );
  };
  
  export default Signup;
