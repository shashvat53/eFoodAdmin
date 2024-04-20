import React from "react";
// import OrderTable from "../components/OrderTable";
import AttributeTableHeader from "./AttributeTableHeader";
import ProductAttributeTable from "../../components/ui/table/ProductAttributeTable";

const ProductAttribute = () => {
  return (
    <div
      className="py-4 px-4 sm:px-6 lg:px-8
        "
    >
      <div className="flex flex-wrap gap-2 items-center ">
        <h2 className="text-xl mb-0 flex items-center gap-1">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/attribute.png"
            alt=""
          />
          <span className="page-header-title font-semibold">
            Add New Attribute
          </span>
        </h2>
        <span className="inline-block py-1 px-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md">
          6
        </span>
      </div>
      <AttributeTableHeader />
      {/* ajay put your table and remove my table */}
      <div className="overflow-x-auto"> 
        <ProductAttributeTable/>
      </div>
    </div>
  );
};

export default ProductAttribute;
