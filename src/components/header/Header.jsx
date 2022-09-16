import { useState, useEffect,useContext } from "react";
import "./header.Module.css"
import InlineButton from '../styledComponents/InlineButtons'
import InlineButton2 from '../styledComponents/InlineButton2'
import SearchIcon from '@mui/icons-material/Search'
import MobileHeader from "./mobileHeader/MobileHeader"
import { MyContext } from "../../index";
const Header = () => {
    const data=useContext(MyContext)
    const [position, setPosition] = useState("static")
    const fixNavbar = () => {
        let winHeight = window.scrollY;
        winHeight > 600 ? setPosition("toDesktopbar") : setPosition("static")
    }
    useEffect(() => window.addEventListener('scroll', fixNavbar), [])
    return (<>
        <MobileHeader />
        <div className={`container-fluid navbg d-none  d-lg-block  pt-md-2`}>
            <div className={`container mx-auto navbg d-none  d-lg-block  pt-md-2 ${position}`}>
                <div className="row justify-content-center  align-items-center">
                    <div className="col-6">
                        <nav className="menu align-items-center">
                            <li><a href="#" style={{ fontSize: "1.8rem", fontWeight: "700" }}>slack</a></li>
                            <li><select className="navbg_option" name="" id="">
                                <option value="features">Products</option>
                                <option value="features">features</option>
                                <option value="features">features</option>
                                <option value="features">features</option>
                                <option value="features">features</option>
                                {/* <option value={data.name}>{data.name}</option> */}
                            </select></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Resources</a></li>
                            {/* <li><a href="#">Pricing</a></li> */}
                            {/* <li><a href="#">{data.name}</a></li> */}
                        </nav>
                    </div>
                    <div className="col-6">
                        <div className="row justify-content-end align-items-center">
                            <div className="col-3">
                                <div className="d-flex justify-content-around header_se_sign">
                                    <li><a href="#"><SearchIcon /></a></li>
                                    <li><a href="#">Sign in</a></li>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="d-flex justify-content-end">
                                    <InlineButton2 header_white>TALK TO SALES</InlineButton2>
                                    <InlineButton header_purple>TRY FOR FREE</InlineButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Header