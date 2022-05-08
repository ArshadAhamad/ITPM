import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feeds/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}coverimg1.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}men2.jpg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Arshad AD</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}