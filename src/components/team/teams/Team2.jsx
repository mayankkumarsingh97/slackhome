import EastIcon from '@mui/icons-material/East';
import { useEffect, useRef } from "react";
import ArrowButton from '../../styledComponents/ArrowButton'
const Team = (props) => {
    const vidRef = useRef()
    useEffect(() => { vidRef.current.play(); }, []);
    return (<>
        <div className="container-fluid px-0 my-md-2 py-4">
            <div className="container mt-md-5 px-0">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 order-md-first order-last">
                        <div className="content">
                            <h1>{props.heading}</h1>
                            <p>{props.desc}</p>
                            <ArrowButton teams>{props.btn_desc1}
                                <span className='arrowHide mx-2'>
                                    <EastIcon /></span>
                            </ArrowButton>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <video autoPlay loop ref={vidRef} muted>
                            <source src={props.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Team