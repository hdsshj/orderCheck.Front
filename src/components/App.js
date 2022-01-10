import React from "react";
import { Route } from "react-router-dom";

// import Toast from "./profile/Toast";
import SideBar from "./header/SideBar";
import Header from "./header/Header";
import Content from "./profile/Content";
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
      <Content />
      <Route path="/" component={Dashboard} exact />
      <Route path="/consulting_form" component={ConsultingForm} exact />
      <Route path="/custom_manage" component={CustomManage} exact />
      <Route path="/file_storage" component={FileStorage} exact />
      <Route path="/setting" component={Setting} exact />
    </>
  );
}

export default App;
