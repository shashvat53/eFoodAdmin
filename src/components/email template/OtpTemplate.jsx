import React, { useEffect, useRef } from 'react';

const OtpTemplate = ({emailTXT, logoUrl, allData}) => {
  const itemChange = useRef(null);

  useEffect(() => {
    if (itemChange.current) {
      itemChange.current.innerHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Otp Body</title>
          <style>
              *{
                  padding: 0;
                  margin: 0;
                  box-sizing: border-box;
                  text-decoration: none;
                  font-family: sans-serif;
              }
              html, body{
                  width: 100%;
                  height: 100%;
      
              }
              .mainDiv{
                  width: 100%;
                  border: 1px solid #ddd;
                  padding: 5px;
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
              }
              .mainTitle{
                  font-size: 26px;
                  text-align: center;
                  margin: 10px 0;
              }
              .logo{
                  width: 130px;
              }
              .mailBodyMessage{
                  font-size: 14px;
                  color: #585858;
                  padding: 5px;
                  text-align: center;
              }
             
              .logoContainer{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  gap: 10px;
                  padding: 5px 0;
              }
              .logoContainer p{
                  font-weight: 600;
                  font-size: 20px;
              }
             
              .demoTxtDiv {
                  display: flex;
                  flex-direction: column;
                  color: #585858;
                  font-size: 14px;
                  gap: 10px;
              }
             
              .policyDiv{
                  list-style: circle;
                  display: flex;
                  gap: 10px;
                  color: #585858;
                  font-size: 14px;
                  gap: 30px; 
                  justify-content: center;
                  align-items: center;
                  width: 100%;
      
              }
              .iconDiv img{
                  width: 40px;
              }
              .iconDiv{
                  display: flex;
                  gap: 5px;
                  justify-content: center;
              }
              .Copyrighttxt{
                  color: #585858;
                  font-size: 14px;
                  text-align: center;
              }
              
          </style>
      </head>
      <body>
          <main class="mainDiv">
              <div class="logoContainer">
                  <img src="${logoUrl}" class="logo" alt="">
                  <p>${allData?.mainTitle || 'Forgot Password OTP'}</p>
              </div>
              <span class="mailBodyMessage" style="font-size: 14px; color: #585858; padding: 5px;">${ emailTXT }</span>
              <h1 class="mainTitle">5422</h1>    
              <hr>
              <div class="demoTxtDiv">
              <span>${allData?.sectionText ||'Demo Section Text for test.'}</span>
                  <span>Thanks & Regards,</span>
                  <span>eFood Restaurant</span>
              </div>
              <ul class="policyDiv">
                 ${allData?.privacyPolicy ? ' <li>Privacy Policy</li>':''}
                  ${allData?.refundPolicy ? '<li>Refund Policy</li>':''}
                  ${allData?.cancelationPolicy ? '<li>Cancelation Policy</li>':''}
                  ${allData?.contactUs ? '<li>Contact us</li>':''}
              </ul>
              <div class="iconDiv">
                  ${allData?.facebook ? '<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/facebook.png" alt="" class="icon">':''}
                  ${allData?.instagram ? '<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/instagram.png" alt="" class="icon">':''}
                  ${allData?.twitter ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/twitter.png" alt="" class="icon">':''}
                  ${allData?.linkedin ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/linkedin.png" alt="" class="icon">':''}
                  ${allData?.Pinterest ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/pinterest.png" alt="" class="icon">':''}
              </div>
              <span class="Copyrighttxt">${allData?.copyrightContent ? allData?.copyrightContent :'Copyright 2024 Capri-Global. All right reserved'}</span>
          </main>
      </body>
      </html>`; 
    }
  }, [emailTXT, logoUrl, allData]);

  return <div className='min-w-[360px] max-w-[600px] w-full overflow-x-hidden' ref={itemChange}>OrderPlacement</div>;
};

export default OtpTemplate;
