// SecondPage.tsx
import React from "react";
import DataFetchingComponent from "../../components/DataFetchingComponent";
import "./SecondPage.css";
import DepartmentsList from "../../components/Departments";

const SecondPage:React.FC = () => {
  return (
    <div className="container_sp">
      <h1
        style={{ textAlign: "center", color: "#AC3E31", fontStyle: "oblique" }}
      >
        Second Page
      </h1>
      <DataFetchingComponent />
      <DepartmentsList />
     
    </div>
  );
};

export default SecondPage;
