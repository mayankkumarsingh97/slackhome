import Team from "../team/teams/Team"
import Team2 from "../team/teams/Team2"
import Team3 from "../team/teams/Team3"
import vdo1 from '../../assets/bringTeamTogether.webm'
import vdo2 from '../../assets/chooseHowuworkto.webm'
import vdo3 from '../../assets/moveFaseter.webm'
import "../team/teams/team.Module.css"

const Teamcontainer = () => {
    const heading0 = "Bring your team together"
    const heading1 = "Choose how you  want to work"
    const btn_desc = "Learn more about channels"
    const desc0 = "At the heart of Slack are channels: organised spaces for everyone and everything that you need for work.In channels,it’s easier to connect across departments, offices, time zones and even other companies."
    const desc1 = "In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live."
    const btn_desc1 = "Learn more about flexible communication"
    const heading2 = "Move faster with your tools in one place"
    const desc2 = "With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
    const btn_desc2 = "Learn more about slack plateform"

    return (<>
        <div className="container-fluid team-bg">
            <Team video={vdo1} heading={heading0} desc={desc0} btn_desc={btn_desc} />
            <Team2 video={vdo2} heading={heading1} desc={desc1} btn_desc1={btn_desc1} />
            <Team3 video={vdo3} heading={heading2} desc={desc2} btn_desc2={btn_desc2} />
        </div>
    </>)
}

export default Teamcontainer