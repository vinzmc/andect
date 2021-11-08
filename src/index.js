//dependency
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate // redirect
} from "react-router-dom";

//css
import './index.css';

//component
import App from "./App";
import Home from "./routes/home";
import Error404 from "./routes/error404";
import Test from "./routes/test";
import Feedback from "./routes/feedback";
import Contributor from "./routes/contributor";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/andect/" />} />

      <Route path="/andect/" element={<App />}>
        <Route exact path="/andect/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="contributor" element={<Contributor />} />
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
