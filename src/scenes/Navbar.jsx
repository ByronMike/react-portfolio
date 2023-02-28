import { useState } from "react";
// To navigate to certains page of the page
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectePage }) => {
  // We lowercase the titles of Navbar
  const lowerCasePage = page.toLowerCaser();
  return (
    // Rappel : by default selectedPage is "home" (App.js) 
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}`}
    ></AnchorLink>
  )
};

const Navbar = ({ selectedPage, setSelectePage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState("false");
  const isAboveSmallScrenns = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={"z-40 w-full fixed top-0 py-6"}>
      {/* The second example uses quotes to define the className attribute value
      as a static string that is not interpolated from a JavaScript expression.
      The mx-auto and w-5/6 classes are fixed and will always be applied to the
      div element. In short, curly braces are used to interpolate a JavaScript
      expression within the className attribute value, while quotes are used to
      define a static string value. NOTE : curly braces would have worked as
      well !  */}
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>

        {/* { DESKTOP NAV} */}
        {isAboveSmallScrenns ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold"></div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};
