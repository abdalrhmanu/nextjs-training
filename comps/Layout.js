import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            {/* Importing NavBar Component from comps/navbar.js */}
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;