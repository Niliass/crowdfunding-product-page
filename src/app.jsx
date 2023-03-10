import { useState, useEffect } from "preact/hooks";
import Header from "./component/Header";
import Mastercraft from "./component/Mastercraft";
import Statistics from "./component/Statistics";
import About from "./component/About";
import Modal from "./component/Modal";
import { memberships, statistics } from "./membershpData";

export function App() {
  const [data, setData] = useState(memberships);
  const [decile, setDecile] = useState(statistics);
  const [isShow, setIsShow] = useState(false);
  const [thanksShow, setThanksShow] = useState(false);
  const storage = localStorage;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const parent = form.closest("section");
    const id = form.getAttribute("data-id");
    const pledge = form.pledge;
    const membership = data.find((membership) => membership.id === id);
    if (membership && pledge.value < membership.pledge)
      return pledge.parentElement.classList.add("empty");
    pledge.parentElement.classList.remove("empty");
    let statis = decile;
    statis.backer += 1;
    statis.backed += +pledge.value;
    statis.progress = (statis.backed / 100000) * 100;
    setDecile(statis);
    if (membership && membership.left - 1 >= 0) membership.left -= 1;
    setData([...data]);
    storage.setItem(
      "crowdfunding",
      JSON.stringify({ memberships: data, statistics: statis })
    );
    if (parent.classList.contains("modal")) setIsShow(false);
    setThanksShow(true);
  };
  return (
    <>
      <Header />
      <div className="bg">
        <img
          src="./images/image-hero-desktop.jpg"
          alt="background image"
          className="bg--desk"
        />
        <img
          src="./images/image-hero-mobile.jpg"
          alt="background image"
          className="bg--mob"
        />
      </div>
      <main>
        <Mastercraft isShow={isShow} setIsShow={setIsShow} />
        <Statistics decile={decile} />
        <About dt={data} submit={handleSubmit} />
      </main>
      <Modal
        dt={data}
        isShow={isShow}
        setIsShow={setIsShow}
        submit={handleSubmit}
      />
      <div className={`thanks__msg${thanksShow ? " show" : ""}`}>
        <img
          src="./images/icon-check.svg"
          alt="check image"
          className="thanks__msg--img"
        />
        <div className="thanks__msg--content">
          <h2 className="thanks__msg--title">Thanks for your support!</h2>
          <p className="thanks__msg--desc">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed
          </p>
        </div>
        <button
          className="thanks__msg--btn"
          onClick={() => setThanksShow(false)}
        >
          Got it!
        </button>
      </div>
      <div className={`overlay${isShow || thanksShow ? " show" : ""}`}></div>
    </>
  );
}
