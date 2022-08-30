import "./sales.Module.css"
import InlineButtons from "../styledComponents/InlineButtons";
import InlineButton2 from "../styledComponents/InlineButton2";
import Team4 from "../team/teams/Team4"
import vdo4 from "../../assets/weareablto.mp4"
const Sale = () => {
    const heading3 = "Move faster with your tools in one place"
    const desc3 = "We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption."
    const btn_desc3 = "Learn more about slack plateform"
    
    return (<>
        <div className="container mt-md-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="content">
                        <h1 className="text-center">Teams large and small rely on Slack</h1>
                        <p className="text-center">Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center mb-md-5">
                <div className="col-md-auto col-12"><InlineButtons sales_purple>MEET SLACK FOR ENTERPRISE</InlineButtons></div>
                <div className="col-md-auto col-12" ><InlineButton2 sales_white>TALK TO SALES</InlineButton2></div>
            </div>
            <div className="row justify-content-around">
                <div className="col-md-auto">
                    <div className="wrapper_sales">
                        <span>85%</span>
                        <p>of users say Slack has <br/> improved <br /> communication*</p>
                    </div>
                </div>
                <div className="col-md-auto">
                    <div className="wrapper_sales">
                        <span>86%</span>
                        <p>feel their ability to work <br /> remotely has improved*</p>
                    </div>
                </div>
                <div className="col-md-auto">
                  <div className="wrapper_sales">
                  <span>88%</span>
                    <p>feel more connected to <br /> their teams*</p>
                  </div>
                </div>
            </div>
           <Team4 video={vdo4} heading={heading3} desc={desc3} btn_desc={btn_desc3}/>
        </div>
      
    </>)
}
export default Sale;