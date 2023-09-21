import React from "react";
import blue from "/src/assets/theme-blue.png";
import green from "/src/assets/theme-green.png";
import purple from "/src/assets/theme-purple.png";
import red from "/src/assets/theme-red.png";

import blueLight from "/src/assets/theme-blue-light.png";
import greenLight from "/src/assets/theme-green-light.png";
import purpleLight from "/src/assets/theme-purple-light.png";
import redLight from "/src/assets/theme-red-light.png";

interface ThemePickerProps {
  setStart: (value: boolean) => void;
  setLoadingBarFinished: (value: boolean) => void;
}

export default class ThemePicker extends React.Component<ThemePickerProps> {
  state = {
    selectedColor: "",
    isColorSelected: false,
    selectedElementIndex: -1,
  };

  changeThemeColor = (color: string): void => {
    document.documentElement.style.setProperty("--color", color);
  };

  handleColorSelection = (color: string, index: number): void => {
    this.setState({
      selectedColor: color,
      isColorSelected: true,
      selectedElementIndex: index,
    });
  };

  setNewTheme = (): void => {
    this.changeThemeColor(this.state.selectedColor);
    this.props.setStart(true);

    setTimeout(() => {
      this.props.setLoadingBarFinished(true);
    }, 3500);
  };

  render(): JSX.Element {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return (
      <div className=" absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-1 bg-white dark:bg-black sm:fixed sm:gap-10 ">
        <h1 className="py-5 text-center text-5xl dark:text-white  sm:py-0 ">
          Wybierz motyw
        </h1>
        <div className="flex flex-col flex-wrap justify-center gap-12 sm:flex-row sm:gap-24 ">
          {/* GREEN THEME */}
          <div
            onClick={() =>
              this.handleColorSelection(
                "hsl(120, 100%, 19.607843137254903%)",
                0,
              )
            }
          >
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 0
                  ? "outline outline-red-600   dark:outline-1 dark:outline-white"
                  : ""
              }`}
              src={isDarkMode ? green : greenLight}
              alt=""
            />
          </div>
          {/* BLUE THEME */}
          <div
            onClick={() =>
              this.handleColorSelection(
                "hsl(199.55357142857144, 99.11504424778761%, 44.31372549019608%)",
                1,
              )
            }
          >
            <img
              className={`w-40 sm:w-60    ${
                this.state.selectedElementIndex === 1
                  ? "outline outline-red-600   dark:outline-1 dark:outline-white"
                  : ""
              }`}
              src={isDarkMode ? blue : blueLight}
              alt=""
            />
          </div>
          {/* RED THEME */}
          <div onClick={() => this.handleColorSelection("#800000", 2)}>
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 2
                  ? "outline outline-red-600   dark:outline-1 dark:outline-white"
                  : ""
              }`}
              src={isDarkMode ? red : redLight}
              alt=""
            />
          </div>
          {/* PURPLE THEME */}
          <div onClick={() => this.handleColorSelection("#7f00ff", 3)}>
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 3
                  ? "outline outline-red-600   dark:outline-1 dark:outline-white"
                  : ""
              }`}
              src={isDarkMode ? purple : purpleLight}
              alt=""
            />
          </div>
        </div>
        <button
          className={`w-1/2 py-4 dark:text-white sm:py-0 ${
            this.state.isColorSelected
              ? "cursor-custom-action"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={this.setNewTheme}
          disabled={!this.state.isColorSelected}
        >
          Zatwierdź
        </button>
      </div>
    );
  }
}
