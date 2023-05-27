import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <p>
        Address:{" "}
        <a href="https://goo.gl/maps/VeQdviXxBjLxcnMh6">
          st. Pushkina, 10, Moscow
        </a>
      </p>

      <img
        src="https://biz.com.kg/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-30-at-13.06.46.jpeg"
        alt="image1"
      />

      <img
        src="https://igotmoney.ru/wp-content/uploads/2018/08/topkanc.jpeg"
        alt="image2"
      />

      <img
        src="https://moybiznes.org/wp-content/uploads/magazin-kanctovarov-1024x624.jpg"
        alt="image3"
      />
    </div>
  );
}
