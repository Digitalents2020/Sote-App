import React, { useState } from "react";
import "./App.scss";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

//Transition group downloaded

import MenuPanel from "./Components/MenuPanel";
import TopArea from "./Components/TopArea";
import LandingPage from "./Pages/LandingPage";
import HengitystiePage from "./Pages/HengitystiePage";
import VerenkiertoPage from "./Pages/VerenkiertoPage";
import IhoPage from "./Pages/IhoPage";
import TajuntaPage from "./Pages/TajuntaPage";
import HengitystaajuusPage from "./Pages/HengitystaajuusPage";
import HappisaturaatioPage from "./Pages/HappisaturaatioPage";
import SystolinenverenpainePage from "./Pages/SystolinenverenpainePage";
import SyketaajuusPage from "./Pages/SyketaajuusPage";
import LampotilaPage from "./Pages/LampotilaPage";
import VerensokeriPage from "./Pages/VerensokeriPage";
import TajunnantasoPage from "./Pages/TajunnantasoPage";
import HengitysPage from "./Pages/HengitysPage";
import EmergencyPage from "./Pages/EmergencyPage";
import InstructionPage from "./Pages/InstructionPage";
import InstructionPageTwo from "./Pages/InstructionPageTwo";

let testingdata = {
  "Onko hengitystie auki?": true,
  "Onko ilmatie estettä?": false,
  "Hengitys - Normaali hengitys/ei ääniä": true,
  "Hengitys - Vinkuna": true,
  "Hengitys - Korina": true,
  "Hengitys - Rohina": true,
  "Iho, paljastaminen - Normaali": true,
  "Iho, paljastaminen - Kuiva": true,
  "Iho, paljastaminen - Kostea": true,
  "Iho, paljastaminen - Kylmä": true,
  "Iho, paljastaminen - Kuuma": true,
  "Iho, paljastaminen - Ei poikkeavia löydöksiä": true,
  Iho:
    "Turmoil at the front, Wilhelms forces on the hunt. There's a thunder in the east, it's the attack of the deceased! They've been facing poison gas, seven-thousand charge at last. Turn the tide of the attack, and force the enemy to turn back! And that's when the dead man are marching again. Osowytch, then and again. Attack of the dead, hundred man. Facing the led, once again. Hundred man, charge again, die again...What!? I need to put something in here and this song popped in my head :D",
  "Tuntuuko paikallista lämpöeroa:": true,
  "Tarkista syke:": true,
  "Tajunta - Ei poikkeavia löydöksiä.": false,
  Tajunta:
    "This is some testing text imma just put right here. I would use lorem ipsum text to fill this normally but unfortunately the interwebs does not work so I have to do this manually, which makes me think should there be like a wordlimit on this stuff or are we confident it'll just stretch to whatever we need it to be ? I noticed this looks pretty silly pushed to the side but I suppose it'll usually be either 'no abnormalities' or this text right here. Ok peace!",
  Hengitystaajuus: 10,
  "Hengitystaajuus - NEWSscore": 1,
  Happisaturaatio: 92,
  "Happisaturaatio - NEWSscore": 2,
  "Systolinen verenpaine": 105,
  "Systolinen verenpaine - NEWSscore": 1,
  Syketaajuus: 39,
  "Syketaajuus - NEWSscore": 3,
  "Mittaa lämpötila": 35,
  "Mittaa lämpötila - NEWSscore": 1,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 10
};

function App() {
  let history = useHistory();
  let location = useLocation();

  const [personData, setPersonData] = useState(testingdata);
  const [controlData, setcontrolData] = useState({});

  const [emergencyVisibility, setEmergencyVisibility] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  console.log("This is personData", personData);
  console.log("This is controlData", controlData);

  return (
    <BrowserRouter>
      <div className="App">
        <MenuPanel
          history={history}
          menuVisibility={menuVisibility}
          setMenuVisibility={setMenuVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
          setPersonData={setPersonData}
          testingdata={testingdata}
        />
        <TopArea
          history={history}
          displayArrow={location.pathname === "/"}
          setMenuVisibility={setMenuVisibility}
        />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => (
              <LandingPage
                history={history}
                setEmergencyVisibility={setEmergencyVisibility}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitystie"
            render={props => (
              <HengitystiePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitys"
            render={props => (
              <HengitysPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/iho"
            render={props => (
              <IhoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verenkierto"
            render={props => (
              <VerenkiertoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunta"
            render={props => (
              <TajuntaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitystaajuus"
            render={props => (
              <HengitystaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/happisaturaatio"
            render={props => (
              <HappisaturaatioPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/systolinenverenpaine"
            render={props => (
              <SystolinenverenpainePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/syketaajuus"
            render={props => (
              <SyketaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/lampotila"
            render={props => (
              <LampotilaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunnantaso"
            render={props => (
              <TajunnantasoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verensokeri"
            render={props => (
              <VerensokeriPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/instructionPage"
            render={props => (
              <InstructionPage
                personData={personData}
                setPersonData={setPersonData}
                controlData={controlData}
                setcontrolData={setcontrolData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/instructionPageTwo"
            render={props => (
              <InstructionPageTwo
                personData={personData}
                setPersonData={setPersonData}
                controlData={controlData}
                setcontrolData={setcontrolData}
                history={history}
                controlData={controlData}
                {...props}
              />
            )}
          />
        </Switch>
        <EmergencyPage
          visibility={emergencyVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
