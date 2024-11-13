import About from "../Components/About/page";
import Product from '../Components/Product/page'
import Details from "../Components/Details/page"
import Sites from '../Components/Sites/page'
import Sections from '../Components/Sections/page' 
export default function Home() {
  return (
    <>
      <div>
        <About />
        <Sections/>
        <Product />
        <Details />
        <Sites />
      </div>
    </>
  );
}
