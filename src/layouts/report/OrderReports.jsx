import React from "react";
import ReportHead from "../../components/report/ReportHead";
import ReportFilterCard from "../../components/report/ReportFilterCard";
import SmallReportCard from "./SmallReportCard";
import {MonthChartOrder} from "../../components/charts/MonthChart";

const OrderReports = () => {
    const detailsS= {
        page:'Order',
        link:"https://efood-admin.6amtech.com/public/assets/admin/svg/illustrations/order.png"
    }
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <i className="ri-pie-chart-fill text-red-400 text-lg"></i>Order Report
      </h1>
      <ReportHead data={detailsS}/>
      <ReportFilterCard/>
      <div className="grid grid-flow-row  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-3">
        <SmallReportCard icon={'ri-truck-line'} value1={76} value2={24} title={'Delivered'} color={'#75E59B'}/>
        <SmallReportCard icon={'ri-arrow-go-back-fill'} value1={10} value2={90} title={'Returned'} color={'#EAB308'}/>
        <SmallReportCard icon={'ri-close-circle-line'} value1={5} value2={95} title={'Failed'} color={'#3B82F6'}/>
        <SmallReportCard icon={'ri-calendar-close-line'} value1={12} value2={88} title={'Canceled'} color={'#F87171'}/>
      </div>
      <div>
        <MonthChartOrder/>
      </div>
    </div>
  );
};

export default OrderReports;
