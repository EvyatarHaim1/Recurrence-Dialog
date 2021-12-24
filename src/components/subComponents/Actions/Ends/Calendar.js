import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

import { endsDate } from "../../../../redux/event/event.action";

export const Picker = ({ date }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(date || new Date());

  const handleChange = (date) => {
    dispatch(endsDate(date));
    setStartDate(date);
  }

  return (
    <DatePicker dateFormat="MMMM d, yyyy" selected={startDate} onChange={handleChange} />
  );
};

const Styles = styled.div`
 .react-datepicker__input-container input {
   width: 150px;
   height: 44px;
   border: 1px solid #D5DEE7;
   padding-left:12px;
   font-family: "DM Sans";
   font-size: 14px;
 }
`;

export default function Calendar({ date }) {
  return (
    <Styles>
      <Picker date={date} />
    </Styles>
  );
}