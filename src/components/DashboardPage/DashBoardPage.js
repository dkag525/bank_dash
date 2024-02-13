import React from "react";
import "../DashboardPage/DashBoardPage.css";
import Chip_Card from "../../assets/svg/Chip_Card.svg";
import Chip_Card2 from "../../assets/svg/Chip_Card2.svg";
import Circle_icon from "../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";
import Deposite_icon_1 from "../../assets/svg/deposite_icon_1.svg";
import Deposite_icon_2 from "../../assets/svg/deposite_icon_2.svg";
import Deposite_icon_3 from "../../assets/svg/deposite_icon_3.svg";

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

  const TranSactionDetails = [
    {
      id: 1,
      img: Deposite_icon_1,
      depositeFrom: "Deposite from my Card",
      depositeDate: "28 January 2021",
      depositeAmount: "-$582",
    },
    {
      id: 2,
      img: Deposite_icon_2,
      depositeFrom: "Deposite Paypal",
      depositeDate: "25 January 2021",
      depositeAmount: "-$2,500",
    },
    {
      id: 3,
      img: Deposite_icon_3,
      depositeFrom: "Jemi Wilson",
      depositeDate: "21 January 2021",
      depositeAmount: "-$5,400",
    },
  ];

  return (
    <div className="container">
      <div className="financial-detail-section">
        <div className="my-cards">
          <div className="card-header">
            <h2>My Cards</h2>
            <span>See All</span>
          </div>
          <div className="my-cards-body">
            <div className="card-scroller">
              <div className="cards"></div>
              <div className="cards"></div>
              <div className="cards"></div>
              <div className="cards"></div>
              <div className="cards"></div>
              <div className="cards"></div>
            </div>
          </div>
        </div>
        <div className="my-transaction"></div>
      </div>
    </div>
  );
};

export default DashBoardPage;
