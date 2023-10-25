import { RxChevronDown } from "react-icons/rx";
const Item = (props) => {
  return (
    <div
      className={`flex flex-col items-center py-2 my-8 font-bold cursor-pointer w-[25rem] justify-between uppercase text-white tracking-widest `}
      onClick={() => props.onClick(props.type)}
    >
      {/* <img src={`/assets/images/controls/${props.name.split(' ').join('').toLowerCase()}.png`} className="w-8" /> */}
      <p className="flex justify-center w-full">
        <div className="flex items-center gap-3">
          {props.name}
          <div className=" bg-white p-[0.3rem] rounded-md text-black text-xs">4</div>
        </div>
        {props.active ? <div className="text-base absolute right-5">
          <RxChevronDown />
        </div>:<div className="text-base rotate-90 absolute right-5">
          <RxChevronDown />
        </div>}

      </p>
      {props.active && (
        <div className="mt-2 px-44 py-[1px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>
      )}
    </div>
  );
};

export default Item;
