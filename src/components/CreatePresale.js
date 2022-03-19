import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function CreatePresale() {
  const [showCreateSale, setShowCreateSale] = useState(false);
  const [tokenAddress, setTokenAddress] = useState();
  const [swapRate, setSwapRate] = useState();
  const [lauchRate, setLaunchRate] = useState();
  const [minBuy, setMinBuy] = useState();
  const [maxBuy, setMaxBuy] = useState();
  const [softCap, setSoftCap] = useState();
  const [hardCap, setHardCap] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [fundLP, setFundLP] = useState();

  const ShowCreateSale = () => {
    if (!showCreateSale) {
      setShowCreateSale(true);
    } else {
      setShowCreateSale(false);
    }
  };

  const IsUndefined = (tap) => {
    if (tap === undefined) {
      return true;
    } else {
      return false;
    }
  };
  const CreateSale = async () => {
    if (
      IsUndefined(tokenAddress) ||
      IsUndefined(swapRate) ||
      IsUndefined(lauchRate) ||
      IsUndefined(minBuy) ||
      IsUndefined(maxBuy) ||
      IsUndefined(softCap) ||
      IsUndefined(hardCap) ||
      IsUndefined(startTime) ||
      IsUndefined(endTime) ||
      IsUndefined(fundLP)
    ) {
      alert(" Please enter vaild details");
    } else {
      console.log(
        !tokenAddress &&
          !swapRate &&
          !lauchRate &&
          !minBuy &&
          !maxBuy &&
          !softCap &&
          !hardCap &&
          !startTime &&
          !endTime &&
          !fundLP
      );
      // console.log(CreateSale)
    }
  };
  return (
    <>
      <section>
        <div className="presale-container">
          <div
            className="presale-content d-flex align-items-center justify-content-between"
            style={{
              border: "2px solid",
              fontSize: "17px",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <p
              className="presale"
              style={{ padding: "10px 15px", fontSize: "20px" }}
            >
              Create Presale
            </p>
            <AiFillCaretDown
              size={27}
              color="black"
              style={{
                border: "solid",
                background: "white",
                marginRight: "15px",
                cursor: "pointer",
              }}
              onClick={() => ShowCreateSale()}
            />
          </div>
        </div>
      </section>

      <section>
        {showCreateSale ? (
          <div
            className="showpresale-container"
            style={{ border: "1px solid", boxSizing: "border-box " }}
          >
            <p className="required" style={{ color: "red", fontSize: "14px" }}>
              Reqiured(*)
            </p>
            <div className="showpresale">
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Token Address{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Swap Rate{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  123456"
                  value={swapRate}
                  onChange={(e) => setSwapRate(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Launch Rate{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  123456"
                  value={lauchRate}
                  onChange={(e) => setLaunchRate(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Min Buy{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Min amount to spend for buy token"
                  value={minBuy}
                  onChange={(e) => setMinBuy(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Max Buy{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Max amount to spend for buy token"
                  value={maxBuy}
                  onChange={(e) => setMaxBuy(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Softcap{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  2"
                  value={softCap}
                  onChange={(e) => setSoftCap(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Hardcap{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  4"
                  value={hardCap}
                  onChange={(e) => setHardCap(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  StartTime{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="StartTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  EndTime{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="EndTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Percent Funds To Add To LP{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="75%"
                  value={fundLP}
                  onChange={(e) => setFundLP(e.target.value)}
                />
              </div>
              <button
                className="submit-presale"
                style={{
                  background: "white",
                  border: "none",
                  width: "100%",
                  marginTop: "20px",
                  height: "40px",
                }}
                onClick={CreateSale}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>

      <section>
        <div
          className="community-container d-flex align-items-center justify-content-between"
          style={{
            paddingTop: "20px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div className="community-content" style={{ paddingBottom: "20px" }}>
            <h1 className="woc">Welcome to our community</h1>
          </div>
          <div
            className="community-links"
            style={{ paddingBottom: "10px", paddingTop: "30px" }}
          >
            <ul>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="https://t.me/MemeForceOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="https://twitter.com/MemeForce_LP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Discord
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="https://twitter.com/MemeForce_LP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Sea
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Sandbox
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
