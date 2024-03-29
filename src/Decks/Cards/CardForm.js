import React from "react";
import { useHistory } from "react-router";

export function CardForm({
  submitHandler,
  card = {},
  changeFront,
  changeBack,
}) {
  const history = useHistory();
  //if there is no card front, display nothing
  function cardFront() {
    return card.front ? card.front : "";
  }
  //if there is no card back, display nothing
  function cardBack() {
    return card.back ? card.back : "";
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Front</label>
        <textarea
          className="form-control"
          id="front"
          rows="3"
          value={cardFront()}
          onChange={changeFront}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Deck Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={cardBack()}
          onChange={changeBack}
        ></textarea>
      </div>
      <button
        className="btn btn-secondary ml-2"
        type="button"
        onClick={() => history.go(-1)}
      >
        Done
      </button>
      <button
        className="btn btn-primary ml-2"
        type="submit"
        onClick={submitHandler}
      >
        Save
      </button>
    </form>
  );
}