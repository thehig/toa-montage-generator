import React from 'react';

const Dice = ({ value = 10, color = '#000000', ...svgProps }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    {...svgProps}
  >
    <path
      fill={color}
      d="M91.9,74.7C91.9,74.7,91.9,74.7,91.9,74.7c0.1-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1  c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2V27.2c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1  c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0,0,0-0.1c0-0.1-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1-0.1-0.2-0.1  c0,0,0,0-0.1,0c0,0,0,0,0,0L50.9,2.3c-0.6-0.3-1.3-0.3-1.8,0L8.8,25.6c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0  c0,0-0.1,0.1-0.1,0.1c0,0,0,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1  c0,0,0,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1v46.5c0,0,0,0,0,0v0c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0  c0,0.1,0.1,0.2,0.2,0.3c0,0,0,0,0,0.1C8.2,74.9,8.3,75,8.4,75c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0.1,0c0,0,0,0,0.1,0  l40.3,23.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0  c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0  c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0l40.3-23.3c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1  c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1C91.8,74.8,91.8,74.7,91.9,74.7z M11.9,37.6l11.2,27.8  c0.1,0.3,0,0.7-0.4,0.9l-10.3,4.3c-0.4,0.2-0.9-0.1-0.9-0.6V37.7C11.5,37.5,11.8,37.4,11.9,37.6z M69.9,65.2H30.1  c-0.5,0-0.8-0.6-0.6-1l19.9-34.5c0.3-0.4,0.9-0.4,1.1,0l19.9,34.5C70.7,64.7,70.4,65.2,69.9,65.2z M25.6,61.6L12.7,29.7  c-0.2-0.4,0.1-0.9,0.6-0.9l32.2-1.6c0.5,0,0.9,0.5,0.6,1L26.7,61.7C26.5,62.2,25.8,62.2,25.6,61.6z M69.5,70l-19,23.4  c-0.3,0.3-0.8,0.3-1,0L30.5,70c-0.3-0.4,0-1.1,0.5-1.1h38C69.5,68.9,69.8,69.6,69.5,70z M73.3,61.7L53.9,28.2c-0.3-0.5,0.1-1,0.6-1  l32.2,1.6c0.5,0,0.7,0.5,0.6,0.9L74.4,61.6C74.2,62.2,73.5,62.2,73.3,61.7z M51.8,22.8V8.2c0-0.5,0.6-0.8,1-0.6L82,24.5  c0.2,0.1,0.1,0.4-0.1,0.4l-29.5-1.5C52.1,23.4,51.8,23.1,51.8,22.8z M47.5,23.4l-29.5,1.5c-0.2,0-0.3-0.3-0.1-0.4L47.2,7.7  c0.4-0.3,1,0.1,1,0.6v14.5C48.2,23.1,47.9,23.4,47.5,23.4z M25.5,69.7l16.1,19.9c0.1,0.2-0.1,0.4-0.3,0.3L15,74.7  c-0.5-0.3-0.4-1,0.1-1.2l9.7-4C25,69.4,25.3,69.5,25.5,69.7z M75.2,69.5l9.7,4c0.5,0.2,0.6,0.9,0.1,1.2L58.6,89.9  c-0.2,0.1-0.4-0.1-0.3-0.3l16.1-19.9C74.7,69.5,75,69.4,75.2,69.5z M87.6,70.6l-10.3-4.3c-0.3-0.1-0.5-0.5-0.4-0.9l11.2-27.8  c0.1-0.2,0.4-0.1,0.4,0.1V70C88.5,70.5,88,70.8,87.6,70.6z"
    />
    <text
      fontSize="1.48rem"
      fontWeight="bold"
      x="50%"
      y="63%"
      fill={color}
      textAnchor="middle"
      alignmentBaseline="central"
    >
      {Math.max(1, Math.min(20, Number(value)))}
    </text>
  </svg>
);

export default Dice;
