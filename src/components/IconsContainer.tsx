import React from "react";

interface IconsContainerProps {
  image1: string;
  image2: string;
  tooltipText1: string;
  tooltipText2: string;
}

export default class IconsContainer extends React.Component<IconsContainerProps> {
  state = {
    smallScreen: window.innerWidth < 640,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const smallScreen = window.innerWidth < 640;
    if (smallScreen !== this.state.smallScreen) {
      this.setState({ smallScreen });
    }
  };
  render() {
    const { image1, image2, tooltipText1, tooltipText2 } = this.props;
    const { smallScreen } = this.state;
    return (
      <div className={smallScreen ? "flex flex-col gap-y-4" : ""}>
        <div className="frame flex items-center   gap-4 p-4 px-8">
          <span
            data-text={tooltipText1}
            className={smallScreen ? "" : "tooltip w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]  flex items-center justify-center"}
          >
            <img
              className=" w-[60px] lg:w-[90px] "
              height="auto"
              src={image1}
              alt=""
            />
          </span>
          <span
            data-text={tooltipText2}
            className={smallScreen ? "" : "tooltip w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]  flex items-center justify-center"}
          >
            <img
              className=" w-[60px] lg:w-[90px]  "
              height="auto"
              src={image2}
              alt=""
            />
          </span>
        </div>
        {smallScreen ? (
          <p className="flex w-52  items-center justify-center rounded-sm border-2 border-solid border-black bg-[#ebebeb] px-2 py-4 text-left  text-sm dark:border-white  dark:bg-gray-800">
            {tooltipText1}
            <br /> <br />
            {tooltipText2}
          </p>
        ) : null}
      </div>
    );
  }
}
