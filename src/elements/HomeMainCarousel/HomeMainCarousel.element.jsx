import React from "react";
import "./HomeMainCarousel.styles.scss";

function HomeMainCarouselelement() {
  return (
    <div className="MainHomeCarousel">
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="5000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block h-100vh  w-100"
              src="https://cms.qz.com/wp-content/uploads/2020/08/iitdelhi-e1598942941122.jpg?quality=75&strip=all&w=1600&h=900&crop=1"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block h-100vh w-100"
              src="https://home.iitd.ac.in/images/news/independence-day1.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block h-100vh w-100"
              src="https://lh3.googleusercontent.com/proxy/yrGFWZqWhxysjgk2K6SAgmGRvauFNQHd7aeeNJl73q9gaefBaW_TcG0PoD_z0UPQNx38PWZCZNzeqlCP3KC8wU0P8J8x-5r-sTXZ174OrOQEJUvmFYLqUXiQct8Xi0M"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMainCarouselelement;
