import React, { useState } from "react";
import "./App.css";
import Modal from "./modal";

// Your card data
const cardsData = [
  {
    title: "Villa Serenità",
    description:
      "Nestled on a private hilltop, Villa Serenità offers breathtaking panoramic views of the ocean and lush landscapes. This Mediterranean-inspired mansion boasts expansive terraces, a cascading infinity pool, and opulent interior design, providing an oasis of tranquility and luxury.",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/308/053/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-free-photo.jpg",
  },
  {
    title: "Château Magnifique",
    description:
      "This magnificent French château is a masterpiece of architectural elegance. Set amidst sprawling vineyards, it features ornate gardens, a ballroom, a private wine cellar, and regal suites fit for royalty. Château Magnifique is the epitome of timeless opulence.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/3799-flamingo-ave-siesta-key-print-005-14-flamingo-ave-sarasota-fl-4200x2799-300dpi-1675178841.jpg",
  },
  {
    title: "The Emerald Oasis",
    description:
      "The Emerald Oasis is a tropical paradise set on a pristine island. With its emerald-green gardens, white sandy beaches, and a private spa pavilion overlooking the crystal-clear waters, this waterfront estate is a haven of relaxation and indulgence.",
    image:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80",
  },
  {
    title: "Majestic Manor",
    description:
      "Majestic Manor exudes old-world charm and grandeur. Located in the heart of a historic city, this palatial residence boasts soaring ceilings, antique furnishings, and a lush courtyard garden. It's a regal retreat for those with a taste for classical luxury.",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
  },
  {
    title: "Aspen Alpine Lodge",
    description:
      "Nestled in the picturesque Aspen mountains, this Alpine Lodge is a winter wonderland retreat. With ski-in/ski-out access, a private ice rink, and cozy fireplaces, it offers a warm and inviting ambiance for enjoying the snowy splendor.",
    image:
      "https://d1ja9tyo8nbkbc.cloudfront.net/47717143_S0422/S0422/S0422-R0100/23415902/23415902-2.jpg?version=1685063274&width=640",
  },
  {
    title: "Oceanfront Elysium",
    description:
      "Perched on a cliff overlooking the ocean, Oceanfront Elysium is a contemporary masterpiece. Floor-to-ceiling glass walls frame stunning sea views, while the infinity pool and sleek interior design create a seamless connection to the coastal beauty.",
    image:
      "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1259i215%2Fa62201gsbe0vmrev3430svmee1i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
    title: "The Zen Sanctuary",
    description:
      "A modern architectural marvel, The Zen Sanctuary is a minimalist masterpiece. Set amidst lush zen gardens, this tranquil estate features meditation rooms, a yoga pavilion, and a serene koi pond, providing the perfect balance of luxury and serenity.",
    image:
      "https://photos.zillowstatic.com/fp/17d61b709ef698d56d73d5659f9dea29-p_e.jpg",
  },
  {
    title: "Casa del Sol",
    description:
      "Located in the heart of Tuscany, Casa del Sol is a Tuscan villa that exudes warmth and charm. Surrounded by rolling vineyards, it offers a rustic yet luxurious experience, complete with a private wine cellar and outdoor dining under the Tuscan sun.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312698222.jpg?k=41a75acebf2081dd38133f5307c1be68e5fd2b6c1c2918c9d91c38b90e6be5af&o=&hp=1",
  },
  {
    title: "Estate du Paradis",
    description:
      "Estate du Paradis is a sprawling Caribbean escape on a secluded island. With its private white-sand beaches, a coral reef for snorkeling, and a hilltop villa with 360-degree views, it's a paradise for those seeking the ultimate in tropical luxury.",
    image:
      "https://assets.architecturaldesigns.com/plan_assets/325000035/large/290101IY_01_1693600745.jpg",
  },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    // Check if the input is empty, and reset selectedCard to null
    if (input.trim() === "") {
      setSelectedCard(null);
    } else {
      // Find the first card that matches the search input
      const foundCard = cardsData.find((card) =>
        card.title.toLowerCase().includes(input.toLowerCase())
      );

      if (foundCard) {
        setSelectedCard(foundCard);
      } else {
        setSelectedCard(null);
      }
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">SETTLURE</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.imgur.com/dB2L1e7.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <u>SETTLURE</u>
              <span className="loading loading-ball loading-lg"></span>
            </h1>
            <p className="mb-5">
              "Discover your ideal home with us. Explore listings, connect with
              experts, and make your real estate dreams a reality."
            </p>
          </div>
        </div>
      </div>
      <br></br>

      {/* CARD GRID CONTAINER */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedCard ? (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  style={{ width: "400px", height: "250px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{selectedCard.title}</h2>
                <p>{selectedCard.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn" onClick={() => setSelectedCard(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            cardsData.map((card) => (
              <div
                key={card.title}
                className="card card-compact w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "400px", height: "250px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    <Modal
                      className="btn"
                      onClick={() => setSelectedCard(card)}
                    ></Modal>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <br></br>

      {/* FOOTER */}
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © 2023 - Rajdeep Banik 2347141</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
