import React, { useEffect, useRef } from 'react';
import './results.css';

const Results = () => {
  const stats = [
    { value: "100+", description: "Chet elda o‘qiyotgan talabalar" },
    { value: "5+", description: "Ta’lim sohasida yillik tajriba" },
    { value: "$1 mln", description: "O‘quvchilarimizning olgan umumiy stipendiyasi" },
    { value: "100%", description: "Universitetga qabul qilinish kafolati" },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="stat-card hidden-card"
          >
            <div className="stat-value">{item.value}</div>
            <div className="stat-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;