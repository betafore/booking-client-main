import React from "react";

function Hero() {
  return (
    <div className="bg-gray-50 flex items-center">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "url('https://shuttletomoraine.com/wp-content/uploads/2024/05/moraine.jpeg')",
        }}
      >
        <div className="container mx-auto text-left text-white pl-5 max-w-screen-xl">
          <h1 className="font-newake text-5xl font-medium mb-6">
            Book your Trip
          </h1>
          <p className="text-xl mb-12">People Don’t Take, Trips Take People</p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
