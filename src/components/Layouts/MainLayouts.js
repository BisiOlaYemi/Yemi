import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    return (
      <div className="flex-col flex">
        <Navbar />
       <div className="flex-1"> {children}</div>
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;
  