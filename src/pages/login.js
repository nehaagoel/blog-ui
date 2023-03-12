import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import styles from '@/styles/Login.module.css'
import Link from 'next/link';

const Login = () => {  
    return (
        <>
        <h1 className={styles.header}>
            Blog App Login
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
          />
        </div>
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          >
          Login
        </Button>
      <p>
  Don't have an account?{' '}
  <Link href="/signup">
    Sign up
  </Link>
</p>
      </form>

    </>
    );
  };
  
  export default Login;
  