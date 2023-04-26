import React, { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkX } from "react-icons/bs";
import { useEffect } from "react";

interface BookmarkButtonProps {
  id: string;
  newLaunchId?: string;
  removeNewLaunch?: (newLaunchId: string) => void;
}

const BookmarkButton = (props: BookmarkButtonProps) => {
  if (!props.id) return null;
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const getMember = async () => {
      const response = await fetch(`/api/members/${props.id}`);
      const data = await response.json();
      const bookmarks = data.map((d: { _id: string }) => d._id);
      if (props.newLaunchId && bookmarks.includes(props.newLaunchId)) {
        setIsBookmarked(true);
      }
    };
    getMember();
  }, [props.id, props.newLaunchId]);

  const toggleBookmark = async () => {
    console.log("toggleBookmark fired!");
    // const token = localStorage.getItem("token");
    const response = await fetch(`/api/members/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ bookmarkId: props.newLaunchId }),
    });
    console.log(response);
    if (response.ok) {
      setIsBookmarked(!isBookmarked);
      if (props.removeNewLaunch) {
        props.removeNewLaunch(props.newLaunchId as string);
      }
    }
  };

  return (
    <>
      {isBookmarked ? (
        <button
          onClick={toggleBookmark}
          className="flex flex-col text-green-600 items-center hover:text-red-500 transition-colors duration-200"
        >
          <BsBookmarkCheckFill size="1.5rem" className=" accent-white mb-1" />
        </button>
      ) : (
        <button
          onClick={toggleBookmark}
          className="flex flex-col items-center text-red-600 hover:text-green-600 transition-colors duration-200"
        >
          <BsBookmarkX size="1.5rem" className=" accent-white mb-1" />
        </button>
      )}

      {/* <button onClick={toggleBookmark}>
        {isBookmarked ? <BsBookmarkX className="" /> : <BsBookmarkCheckFill />}
      </button> */}
    </>
  );
};

export default BookmarkButton;
