  "use client";

  import { useState, useEffect } from "react";

  import Nav from "../components/Nav";
  import Hero from "../components/Hero";
  import Giving from "../components/Giving";
  import Celebrate from "../components/Celebrate";
  import Share from "../components/Share";
  import Gifts from "../components/Gifts";
  import SendWishes from "../components/SendWishes";
  import Footer from "../components/Footer";

  export default function Home() {
      return (
          <div className={`overflow-hidden w-screen h-screen bg-[#251819] overflow-y-scroll`}>
              <header>
                  <Nav />
              </header>

              <Hero />
              <Giving />
              <Celebrate />
              <Share />
              <Gifts />
              <SendWishes />

              <footer>
                  <Footer />
              </footer>
          </div>
      );
  }