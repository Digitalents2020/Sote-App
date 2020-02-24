import React from "react";

function InstructionCardSecond({
  NEWSscoreTotal,
  personData,
  controlData,
  ControlNEWSscoreTotal,
  careType
}) {
  const highRiskInstructions = {
    Kotihoito: (
      <>
        <p>
          &rarr; <span>Soita 112.</span>
        </p>
        <p style={{ fontWeight: "600" }}>
          Muistathan tarkastaa mahdolliset hoidonrajaukset/-linjaukset ennen 112
          soittoa.
        </p>
        <p>Tarvittaessa mittaa uudestaan vitaalit ambulanssia odottaessa.</p>
      </>
    ),
    "Ympärivuorokautinen hoiva": (
      <>
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p>Konsultoi oma lääkäri.</p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p>
            Konsultoi geriatrista lääkäriä erillisen ohjeen mukaan. Huom. klo 21
            jälkeen soita päivystyspoliklinikan vuorovastaavalle
            sairaanhoitajalle.
          </p>
        </div>
      </>
    )
  };
  const CheckNEWSSCORErisk = () => {
    if (NEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      personData["Tajunnan taso"] === false ||
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const CheckControlNEWSSCORErisk = () => {
    if (ControlNEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      controlData["Tajunnan taso"] === false ||
      controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      ControlNEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (ControlNEWSscoreTotal >= 1 && ControlNEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const checkForSingleThreePointCase = () => {
    return (
      NEWSscoreTotal <= 3 &&
      (personData["Tajunnan taso"] === false ||
        personData["Hengitystaajuus - NEWSscore"] === 3 ||
        personData["Happisaturaatio - NEWSscore"] === 3 ||
        personData["Systolinen verenpaine - NEWSscore"] === 3 ||
        personData["Syketaajuus - NEWSscore"] === 3 ||
        personData["Mittaa lämpötila - NEWSscore"] === 3)
    );
  };

  const NEWSscoreRiskChange = () => {
    if (
      (CheckControlNEWSSCORErisk() === "Korkea riski" &&
        CheckNEWSSCORErisk() === "Kohtalainen riski") ||
      (CheckControlNEWSSCORErisk() === "Kohtalainen riski" &&
        CheckNEWSSCORErisk() === "Lievä riski") ||
      (CheckControlNEWSSCORErisk() === "Korkea riski" &&
        CheckNEWSSCORErisk() === "Lievä riski")
    )
      return true;
  };

  // console.log("CheckNEWSSCORErisk", CheckNEWSSCORErisk());
  // console.log("CheckControlNEWSSCORErisk", CheckControlNEWSSCORErisk());
  // console.log("NEWSscoreRiskChange", NEWSscoreRiskChange());

  if (
    CheckControlNEWSSCORErisk() === "Korkea riski" ||
    CheckNEWSSCORErisk() === "Korkea riski"
  ) {
    //RISKILUOKKA: KORKEA RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {checkForSingleThreePointCase() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska yksittäisestä mittauksesta tuli korkean riskiluokan arvio.
          </p>
        )}
        {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        {highRiskInstructions[careType]}
      </div>
    );
  } else if (
    CheckControlNEWSSCORErisk() === "Kohtalainen riski" &&
    CheckNEWSSCORErisk() !== "Korkea riski"
  ) {
    //RISKILUOKKA: KOHTALAINEN RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p>
            Konsultoi <span>välittömästi</span> oma SH/lääkäri.
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            SH konsultoi omaa lääkäriä tai tekee arviokäynnin tarkastaakseen
            tilanteen saman päivän/seuraavan päivän aikana.
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Jos konsultoit lääkäriä suoraan, hän ohjeistaa tilanteessa.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p>
            Jos oma SH ei paikalla voit konsultoida oman alueesi
            päivystyspoliklinikan vuorovastaavaa (Huom. klo 21 jälkeen soita
            päivystyspoliklinikan vuorovastaavalle sairaanhoitajalle.) tai{" "}
            <span>
              virka-ajan ulkopuolista lääkäriä ISBAR-raportointiohjeen mukaan.
            </span>
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Odota ohjetta.
          </p>
        </div>
      </div>
    );
  } else {
    //RISKILUOKKA: LIEVÄ RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön SH tai hoitavaa lääkäriä.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön sh, jos paikalle tai suoraan{" "}
            <span>geriatrista lääkäriä</span> (kts. erillinen konsultointiohje).
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Odota ohjetta.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>
          Tarvittaessa jos haluat arvioida asiakasta uudestaan, aloita sovellus
          alusta.
        </h3>
      </div>
    );
  }
}

export default InstructionCardSecond;
