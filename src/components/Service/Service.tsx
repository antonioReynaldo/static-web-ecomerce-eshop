import {
  FaHeadphones,
  FaCarSide,
  FaCheckCircle,
  FaWallet,
} from "react-icons/fa";
import CardService from "./CardService";

export default function Services() {
  return (
    <section className="pb-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-3.75 lg:grid-cols-4 lg:gap-7.5">
          {/* card 1 */}
          <CardService
            title="Free Shipping"
            text="Free Shipping On All Order"
            icon={FaCarSide}
          />
          <CardService
            title="Safe Money"
            text="30 Days Money Back"
            icon={FaCheckCircle}
          />
          <CardService
            title="Secure Payment"
            text="All Payment Secure"
            icon={FaWallet}
          />
          <CardService
            title="Online Supoort 24/7"
            text="Technical Support 24/7"
            icon={FaHeadphones}
          />
        </div>
      </div>
    </section>
  );
}
