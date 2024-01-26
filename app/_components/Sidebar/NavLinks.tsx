import DashboardSideBar from "./SideBarList/DashboardSidebar";
import IncidentsSideBar from "./SideBarList/IncidentsSidebar";
import ConnectClusterSideBar from "./SideBarList/ConnectClusterSidebar";
import ProfileeSideBar from "./SideBarList/ProfileSidebar";
import SignoutSideBar from "./SideBarList/SignoutSidebar";
import ConfigurationsSidebar from "./SideBarList/ConfigurationsSidebar";

export default function NavLinks() {
  return (
    <>
      <ul className="space-y-2">
        <li>
          <DashboardSideBar />
        </li>

        <li>
          <IncidentsSideBar />
        </li>

        <li>
          <ConnectClusterSideBar />
        </li>

        <li>
          <ConfigurationsSidebar />
        </li>

        <li>
          <ProfileeSideBar />
        </li>

        <li>
          <SignoutSideBar />
        </li>
      </ul>
    </>
  );
}
