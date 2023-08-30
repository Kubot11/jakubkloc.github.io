import React from "react";
import blue from "/src/assets/theme-blue.png";
import green from "/src/assets/theme-green.png";
import purple from "/src/assets/theme-purple.png";
import red from "/src/assets/theme-red.png";
interface ThemePickerProps {
  setStart: (value: boolean) => void;
  setLoadingBarFinished: (value: boolean) => void;
}

export default class ThemePicker extends React.Component<ThemePickerProps> {
  state = {
    selectedColor: "",
    isColorSelected: false,
    selectedElementIndex: -1, // Dodajemy indeks ostatnio wybranego elementu
  };

  changeThemeColor = (color: string): void => {
    document.documentElement.style.setProperty("--color", color);
  };

  handleColorSelection = (color: string, index: number): void => {
    this.setState({
      selectedColor: color,
      isColorSelected: true,
      selectedElementIndex: index, // Aktualizujemy indeks wybranego elementu
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
    return (
      <div className="absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-1 bg-black sm:fixed sm:gap-10 ">
        <h1 className="py-5 text-center text-5xl text-white sm:py-0 ">
          Wybierz motyw
        </h1>
        <div className="flex flex-col flex-wrap justify-center gap-12 sm:flex-row sm:gap-24 ">
          <div onClick={() => this.handleColorSelection("#006400", 0)}>
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 0
                  ? "border-2  border-white"
                  : "border-2  border-black"
              }`}
              src={green}
              alt=""
            />
          </div>
          <div onClick={() => this.handleColorSelection("#0198e1", 1)}>
            <img
              className={`w-40 sm:w-60    ${
                this.state.selectedElementIndex === 1
                  ? "border-2  border-white"
                  : "border-2   border-black"
              }`}
              src={blue}
              alt=""
            />
          </div>
          <div onClick={() => this.handleColorSelection("#800000", 2)}>
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 2
                  ? "border-2  border-white"
                  : " border-2  border-black"
              }`}
              src={red}
              alt=""
            />
          </div>
          <div onClick={() => this.handleColorSelection("#7f00ff", 3)}>
            <img
              className={`w-40 sm:w-60 ${
                this.state.selectedElementIndex === 3
                  ? "border-2  border-white"
                  : "border-2  border-black"
              }`}
              src={purple}
              alt=""
            />
          </div>
        </div>
        <button
          className={`w-1/2 py-4 text-white sm:py-0 ${
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
