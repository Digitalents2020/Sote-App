import React from "react";
import Page from "../Components/Page";
import DoubleButton from "../Components/DoubleButton";
// import Tajunnantaso from "../Components/Tajunnantaso";

function TajunnantasoPage({ personData, setPersonData }) {
  return (
    <Page
      title="Tajunnan taso:"
      paragraph="Reagoiko puheelle, kosketukselle, kivulle tai avaako silmät?"
    >
      <DoubleButton
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      />
      {/* <Tajunnantaso
        cells={["Normaali", "Poikkeava", null, null, null, null, null]}
        name={"Mittaa verensokeri:"}
        personData={personData}
        setPersonData={setPersonData}
      /> */}
    </Page>
  );
}

export default TajunnantasoPage;
