import { RxChevronDown } from "react-icons/rx";
const Item = (props) => {
  return (
    <div
      className={`flex flex-col items-center py-2 mt-5 mb-2 font-bold cursor-pointer w-[25rem] justify-between uppercase text-white tracking-widest `}
      onClick={() => props.onClick(props.type)}
    >
      {/* <img src={`/assets/images/controls/${props.name.split(' ').join('').toLowerCase()}.png`} className="w-8" /> */}
      <p className="flex px-12 w-full">
        <div className="flex items-center gap-3">
          {props.name}
          <div className=" bg-white px-2 py-1 rounded-md text-black text-xs">4</div>
        </div>

      </p>
      {props.active && (
        <div className="mt-2 px-44 py-[1px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>
      )}
    </div>
  );
};

export default Item;
