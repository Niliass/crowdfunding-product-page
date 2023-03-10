import { useState } from "preact/hooks";

const Mastercraft = ({ setIsShow }) => {
  const [marked, setMarked] = useState(false);
  return (
    <section className="mastercraft">
      <img
        src="./images/logo-mastercraft.svg"
        alt="mastercraft image"
        className="mastercraft__logo"
      />
      <h1 className="mastercraft__title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="mastercraft__desc">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="mastercraft__btns">
        <button className="project__btn" onClick={() => setIsShow(true)}>
          Back this project
        </button>
        <button
          className={`bookmark__btn${marked ? " marked" : ""}`}
          onClick={() => setMarked(!marked)}
        >
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            className="bookmark__icon"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span className="bookmark__text">
            {marked ? " Bookmarked" : "Bookmark"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Mastercraft;
