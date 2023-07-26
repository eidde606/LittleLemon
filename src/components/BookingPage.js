import React, { useState } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    occasion: "",
    guests: "",
  });

  const fields = [
    {
      name: "time",
      label: "Time:",
      type: "time",
    },
    {
      name: "date",
      label: "Date:",
      type: "date",
    },
    {
      name: "occasion",
      label: "Occasion:",
      type: "select",
      options: [
        { value: "", label: "Select an Occasion" },
        { value: "birthday", label: "Birthday" },
        { value: "anniversary", label: "Anniversary" },
        { value: "celebration", label: "Celebration" },
      ],
    },
    {
      name: "guests",
      label: "Number of Guests:",
      type: "number",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      time: "",
      date: "",
      occasion: "",
      guests: "",
    });
  };

  return (
    <BookingForm
      fields={fields}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default BookingPage;
