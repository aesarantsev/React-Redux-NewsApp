import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";

export const navigationList: navigationListType[] = [
  { title: "News", link: "/", icon: <InboxIcon /> },
  { title: "Settings", link: "/settings", icon: <SettingsIcon /> },
  { title: "Help", link: "/help", icon: <HelpOutlineIcon /> },
  { title: "About", link: "/about", icon: <InfoIcon /> }
];

interface navigationListType {
  title: string;
  link: string;
  icon: JSX.Element;
}
