import React from "react";

const ProgressBar = () => {
  const handleProgress = (id) => {
    console.log(id);
    let count = 1;
    let badges = document.getElementsByClassName("badges");
    Array.from(badges).forEach((e) => {
      console.log(e.children[1].children[0].children[0]);
      if (count < id) {
        e.children[1].children[0].children[0].style.fill = "green";
        e.children[1].children[0].children[1].style.fill = "green";
      } else if (count === id) {
        e.children[1].children[0].children[0].style.fill = "#0047bd";
        if (id < 5) {
          e.children[1].children[0].children[1].style.fill = "#0047bd";
        }
      } else {
        e.children[1].children[0].children[0].style.fill = "#a1a1a1";
        if (count < 5) {
          e.children[1].children[0].children[1].style.fill = "#a1a1a1";
        }
      }
      count++;
    });
  };
  return (
    <div className="progressBar">
      <div
        onClick={() => {
          handleProgress(1);
        }}
        className="badges first"
      >
        <div className="badgeText">Draft</div>
        <svg
          id="1"
          width="170"
          height="30"
          viewBox="0 0 170 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="startSide">
            <path
              id="Rectangle1"
              d="M0 15.5C0 8.59644 5.59644 3 12.5 3H152V28H12.5C5.59644 28 0 22.4036 0 15.5V15.5Z"
              fill="#0047bd"
            />
            <path
              id="Polygon1"
              d="M170 15L152 27.9904V2.00962L170 15Z"
              fill="#0047bd"
            />
          </g>
        </svg>
      </div>
      <div
        onClick={() => {
          handleProgress(2);
        }}
        className="badges second"
      >
        <div className="badgeText">Review</div>
        <svg
          id="2"
          width="176"
          height="30"
          viewBox="0 0 176 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="both">
            <path d="M6 3H158V28H6V3Z" fill="#a1a1a1" />
            <path d="M176 15L158 27.9904V2.00962L176 15Z" fill="#a1a1a1" />
            <path d="M24 15L6 27.9904L6 2.00962L24 15Z" fill="white" />
          </g>
        </svg>
      </div>
      <div
        onClick={() => {
          handleProgress(3);
        }}
        className="badges third"
      >
        <div className="badgeText">Approval</div>
        <svg
          id="3"
          width="176"
          height="30"
          viewBox="0 0 176 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="both">
            <path d="M6 3H158V28H6V3Z" fill="#a1a1a1" />
            <path d="M176 15L158 27.9904V2.00962L176 15Z" fill="#a1a1a1" />
            <path d="M24 15L6 27.9904L6 2.00962L24 15Z" fill="white" />
          </g>
        </svg>
      </div>
      <div
        onClick={() => {
          handleProgress(4);
        }}
        className="badges fourth"
      >
        <div className="badgeText">Training</div>
        <svg
          id="4"
          width="176"
          height="30"
          viewBox="0 0 176 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="both">
            <path d="M6 3H158V28H6V3Z" fill="#a1a1a1" />
            <path d="M176 15L158 27.9904V2.00962L176 15Z" fill="#a1a1a1" />
            <path d="M24 15L6 27.9904L6 2.00962L24 15Z" fill="white" />
          </g>
        </svg>
      </div>
      <div
        onClick={() => {
          handleProgress(5);
        }}
        className="badges fifth"
      >
        <div className="badgeText">Released</div>
        <svg
          id="5"
          width="158"
          height="30"
          viewBox="0 0 158 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="endSide">
            <path
              d="M158 14.5C158 21.4036 152.404 27 145.5 27L6 27V2L145.5 2C152.404 2 158 7.59644 158 14.5V14.5Z"
              fill="#a1a1a1"
            />
            <path d="M24 15L6 27.9904V2.00962L24 15Z" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;
