import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RestaurantRoute from './routes/restaurant.route';
import Navbar from './component/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RestaurantRoute />
    </BrowserRouter>
  );
}

export default App;
