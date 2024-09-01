import { useDispatch, useSelector } from "react-redux";
import {
  HamURL,
  YoutubeImg,
  UserIcon,
  Youtube_Search_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
      <div className="col-span-10 px-10">
        <div className="flex justify-center">
          <input
            className="w-1/2 border border-gray-500 rounded-l-2xl h-10 pl-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className="border border-gray-500 bg-slate-100 rounded-r-2xl p-2">
            Search
          </button>
        </div>
        <div className="ml-[230px] absolute bg-white py-2 px-5 w-[31.45rem] rounded-md shadow-md">
          <ul>
            {showSuggestions &&
              suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img alt="UserIcon" src={UserIcon} className="w-9 h-9" />
      </div>
    </div>
  );
};

export default Header;
