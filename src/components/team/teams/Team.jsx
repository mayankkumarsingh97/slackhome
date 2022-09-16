import EastIcon from '@mui/icons-material/East';
import { useEffect, useRef, useContext } from "react";
import ArrowButton from '../../styledComponents/ArrowButton'
import { MyContext } from '../../..';
const Team = (props) => {
    const data = useContext(MyContext)
    const vidRef = useRef()
    useEffect(() => { vidRef.current.play(); }, []);
    return (<>
        <div className="container-fluid px-0  py-4">
            <div className="container pt-md-5 px-0">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-8">
                        <video autoPlay loop ref={vidRef} muted>
                            <source src={props.video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-lg-5">
                        <div className="content">
                            <h1>{props.heading}</h1>
                            <p>{props.desc} {data.hobbies[2]}</p>
                            <div className="">
                                <ArrowButton teams>{props.btn_desc}
                                    <span className='arrowHide mx-2'><EastIcon />
                                    </span></ArrowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Team