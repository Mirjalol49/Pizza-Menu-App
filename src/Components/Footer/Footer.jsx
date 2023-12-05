import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const openHour = 9;
  const closeHour = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && closeHour >= currentHour;

  // Calculate the remaining time until opening in seconds
  const secondsUntilOpen =
    currentHour < openHour
      ? (openHour - currentHour) * 3600
      : (24 - currentHour + openHour) * 3600;
  const [timeLeft, setTimeLeft] = useState(secondsUntilOpen);

  // Update the countdown every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <footer className="footer-main">
      {isOpen ? (
        <>
          <p className="footer-open">
            We are happy to welcome you in {openHour}:00 AM and {closeHour}:00
            PM
          </p>
          <button className="footer-button">Order</button>
        </>
      ) : (
        <>
          <p className="footer-close">
            Sorry we are closed. We open after {Math.floor(timeLeft / 3600)}{" "}
            hours, {Math.floor((timeLeft % 3600) / 60)} minutes, and{" "}
            {timeLeft % 60} seconds.
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
