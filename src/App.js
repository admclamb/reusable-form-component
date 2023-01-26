import { useState } from 'react';
import Form from './Form/Form';
import Input from './Form/Input/Input';

function App() {
  const [signup, setSignup] = useState({
    email: '',
    username: '',
    phone_number: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitText, setSubmitText] = useState('Continue');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      setSubmitText('Loading...');
      if (signup.password !== confirmPassword) {
        throw new Error('Passwords are not matching');
      }
      // handle form submit logic
      // ...
    } catch (error) {
      setError(error);
    } finally {
      setSubmitText('Continue');
    }
  };
  const header = <h1 className="header">Testing Signup</h1>;
  const footer = (
    <p className="footer">
      Already have an account? <span>Sign up here</span>.
    </p>
  );
  const confirmPasswordInput = (
    <Input
      value={confirmPassword}
      handleChange={({ target: { value } }) => setConfirmPassword(value)}
      name={'Confirm Password'}
      type="password"
    />
  );
  return (
    <main className="main">
      <div>
        {error && <div className="error">{error.message}</div>}
        <Form
          object={signup}
          setObject={setSignup}
          handleSubmit={handleSubmit}
          header={header}
          footer={footer}
          submitText={submitText}
        >
          {confirmPasswordInput}
        </Form>
      </div>
    </main>
  );
}

export default App;
