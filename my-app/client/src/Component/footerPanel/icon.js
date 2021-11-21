// import React from "reaxt";
import { Icon, withBaseIcon } from "react-icons-kit";
import { heartO } from "react-icons-kit/fa/heartO";
import { eye } from "react-icons-kit/fa/eye";
import { sliders } from "react-icons-kit/fa/sliders";

import { RiTelegramLine } from "react-icons/ri";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { FaViber } from "react-icons/fa";
import {angleDoubleUp} from 'react-icons-kit/fa/angleDoubleUp';
import {AiOutlineDelete} from "react-icons/ai";


export const IconHeartO = (props) => <Icon icon={heartO} size={props.size} style={props.style} />;
export const IconEye = (props) => <Icon icon={eye} size={props.size} />;
export const IconSliders = (props) => <Icon icon={sliders} size={props.size} style={props.style}/>;

export const IconAngleDoubleUp = (props) => {
  const SideIconContainer = withBaseIcon({
    size: props.size,
    style: props.style,
    className: props.className,
  });

  return <SideIconContainer icon={angleDoubleUp} />;
};

export const IconFaViber = (props) => (
  <i className="iViber">
    <FaViber
      className={props.className}
      style={props.style}
      size={props.size}
    />
  </i>
);

export const IconRiTelegramLine = (props) => (
  <i className="iIconRiTelegramLine">
    <RiTelegramLine 
      className={props.className}
      style={props.style}
      size={props.size}
    />
  </i>
);

export const IconWhatsapp = (props) => {
  const SideIconContainer = withBaseIcon({
    size: props.size,
    style: props.style,
    className: props.className,
  });

  return <SideIconContainer icon={whatsapp} />;
};

export const IconAiOutlineDelete = (props) => (
  <i className="iViber">
    <AiOutlineDelete
      className={props.className}
      style={props.style}
      size={props.size}
    />
  </i>
);


