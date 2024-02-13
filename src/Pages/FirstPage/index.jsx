import Navbar from "../../Components/Navbar";
import { Select, ConfigProvider } from "antd";
import "./firstpage.css";

const FirstPage = () => {
  return (
    <div>
      <Navbar />
      <div className="form">
        <div className="left-form">
          <h1
            style={{
              color: "#5cc2ed",
              fontSize: "230%",
              marginBottom: "-10px",
            }}
          >
            Unlock Exclusive Benefits
          </h1>
          <form>
            <div className="form-contents">
              <label style={{ fontSize: "small", color: "#323233" }}>
                PHONE NUMBER
              </label>
              <div className="phone-selector">
                <select
                  required
                  style={{
                    width: "40%",
                    borderRadius: "40px",
                    height: "30px",
                    border: "1px solid grey",
                  }}
                >
                  <option value="India">+91 India</option>
                  <option value="US">+1 US</option>
                  <option value="UK">+44 UK</option>
                </select>
                <input
                  required
                  style={{
                    width: "40%",
                    borderRadius: "40px",
                    height: "25px",
                    border: "1px solid grey",
                  }}
                />
              </div>
              <label style={{ fontSize: "small", color: "#323233" }}>
                NAME
              </label>
              <input
                required
                style={{
                  width: "81%",
                  borderRadius: "40px",
                  height: "25px",
                  border: "1px solid grey",
                }}
              />
              <label style={{ fontSize: "small", color: "#323233" }}>
                EMAIL [OPTIONAL]
              </label>
              <input
                style={{
                  width: "81%",
                  borderRadius: "40px",
                  height: "25px",
                  border: "1px solid grey",
                }}
              />
              <button
                style={{
                  backgroundColor: "#5cc2ed",
                  color: "white",
                  borderRadius: "40px",
                  width: "82%",
                  marginTop: "10px",
                  height: "30px",
                  border: "1px solid grey",
                }}
              >
                CONTINUE
              </button>
              <p style={{ fontSize: "10px", color: "grey" }}>
                Get ready to receive a secret code [OTP] on your phone
              </p>
            </div>
          </form>
        </div>

        <div className="right-form">
          <div className="celeb-image">
            <img
              src="celeb.png"
              alt=""
              className="image
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
