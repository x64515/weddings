import React, { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import HomePage from "./components/HomePage";

function App() {
  const [categories] = useState([
    {
      name: "home page",
      description: "home page ",
    },
    { name: "guest portal", description: "RSVP" },
    { name: "Wedding Details", description: "date location groom bride etc" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <HomePage></HomePage>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
