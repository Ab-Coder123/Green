// pages/layout
import LayoutComponent from '../../Components/Layout';
import '../globals.css'

function MyApp({ Component, pageProps }) {
    return (
        
      
        <LayoutComponent >
          <Component {...pageProps} />
        </LayoutComponent>
    );
  }
  
  export default MyApp;