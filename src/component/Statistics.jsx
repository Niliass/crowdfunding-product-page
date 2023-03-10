import { useState, useEffect } from "preact/hooks";

const Statistics = ({ decile }) => {
  const { backer, backed, date, progress } = decile;
  const [dt, setDt] = useState(() => getTime(date));
  useEffect(() => {
    const countDown = setInterval(
      () => setDt(() => getTime(date, countDown)),
      1000
    );
  }, []);

  function getTime(date, interval) {
    const gap = Date.parse(date) - new Date();
    const [getDays, getHours, getMinutes, getSconds] = [
      1000 * 60 * 60 * 24,
      1000 * 60 * 60,
      1000 * 60,
      1000,
    ];
    const Days = Math.floor(gap / getDays);
    const Hours = Math.floor((gap % getDays) / getHours);
    const Minutes = Math.floor((gap % getHours) / getMinutes);
    const Second = Math.floor((gap % getMinutes) / getSconds);
    const curTime = [
      { date: Days, unit: "days" },
      { date: Hours, unit: "hours" },
      { date: Minutes, unit: "minutes" },
      { date: Second, unit: "seconde" },
    ];
    for (let i = 0; i < curTime.length; i++) {
      if (curTime[i].date > 0) return curTime[i];
      else {
        if (interval) clearInterval(interval);
        return { date: 0, unit: "time" };
      }
    }
  }

  return (
    <section className="statistics">
      <form action="" className="statistics__form">
        <div className="statistics__container">
          <div className="statistic">
            <input type="text" id="backed" value={`$${backed}`} readOnly />
            <label htmlFor="backed">of $100,000 backed</label>
          </div>
          <hr className="line__break" />
          <div className="statistic">
            <input type="text" id="backers" value={backer} readOnly />
            <label htmlFor="backers">total backers</label>
          </div>
          <hr className="line__break" />
          <div className="statistic">
            <input type="number" id="time" value={dt.date} readOnly />
            <label htmlFor="time">{`${dt.unit} left`}</label>
          </div>
        </div>
        <div className="progress-bar" style={`--precentage: ${progress}`}></div>
      </form>
    </section>
  );
};
export default Statistics;
