import React from "react";
import NewsComponent from "../Components/NewsComponent";
import Page from "../Components/Page";

function HengitystaajuusPage({ personData, setPersonData }) {
  return (
    <Page
      title="Hengitystaajuus"
      paragraph="Laske rintakehän liikkeet minuutin ajalta. Asiakkaan pitäisi olla puhumatta tämän ajan."
    >
      <NewsComponent
        name={"Hengitystaajuus"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
      />
    </Page>
  );
}

export default HengitystaajuusPage;
