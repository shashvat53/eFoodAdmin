import React, { Fragment, useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { chefStatus, deleteChef } from "../../../helper/ChefList";
import { editChef } from "../../../helper/ChefList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EmployeeListTable = ({ data, setReload, Reload }) => {
  const navigate = useNavigate();

  const [toggleStates, setToggleStates] = useState({});

  useEffect(() => {
    // Initialize toggle states based on data
    if (data) {
      const initialToggleStates = {};
      data.forEach((elem) => {
        initialToggleStates[elem._id] = elem.is_active;
      });
      // console.log(initialToggleStates,"555")
      setToggleStates(initialToggleStates);
    }
  }, [data]);

  const deleteHandler = async (id) => {
    try {
      const res = await deleteChef(id);
      console.log("chef deleted successfully", res);
      setReload((prev) => prev + 1);
      toast.success("chef deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = (chefData) => {
    navigate(`/Chef/AddNew`, { state: { data: chefData } });
  };

  const statusHandler = async (id) => {
    try {
      const res = await chefStatus(id);
      const updatedToggleStates = { ...toggleStates };
      updatedToggleStates[id] = res.is_active;
      setToggleStates(updatedToggleStates);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItems = () => {
    if (!data || data.length === 0) {
      return <h1>No Data Available</h1>;
    }

    return data.map((elem, ind) => (
      <Fragment key={ind} className="">
        <span>{ind + 1}</span>
        <span>{elem?.firstName}</span>
        <span>{elem?.contactNumber}</span>
        <span>
          <ToggleSwitch
            id={elem._id}
            value={toggleStates[elem._id]}
            onChange={() => statusHandler(elem._id)}
          />
        </span>
        <span className="flex gap-1 justify-evenly">
          <i
            onClick={() => editHandler(elem)}
            className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
          ></i>
          <i
            onClick={() => deleteHandler(elem?._id)}
            className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"
          ></i>
        </span>
      </Fragment>
    ));
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-5 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {["SL", "Name", "Contact", "Status", "Action"].map((elem, index) => (
          <span key={index}>{elem}</span>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-5 gap-2 px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {renderItems()}
      </div>
    </div>
  );
};

export default EmployeeListTable;
