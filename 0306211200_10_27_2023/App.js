
import './App.css';
import 'C:/xampp/htdocs/reactjs-raw/src/bootstrap-5.3.2/css/bootstrap.min.css';
// import TrangThanhToan from './components/thanhtoan/thanhtoan';
// import TrangChu from './components/trang_chu';
// import GioHang from './components/giohang/giohang';
import { Routes,Route} from 'react-router-dom';
import TrangChu4 from './pages/trang_chu_4';

import store from './store'
import { Provider } from 'react-redux'
function App() {
  return(
    // <>
    // <Routes>
    // <Route path="/" element={<TrangChu/>}/>
    // <Route path="/giohang/" element={<GioHang/>}/>
    // </Routes>
    // </>

    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<TrangChu4/>}/>
      </Routes>
    </Provider>
    </>
    );
}

export default App;
