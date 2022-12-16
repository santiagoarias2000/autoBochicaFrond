//Funtion to conneted back whit front, use url and route...
const ApiBack = {
  URL: "http://localhost:3123",
  //Routes private to back and go send to front
  //USER
  USER_PUBLIC_LOGIN: "/api/public/login",
  USER_PUBLIC_VIEW: "/api/private/user/view",
  //ROLES
  ROLES_PRIVATE_VIEW: "/api/private/roles/view",

  //STRACTUM
  STRACTUM_PRIVATE_VIEW: "/api/private/stratum/view",
  //Sisbens
  SISBENS_PRIVATE_VIEW: "/api/private/sisben/view",
  //CivilStatus
  CIVILSTATUS_PRIVATE_VIEW: "/api/private/civilstatus/view",
  //educationlevel
  EDUCATIONLEVEL_PRIVATE_VIEW: "/api/private/educationlevel/view",
  //city
  CITY_PRIVATE_VIEW: "/api/private/city/view",
  //typedocument
  TYPEDOCUMENT_PRIVATE_VIEW: "/api/private/typedocument/view",
  //typegender
  TYPEGENDER_PRIVATE_VIEW: "/api/private/typegender/view",
  //typesanguineos
  TYPESANGUINEOS_PRIVATE_VIEW: "/api/private/typesanguineos/view",
  //otherdataperson
  OTHERDATAPERSON_PRIVATE_VIEW: "/api/private/otherdataperson/view ",
  //identification
  IDENTIFICATION_PRIVATE_VIEW: "/api/private/identification/view",
  IDENTIFICATION_PRIVATE_CREATE: "/api/private/identification/create",
  //Person
  PERSON_PRIVATE_VIEW: "/api/private/person/view",
  PERSON_PRIVATE_CREATE: "/api/private/person/create",
  //Courses
  COURSES_PRIVATE_VIEW: "/api/private/course/view",
  //Vehicles
  VEHICLES_PRIVATE_VIEW: "/api/private/vehicles/view",
  VEHICLES_PRIVATE_CREATE: "/api/private/vehicles/create",
  VEHICLES_PRIVATE_DETAILS: "/api/private/vehicles/details",
  VEHICLES_PRIVATE_DELETE: "/api/private/vehicles/delete",
  VEHICLES_PRIVATE_UPDATE: "/api/private/vehicles/update",
  //tuitions
  TUITIONS_PRIVATE_VIEW: "/api/private/tuitions/view",
  //state certificate
  STATECERTIFICATE_PRIVATE_VIEW: "/api/private/statecertificate/view",
};
export default ApiBack;
