import React from "react";
import TextTitle from "../components/text-title";

export default {
  title: "Typography",
};

export const Title = {
  render: () => (
    <div>
      <TextTitle>Merhaba dünya</TextTitle>
      <TextTitle bold={false}>Merhaba dünya</TextTitle>
    </div>
  ),
};
