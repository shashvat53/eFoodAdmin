import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SideMenu from "./SideMenu";

const SideBar = ({ product, openNav, makeOpen, setMakeOpen }) => {
  let location = useLocation();
  useEffect(() => {
    setIsActive(decodeURIComponent(location.pathname));
  }, [location]);

  const [isActive, setIsActive] = useState(location.pathname);
  const [activeIndex, setActiveIndex] = useState(null); // Initialize with null
  const [activeNum, setActiveNum] = useState(null); // Initialize with null

  const handleItemClick = (index, num) => {
    if (activeIndex === index && activeNum === num) {
      // If the clicked item is already open, close it
      setActiveIndex(null);
      setActiveNum(null);
    } else {
      // If a different item is clicked, close the previously open item and open the new one
      setActiveIndex(index);
      setActiveNum(num);
    }
    setMakeOpen(true);
  };

  const lickClickHandler = ()=>{
    setMakeOpen(false)
  }

  useEffect(() => {
    if (!makeOpen) {
      setActiveIndex(null);
      setActiveNum(null);
    }
  
    return () => {
      
    }
  }, [makeOpen])
  

  const sideBarFunction = () => {
    return (
      <motion.div
        className={`sidebar-scrollbar absolute bg-white top-full h-[90vh] gap-6 border-r-2 border-gray-100 z-[-1] pt-4 overflow-y-scroll w-[250px] ${
          !makeOpen && openNav !== "sm" && "w-[80px] overflow-y-hidden"
        }`}
        initial={{ width: 80 }}
        animate={{ width: makeOpen ? 250 : 80 }}
      >
        {product
          ? product.map((elem, index) => {
              return (
                <ul className={`p-3 w-full`} key={index}>
                  <p
                    className={`text-gray-500 text-xs pl-3  border-b border-gray-50 my-2 uppercase ${
                      !makeOpen && openNav !== "sm" && "hidden"
                    }`}
                  >
                    {elem.cate}
                  </p>
                  {elem.item?.map((ite, num) => {
                    return (
                      <li
                        key={num}
                        className={`px-3 py-3  text-sm rounded-md ${
                          isActive === ite.href
                            ? "bg-red-50 text-red-400 font-semibold"
                            : "text-gray-800"
                        }`}
                      >
                        {ite.href ? (
                          <Link
                            to={ite.href}
                            className="flex gap-2 items-center"
                            onClick={lickClickHandler}
                          >
                            {ite.icon}
                            <span
                              className={`${
                                !makeOpen && openNav !== "sm" && "hidden"
                              }`}
                            >
                              {ite.name}
                            </span>
                          </Link>
                        ) : (
                          <ul className="flex flex-col gap-2 items-start relative">
                            <li
                              className={`flex gap-2 h-full w-full items-center ${
                                activeIndex === index &&
                                activeNum === num &&
                                "bg-gray-100"
                              }`}
                              onClick={() => handleItemClick(index, num)}
                            >
                              {ite.icon}
                              <span
                                id="openSmallMenu"
                                className={` cursor-pointer ${
                                  !makeOpen && openNav !== "sm" && "hidden"
                                }`}
                              >
                                {ite.name}
                              </span>
                              <svg
                                className={`absolute right-0 w-5 transition-all ${
                                  activeIndex === index &&
                                  activeNum === num &&
                                  "rotate-90"
                                } ${
                                  !makeOpen && openNav !== "sm" && "hidden"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                              </svg>
                            </li>
                            {activeIndex === index && activeNum === num && (
                              <motion.li
                                id="smallMenu"
                                className="m-5 p-2 border-dotted border-l-2"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                              >
                                {ite.moreOption !== false &&
                                  ite.moreOption.map((lab, num2) => {
                                    return (
                                      <Link
                                        key={num2}
                                        to={`${ite.name
                                          .replaceAll(" ", "")
                                          .toLowerCase()}/${lab.label
                                          .replaceAll(" ", "")
                                          .toLowerCase()}`}
                                        className="flex gap-2 items-center"
                                        onClick={lickClickHandler}
                                      >
                                        <span
                                          className={` mb-3  text-sm ${
                                            isActive ===
                                            "/" +
                                              (ite.name
                                                .replaceAll(" ", "")
                                                .toLowerCase() +
                                                "/" +
                                                lab.label
                                                  .replaceAll(" ", "")
                                                  .toLowerCase())
                                              ? "text-red-400"
                                              : "text-gray-800"
                                          }`}
                                        >
                                          - {lab.label}
                                        </span>
                                      </Link>
                                    );
                                  })}
                              </motion.li>
                            )}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              );
            })
          : ""}
      </motion.div>
    );
  };

  return sideBarFunction();
};

export default SideBar;
