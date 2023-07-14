import PaymentTypes from "./Dropdowns/PaymentTypes";
import PersonTypes from "./Dropdowns/PersonTypes";
import TicketTypes from "./Dropdowns/TicketTypes";

const AllDropdowns = () => {
  return (
    <>
      <PersonTypes />
      <TicketTypes />
      <PaymentTypes />
    </>
  );
};

export default AllDropdowns;
