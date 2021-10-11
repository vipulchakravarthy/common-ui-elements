import './App.css';
import ReactBootstrapButton from './components/Buttons/ReactBootstrapButton';
import ReactBootstrapNavbar from './components/Navbar/ReactBootstrapNavbar';

function App() {
  return (
    <div className="">
      <ReactBootstrapNavbar />
      <h5 className="d-flex justify-content-center">Welcome to react common ui elements </h5>
      <div className="p-3">
        <h4>Buttons</h4>
        <ReactBootstrapButton />
      </div>
    </div>
  );
}

export default App;
