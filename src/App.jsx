import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SideBar from './components/headers/SideBar';
import SideMenu from './components/headers/SideMenu';
import NavBar from './components/headers/NavBar';
import AllTableOrder from './layouts/Table Order/AllTableOrder';
import Dashboard from './components/layouts/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Banner from './components/layouts/Banner';
import Notification from './components/layouts/Notification';
import All from './pages/All';
import Pending  from './pages/Pending ';
import Confirmed from './pages/Confirmed ';
import Processing from './pages/Processing';
import OutForDelivery from './pages/OutForDelivery';
import Delivered from './pages/Delivered';
import Returned from './pages/Returned';
import Failed from './pages/Failed';
import Canceled from './pages/Canceled';
import Schedule from './pages/Schedule';
import OfflinePayment from './OfflinePayments/OfflinePayment';
import Footer from './components/layouts/Footer';
import OrderList from './layouts/Order/OrderList';
import Category from './layouts/Category Setup/Category';
import SubCategory from './layouts/Category Setup/SubCategory';
import Message from './layouts/Message/Message';
import EarningReport from './layouts/report/EarningReport';
import OrderReports from './layouts/report/OrderReports';
import DeliveryManReport from './layouts/report/DeliveryManReport';
import ProductReport from './layouts/report/ProductReport';
import SaleReport from './layouts/report/SaleReport';
import Coupon from './layouts/Coupon/Coupon';
import CustomerList from './layouts/CustomerList';
import AddFund from './layouts/wallet/AddFund';
import WalletReport from './layouts/wallet/WalletReport';
import EmployeeSetup from './layouts/Employe Setup/EmployeeSetup';
import LoyalityReport from './layouts/wallet/LoyalityReport';
import SubscribedCustomers from './layouts/SubscribedCustomers';
import DeliveryManList from './layouts/deliveryMan/DeliveryManList';
import AddNewDeliveryman from './layouts/deliveryMan/AddNewDeliveryman';
import NewJoiningRequest from './layouts/deliveryMan/NewJoiningRequest';
import DeliveryMenReview from './layouts/deliveryMan/DeliveryMenReview';
import AddNewChef from './layouts/chef/AddNewChef';
import ChefList from './layouts/chef/ChefList';
import BusinessSetup from './layouts/buisness setup/BusinessSetup';
import ProductAdd from './layouts/Product Setup/ProductAdd';
import EmailTemplate from './layouts/email template/EmailTemplate';
import PageAndMedia from './layouts/Page & Media/PageAndMedia';
import ProductAttribute from './layouts/Product Setup/ProductAttribute';
import ProductAddon from './layouts/Product Setup/ProductAddon';
import ProductList from './layouts/Product Setup/ProductList';
import BulkImport from './layouts/Product Setup/BulkImport';
import BulkExport from './layouts/Product Setup/BulkExport';
import ProductReview from './layouts/Product Setup/ProductReview';
import SocialMedia from './layouts/Page & Media/SocialMedia';
import WalletBonusSetup from './layouts/wallet/WalletBonusSetup';
import EmployeeRoleSetup from './layouts/Employe Setup/EmployeeRoleSetup';
import SystemAddon from './layouts/SystemAddon/SystemAddon';
import SystemSetup from './layouts/SystemSetup/SystemSetup';
import ThirdPartyNav from './layouts/ThirdParty/ThirdParty';
import FirebaseNotification from './layouts/ThirdParty/FirebaseNotification';
import Setting from './layouts/user/Setting';
import OfflinePaymentMethodSetup from './layouts/ThirdParty/OfflinePaymentMethodSetup';
import { UserContext } from './utils/context/UserAuthContext';
import AddNewBranch from './layouts/Branch setup/AddNewBranch';
import BranchList from './layouts/Branch setup/BranchList';
import AuthForm from './layouts/user/AuthForm';
import TableList from './layouts/branchTable/TableList';
import BranchPromotionSetup from './layouts/branchTable/BranchPromotionSetup';
import Availability from './layouts/branchTable/Availability';
import logo from '../src/assets/logo.png'
import getLogin from './helper/Auth';
import CustomerDetails from './components/ui/table/CustomerDetails';
const App = () => {
  const [isAuth, setIsAuth] = useContext(UserContext)
  const [openNav, setOpenNav] = useState('md');
  const [makeOpen, setMakeOpen] = useState(true);
  const navigate = useNavigate()

  const checkAuth = ()=>{
    if (!isAuth) {
      navigate('/login')
    }
  }

  useEffect(() => {
    checkAuth
    getLogin()
  
 
  }, [isAuth])
  

  useEffect(() => {
    const handleResize = () => {
      const deviceWidth = window.innerWidth;
      if (deviceWidth >= 640 && deviceWidth < 1200) {
        setOpenNav('md');
      } else if(deviceWidth > 1200) {
        setOpenNav('lg');
      } else {
        setOpenNav('sm');
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
      {isAuth ? <> <div className='fixed top-0 left-0 w-full z-20'>
        <NavBar setIsAuth={setIsAuth} />
      </div>
      
     <div className='w-[250px] fixed top-0 z-30 flex flex-col'>
        <>
        <div className='h-16 flex items-center justify-start gap-11 px-5'>
          <img
            className='h-10'
            src={logo}
            alt=''
          />
          <i className={`ri-skip-${!makeOpen ? 'right':'left'}-line text-lg`} onClick={()=>setMakeOpen(!makeOpen)}></i>
        </div>
       {openNav !== 'sm' && <SideBar className='bg-white' product={SideMenu()} openNav={openNav} makeOpen={makeOpen} setMakeOpen={setMakeOpen}/>}
        </>
        {openNav === 'sm' && makeOpen && (
          <motion.div
            id='sidebarcontainer'
            className={`fixed w-[250px] top-0 left-0 border-r-2 shadow-md bg-white`}
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250, transition: { duration: 0.3 } }} // Match the exit transition with the opening animation
          >
            <div className='h-16 flex items-center justify-between px-5 '>
              <img
                className='h-10'
                src={logo}
                alt=''
              />
              <i className={`ri-skip-left-line text-lg`} onClick={()=>setMakeOpen(!makeOpen)}></i>
            </div>
            <SideBar className='bg-white' product={SideMenu()} openNav={openNav} makeOpen={makeOpen} setMakeOpen={setMakeOpen}/>
          </motion.div>
        )}
      </div>
      <div className={`p-5  duration-300 transition-all pt-20 ${openNav !== 'sm' && makeOpen && 'pl-[270px]'} ${openNav !== 'sm' && !makeOpen && 'pl-[100px]'}`}>
        {/* <AllTableOrder/> */}
        <Routes>
          
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/send-notification' element={<Notification/>}/>
          <Route path='/All' element={<All/>}/>
          <Route path='/Pending' element={<Pending/>}/>
          <Route path='/Confirmed' element={<Confirmed/>}/>
          <Route path='/Processing' element={<Processing/>}/>
          <Route path='/Delivered' element={<Delivered/>}/>
          <Route path='/Returned' element={<Returned/>}/>
          <Route path='/Out For Delivery' element={<OutForDelivery/>}/>
          <Route path='/Failed To Deliver' element={<Failed/>}/>
          <Route path='/Canceled' element={<Canceled/>}/>
          <Route path='/Scheduled' element={<Schedule/>}/>
          <Route path='/verify-offline-payment' element={<OfflinePayment/>}/>
          <Route path='/TableOrder/:name' element={<AllTableOrder/>}/>
          <Route path='/Order/:name' element={<OrderList/>}/>
          <Route path='/CategorySetup/Category' element={<Category/>}/>
          <Route path='/CategorySetup/SubCategory' element={<SubCategory/>}/>
          <Route path='/messages' element={<Message/>}/>
          <Route path='/earning-report' element={<EarningReport/>}/>
          <Route path='/order-report' element={<OrderReports/>}/>
          <Route path='/deliveryMan-report' element={<DeliveryManReport/>}/>
          <Route path='/product-report' element={<ProductReport/>}/>
          <Route path='/sale-report' element={<SaleReport/>}/>
          <Route path='/Coupon' element={<Coupon/>}/>
          <Route path='/Customer/List' element={<CustomerList/>}/>
          <Route path='/CustomerWallet/AddFund' element={<AddFund/>}/>
          <Route path='/CustomerWallet/WalletBonusSetup' element={<WalletBonusSetup/>}/>
          <Route path='/CustomerWallet/Report' element={<WalletReport/>}/>
          <Route path='/CustomerLoyaltyPoint/Report' element={<LoyalityReport/>}/>
          <Route path='/Employees/EmployeeSetup' element={<EmployeeSetup/>}/>
          <Route path='/Employees/EmployeeRoleSetup' element={<EmployeeRoleSetup/>}/>
          <Route path='/subscribed-email' element={<SubscribedCustomers/>}/>
          <Route path='/Deliveryman/DeliverymanList' element={<DeliveryManList/>}/>
          <Route path='/Deliveryman/AddNewDeliveryman' element={<AddNewDeliveryman/>}/>
          <Route path='/Deliveryman/DeliverymanReviews' element={<DeliveryMenReview/>}/>
          <Route path='/Deliveryman/NewJoiningRequest' element={<NewJoiningRequest/>}/>
          <Route path='/Chef/AddNew' element={<AddNewChef/>}/>
          <Route path='/Chef/List' element={<ChefList/>}/>
          <Route path='/business-setup' element={<BusinessSetup/>}/>
          <Route path='/ProductSetup/ProductAdd' element={<ProductAdd/>}/>
          <Route path='/ProductSetup/ProductAttributes' element={<ProductAttribute/>}/>
          <Route path='/ProductSetup/ProductAddon' element={<ProductAddon/>}/>
          <Route path='/ProductSetup/ProductList' element={<ProductList/>}/>
          <Route path='/ProductSetup/BulkImport' element={<BulkImport/>}/>
          <Route path='/ProductSetup/BulkExport' element={<BulkExport/>}/>
          <Route path='/ProductSetup/ProductReviews' element={<ProductReview/>}/>
          <Route path='/email-template' element={<EmailTemplate/>}/>
          <Route path='/Page&Media/PageSetup' element={<PageAndMedia/>}/>
          <Route path='/Page&Media/SocialMedia' element={<SocialMedia/>}/>
          <Route path='/system-addons' element={<SystemAddon/>}/>
          <Route path='/system-setup' element={<SystemSetup/>}/>
          <Route path='/3rdParty/3rdPartyConfiguration' element={<ThirdPartyNav/>}/>
          <Route path='/3rdParty/FirebaseNotification' element={<FirebaseNotification/>}/>
          <Route path='/3rdParty/OfflinePaymentMethod' element={<OfflinePaymentMethodSetup/>}/>
          <Route path='/profile/setting' element={<Setting/>}/>
          <Route path='/BranchSetup/AddNew' element={<AddNewBranch/>}/>
          <Route path='/BranchSetup/List' element={<BranchList/>}/>
          <Route path='/Table/List' element={<TableList/>}/>
          <Route path='/Table/PromotionSetup' element={<BranchPromotionSetup/>}/>
          <Route path='/Table/Availability' element={<Availability/>}/>
          <Route path='/Table/CustomerDetails' element={<CustomerDetails/>}/>
        </Routes>
        <Footer/>
      </div> </>:<div>
        <AuthForm/>
        </div>}
    </>
  );
};

export default App;
