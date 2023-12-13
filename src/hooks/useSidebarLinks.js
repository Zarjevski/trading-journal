import { usePathname } from "next/navigation";
import { IoHomeOutline, IoAnalyticsOutline, IoSettingsOutline, IoFileTrayFullOutline } from "react-icons/io5";

const useSidebarLinks = () => {
  const { pathname } = usePathname();
  const links = [
    {
      title: "Home",
      active: pathname === "/",
      path: "/",
      icon: IoHomeOutline
    },
    {
      title: "Analytics",
      active: pathname === "/analytics",
      path: "/analytics",
      icon: IoAnalyticsOutline
    },
    {
      title: "Trades",
      active: pathname === "/trades",
      path: "/trades",
      icon: IoFileTrayFullOutline
    },
    {
      title: "Settings",
      active: pathname === "/settings",
      path: "/settings",
      icon: IoSettingsOutline
    },
  ];

  return links;
};

export default useSidebarLinks
