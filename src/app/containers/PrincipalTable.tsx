import { SideMenu } from "./SideMenu";
import { UpMenu } from "./UpMenu";
import { RoutesInternal } from "../util/routes/RoutesInternal";
import "../../assets/css/styleMenu.css"
import { Welcome } from "./Welcome";

export const PrincipalTable = () => {
  return (
    <div className="color_menu">
      <UpMenu />
      <SideMenu />
      <RoutesInternal/>
      <Welcome/>
    </div>
  );
};
