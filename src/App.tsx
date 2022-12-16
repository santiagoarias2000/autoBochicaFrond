import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "../src/assets/css/style.css";
import { RouteComplete } from './app/util/routes/RoutesComplete';

const charging = <div>Por favor sea paciente...</div>
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={charging}>
        <RouteComplete />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
