import React from "react";
import InfoPerso from "./InfoPerso";

function Header() {
  return (
    <div className="d-flex justify-content-space-around">
      <InfoPerso />
      <div className="text-center border w-50 border-black">
        <h2>Mon Avatar</h2>
      </div>
    </div>
  );
}

export default Header;
