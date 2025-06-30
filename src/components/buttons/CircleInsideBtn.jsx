import RightArrowBlack from "../svg/RightArrowBlack";

export default function CircleInsideBtn({
  parentDivStyle,
  circleStyle,
  textStyle,
  textValue,
}) {
  return (
    <>
      <div className={parentDivStyle}>
        <div className={circleStyle}>
          <RightArrowBlack />
        </div>
        <p className={textStyle}>{textValue}</p>
      </div>
    </>
  );
}
