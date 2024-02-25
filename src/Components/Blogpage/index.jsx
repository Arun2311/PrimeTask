import React from "react";
import Pageone from "./pageone/pageone.jsx";
import Pagetwo from "./pagetwo/pagetwo.jsx";
import Pagethree from "./pagethree/pagethree.jsx";
import Pagefour from "./pagefour/pagefour.jsx";
import Pagefive from "./pagefive/pagefive.jsx";
import Head from "../head/Head.jsx";
import Body from "../Body/Body.jsx";
import Navbar from "../NavbarComp/Navbar.jsx";

export default function BlogPageAll() {
  return (
    <div>
      <Navbar/>
      <Head />
      <Body />
      {/* <Pageone />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive /> */}
    </div>
  );
}
