import { useState } from "preact/hooks";

const About = ({ dt, submit }) => {
  const [data, setData] = useState(dt);
  return (
    <section className="about">
      <div className="about__head">
        <h2 className="about__title">About this project</h2>
        <div className="about__desc">
          <p className="about__desc--para">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="about__desc--para">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div className="about__memberships">
        {data &&
          data.map(({ id, title, pledge, description, left }) => {
            return (
              <div
                className={`about__membership ${!left ? "out-of-stock" : ""}`}
                key={id}
              >
                <div className="about__membership--container">
                  <h3 className="about__membership--title">{title}</h3>
                  <p className="about__membership--pledge">{`Pledge $${pledge} or more`}</p>
                </div>
                <p className="about__membership--description">{description}</p>
                <div className="about__membership--container">
                  <p className="about__membership--left">{left}</p>
                  {left ? (
                    <form action="" data-id={id} onSubmit={submit}>
                      <input
                        type="number"
                        name="pledge"
                        value={pledge}
                        className="about__membership--input"
                      />
                      <button className="about__membership--btn">
                        Select Reward
                      </button>
                    </form>
                  ) : (
                    <button className="about__membership--btn">
                      Out of stock
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default About;
