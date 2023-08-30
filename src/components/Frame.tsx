import React, { type ReactNode } from "react";

interface FrameProps {
  thickness?: string; // thickness of the corners
  cornersSize?: string; // length of the corners lines
  cornersOffsets?: string; // distance between the content frame and the corners after hovering (higher value means smaller distance)
  children: ReactNode;
}

export default class Frame extends React.Component<FrameProps> {
  render(): JSX.Element {
    const {
      thickness = "4px",
      cornersSize = "40px",
      cornersOffsets = "5%",
    } = this.props;
    return (
      <div
        className="frame flex "
        style={
          {
            "--thickness": thickness,
            "--corners-size": cornersSize,
            "--corners-offsets": cornersOffsets,
          } as any
        }
      >
        {this.props.children}
      </div>
    );
  }
}
