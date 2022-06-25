import React from "react";

export const SearchIcon = (props) => (
  <svg
    width={props.width ?? "20"}
    height={props.height ?? "20"}
    viewBox="0 0 24 24"
    fill={props.color ?? "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 22L17.2779 17.2695L22 22ZM19.8947 10.9474C19.8947 13.3204 18.9521 15.5962 17.2741 17.2741C15.5962 18.9521 13.3204 19.8947 10.9474 19.8947C8.57438 19.8947 6.29858 18.9521 4.62062 17.2741C2.94267 15.5962 2 13.3204 2 10.9474C2 8.57438 2.94267 6.29858 4.62062 4.62062C6.29858 2.94267 8.57438 2 10.9474 2C13.3204 2 15.5962 2.94267 17.2741 4.62062C18.9521 6.29858 19.8947 8.57438 19.8947 10.9474V10.9474Z"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
);
