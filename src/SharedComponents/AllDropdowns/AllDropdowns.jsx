import PaymentTypes from "./Dropdowns/PaymentTypes";
import PersonTypes from "./Dropdowns/PersonTypes";
import SingleCheckbox from "./Dropdowns/SingleCheckbox";
import TicketTypes from "./Dropdowns/TicketTypes";

const AllDropdowns = () => {
  return (
    <>
      <SingleCheckbox />
      <PersonTypes />
      <TicketTypes />
      <PaymentTypes />
    </>
  );
};

export default AllDropdowns;