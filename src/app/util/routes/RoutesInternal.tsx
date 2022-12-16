import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SisbenList } from "../../view/private/sisben/SisbenList";
import { StratumList } from "../../view/private/stractum/StractumList";
import { CityList } from "../../view/private/city/CityList";
import { EduLevelList } from "../../view/private/educationlevel/EducationLevel";
import { TypeDocumentList } from "../../view/private/typeDocument/TypeDocumentList";
import { TypeGenderList } from "../../view/private/typeGender/TypeGenderList";
import { TypeSanguineousList } from "../../view/private/typeSanguineos/TypeSanguineosList";
import { PersonList } from "../../view/private/person/PersonList";
import { PersonCreate } from "../../view/private/person/PersonCreate";
import { CoursesList } from "../../view/private/courses/CoursesList";
import { VehiclesList } from "../../view/private/vehicle/VehicleList";
import { TuitionList } from "../../view/private/tuition/TuitionList";
import { VehiclesCreate } from "../../view/private/vehicle/VehiclesCreate";
import { VehiclesDetails } from "../../view/private/vehicle/VehiclesDetails";
import { VehiclesUpdate } from "../../view/private/vehicle/VehicleUpdate";
import { StateCertificateList } from "../../view/private/stateCertificate/StateCertificate";
import camera from "../../view/private/person/camera";

const LazyStratumList = lazy(() =>
  import("../../view/private/stractum/StractumList").then(() => ({
    default: StratumList,
  }))
);
const LazySisbenList = lazy(() =>
  import("../../view/private/sisben/SisbenList").then(() => ({
    default: SisbenList,
  }))
);
const LazyCityList = lazy(() =>
  import("../../view/private/city/CityList").then(() => ({ default: CityList }))
);
const LazyEduLevelList = lazy(() =>
  import("../../view/private/educationlevel/EducationLevel").then(() => ({
    default: EduLevelList,
  }))
);
const LazyTDocumentList = lazy(() =>
  import("../../view/private/typeDocument/TypeDocumentList").then(() => ({
    default: TypeDocumentList,
  }))
);
const LazyTGenderList = lazy(() =>
  import("../../view/private/typeGender/TypeGenderList").then(() => ({
    default: TypeGenderList,
  }))
);
const LazyTSanguiList = lazy(() =>
  import("../../view/private/typeSanguineos/TypeSanguineosList").then(() => ({
    default: TypeSanguineousList,
  }))
);

const LazyPersonList = lazy(() =>
  import("../../view/private/person/PersonList").then(() => ({
    default: PersonList,
  }))
);
const LazyPersonCreate = lazy(() =>
  import("../../view/private/person/PersonCreate").then(() => ({
    default: PersonCreate,
  }))
);
const LazyCoursesList = lazy(() =>
  import("../../view/private/courses/CoursesList").then(() => ({
    default: CoursesList,
  }))
);
const LazyVehiclesList = lazy(() =>
  import("../../view/private/vehicle/VehicleList").then(() => ({
    default: VehiclesList,
  }))
);
const LazyVehiclesCreate = lazy(() =>
  import("../../view/private/vehicle/VehiclesCreate").then(() => ({
    default: VehiclesCreate,
  }))
);
const LazyVehiclesDetails = lazy(() =>
  import("../../view/private/vehicle/VehiclesDetails").then(() => ({
    default: VehiclesDetails,
  }))
);
const LazyVehiclesUpdate = lazy(() =>
  import("../../view/private/vehicle/VehicleUpdate").then(() => ({
    default: VehiclesUpdate,
  }))
);
const LazyTuitionLazy = lazy(() =>
  import("../../view/private/tuition/TuitionList").then(() => ({
    default: TuitionList,
  }))
);
const LazyStateCertificateLazy = lazy(() =>
  import("../../view/private/stateCertificate/StateCertificate").then(() => ({
    default: StateCertificateList,
  }))
);
const LazyCamerateLazy = lazy(() =>
  import("../../view/private/person/camera").then(() => ({
    default: camera,
  }))
);

export const RoutesInternal = () => {
  return (
    <Routes>
      //Routes to stractum models
      <Route path="/stratumview" element={<LazyStratumList />} />
      //Routes to sisben models
      <Route path="/sisbenview" element={<LazySisbenList />} />
      //Routes to city models
      <Route path="/cityview" element={<LazyCityList />} />
      //Routes to education level models
      <Route path="/edulevelview" element={<LazyEduLevelList />} />
      //Routes to type document models
      <Route path="/tdocumentview" element={<LazyTDocumentList />} />
      //Routes to Type gender models
      <Route path="/tgenderview" element={<LazyTGenderList />} />
      //Routes to Type Sanguineos models
      <Route path="/tsanguiview" element={<LazyTSanguiList />} />
      //Person
      <Route path="/personview" element={<LazyPersonList />} />
      <Route path="/personcreate" element={<LazyPersonCreate />} />
      //Courses
      <Route path="/coursesview" element={<LazyCoursesList />} />
      //Vehicles
      <Route path="/vehiclesview" element={<LazyVehiclesList />} />
      <Route path="/vehiclescreate" element={<LazyVehiclesCreate />} />
      <Route path="/vehiclesdetails/:idVehicle" element={<LazyVehiclesDetails />} />
      <Route path="/vehiclesupdate/:idVehicle" element={<LazyVehiclesUpdate />} />
      //Tuition
      <Route path="/tuitionview" element={<LazyTuitionLazy />} />
      //Satate certificate
      <Route path="/statecertificateview" element={<LazyStateCertificateLazy />} />
      <Route path="/cameraview" element={<LazyCamerateLazy />} />


    </Routes>
  );
};
