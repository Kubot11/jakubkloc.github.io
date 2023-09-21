import React from "react";

interface NextBtnProps {
  isRight?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

export default class NextBtn extends React.Component<NextBtnProps> {
  render(): JSX.Element {
    const onClick = this.props.onClick ?? false;
    const isRight = this.props.isRight ?? false;
    const isMobile = this.props.isMobile ?? false;
    const isScrolled = this.props.isScrolled ?? false;

    const mobileArrowClass =
      "inline-block rotate-[225deg] border-t-8 border-l-8 border-t-custom-up-arrow border-l-custom-down-arrow   p-3 self-center" +
      (isScrolled ? "  animate-brightening" : " invisible");
    const leftArrowClass =
      "next-button border-t-8 border-l-8 border-t-custom-up-arrow border-l-custom-down-arrow sm:left-2  md:left-5  sm:top-5 md:top-10 animate-brightening";
    const rightArrowClass =
      "next-button-right border-r-8 border-b-8 border-r-custom-up-arrow border-b-custom-down-arrow sm:left-[8px]  md:left-0  sm:top-[7px] md:top-[4px] lg:top-[12px]  top-[0px] left-[2px]";

    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    if (isMobile) {
      return <i onClick={handleClick} className={mobileArrowClass}></i>;
    }

    return (
      <i
        id="nextButton"
        className={
          " relative inline-block  sm:p-3  md:p-5 lg:p-7  " +
          (isRight ? rightArrowClass : leftArrowClass)
        }
      >
        {" "}
      </i>
    );
  }
}
