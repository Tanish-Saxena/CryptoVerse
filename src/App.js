import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Zoom from "react-reveal/Zoom";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";
import Fade from "react-reveal";
const App = () => {
  return (
    <div className="app">
      <Fade left>
        <div className="navbar">
          <Navbar />
        </div>
      </Fade>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <Zoom top>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              CryptoVerse <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default App;
