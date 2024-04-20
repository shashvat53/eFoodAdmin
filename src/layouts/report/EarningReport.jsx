import React from "react";
import { Link } from "react-router-dom";
import ReportHead from "../../components/report/ReportHead";
import ReportFilterCard from "../../components/report/ReportFilterCard";
import CircularProgress from "../../components/ui/Progress";
import PercentPie from "../../components/ui/PercentPie";
import PieChar from "../../components/ui/PieChart";
import SmallReportCard from "./SmallReportCard";
import {MonthChartEarning} from "../../components/charts/MonthChart";

const EarningReport = () => {
    const detailsS= {
        page:'Earning',
        link:"https://efood-admin.6amtech.com/public/assets/admin/svg/illustrations/earnings.png"
    }
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <i className="ri-pie-chart-fill text-red-400 text-lg"></i>Earning Report
      </h1>
      <ReportHead data={detailsS}/>
      <ReportFilterCard/>
      <div className="flex flex-col sm:flex-row md:gap-5 sm:gap-3">
        <SmallReportCard icon={'ri-money-dollar-circle-line'} value1={76} value2={24} title={'Total Sold'} color={'#75E59B'}/>
        <SmallReportCard icon={'ri-money-dollar-circle-line'} value1={10} value2={80} title={'Total Tax'} color={'#F87171'}/>
      </div>
      <div>
        <MonthChartEarning/>
      </div>
    </div>
  );
};

export default EarningReport;
