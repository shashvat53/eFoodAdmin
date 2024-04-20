const SideMenu = () => {
  const product = [
    {
      cate: "Main",
      item: [
        {
          icon: <i className="ri-home-7-line w-5 h-5"></i>,
          moreOption: false,
          name: "Dashboard",
          href: "/",
        },
        {
          icon: <i className="ri-handbag-line w-5 h-5"></i>,
          moreOption: [
            { label: "New Sale", href: "#" },
            { label: "Order", href: "#" },
          ],
          name: "POS",
        },
      ],
    },
    {
      cate: "ORDER MANAGEMENT",
      item: [
        {
          icon: <i className="ri-verified-badge-line w-5 h-5"></i>,
          moreOption: false,
          name: "Verify Offline Payment",
          href: "/verify-offline-payment",
        },
        {
          icon: <i className="ri-shopping-cart-line w-5 h-5"></i>,
          name: "Order",
          moreOption: [
            { label: "All", href: "#" },
            { label: "Pending", href: "#" },
            { label: "Confirmed", href: "#" },
            { label: "Processing", href: "#" },
            { label: "Out For Delivery", href: "#" },
            { label: "Delivered", href: "#" },
            { label: "Returned", href: "#" },
            { label: "Failed To Deliver", href: "#" },
            { label: "Canceled", href: "#" },
            { label: "Scheduled", href: "#" },
          ],
        },
        {
          icon: <i className="ri-shopping-cart-2-line w-5 h-5"></i>,
          name: "Table Order",
          moreOption: [
            { label: "All", href: "#" },
            { label: "Confirmed", href: "#" },
            { label: "Cooking", href: "#" },
            { label: "Ready For Serve", href: "#" },
            { label: "Completed", href: "#" },
            { label: "Canceled", href: "#" },
            { label: "On Table", href: "#" },
          ],
        },
      ],
    },
    {
      cate: "PRODUCT MANAGEMENT",
      item: [
        {
          icon: <i className="ri-git-fork-line w-5 h-5"></i>,
          moreOption: [
            { label: "Category", href: "#" },
            { label: "Sub Category", href: "#" },
          ],
          name: "Category Setup",
        },
        {
          icon: <i className="ri-pentagon-line w-5 h-5"></i>,
          moreOption: [
            { label: "Product Attributes", href: "#" },
            { label: "Product Addon", href: "#" },
            { label: "Product Add", href: "#" },
            { label: "Product List", href: "#" },
            { label: "Bulk Import", href: "#" },
            { label: "Bulk Export", href: "#" },
            { label: "Product Reviews", href: "#" },
          ],
          name: "Product Setup",
        },
      ],
    },
    {
      cate: "PROMOTION MANAGEMENT",
      item: [
        {
          icon: <i className="ri-landscape-line w-5 h-5"></i>,
          moreOption: false,
          name: "Banner",
          href: "/banner",
        },
        {
          icon: <i className="ri-coupon-3-line w-5 h-5"></i>,
          moreOption: false,
          name: "Coupon",
          href: "/Coupon",
        },
        {
          icon: <i className="ri-notification-3-line w-5 h-5"></i>,
          moreOption: false,
          name: "Send Notification",
          href: "/send-notification",
        },
      ],
    },
    {
      cate: "HELP & SUPPORT SECTION",
      item: [
        {
          icon: <i className="ri-chat-3-line w-5 h-5"></i>,
          moreOption: false,
          name: "Messages",
          href: "/messages",
        },
      ],
    },
    {
      cate: "REPORT AND ANALYTICS",
      item: [
        {
          icon: <i className="ri-pie-chart-line w-5 h-5"></i>,
          moreOption: false,
          name: "Earning Report",
          href: "/earning-report",
        },
        {
          icon: <i className="ri-bar-chart-2-line w-5 h-5"></i>,
          moreOption: false,
          name: "Order Report",
          href: "/order-report",
        },
        {
          icon: <i className="ri-donut-chart-line w-5 h-5"></i>,
          moreOption: false,
          name: "DeliveryMan Report",
          href: "/deliveryMan-report",
        },
        {
          icon: <i className="ri-line-chart-line w-5 h-5"></i>,
          moreOption: false,
          name: "Product Report",
          href: "/product-report",
        },
        {
          icon: <i className="ri-pie-chart-box-line w-5 h-5"></i>,
          moreOption: false,
          name: "Sale Report",
          href: "/sale-report",
        },
      ],
    },
    {
      cate: "USER MANAGEMENT",
      item: [
        {
          icon: <i className="ri-user-2-line w-5 h-5"></i>,
          moreOption: [{ label: "List", href: "#" }],
          name: "Customer",
        },
        {
          icon: <i className="ri-wallet-line w-5 h-5"></i>,
          moreOption: [
            { label: "Add Fund", href: "#" },
            { label: "Report", href: "#" },
            { label: "Wallet Bonus Setup", href: "#" },
          ],
          name: "Customer Wallet",
        },
        {
          icon: <i className="ri-hand-heart-line w-5 h-5"></i>,
          moreOption: [{ label: "Report", href: "#" }],
          name: "Customer Loyalty Point",
        },
        {
          icon: <i className="ri-mail-unread-line w-5 h-5"></i>,
          moreOption: false,
          name: "Subscribed Email",
          href: "/subscribed-email",
        },
        {
          icon: <i className="ri-user-6-line w-5 h-5"></i>,
          moreOption: [
            { label: "Deliveryman List", href: "#" },
            { label: "Add New Deliveryman", href: "#" },
            { label: "New Joining Request", href: "#" },
            { label: "Deliveryman Reviews", href: "#" },
          ],
          name: "Deliveryman",
        },
        {
          icon: <i className="ri-user-2-line w-5 h-5"></i>,
          moreOption: [
            { label: "Employee Role Setup", href: "#" },
            { label: "Employee Setup", href: "#" },
          ],
          name: "Employees",
        },
        {
          icon: <i className="ri-user-4-line w-5 h-5"></i>,
          moreOption: [
            { label: "Add New", href: "#" },
            { label: "List", href: "#" },
          ],
          name: "Chef",
        },
      ],
    },
    {
      cate: "Table Section",
      item: [
        {
            icon: <i className="ri-table-view w-5 h-5"></i>,
            moreOption: [
              { label: "List", href: "#" },
              { label: "Availability", href: "#" },
              { label: "Promotion Setup", href: "#" },
            ],
            name: "Table",
          },
      ],
    },
    {
      cate: "SYSTEM SETTING",
      item: [
        {
          icon: <i className="ri-profile-line w-5 h-5"></i>,
          moreOption: false,
          name: "Business Setup",
          href: "/business-setup",
        },
        {
          icon: <i className="ri-mail-open-line w-5 h-5"></i>,
          moreOption: false,
          name: "Email Template",
          href: "/email-template",
        },
        {
          icon: <i className="ri-git-branch-line w-5 h-5"></i>,
          moreOption: [
            { label: "Add New", href: "#" },
            { label: "List", href: "#" },
          ],
          name: "Branch Setup",
        },
        {
          icon: <i className="ri-aspect-ratio-line w-5 h-5"></i>,
          moreOption: [
            { label: "Page Setup", href: "#" },
            { label: "Social Media", href: "#" },
          ],
          name: "Page & Media",
        },
        {
          icon: <i className="ri-apps-2-add-line w-5 h-5"></i>,
          moreOption: [
            { label: "3rd Party Configuration", href: "#" },
            { label: "Offline Payment Method", href: "#" },
            { label: "Firebase Notification", href: "#" },
          ],
          name: "3rd Party",
        },
        {
            icon: <i className="ri-verified-badge-line w-5 h-5"></i>,
            moreOption: false,
            name: "System Setup",
            href: "/system-setup",
          },
      ],
    },
    {
      cate: "SYSTEM ADDON",
      item: [
        {
          icon: <i className="ri-add-circle-line w-5 h-5"></i>,
          moreOption: false,
          name: "System Addons",
          href: "/system-addons",
        },
        
        
      ],
    },
    
  ];
  return product;
};

export default SideMenu;
