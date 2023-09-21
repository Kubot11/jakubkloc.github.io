import React from "react";

export default class LoadingBar extends React.Component {
  upTo: number;
  counts: number;
  constructor(props: any) {
    super(props);
    this.upTo = 0;
    const updated: () => void = () => {
      const count = document.getElementById("counter");
      if (count != null) {
        this.upTo++;
        count.innerHTML = `${this.upTo}%`;
      }

      if (this.upTo === 100) {
        clearInterval(this.counts);
      }
    };

    this.counts = setInterval(updated, 27);
  }

  render(): JSX.Element {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="mx-auto my-12 w-3/5 max-w-lg animate-loading-bar-container">
          <div
            id="counter"
            className="mb-5 text-center text-6xl dark:text-custom-font"
          ></div>
          <div className="relative flex h-8 w-full skew-x-20 items-center justify-center overflow-hidden border-3 border-solid border-custom-loading-bar-border">
            <div className="absolute left-0 top-0 h-full animate-loading-bar-light dark:animate-loading-bar-dark "></div>
          </div>
        </div>
      </div>
    );
  }
}
