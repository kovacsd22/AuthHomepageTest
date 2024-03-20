import 'tachyons'
import { Toaster } from 'react-hot-toast';
import AppRoutes from './roots/AppRoutes';
import './App.css';

function App()
{
  return (
    <div>
      <AppRoutes />
      <Toaster position='top-center' />
    </div>
  )
}

export default App;
