import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const video = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" p-4 mx-4 my-2">
      <iframe
        className="rounded-xl shadow-xl"
        width="1000"
        height="560"
        src={"https://www.youtube.com/embed/" + video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchPage;
