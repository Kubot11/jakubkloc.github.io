import React from "react";

interface IconsContainerProps {
  image1: string;
  image2: string;
  tooltipText1: string;
  tooltipText2: string;
}


export default class IconsContainer extends React.Component<IconsContainerProps> {
  state = {
    isMobile: window.innerWidth < 640,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };
  render() {
    const { image1, image2, tooltipText1, tooltipText2 } = this.props;
    const { isMobile } = this.state;
    return (
      <div className={isMobile ? "flex flex-col gap-y-4" : ""}>
        <div className="frame flex items-center   gap-4 p-4 px-8">
          <span
            data-text={tooltipText1}
            className={isMobile ? "" : "tooltip tooltip-left"}
          >
            <img
              className=" w-[60px] sm:w-[50px] lg:w-[90px]"
              height="auto"
              src={image1}
              alt=""
            />
          </span>
          <span data-text={tooltipText2} className={isMobile ? "" : "tooltip"}>
            <img
              className=" w-[60px] sm:w-[50px] lg:w-[90px]"
              height="auto"
              src={image2}
              alt=""
            />
          </span>
        </div>
        {isMobile ? (
          <p className="flex w-52 items-center justify-center  rounded-sm border-2 border-solid border-white bg-gray-800 px-2  py-4 text-left  text-sm">
            {tooltipText1}
            <br /> <br />
            {tooltipText2}
          </p>
        ) : null}
      </div>
    );
  }
}
