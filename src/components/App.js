import React from "react";
import { Route } from "react-router-dom";

import Header from "./header/Header";
import SideBar from "./header/SideBar";
import Dashboard from "../pages/Dashboard";
import ConsultingForm from "../pages/ConsultingForm";
import CustomManage from "../pages/CustomManage";
import FileStorage from "../pages/FileStorage";
import Setting from "../pages/Setting";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Route path="/" component={Dashboard} exact />
      <Route path="/consulting_form" component={ConsultingForm} exact />
      <Route path="/custom_manage" component={CustomManage} exact />
      <Route path="/file_storage" component={FileStorage} exact />
      <Route path="/setting" component={Setting} exact />
    </>
  );
}

export default App;
