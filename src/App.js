import logo from './logo.svg';
import './App.css';
import UserInfo from './component/dashboard/user/user';
import Form from './component/dashboard/Form/form';
import Navbar from './component/Navbar';
import { AllPageRoute } from './Routers/allPageRoutes';

function App() {
  return (
    <div className="App">
    <Navbar />
    <AllPageRoute />
    </div>
  );
}

export default App;
