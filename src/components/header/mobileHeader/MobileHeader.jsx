import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InlineButton from "../../styledComponents/InlineButtons"
import InlineButton2 from "../../styledComponents/InlineButton2"
import "./mobile.Module.css"

const MobileHeader = () => {
  const [position, setPosition] = useState("static")
  const [slide, setSlide] = useState("static")
  const [empty, setEmpty] = useState("block")
  const fixNavbar = () => {
    let winHeight = window.scrollY;
    winHeight > 600 ? setPosition("toFixMobilebar") : setPosition("static")
  }
  const sideBarOpen = () => {
    setSlide("active")
    setEmpty("d-none")
  }
  const removeSidebar = () => {
    setSlide("deactive")
    setEmpty("d-block")

  }
  useEffect(() => window.addEventListener('scroll', fixNavbar), [])
  return (<>
    <div className={`d-lg-none d-block bgmobile  ${position} ${empty}`} >
      <div className="d-flex justify-content-between py-3 px-2">
        <div className="d-flex">
          <h3><a href="#slack" style={{ fontWeight: "800" }}>Slack</a></h3>
        </div>
        <div className="w-25 d-flex justify-content-around">
          <SearchIcon />
          <MenuIcon onClick={sideBarOpen} />
        </div>
      </div>
    </div>
    <div className="container d-lg-none d-block">
      <div className="row">
        <div className="sidebar">
          <div className={`mobile-navbar ${slide}`}>
            <div className="wrapper">

              <div className="d-flex justify-content-between pt-2 px-2 flex-column">
                <div className="d-flex justify-content-between">
                  <h3><a href="#slack" style={{ fontWeight: "800" }}>Slack</a></h3>
                  <div className="w-25 d-flex justify-content-around ">
                    <SearchIcon />
                    <CloseIcon onClick={removeSidebar} />
                  </div>
                </div>

                <div className="container d-lg-none d-block " id="stopScroll">
                  <div className="row">
                    <div className="accordion" id="accordionExample">

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            PRODUCT
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body px-0 py-1">
                            <li><a href="" className="py-2">PRODUCT</a></li>
                            <li><a href="" className="py-2"> Features</a></li>
                            <li><a href="" className="py-2">Integrations</a></li>
                            <li><a href="" className="py-2">Enterprise</a></li>
                            <li><a href="" className="py-2">Solutions</a></li>
                          </div>
                        </div>
                      </div>

                     
                       <li><b><a href="#">Solutions</a></b></li>
                       <li><b><a href="#">Enterprice</a></b></li>
                       <li><b><a href="#">Resources</a></b></li>
                       <li><b><a href="#">Pricing</a></b></li>
                       <li><b><a href="#">Sign in</a></b></li>
                      
                    </div>
                    <div className="col-12">
                    <div className="d-flex flex-column">
                     <InlineButton2 download>DOWNLOAD SLACK</InlineButton2>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </>)
}

export default MobileHeader