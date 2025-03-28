import css from "./Options.module.css";
function Options({ updateFeedback, resetFeedback }) {
  return (
    <>
      <button
        className={css.buttonOpt}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.buttonOpt}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.buttonOpt}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      <button className={css.buttonOpt} onClick={resetFeedback}>
        Reset
      </button>
    </>
  );
}
export default Options;
