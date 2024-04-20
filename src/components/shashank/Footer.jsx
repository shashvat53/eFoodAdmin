import React from "react";

function Footer() {
  return (
    <div className="footer mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm mb-0">e-Food @ 2023</p>
        </div>
        <div className="md:w-1/2">
          <ul className="flex justify-center md:justify-end items-center gap-4">
            <li>
              <a
                href="https://efood-admin.6amtech.com/admin/business-settings/restaurant/restaurant-setup"
                className="flex items-center"
              >
                <span>Business Setup</span>
                <img
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/business_setup.png"
                  alt="Business Setup"
                  className="w-4 h-4 ml-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://efood-admin.6amtech.com/admin/settings"
                className="flex items-center"
              >
                <span>Profile</span>
                <img
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/profile.png"
                  alt="Profile"
                  className="w-4 h-4 ml-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://efood-admin.6amtech.com/admin"
                className="flex items-center"
              >
                <span>Home</span>
                <img
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/home.png"
                  alt="Home"
                  className="w-4 h-4 ml-1"
                />
              </a>
            </li>
            <li>
              <label className="inline-block py-1 px-2 text-sm font-semibold text-red-400 bg-red-50 rounded-full">
                Software Version: 10.2
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
