import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

export const Picker = ({ isDate }) => {
  const [startDate, setStartDate] = useState(new Date() || isDate);
  return (
    <DatePicker dateFormat="MMMM d, yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

const Styles = styled.div`
 /* .react-datepicker-wrapper, */
 /* .react-datepicker__input-container, */
 .react-datepicker__input-container input {
   width: 150px;
   height: 44px;
   border: 1px solid #D5DEE7;
   padding-left:12px;
   font-family: "DM Sans";
   font-size: 14px;
 }
`;

export default function Calendar() {
  return (
    <Styles>
      <Picker />
    </Styles>
  );
}