import React from "react";
import * as Icons from "../components/icons";
import Photo from "../components/photo";

export default {
  title: "Icons",
};

export const Icon = {
  render: () => (
    <div className="icons">
      <Icons.ArrowBottom />
      <Icons.Bookmark />
      <Icons.BookmarkFill />
      <Icons.Emoji />
      <Icons.Explore />
      <Icons.ExplorerFill />
      <Icons.Gif />
      <Icons.Home />
      <Icons.HomeFill />
      <Icons.Like />
      <Icons.Lists />
      <Icons.ListsFill />
      <Icons.Media />
      <Icons.Messages />
      <Icons.MessagesFill />
      <Icons.More />
      <Icons.Notification />
      <Icons.NotificationFill />
      <Icons.Options />
      <Icons.Profile />
      <Icons.ProfileFill />
      <Icons.Question />
      <Icons.Reply />
      <Icons.Retweet />
      <Icons.Search />
      <Icons.Share />
      <Icons.TimelineProp />
      <Icons.Twitter />
    </div>
  ),
};
export const ProfilePhoto = {
  render: () => (
    <Photo src="https://pbs.twimg.com/profile_images/1589281180238680070/x-cdi9Py_400x400.jpg" />
  ),
};
