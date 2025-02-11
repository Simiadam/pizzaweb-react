import React from "react";

const Home = () => {
  return (
    <main className="container">
      <div>
        <h1>Üdvözöljük a PizzaWeb-en!</h1>
        <img
          src="images/pizza3.png"
          alt="Fincsi pizza"
          className="img-fluid my-4"
        />
        <p>
          Rajongunk a jó és finom pizzáért, ezért csakis eredeti olasz receptúra
          alapján, minőségi alapanyagokból sütjük frissen és helyben a
          pizzáinkat országszerte.
        </p>
        <p>
          A PizzaWeb 2024 óta az ország egyik pizza oldala. Pizzáink felkerültek
          már nemcsak a budapesti, hanem a vidéki gyorséttermek térképére is.
          Sőt, készen állunk, hogy meghódítsuk Európát, hogy mindenki
          belekóstolhasson a valódi PizzaWeb ízélménybe!
        </p>
      </div>
    </main>
  );
};

export default Home;
