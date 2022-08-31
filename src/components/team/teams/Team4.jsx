import EastIcon from '@mui/icons-material/East';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useEffect, useRef } from "react";
import ArrowButton from '../../styledComponents/ArrowButton'
const Team4 = (props) => {
    const vidRef = useRef()
    useEffect(() => { vidRef.current.play(); }, []);
    return (<>
        <div className="container-fluid px-0  py-4">

            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 mx-0 col-md-8 ho">
                    <div className='position-relative'>
                        <video autoPlay loop ref={vidRef} muted className='team4'>
                            <source src={props.video} type="video/mp4" />
                        </video>
                        <div className='videoIcon'>
                            <SmartDisplayIcon />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mx-0">
                    <div className="content">
                        <i>"{props.desc}"</i>
                        <div className='d-flex flex-column'>
                            <b>Mark Smith</b>
                            <div>Senior Technical Product Manager, T-Mobile</div>
                        </div>
                        <div className="">
                            <ArrowButton teams>{props.btn_desc}
                                <span className='arrowHide mx-2'><EastIcon />
                                </span></ArrowButton>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col">
                    <div className='disclamer'>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</div>
                </div>
            </div>

        </div>
    </>)
}
export default Team4