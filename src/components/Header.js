import { useDispatch } from "react-redux";
import { HamURL, YoutubeImg, UserIcon } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg rounded-lg">
      <div className="flex gap-6 col-span-1">
        <img
          alt="Hamburger"
          src={HamURL}
          className="w-9 h-9 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img alt="Youtube logo" src={YoutubeImg} className=" h-9" />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          className="w-1/2 border border-gray-500 rounded-l-2xl"
          type="text"
        />
        <button className="border border-gray-500 bg-slate-100 rounded-r-2xl p-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img alt="UserIcon" src={UserIcon} className="w-9 h-9" />
      </div>
    </div>
  );
};

export default Header;
