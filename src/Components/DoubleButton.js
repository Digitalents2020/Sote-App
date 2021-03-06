import React from "react";

function DoubleButton(props) {
  const personDataKey = props.name ? props.name : props.header;
  const value = props.personData[personDataKey];
  const values = props.values || ["Kyllä", "Ei"];
  const redFirst = props.redFirst || false;

  const formulateButtonStyle = (first = false) => {
    const activeStyle = {
      background: first === redFirst ? "#AD3E2F" : "#377D4F",
      color: "#fff",
      borderColor: "#242424"
    };
    return first === value ? activeStyle : {};
  };

  const tsname = `${props.name}_timestamp`;
  const ts = new Date().toLocaleTimeString(['en-GB'], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const timestamp = `${props.name}_timestampfull`;
          const tsfull = new Date().toLocaleTimeString(['en-GB'], {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });

  const clickHandler = newValue => () =>
    props.setPersonData({
      ...props.personData,
      [personDataKey]: value === newValue ? null : newValue,
      [tsname]: ts,
      [timestamp]: tsfull
    });

  return (
    <div className="DoubleButton">
      <h2>{props.header}</h2>
      <p>{props.bodyText}</p>
      <form>
        <input
          type="button"
          className="double-button-inactive"
          style={formulateButtonStyle(true)}
          onClick={clickHandler(true)}
          value={values[0]}
        ></input>

        <input
          type="button"
          className="double-button-inactive"
          style={formulateButtonStyle()}
          onClick={clickHandler(false)}
          value={values[1]}
        ></input>
      </form>
      {props.hoitoOhje && (
        <div
          className={redFirst === value ? "hoito-ohje active" : "hoito-ohje"}
        >
          <h4>{props.hoitoOhjeHeader}</h4>
          <p>{props.hoitoOhje}</p>
        </div>
      )}
    </div>
  );
}

export default DoubleButton;
