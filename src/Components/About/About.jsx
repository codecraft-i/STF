import React from "react";
import "./About.css";
import profileImg from "@assets/Logo.png";

const About = () => {
  return (
    <section className="author-section">
      {/* Bezak shakllar */}
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>

      {/* Kontent */}
      <div className="author-container">
        <div className="author-image-wrapper">
          <img src={profileImg} alt="Prof. Sophia" className="author-image" />
        </div>
        <div className="author-text">
          <h5 className="author-subtitle">Meet Author</h5>
          <h2 className="author-title">Prof. Sophia</h2>
          <p className="author-desc">
            This is an ebook landing page template with Bootstrap 5 CSS framework.
            It is easy to customize with the use of Bootstrap CSS classes.
          </p>
          <p className="author-desc">
          Men — Toshmamatov Sarvarjon, STF_CONSULTING   firmasi asoschisiman , 5 yildan ortiq vaqt davomida Koreyada bo'lganman 93 dan ortiq talabalarni Janubiy Koreyadagi oliygohlarga muvaffaqiyatli tarzda yuborishga hissa qo‘shdim.

Koreyada o‘qish niyatida bo‘lgan yoshlarga bir nechta muhim tavsiyalarim bor:
 • Tilni o‘rganish – asosiy kalit. Garchi siz ingliz tilida ta’lim beriladigan dasturga hujjat topshirmoqchi bo‘lsangiz ham, koreys tilini o‘rganishga vaqt ajrating. Bu sizga nafaqat o‘qishda, balki kundalik hayotingizda ham katta yengillik yaratadi.
 • Madaniyatni qabul qiling. Koreya o‘ziga xos urf-odatlari, qadriyatlari va jamiyat qoidalari bilan ajralib turadi. Ushbu farqlarga hurmat bilan yondashsangiz, yangi muhitga moslashishingiz osonlashadi.
 • Intizom – muvaffaqiyat garovi. Koreya universitetlarida qat’iy tartib va mas’uliyatga katta e’tibor qaratiladi. Darslarga o‘z vaqtida qatnashish, topshiriqlarni mas’uliyat bilan bajarish sizni nafaqat yaxshi natijalarga, balki jamiyatdagi obro‘ga ham olib boradi.

Koreyaga borish – bu faqatgina o‘qish emas, balki butunlay yangi bosqichga qadam qo‘yishdir. Har bir qadamni ongli, mas’uliyatli va tayyorgarlik bilan tashlang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;