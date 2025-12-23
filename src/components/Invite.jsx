import Footer from './Footer';
import Header from './Header';
import CarouselLinks from "./CarouselLinks";

export default function Invite() {
  return (
    <div id="invite" className="page active">
      <Header />
      
      <p>Con immenso piacere siamo lieti di invitarvi al nostro matrimonio</p>
      
      <p><strong>11 Luglio 2026 – ore 16:00</strong></p>

      <CarouselLinks />

      <Footer />
    </div>
  );
}
