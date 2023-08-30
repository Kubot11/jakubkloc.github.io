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
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="animate-loading-bar-container max-w-lg my-12 mx-auto w-3/5">
          <div
            id="counter"
            className="text-center mb-5 text-6xl dark:text-custom-font"
          ></div>
          <div className="relative w-full h-8 border-solid border-3 border-custom-loading-bar-border flex items-center justify-center overflow-hidden skew-x-20">
            <div className="absolute left-0 top-0 h-full animate-loading-bar "></div>
          </div>
        </div>
      </div>
    );
  }
}
