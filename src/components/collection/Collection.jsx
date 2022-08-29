import ArrowButton from '../styledComponents/ArrowButton'
import EastIcon from '@mui/icons-material/East';
import "../collection/collection.Module.css"
const Collection = (props) => {
    const { img, type, title, btn_info } = props.coll
    return (<>

        <div className="col-md-3 x_scroll">
            <div className="">
                <div className="card_wrapper">
                    <div className="collec_img_wrapper">
                        <img src={img} alt="collection img" />
                    </div>
                    <div className="resource mt-2">
                        {type}
                    </div>
                    <div className="title pb-md-5">
                        <h5><a href="#">{title}</a></h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span id="collection_btn">
                            <ArrowButton collection>{btn_info}</ArrowButton></span>
                            <span style={{color:"blue"}}><EastIcon /></span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Collection