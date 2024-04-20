import React from "react";
import ReportHead from "../../components/report/ReportHead";
import ReportFilterCard from "../../components/report/ReportFilterCard";
import SmallReportCard from "./SmallReportCard";
import {MonthChartOrder} from "../../components/charts/MonthChart";

const DeliveryManReport = () => {
    const detailsS= {
        page:'Delivery',
        link:"https://efood-admin.6amtech.com/public/assets/admin/svg/illustrations/order.png"
    }
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <i className="ri-pie-chart-fill text-red-400 text-lg"></i>Delivery Report
      </h1>
      <ReportHead data={detailsS}/>
      <ReportFilterCard/>
      
      <div>
      </div>
    </div>
  );
};

export default DeliveryManReport;
