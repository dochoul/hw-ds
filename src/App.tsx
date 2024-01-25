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
              <Route path="/modal" element={<Modal />} />
              <Route path="/input" element={<Input />} />
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
