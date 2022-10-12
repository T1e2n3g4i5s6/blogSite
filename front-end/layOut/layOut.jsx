import { Header, Footer } from "../components";

const LayOut = ({ children }) => {
      return (
        <div>
            <Header />
            {children}
            <Footer/>
            {/* <Spinner/>
            <Footer/> */}
        </div>
      );
  }
export default LayOut;