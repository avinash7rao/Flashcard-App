import React from "react";
import { useHistory } from "react-router";

export function DeckForm({
  submitFunction,
  deck = {},
  changeName,
  changeDesc,
}) {
  const history = useHistory();

  function deckName() {
    return deck.name ? deck.name : "";
  }

  function deckDesc() {
    return deck.description ? deck.description : "";
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Deck Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={deckName()}
          onChange={changeName}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Deck Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={deckDesc()}
          onChange={changeDesc}
        ></textarea>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => history.go(-1)}
      >
        Cancel
      </button>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={submitFunction}
      >
        Submit
      </button>
    </form>
  );
}