// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/Nav';
import {Provider} from '../context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from '../components/FirebaseAuthState';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


export default function MyApp({ Component, pageProps }) {
    return(
    <Provider>
        <FirebaseAuthState>
        <Nav />
        <ToastContainer/>
        <Component {...pageProps} />
        </FirebaseAuthState>
    </Provider>
    )
}