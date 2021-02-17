import React from 'react';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';

const Digital = () => (
  <>
    <ContainerStyles>
      <div>
        <h2>Digitális készségfejlesztés</h2>
      </div>
      <TextBox>
        <div>
          <p>
            A foglalkozások lényege, hogy a résztvevők tudást szerezzenek az
            ének, az improvizáció, a színjátszás, az írás és a digitális
            zeneszerkesztés területén. Ahhoz, hogy elkészüljön egy dal, nem kell
            semmi más, csak egy digitális eszköz és némi kreativitás.
          </p>
          <p>
            Az informális digitális oktatási módszer célja, hogy az egy vagy
            akár több alkalmas foglalkozások során egy közös dalt hozzunk létre.
            A játékos módszerek segítségével az alkotói és kreatív energiák
            könnyen kiszabadulnak illetve, azok eredményét könnyen meg lehet
            örökíteni.
          </p>
        </div>
        <div>
          <p>
            A dalíró és szerkesztő fázisokban megtanulunk szöveget írni és
            értelmezni; zenei és énekdallamot komponálni; ritmus képletet
            alkotni; hang és egyéb felvételeket készíteni; album borítót
            tervezni és sort kerítünk egyéb, igényeknek megfelelő digitális
            szoftverhasználati technikák elsajátítására.
          </p>
          <p>
            A kurzus végén akár a kicsik, akár a nagyok képesek lesznek egy
            saját zenei szerzemény megálmodására, megírására és annak
            számítógépes zeneszerkesztő szoftverben vagy digitális eszközön való
            felvételére.
          </p>
        </div>
      </TextBox>
    </ContainerStyles>
  </>
);

export default Digital;
