import 'react-toastify/dist/ReactToastify.css';
import StepForm from './component/stepForm';
import auth from './auth';
import SignupScreen from './component/SignupScreen';

function App() {
  if (auth.isAuthenticated()) return <SignupScreen />;
  else return (
    <StepForm />
  ) 
}

export default App;
