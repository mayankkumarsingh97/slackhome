import Hero_vdo from '../../assets/hero-product-ui.webm'
import seek from '../../assets/hero/logo-seek.png'
import xero from '../../assets/hero/logo-xero.png'
import rea from '../../assets/hero/rea.png'
import rmit from '../../assets/hero/rmit.png'
import ibm from '../../assets/hero/ibm.png'
import deliveroo from '../../assets/hero/deliveroo.png'
import GoogleIcon from '@mui/icons-material/Google';
import InlineButton from '../styledComponents/InlineButtons'
import InlineButton2 from '../styledComponents/InlineButton2'
import "./hero.Module.css"
import { useEffect, useRef,useContext } from "react";
import { MyContext } from '../../index'
const Hero = () => {
    const data=useContext(MyContext)
    const vidRef = useRef()
    useEffect(() => { vidRef.current.play(); }, []);
    return (<>
        <div className="container-fluid navbg pt-md-2">
            <div className="row justify-content-md-end align-items-center">
                <div className="col-lg-5">
                    <div className="content_wrapper">
                        <div className="heading mb-md-3">
                            <h1 className='text-md-start text-center bigHeading'>Great teamwork starts <br />
                                with a digital HQ {data.name} {data.age}</h1>
                        </div>
                        <p><span style={{ color: "#ECB22E" }}>Slack is free to try</span> for as long as you like</p>
                        <div className="d-flex justify-content-between flex-lg-row flex-column">
                            <InlineButton hero_email>sign up with email address</InlineButton>
                            <InlineButton2 hero_google>sign up with google</InlineButton2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 py-md-5">
                    <div className="d-flex vdo_wrapper mt-md-0 mt-3">
                        <video autoPlay loop ref={vidRef} muted>
                            <source src={Hero_vdo} type="video/mp4" />
                        </video>

                    </div>
                </div>
            </div>
        </div>
        {/* TRUSTED BY COMPANIES ALL OVER THE WORLD */}
        {/* TRUSTED BY COMPANIES ALL OVER THE WORLD */}
        <div className="container-fluid " style={{ background: "#F4EDE4" }}>
            <div className="container px-0">
                <div className="row justify-content-center" >
                    <div className="col-12 mt-md-5">
                        <p className='text-center trusted_by'>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
                    </div>
                    <div className="col-12">
                        <div className="row  our_partners justify-content-center align-items-center">
                            <div className="col-auto my-2"><img src={seek} alt="seek img" /></div>
                            <div className="col-auto my-2"><img src={xero} alt="xero img" /></div>
                            <div className="col-auto my-2"><img src={rea} alt="rea img" /></div>
                            <div className="col-auto my-3"><img src={rmit} alt="rmit img" /></div>
                            <div className="col-auto my-3"><img src={ibm} alt="ibm img" /></div>
                            <div className="col-auto my-2"><img src={deliveroo} alt="deliveroo img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Hero