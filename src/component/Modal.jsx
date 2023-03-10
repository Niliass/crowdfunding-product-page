import { useState, useEffect } from "preact/hooks";

const Modal = ({ dt, isShow, setIsShow, submit }) => {
  const [data, setData] = useState(dt);
  const [size, setSize] = useState(false);
  const [isfocus, setIsfsocus] = useState(false);
  useEffect(() => {
    let body = document.body;
    setSize(body.clientWidth >= 750);
    window.addEventListener("load", handleHeight);
    window.addEventListener("resize", () => {
      const membership = document.querySelector(".focus");
      handleHeight();
      if (membership) {
        membership.style.setProperty(
          "--height",
          `${
            membership.children[0].clientHeight +
            membership.children[1].clientHeight
          }px`
        );
      }
      setSize(body.clientWidth >= 750);
    });
  }, []);
  const handleHeight = () => {
    const parents = document.querySelectorAll(".modal__membership");
    parents.forEach((parent) => {
      parent.style.setProperty(
        "--height",
        `${parent.children[0].clientHeight}px`
      );
    });
  };
  const handleMembership = (e) => {
    const Parent = e.currentTarget.parentElement;
    const Parents = document.querySelectorAll(".modal__membership");
    Parents.forEach((parent) => {
      if (parent === Parent) return;
      parent.classList.remove("focus");
      parent.style.setProperty(
        "--height",
        `${parent.children[0].clientHeight}px`
      );
    });
    Parent.classList.toggle("focus");

    if (Parent.classList.contains("focus")) {
      const focus = document.querySelector(".focus");
      const focusChilds = focus.children;
      Parent.style.setProperty(
        "--height",
        `${focusChilds[0].clientHeight + focusChilds[1].clientHeight}px`
      );
      return;
    }
    Parent.style.setProperty(
      "--height",
      `${Parent.children[0].clientHeight}px`
    );
  };
  return (
    <section className={`modal${isShow ? " show" : ""}`}>
      <div className="modal__head">
        <h2 className="modal__head--title">Back this project</h2>
        <button className="close--icon" onClick={() => setIsShow(false)}>
          <img src="./images/icon-close-modal.svg" alt="close icon" />
        </button>
        <p className="modal__head--desc">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="modal__memberships">
          <div className={`modal__membership${isfocus ? " focus" : ""}`}>
            <div
              className="modal__membership--content"
              onClick={handleMembership}
            >
              <button className="modal__membership--circle"></button>
              <h3 className="modal__membership--title">
                Pledge with no reward
              </h3>
              <p className="modal__membership--description">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
            <form
              action=""
              className="modal__membership--form"
              onSubmit={submit}
            >
              <input
                type="number"
                name="pledge"
                value={0}
                className="no--reward"
              />
              <button className="modal__membership--btn">Continue</button>
            </form>
          </div>
          {data &&
            data.map(({ title, pledge, description, left, id }, idx) => {
              return (
                <div
                  className={`modal__membership ${!left ? "out-of-stock" : ""}`}
                  key={idx}
                >
                  <div
                    className="modal__membership--content"
                    onClick={(e) => {
                      if (left) return handleMembership(e);
                    }}
                  >
                    <button className="modal__membership--circle"></button>
                    <div className="modal__membership--container">
                      <h3 className="modal__membership--title">{title}</h3>
                      <p className="modal__membership--pledge">{`Pledge $${pledge} or more`}</p>
                      {size && (
                        <p className="modal__membership--left">{left}</p>
                      )}
                    </div>
                    <p className="modal__membership--description">
                      {description}
                    </p>
                    {!size && <p className="modal__membership--left">{left}</p>}
                  </div>
                  {left && (
                    <>
                      <form
                        action=""
                        className="modal__membership--form"
                        data-id={id}
                        onSubmit={submit}
                      >
                        <label htmlFor={`pledge-${idx + 1}`}>
                          Enter your pledge
                        </label>
                        <div className="modal__membership--form--container">
                          <div className="input">
                            <input
                              type="number"
                              name="pledge"
                              id={`pledge-${idx + 1}`}
                              placeholder={pledge}
                            />
                          </div>
                          <button
                            type="submit"
                            className="modal__membership--btn"
                          >
                            Continue
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Modal;
