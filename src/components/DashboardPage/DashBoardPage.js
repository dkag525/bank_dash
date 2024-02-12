import React from "react";
import "../DashboardPage/DashBoardPage.css";
import Chip_Card from "../../assets/svg/Chip_Card.svg";
import Chip_Card2 from "../../assets/svg/Chip_Card2.svg";
import Circle_icon from "../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";

const DashBoardPage = () => {
  const AtmCardDetails = [
    {
      id: 1,
      balance: "Balance",
      prices: "$5,756",
      chipCardIcon: Chip_Card,
      CardHolders: "CARD HOLDER",
      CardHoldersNames: "Eddy Cusuma",
      validthrou: "VALID THRU",
      validDate: "12/22",
      Circle_Icons: Circle_icon,
      backgroundColors: "#2d60ff",
      colors: "white",
      PrimaryColors: "#e5e5e5",
    },
    {
      id: 2,
      balance: "Balance",
      prices: "$5,756",
      chipCardIcon: Chip_Card2,
      CardHolders: "CARD HOLDER",
      CardHoldersNames: "Eddy Cusuma",
      validthrou: "VALID THRU",
      validDate: "12/22",
      Circle_Icons: Circle_icon2,
      backgroundColors: "white",
      colors: "white",
      PrimaryColors: "#343c6a",
    },
    {
      id: 3,
      balance: "Balance",
      prices: "$5,756",
      chipCardIcon: Chip_Card2,
      CardHolders: "CARD HOLDER",
      CardHoldersNames: "Eddy Cusuma",
      validthrou: "VALID THRU",
      validDate: "12/22",
      Circle_Icons: Circle_icon2,
      backgroundColors: "white",
      colors: "white",
      PrimaryColors: "#343c6a",
    },
    {
      id: 4,
      balance: "Balance",
      prices: "$5,756",
      chipCardIcon: Chip_Card2,
      CardHolders: "CARD HOLDER",
      CardHoldersNames: "Eddy Cusuma",
      validthrou: "VALID THRU",
      validDate: "12/22",
      Circle_Icons: Circle_icon2,
      backgroundColors: "white",
      colors: "white",
      PrimaryColors: "#343c6a",
    },
  ];

  return (
    <div className="middle-container-topSection">
      <div className="ATM-Card-Section">
        <div className="Head-Section">
          <div className="Head-Section-left">
            <h4 className="mycards inter primary-color">My Cards</h4>
          </div>
          <div className="Head-Section-right">
            <h5 className="SeeAll inter primary-color">See All</h5>
          </div>
        </div>
        <div className="ATM-Card-Parrent">
          <div className="ATM-Card">
            {AtmCardDetails.map((el, i) => {
              return (
                <div className="Complete-ATM-Card" key={i}>
                  <div className="ATM-Card-1 primary-background">
                    <div className="ATM-Card-Top-Sec">
                      <div className="Balance-Sec lato">
                        <div className="Balance">Balance</div>
                        <div className="price">$5,756</div>
                      </div>
                      <div>
                        <img
                          className="Chip-Card_icon"
                          src={Chip_Card}
                          alt="Chip-Card_icon"
                        />
                      </div>
                    </div>
                    <div className="ATM-Card-mid-Sec lato">
                      <div>
                        <div className="Card-holder card-details">
                          CARD HOLDER
                        </div>
                        <div className="Card-holder-name Crd-delails">
                          Eddy Cusuma
                        </div>
                      </div>
                      <div>
                        <div className="Valid-Thru card-details">
                          VALID THRU
                        </div>
                        <div className="Valid-date Crd-delails">12/22</div>
                      </div>
                    </div>
                  </div>
                  <div className="ATM-Card-bottom-Sec">
                    <div className="ATM-Card-Number lato">
                      3778**** ****1234
                    </div>
                    <div className="circle_image">
                      <img
                        className="Circle_icon"
                        src={Circle_icon}
                        alt="Circle_icon"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Recent-Transaction-Section">Z</div>
    </div>
  );
};

export default DashBoardPage;
