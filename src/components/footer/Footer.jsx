import InlineButton from "../styledComponents/InlineButtons"
import InlineButton2 from "../styledComponents/InlineButton2"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LanguageIcon from '@mui/icons-material/Language';
import "./footer.Module.css"
const Footer = () => {

    return (<>
        <div className="container-fluid curve center">
            <div className="container py-5 my-5">
                <div className="row py-md-5 justify-content-center">
                    <div className="col-12">
                        <h1 className="text-center">Welcome to your new digital HQ.</h1>

                    </div>
                    <div className="d-flex col-md-5 px-0 py-5 justify-content-center flex-md-row flex-column ">
                        <div className="col-md-auto mx-md-1">
                            <InlineButton tryforfree>TRY FOR FREE</InlineButton>

                        </div>
                        <div className="col-md-auto mx-md-1">
                            <InlineButton2 talktosales_footer>TALK TO SALES</InlineButton2>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* fOOter navigation area */}
        {/* fOOter navigation area */}
        <div className="container d-none d-sm-block">
            <div className="row justify-content-center footer">
                <div className="col-auto">
                    <ul>
                        <li><a href="#">WHY SLACK?</a></li>
                        <li><a href="#">Slack vs email</a></li>
                        <li><a href="#">Channels</a></li>
                        <li><a href="#">Engagement</a></li>
                        <li><a href="#">Scale</a></li>
                        <li><a href="#">Watch the demo</a></li>
                    </ul>
                </div>
                <div className="col-auto">
                    <ul> <li><a href="#">PRODUCT</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Solutions</a></li>
                    </ul>
                </div>
                <div className="col-auto">

                    <ul> <li><a href="#">PRICES</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Paid vs free</a></li>
                    </ul>
                </div>
                <div className="col-auto">
                    <ul> <li><a href="#">RESOURES</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Apps</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
                <div className="col-auto">
                    <ul> <li><a href="#">COMPANY</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Leadership</a></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Media kit</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Mobile View footer */}
        <div className="container d-block d-sm-none">
            <div className="row">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                WHY SLACK ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-0 py-1">
                                <li><a href="#" className="py-2">Slack vs email</a></li>
                                <li><a href="#" className="py-2">Channels</a></li>
                                <li><a href="#" className="py-2">Engagement</a></li>
                                <li><a href="#" className="py-2">Scale</a></li>
                                <li><a href="#" className="py-2">Watch the demo</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                PRODUCT
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-0 py-1">
                                <li><a href="#" className="py-2">PRODUCT</a></li>
                                <li><a href="#" className="py-2"> Features</a></li>
                                <li><a href="#" className="py-2">Integrations</a></li>
                                <li><a href="#" className="py-2">Enterprise</a></li>
                                <li><a href="#" className="py-2">Solutions</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                PRICING
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-0 py-1">
                                <li><a href="#" className="py-2">PRICES</a></li>
                                <li><a href="#" className="py-2">Subscriptions</a></li>
                                <li><a href="#" className="py-2">Paid vs free</a></li>
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
                                <li><a href="#" className="py-2"> RESOURES</a></li>
                                <li><a href="#" className="py-2">Partners</a></li>
                                <li><a href="#" className="py-2">Developers</a></li>
                                <li><a href="#" className="py-2">Community</a></li>
                                <li><a href="#" className="py-2">Apps</a></li>
                                <li><a href="#" className="py-2">Blog</a></li>
                                <li><a href="#" className="py-2" >Help Center</a></li>
                                <li><a href="#" className="py-2">Events</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                COMPANY
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-0 py-1">
                                <li><a href="#" className="py-2">About us</a></li>
                                <li><a href="#" className="py-2">Leadership</a></li>
                                <li><a href="#" className="py-2">Investor relations</a></li>
                                <li><a href="#" className="py-2">News</a></li>
                                <li><a href="#" className="py-2">Media kit</a></li>
                                <li><a href="#" className="py-2">Careers</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Status and privacy section  */}
        {/* Status and privacy section  */}
        <div className="container mb-md-1 bottom_footer_area">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-7">
                    <div className="d-md-flex wrapper justify-content-between align-items-center">
                        <div className="col-md-auto col-12 my-md-0 my-4"><b><a href="#">Status</a></b></div>
                        <div className="col-md-auto col-12 my-md-0 my-4"><b><a href="#">Privacy</a></b></div>
                        <div className="col-md-auto col-12 my-md-0 my-4"><b><a href="#">Terms</a></b></div>
                        <div className="col-md-auto col-12 my-md-0 my-4"><b><a href="#">Cookie preferences</a></b></div>
                        <div className="col-md-auto col-12 my-md-0 my-4"><b><a href="#">Contact us</a></b></div>
                        <div className="d-md-flex my-4">
                            <LanguageIcon />
                            <select name="#" id="">
                                <option value="Change region">Change region</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-md-around justify-content-between  dloadslack align-items-center">
                        <a href="#"><span><CloudDownloadIcon /></span> Download slack</a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><YouTubeIcon /></a>
                        <a href="#"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row ">
                <div className="col-md-8">
                    <p className="mb-md-4 my-3" style={{ fontSize: ".8rem" }}>©2022 Slack Technologies, LLC, a Salesforce company.
                        All rights reserved. Various trademarks held by their respective owners.</p>
                </div>
            </div>
        </div>
    </>)
}
export default Footer