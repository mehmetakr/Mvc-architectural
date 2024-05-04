import { NavLink } from "react-router-dom";
import Addpage from "../pages/Addpostpage/Addpage";


// Navlink clası etiket içerisine active classı verir .Aktif olan classs active olur. 
// Ancak Link de böyle bişey yoktur..


const Header = () => {
    
  return  <div className="header">
    <h1>Forum</h1>

    <div className="link">
    <NavLink className="gel" style={{color:"white", backgroundColor:"red"}} to={"/"}>Gönderiler</NavLink>
    <NavLink className="gel" to={"/add-post"}> Gönderi ekle </NavLink>
    </div>
    </div>;
};
export default Header;
