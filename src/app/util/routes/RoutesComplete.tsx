import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrincipalTable } from "../../containers/PrincipalTable";
import { Welcome } from "../../containers/Welcome";
import { LoginSession } from "../../view/public/LoginSession";


//Login container
const LazyInicio = lazy(()=>import("../../view/public/LoginSession").then(()=>({default: LoginSession})));
const LazyTable = lazy(()=>import("../../containers/PrincipalTable").then(()=>({default: PrincipalTable})));
const LazyHome = lazy(()=>import("../../containers/Welcome").then(()=>({default: Welcome})));


export const RouteComplete = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyInicio/>}/>
      <Route path="/home/*" element={<LazyTable/>}/>
    </Routes>
  );
};
