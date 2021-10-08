import PollIcon from "@material-ui/icons/Poll";
import PersonIcon from "@material-ui/icons/Group";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import DashboardPage from "./views/Dashboard";
import UserProfilePage from "./views/UserProfile";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: PollIcon,
    component: DashboardPage,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: PersonIcon,
    component: UserProfilePage,
  },
  {
    path: "/",
    name: "About Us",
    icon: ContactMailIcon,
    component: DashboardPage,
  },
  {
    path: "/",
    name: "Logout",
    icon: LogoutIcon,
    component: DashboardPage,
  },
];

export default dashboardRoutes;
