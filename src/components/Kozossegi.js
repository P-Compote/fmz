import React from 'react';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

const Kozossegi = () => (
  <>
    <ContainerStyles>
      <div>
        <h2>Közösségi dalírás</h2>
      </div>
      <TextBox>
        <div>
          <p>
            Az egyesületünk gondozásában megjelenő zenekarok mind a
            kárpát-medencei néphagyományokat dolgozzák fel a mai fiatalság
            számára befogadható stílusokban. A zenekarok tagjai saját dalaikon
            kívül közösségi népdalfeldolgozás műhelymunkákat tartanak a helyi
            lakosok és a rendezvényeink látogatóinak bevonásával.
          </p>
          <p>
            Közösségi dalírásnál célunk bemutatni egy dalírás folyamatát a
            szövegírással kezdve, a hangszeres és énekdallamokon át a
            stúdiófelvételekig.
          </p>
        </div>
        <div>
          <p>
            2020-ban Pusztafalun az UbikTūra tábor keretén belül Ferenczi György
            és Oláh József (Parno Graszt) vezénylésével megszületett Pusztafalu
            modern himnusza, amelynek megírásán több mint ötven művész dolgozott
            együtt a lakossággal. A dal alapja a "Pusztafalun akkor megyek
            végig" kezdetű helyi népdal.
          </p>
          <p>
            Az elkészült dalt a táborozók írták meg az elejétől a végéig, a
            klipet pedig a hétvégén készült telefonos felvételekből vágtuk
            össze, így készült el a közös zenei termék, a Stilórobbanás:
          </p>
        </div>
      </TextBox>
      <EmbedYoutube videoId="-dB8wp5saWA" />
    </ContainerStyles>
  </>
);

export default Kozossegi;
