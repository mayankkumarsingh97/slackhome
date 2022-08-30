import EastIcon from '@mui/icons-material/East';
import { useEffect, useRef } from "react";
import ArrowButton from '../../styledComponents/ArrowButton'
const Team4 = (props) => {
    const vidRef = useRef()
    useEffect(() => { vidRef.current.play(); }, []);
    return (<>
        <div className="container-fluid px-0  py-4">

            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 mx-0 col-md-8">
                    <div className='position-relative'>
                        <video autoPlay loop ref={vidRef} muted className='team4'>
                            <source src={props.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="col-lg-6 mx-0">
                    <div className="content">
                        <i>"{props.desc}"</i>
                         <div className='d-flex flex-column'>
                         <b>Mark Smith</b> 
                        <b>Senior Technical Product Manager, T-Mobile</b>
                         </div>
                        <div className="">
                            <ArrowButton teams>{props.btn_desc}
                                <span className='arrowHide mx-2'><EastIcon />
                                </span></ArrowButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default Team4