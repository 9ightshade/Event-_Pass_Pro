"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import sectionTitle from "@/public/SectionTitle.png";
import emailIcon from "@/public/icon.png";
import uploadIcon from "@/public/uploadIcon.png";
import uploadIconSm from "@/public/smUploadIcon.png";
const TicketSelection = () => {
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const [step, setStep] = useState(1);
  const [ticketTypeError, setTicketTypeError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const handleTicketCountChange = (event: { target: { value: string } }) => {
    setTicketCount(parseInt(event.target.value));
  };

  const handleTicketTypeChange = (type: React.SetStateAction<string>) => {
    setTicketType(type);
    setTicketTypeError(""); // Clear the error when a selection is made
  };

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };

  const handleSpecialRequestChange = (event: { target: { value: string } }) => {
    setSpecialRequest(event.target.value);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!ticketType) {
        setTicketTypeError("Please select a ticket type.");
        return;
      }
    }

    if (step === 2) {
      // Add validation for step 2 here (name, email, etc.)
      // If validation fails, return without incrementing the step
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCancel = () => {
    setStep(1);
  };

  // Calculate progress bar width based on the step
  const progressWidth = (step / 3) * 100;

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedTicketType = localStorage.getItem("ticketType");
    const storedTicketCount = localStorage.getItem("ticketCount");
    const storedStep = localStorage.getItem("step");
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedSpecialRequest = localStorage.getItem("specialRequest");

    if (storedTicketType) {
      setTicketType(storedTicketType);
    }
    if (storedTicketCount) {
      setTicketCount(parseInt(storedTicketCount));
    }
    if (storedStep) {
      setStep(parseInt(storedStep));
    }
    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedSpecialRequest) {
      setSpecialRequest(storedSpecialRequest);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("ticketType", ticketType);
    localStorage.setItem("ticketCount", ticketCount.toString());
    localStorage.setItem("step", step.toString());
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("specialRequest", specialRequest);
  }, [ticketType, ticketCount, step, name, email, specialRequest]);
  return (
    <div className="bg-[#041E23] bg-opacity-50 p-6 rounded-3xl shadow-lg w-full max-w-md border border-[#24A0B5] ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">
          {step === 1 ? "Ticket Selection" : "Attendee Details"}
        </h2>{" "}
        <p className="text-sm text-[#A8B2D1] text-right">Step {step}/3</p>{" "}
      </div>

      <div className="mb-4 h-2 bg-[#0E464F] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#24A0B5] transition-all duration-300"
          style={{ width: `${progressWidth}%` }}></div>
      </div>

      {/* wrapping div */}
      <div className="border border-[#24A0B5] rounded-[12px]">
        <div className="bg-[#041E23]  rounded-2xl p-4">
          {/* <h3 className="text-xl font-semibold mb-1 text-white">
            Techember Fest &quot;25
          </h3>
          <p className="text-[#A8B2D1] text-sm mb-2">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="text-[#A8B2D1] text-sm">
            📍 [Event Location] || March 15, 2025 | 7:00 PM
          </p> */}
          {step === 1 ? (
            <Image src={sectionTitle} alt="ticket data" />
          ) : (
            <div>
              <Image
                src={uploadIcon}
                alt="upload photo"
                className="cursor-pointer hidden md:block"
              />
              <Image
                src={uploadIconSm}
                alt="#"
                className="md:hidden mx-auto cursor-pointer"
              />
            </div>
          )}

          <hr className="bg-[#07373F] h-2 border-none my-4 rounded-[12px] " />
        </div>
        <div className=" bg-[#041E23] px-3">
          {step === 1 ? (
            <div>
              <p className="text-sm text-[#A8B2D1] mb-2">Select Ticket Type:</p>{" "}
              {ticketTypeError && (
                <p className="text-[#A8B2D1] text-sm italic">
                  {ticketTypeError}
                </p>
              )}
              <div className="grid grid-cols-3 gap-2">
                <button
                  className={`rounded-2xl py-3 px-2 text-sm font-medium transition-colors duration-200 text-left ${
                    ticketType === "free"
                      ? "bg-[#197686] text-white"
                      : "border border-[#197686] text-white hover:bg-[#02191D] hover:bg-opacity-50"
                  }`}
                  onClick={() => handleTicketTypeChange("free")}>
                  Free
                  <br />
                  <span className="text-xs">REGULAR ACCESS</span>
                  <br />
                  <span className="text-xs">20/52</span>
                </button>
                <button
                  className={`rounded-2xl py-3 px-2 text-sm font-medium transition-colors duration-200 text-left ${
                    ticketType === "vip"
                      ? "bg-[#197686] text-white"
                      : "border border-[#197686] text-white hover:bg-[#02191D] hover:bg-opacity-50"
                  }`}
                  onClick={() => handleTicketTypeChange("vip")}>
                  $150
                  <br />
                  <span className="text-xs">VIP ACCESS</span>
                  <br />
                  <span className="text-xs">26/52</span>
                </button>
                <button
                  className={`rounded-2xl py-3 px-2 text-sm font-medium transition-colors duration-200 text-left ${
                    ticketType === "vvip"
                      ? "bg-[#197686] text-white"
                      : "border border-[#197686] text-white hover:bg-[#02191D] hover:bg-opacity-50"
                  }`}
                  onClick={() => handleTicketTypeChange("vvip")}>
                  $150
                  <br />
                  <span className="text-xs">VVIP ACCESS</span>
                  <br />
                  <span className="text-xs">23/52</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        {step === 1 ? (
          <div className="mb-6 p-3">
            <label
              htmlFor="ticket-count"
              className="block text-sm font-medium text-[#A8B2D1] mb-1">
              Number of Tickets:
            </label>
            <div className="relative">
              <select
                id="ticket-count"
                value={ticketCount}
                onChange={handleTicketCountChange}
                className="block appearance-none w-full bg-[#041E23] border border-[#07373F] text-[#A8B2D1] py-2 px-3 rounded-xl leading-tight focus:outline-none focus:shadow-outline">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#A8B2D1]">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-[#041E23] rounded-xl p-4">
              {/* Add your form fields for name, email, etc. */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#A8B2D1] mb-1">
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block appearance-none w-full bg-[#041E23] border border-[#07373F] text-[#A8B2D1] py-2 px-3 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#A8B2D1] mb-1">
                  Enter your email *
                </label>
                <div className="relative">
                  <Image
                    src={emailIcon}
                    alt="#"
                    className="absolute bottom-4 left-3"
                  />
                  <input
                    type="email"
                    id="email"
                    className="block appearance-none w-full bg-[#041E23] border border-[#07373F] text-[#A8B2D1] py-3 pl-10 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="hello@wvtoflags.io"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="specialRequest"
                  className="block text-sm font-medium text-[#A8B2D1] mb-1">
                  Special request?
                </label>
                <textarea
                  id="specialRequest"
                  className="block appearance-none w-full bg-[#041E23] border border-[#07373F] h-32 text-[#A8B2D1] py-2 px-3 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
                  value={specialRequest}
                  onChange={handleSpecialRequestChange}
                  placeholder="Textarea"
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col-reverse md:flex-row  p-3 gap-2 items-center">
          <button
            className="bg-transparent border w-full border-[#24A0B5] hover:bg-[#64FFDA] text-[#24A0B5] hover:text-[#0A192F] font-medium py-2 px-4 rounded-xl transition-colors duration-200  basis-1/2 "
            onClick={handleBack}>
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button
            className="bg-[#24A0B5] hover:bg-[#50d8b7] w-full basis-1/2 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200"
            onClick={handleNext}>
            {step === 1 ? "Next" : "Get My Free Ticket"}
          </button>
        </div>
      </div>

      {/* wrapping div  */}
    </div>
  );
};

export default TicketSelection;
