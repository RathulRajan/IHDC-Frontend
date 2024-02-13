import { Select } from "antd";

import Header from "../../Components/Navbar";
import CardData from "../../Components/Card";
import "./secondpage.css";

const SecondPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="second-row">
        <div className="spans">
          <span>Home </span>
          <span>Dash Board </span>
          <span>Products</span>
          <span>Transactions</span>
          <span>Journal</span>
        </div>
        <Select
          className="select"
          defaultValue="Home"
          placeholder="Home"
          style={{
            width: 300,
            color: "green",
            textAlign: "center",
          }}
          options={[
            {
              value: "Home",
              label: "Home",
            },
            {
              value: "Dash Board",
              label: "Dash Board",
            },
            {
              value: "Products",
              label: "Products",
            },
            {
              value: "Transactions",
              label: "Transactions",
            },
            {
              value: "Journal",
              label: "Journal",
            },
          ]}
        />
      </div>
      <div className="third-row">
        <div className="user-details">
          <i class="fa-solid fa-user" style={{ textAlign: "center" }}></i>
          <p style={{ fontSize: "small", marginTop: "-2px" }}>Joseph Lazer</p>
        </div>
      </div>
      <div className="fourth-row">
        <div className="first-div">
          <div className="title-div">
            <h1 style={{ fontWeight: "400" }}>New Arrival</h1>
            <p>Join Today</p>
          </div>
          <div className="card-info">
            <img src="membership.jpg" alt="" style={{ width: "300px" }} />
            <button
              style={{
                color: "#19b6ff",
                borderRadius: "40px",
                width: "250px",
                marginTop: "10px",
                height: "40px",
                border: "1px solid grey",
                fontSize: "18px",
              }}
            >
              JOIN NOW
            </button>
          </div>
        </div>
        <div
          className="second-div"
          style={{ marginTop: "80px", marginLeft: "50px" }}
        >
          <div className="heading">
            <h1
              style={{
                color: "#31b092",
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              Unlock Premium Features Now
            </h1>
            <div className="carousal">
              <CardData />
            </div>
            <div
              className="button-div"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  color: "white",
                  borderRadius: "40px",
                  width: "250px",
                  marginTop: "10px",
                  height: "40px",
                  border: "1px solid #50d9b9",
                  fontSize: "18px",
                  backgroundColor: "#50d9b9",
                }}
              >
                UNLOCK NOW
              </button>
              <button
                style={{
                  color: "white",
                  borderRadius: "40px",
                  width: "200px",
                  marginTop: "10px",
                  height: "40px",
                  border: "1px solid #50d9b9",
                  fontSize: "18px",
                  backgroundColor: "#50d9b9",
                }}
              >
                DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
