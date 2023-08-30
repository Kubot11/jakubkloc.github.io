import React from "react";
import email from "../assets/email-icon.png";
import github from "../assets/github-icon.png";
import linkedin from "../assets/linkedin-icon.png";

// interface ContactIconsProps {
//   className: string;
// }
export default class ContactIcons extends React.Component {
  render(): JSX.Element {
    // const { className } = this.props;
    return (
      <div className="contact-icons-animation absolute bottom-0  left-[-26px] mb-5 flex flex-col">
        <a className="bigger-icon-hover h-14 w-20">
          <img className="h-9 w-9 duration-500" src={email} />
        </a>

        <a className="bigger-icon-hover h-14 w-20">
          <img className="h-9 w-9 duration-500" src={github} />
        </a>
        <a className="bigger-icon-hover h-14 w-20">
          <img className="h-9 w-9 duration-500" src={linkedin} />
        </a>
      </div>
    );
  }
}
