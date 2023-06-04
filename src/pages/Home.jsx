/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import "./home.scss"
import cardImg from "../assets/images/card-img.jpg";
import link1 from "../assets/images/astro.svg.png";
import link2 from "../assets/images/tailwind.svg.png";
import link3 from "../assets/images/markdown.svg.png";
import link4 from "../assets/images/SVG.png";
import link5 from "../assets/images/Frame.png";
import Register from "../auth/Regsiter/Register";
import Login from "../auth/Login/Login";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Layout title={"Home Page"}>
        <section className="home">
          <div className="container">
            <div className="hero">
              <h2 className="hero_title">Jamstack Library</h2>
              <p className="hero_text">
                LibraryStatichunt is an open-source directory that enlists
                hundreds of themes, starters, and tools for static site
                generators submitted by the community.
              </p>
            </div>
            <div className="checkedBoxes">
              <div className="checkedBoxes_right">
                <div className="checkedBoxes_right-box">
                  <p>Free</p>
                  <span>184</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Premium</p>
                  <span>190</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Blog</p>
                  <span>76</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Boilerplate</p>
                  <span>16</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Business</p>
                  <span>136</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Documentation</p>
                  <span>11</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Ecommerce</p>
                  <span>28</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Blog</p>
                  <span>76</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Blog</p>
                  <span>76</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Blog</p>
                  <span>76</span>
                </div>
                <div className="checkedBoxes_right-box">
                  <p>Blog</p>
                  <span>76</span>
                </div>
              </div>
              <div className="checkedBoxes_left">
                <p>Sort by: </p>
                <select>
                  <option value="Default">Default </option>
                </select>
              </div>
            </div>
            <div className="cards">
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
              <Card
                cardImg={cardImg}
                cardTitile="Andromeda Astro"
                cardPrise="$79"
                cardText="by Themefisher"
                link1={link1}
                link2={link2}
                link3={link3}
                link4={link4}
                link5={link5}
              />
            </div>
          </div>
        </section>

        
      </Layout>
      
    </>
  );
};

export default Home;
