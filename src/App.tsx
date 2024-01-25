import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Accordion from "./pages/Accordion";
import Home from "./pages/Home";
import Header from "./components/document/layout/Header";
import Aside from "./components/document/layout/Aside";
import Foundation from "./pages/Foundation";
import Components from "./pages/Components";
import Templates from "./pages/Templates";
import Checkbox from "./pages/Checkbox";
import Banner from "./pages/Banner";
import Modal from "./pages/Modal";
import Input from "./pages/Input";
import Progress from "./pages/Progress";
import DatePicker from "./pages/datePicker";
import Dropdown from "./pages/Dropdown";
import List from "./pages/List";
import Loading from "./pages/Loading";
import Pagination from "./pages/Pagination";
import Radio from "./pages/Radio";
import Select from "./pages/Select";
import Tab from "./pages/Tab";
import Tag from "./pages/Tag";
import Badge from "./pages/Badge";
import TimePicker from "./pages/TimePicker";
import Toast from "./pages/Toast";
import Toggle from "./pages/Toggle";
import Tooltip from "./pages/Tooltip.page";
import Transfer from "./pages/Transfer";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="container">
          <Aside />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foundation" element={<Foundation />} />
              <Route path="/components" element={<Components />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/datePicker" element={<DatePicker />} />
              <Route path="/dropdown" element={<Dropdown />} />
              <Route path="/list" element={<List />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/pagination" element={<Pagination />} />
              <Route path="/radio" element={<Radio />} />
              <Route path="/tab" element={<Tab />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/badge" element={<Badge />} />
              <Route path="/tag" element={<Tag />} />
              <Route path="/input" element={<Input />} />
              <Route path="/timePicker" element={<TimePicker />} />
              <Route path="/toast" element={<Toast />} />
              <Route path="/toggle" element={<Toggle />} />
              <Route path="/tooltip" element={<Tooltip />} />

              <Route path="/transfer" element={<Transfer />} />
              <Route path="/table" element={<Table />} />

              <Route path="/select" element={<Select />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/checkbox" element={<Checkbox />} />
              <Route path="/accordion" element={<Accordion />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
