import './App.css';
import { Footer } from './components/footer/Footer';
import { Layout } from './components/Layout';

const App:React.FC= () => {

  
  return (
    <div className="App">
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
