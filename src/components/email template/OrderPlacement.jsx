import React, { useEffect, useRef } from 'react';

const OrderPlacement = ({emailTXT, logoUrl, allData}) => {
  const itemChange = useRef(null);

  useEffect(() => {
    if (itemChange.current) {
      itemChange.current.innerHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mail Body</title>
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
              }
              .logo{
                  width: 130px;
              }
              .mailBodyMessage{
                font-size: 14px !important;
                color: #585858 !important;
                padding: 5px !important;
              }
              .actionBtn{
                  width: fit-content;
                  padding: 13px 35px;
                  border-radius: 10px;
                  border: none;
                  background: tomato;
                  color: white;
                  font-weight: 500;
                  font-size: 20px;
                }
                .btnLink{
                    
                    margin: 10px auto;
              }
              .logoContainer{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  gap: 10px;
                  background: #eef;
                  padding: 5px 0;
              }
              .logoContainer p{
                  font-weight: 600;
                  font-size: 20px;
              }
              .orderSummryDiv{
                  display: flex;
                  gap: 10px;
                  padding: 0 20px;
              }
              .orderSummryDiv > div{
                  width: 50%;
                  padding-top: 10px;
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
              }
              .orderSummryDiv p{
                  font-weight: 600;
                  font-size: 18px;
              }
              .orderSummryDiv span, .itemTitle{
                  font-size: 13px;
                  font-weight: 500;
                  color: #585858;
              }
              .productDiv{
                  display: flex;
                  justify-content: space-between;
                  padding: 5px;
                  background: #eef;
                  margin-top: 10px;
                  color: #585858;
                  font-size: 14px;
              }
              .productItemDiv{
                  display: flex;
                  justify-content: space-between;
                  padding: 0 15px;
              }
              .productItemDiv > div{
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
              }
              .billContainer{
                  display: flex;
              }
              .billContainer > div{
                  width: 50%;
              }
              .itemNameDiv, .ItemPriceDiv, .demoTxtDiv {
                  display: flex;
                  flex-direction: column;
                  color: #585858;
                  font-size: 14px;
                  gap: 10px;
              }
              .allBillContainer{
                  display: flex;
                  justify-content: space-between;
                  padding: 10px;
              }
              .itemNameDiv p{
                  font-size: 17px;
                  font-weight: 600;
                  color: #000;
              }
              .ItemPriceDiv p{
                  font-weight: 600;
                  color: tomato;
              }
              .policyDiv{
                  list-style: circle;
                  display: flex;
                  gap: 10px;
                  color: #585858;
                  font-size: 11px;
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
                  font-size: 11px;
                  text-align: center;
              }
              
          </style>
      </head>
      <body>
          <main class="mainDiv">
              <h1 class="mainTitle">${allData?.mainTitle || 'Order Place'}</h1>
              
              <p class="mailBodyMessage">
              
              <span class="mailBodyMessage" style="font-size: 14px; color: #585858; padding: 5px;">${ emailTXT }</span>
              </p><a class='btnLink' href="${allData?.btnUrl || '/'}">
              <button class="actionBtn">${allData?.buttonName || 'Track Order'}</button>
              </a>
              <div class="logoContainer">
                  <img src="${logoUrl}" class="logo" alt="">
                  <p>Order Info</p>
              </div>
              <div class="orderSummryDiv">
                  <div>
                      <p>Order Summary</p>
                      <span>Order# 021555</span>
                      <span>28 Mar, 2024 11:54 am</span>
                  </div>
                  <div>
                      <p>Delivery Address</p>
                      <span>Ajay Rajput</span>
                      <span>2021 New Delhi. Chocsay Nagar, 392205</span>
                  </div>
              </div>
              <div class="productDiv">
                  <span>Product</span>
                  <span>Price</span>
              </div>
              <div class="productItemDiv">
                  <div>
      
                      <span class="itemTitle">1. The school of life - emotional baggage tote bag - canvas tote bag (navy) x 1</span>
                      <span class="itemTitle">2. 3USB Head Phone x 1</span>
                  </div>
                  <div>
                      <span> ₹ 334</span>
                      <span> ₹ 5455</span>
                  </div>
              </div>
              <hr>
              <div class="billContainer">
                  <div></div>
                  <div class="allBillContainer">
                      <div class="itemNameDiv">
                              <span>Item Price</span>
                              <span>Addon</span>
                              <span>Sub total</span>
                              <span>Discount</span>
                              <span>Coupon Discount</span>
                              <span>VAT / Tax</span>
                              <span>Delivery Charge</span>
                              <p>Total</p>
                      </div>
                      <div class="ItemPriceDiv">
                              <span>₹85</span>
                              <span>₹85</span>
                              <span>₹90</span>
                              <span>₹10</span>
                              <span>₹00</span>
                              <span>₹15</span>
                              <span>₹20</span>
                              <p>₹105</p>
                      </div>
                  </div>
              </div>
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
                  ${allData.instagram ? '<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/instagram.png" alt="" class="icon">':''}
                  ${allData?.twitter ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/twitter.png" alt="" class="icon">':''}
                  ${allData?.linkedin ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/linkedin.png" alt="" class="icon">':''}
                  ${allData?.Pinterest ?'<img src="https://efood-admin.6amtech.com/public/assets/admin/img/img/pinterest.png" alt="" class="icon">':''}
              </div>
              <span class="Copyrighttxt">${allData?.copyrightContent ? allData?.copyrightContent :'Copyright 2024 Capri-Global. All right reserved'}</span>
          </main>
      </body>
      </html>`; // Clear inner HTML content when component mounts
    }
  }, [emailTXT, logoUrl, allData]);

  return <div className='min-w-[360px] max-w-[600px] w-full overflow-x-hidden' ref={itemChange}>OrderPlacement</div>;
};

export default OrderPlacement;
