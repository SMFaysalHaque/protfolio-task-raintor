import CircleInsideBtn from "./buttons/CircleInsideBtn";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#00000003] rounded-bl-[30px] rounded-br-[30px] py-7 px-[35px]">
        <div className="flex justify-between">
          <p className="font-bwgradual font-extrabold text-[34px] leading-[34px] uppercase">
            devlop.me
          </p>
          <div className="flex justify-between gap-5">
            <ul className="flex items-center gap-[37px] font-grotesqueRegular leading-[18px]">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
            <CircleInsideBtn
              parentDivStyle={
                "flex items-center gap-[9px] font-grotesqueRegular leading-[18px] border border-black rounded-full"
              }
              circleStyle={"px-2 py-3 border border-black rounded-full"}
              textStyle={"py-5 pr-3"}
              textValue={"Start Project"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
