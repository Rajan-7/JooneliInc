import React from "react";
import TradingHeader from "./TradingHeader";
import Footer from "../Footer/Footer";
import "./trading.css";

const Trading = () => {
  return (
    <>
      <TradingHeader />
      <div className="trading-section">
        <div className="bank-heading--section">
          <div className="bank-system--heading">
            <h2>Jooneli Trading</h2>
            <h3>An Accounting Integrated System for Business</h3>
          </div>
          <div className="bank-system--details">
            Jooneli Trading software refers to computer programs that are
            designed to facilitate the buying and selling of financial
            instruments such as stocks, bonds, and currencies.
          </div>
        </div>
        <div className="bank-features--section">
          <div className="offerings">Jooneli Trading Features:</div>
          <div className="offerings-list">
            <div className="left-side--list">
              <li>
                <i class="fa-regular fa-hard-drive"></i>
                <span>Provides market data</span>
              </li>
              <li>
                <i class="fa-solid fa-layer-group"></i>
                <span>Order Management</span>
              </li>
              <li>
                <i class="fa-solid fa-gears"></i>
                <span>Technical Analysis</span>
              </li>
              <li>
                <i class="fa-solid fa-chart-line"></i>
                <span>Trading Strategics</span>
              </li>
              <li>
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>Risk Management</span>
              </li>
            </div>
            <div className="right-side--list">
              <li>
                <i class="fa-solid fa-layer-group"></i>
                <span>Trading platforms</span>
              </li>
              <li>
                <i class="fa-solid fa-user-gear"></i>
                <span>Account Management</span>
              </li>
              <li>
                <i class="fa-solid fa-mobile"></i>
                <span>Mobile trading</span>
              </li>
              <li>
                <i class="fa-solid fa-headset"></i>
                <span>Customer Support</span>
              </li>
              <li>
                <i class="fa-solid fa-book-open"></i>
                <span>Education & Training</span>
              </li>
            </div>
          </div>
        </div>
        <div className="main-content--section">
          <div className="main-heading">
            Why 360 Core Banking System<span className="color">?</span>
          </div>
          <p className="details">
            Jooneli Trading software is a computer programs or applications that
            enable to analyze financial markets, manage their trading accounts,
            and execute trades automatically or manually. It ensires efficiency,
            accuracy, accessibility, customization and back testing.
          </p>
          <div className="box-content">
            <div className="content-one">
              <img className="image-img" src="/image/coa.jpg" alt="" />
              <div className="heading-text">
                <h5>Chart Of Accounts</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Charts Of Accounts</div>
                <div className="image-description">
                  It typically includes a number of different categories of
                  accounts, such as assets, liabilities, equity, revenues, and
                  expenses. The accounts are assigned a unique number or code
                  for easy reference and organization.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/inventory.jpeg" alt="" />
              <div className="heading-text">
                <h5>Inventory</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Inventory</div>
                <div className="image-description">
                  In our trading, effective inventory management involves
                  balancing the need to have sufficient inventory to meet
                  customer demand with the need to minimize inventory holding
                  costs.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/ivlastok.webp" alt="" />
              <div className="heading-text">
                <h5>Inventory Voucher</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Inventory Voucher</div>
                <div className="image-description">
                  It is an accounting document used to record the movement of
                  inventory items in a business. It includes voucher number,
                  date. product details, suppliers details, discounts etc.
                </div>
              </div>
            </div>

            <div className="content-one">
              <img className="image-img" src="/image/glimpse.webp" alt="" />
              <div className="heading-text">
                <h5>Glimpse</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Glimpse</div>
                <div className="image-description">
                  <li> Trial Balance</li>
                  <li> Balance Sheet</li>
                  <li> Profit And Loss</li>
                  <li> Stock Sumamry</li>
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/reports.jpg" alt="" />
              <div className="heading-text">
                <h5>Reports</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Reports</div>
                <div className="image-description">
                  The reports can be used to stay informed about market trends,
                  identify investment opportunities, and manage risk. The
                  traders can make decisions about when to buy and sell
                  securities, and how to adjust their investment portfolios over
                  time.
                </div>
              </div>
            </div>
            <div className="content-one ">
              <img className="image-img" src="/image/bps.png" alt="" />
              <div className="heading-text">
                <h5>Batch Transactions</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Batch Transactions</div>
                <div className="image-description">
                  It executes multiple trades simultaneously, typically through
                  a single order. It is a useful tool for looking to optimize
                  their trading strategies and manage risk more effectively
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trading;
