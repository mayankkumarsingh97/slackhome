import { useState, useEffect } from "react";
import "./mobile.Module.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const MobileHeader = () => {
  const [position, setPosition] = useState("static")
  const [slide, setSlide] = useState("static")
  const [empty, setEmpty]=useState("block")
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
                      
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            RESOURCES
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body px-0 py-1">
                            <li><a href="" className="py-2"> RESOURES</a></li>
                            <li><a href="" className="py-2">Partners</a></li>
                            <li><a href="" className="py-2">Developers</a></li>
                            <li><a href="" className="py-2">Community</a></li>
                            <li><a href="" className="py-2">Apps</a></li>
                            <li><a href="" className="py-2">Blog</a></li>
                            <li><a href="" className="py-2" >Help Center</a></li>
                            <li><a href="" className="py-2">Events</a></li>
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

      </div>

    </div>
  </>)
}

export default MobileHeader