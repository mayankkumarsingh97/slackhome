import Collection from "./Collection"
import img1 from '../../assets/collection/img-promo-01.png'
import img2 from '../../assets/collection/img-promo-02.jpg'
import img3 from '../../assets/collection/img-promo-03.jpg'
import img4 from '../../assets/collection/img-promo-04.jpg'

const Collection_cont = () => {
    const collec1 = {
        img: img1,
        type: "Resource",
        title: "See How other are making digital HQ",
        btn_info:"SEE ALL"
    }
    const collec2 = {
        img: img2,
        type: "Webinar",
        title: "Embracing a digital first apporoch to work",
        btn_info:"READ MORE"
    }
    const collec3 = {
        img: img3,
        type: "Resource",
        title: "See How other are making digital HQ",
        btn_info:"WATCH NOW"
    }
    const collec4 = {
        img: img4,
        type: "E-book",
        title: "Reinventing imperatives for the future.",
        btn_info:"GET A E-BOOK"
    }
    return (<>
        <div className="container-fluid mt-md-4 py-md-5" style={{background:"#F4EDE4"}}>
           <div className="container">
           <div className="d-flex makeR">
                <Collection coll={collec1} />
                <Collection coll={collec2} />
                <Collection coll={collec3} />
                <Collection coll={collec4} />
            </div>
           </div>
        </div>
    </>)
}
export default Collection_cont