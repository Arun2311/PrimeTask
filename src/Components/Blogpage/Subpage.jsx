import React from 'react'
import Pageone from "./pageone/pageone.jsx";
import Pagetwo from "./pagetwo/pagetwo.jsx";
import Pagethree from "./pagethree/pagethree.jsx";
import Pagefour from "./pagefour/pagefour.jsx";
import Pagefive from "./pagefive/pagefive.jsx";
import Navbar from '../NavbarComp/Navbar.jsx';
export default function Subpage() {
  return (
    <div>
        <Navbar/>
            <Pageone />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive />
    </div>
  )
}
