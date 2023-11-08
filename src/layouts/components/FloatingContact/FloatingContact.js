import React from "react";

import Image from "../../../components/Image/Image";
import zalo from "../../../assets/images/zalo.svg";
import messenger from "../../../assets/images/messenger.png";
import phone from "../../../assets/images/phone.png";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-14 right-8 flex flex-col items-center">
      <div className="w-14 h-14 p-2 mb-2 bg-white border-[#ccc] border-[1px] rounded-2xl cursor-pointer">
        <Image
          className="w-full h-full"
          src={messenger}
          alt="messenger button"
        />
      </div>
      <div className="w-12 h-12 mb-2 cursor-pointer">
        <Image className="w-full h-full" src={zalo} alt="zalo button" />
      </div>
      <div className="w-14 h-14 mb-2 cursor-pointer">
        <Image className="w-full h-full" src={phone} alt="zalo button" />
      </div>
    </div>
  );
};

export default FloatingContact;
