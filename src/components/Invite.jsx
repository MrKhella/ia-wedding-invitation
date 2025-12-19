export default function Invite() {
  return (
    <div id="invite" className="page active">
      <h1>Invito di matrimonio</h1>
      <p><strong>11 Luglio 2026 – ore 16:00</strong></p>

      <a
        href="https://www.google.com/maps/place/Casale+Consolini/@41.8421304,12.5702537,16z"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        📍 Location
      </a>

      <a
        href="https://www.google.com/maps/place/Basilica+di+Santo+Stefano+Rotondo+al+Celio/"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⛪ Chiesa
      </a>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdysbmjUpaO7lKltaZhDvMIwL9TgUX9sTmpc5dsQ-cZy3uMTw/viewform"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        ✅ Conferma Presenza
      </a>

      <p>"La vostra presenza renderà indimenticabile questo giorno."</p>
    </div>
  );
}
