import Input from "@/common/components/Input";
import FormSection from "@/features/events/components/form-section";
import Heading from "@/common/components/Heading";
import confetti from "@/assets/images/confetti.jpeg";
import { ReactComponent as Camera } from "@/assets/icons/camera.svg";
import Button from "@/common/components/Button";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function EventCreate() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    startDate: null,
    endDate: null,
    eventName: "",
    hostName: "",
    locationName: "",
    locationAddress: ""
  });

  const imageFile = useRef(null);
  const handleDateChange = (key: "startDate" | "endDate", date: Date) => {
    setFormValue(prevState => ({ ...prevState, [key]: date }));
  };
  const handleTextChange = (key: "eventName" | "hostName" | "locationName" | "locationAddress",
                            value: string) => {
    setFormValue(prevState => ({ ...prevState, [key]: value }));
  };
  const onSubmit = () => {
    const { startDate, endDate, hostName, locationName, locationAddress } = formValue;
    if (!startDate
      || !endDate
      || !hostName
      || !locationName
      || !locationAddress) {
      return;
    }

    navigate('/event', {
      state: { ...formValue }
    });
  };

  return (
    <div className="event-create container h-full flex flex-col mx-auto p-20">
      <Heading className="event-create__heading !text-4xl !md:text-5xl">
        Create your event
      </Heading>
      <div className="event-create__content flex flex-col lg:flex-row lg:gap-8">
        <div className="event-create__form lg:w-1/2">
          <FormSection className="mb-10">
            <Heading className="!text-3xl !mb-4">🎉 Basic Info</Heading>
            <div className="event-crate__input-group mb-2">
              <label className="text-purple-dark">Event Name</label>
              <Input value={formValue.eventName}
                     onChange={({ target: { value } }) => handleTextChange("eventName", value)} />
            </div>
            <div className="event-crate__input-group">
              <label className="text-purple-dark">Host Name</label>
              <Input value={formValue.hostName}
                     onChange={({ target: { value } }) => handleTextChange("hostName", value)} />
            </div>
          </FormSection>
          <FormSection className="mb-10 ">
            <Heading className="!text-3xl !mb-4">🗓 Date & Time</Heading>
            <div className="event-crate__input-group mb-2">
              <label>Start Date/Time</label>
              <DatePicker
                onChange={(d: Date) => handleDateChange("startDate", d)}
                showTimeSelect
                selected={formValue.startDate}
                customInput={<Input type="text" value={formValue.startDate} readOnly />}
                dateFormat="Pp"
              />
            </div>
            <div className="event-crate__input-group">
              <label>End Date/Time</label>
              <DatePicker
                onChange={(d: Date) => handleDateChange("endDate", d)}
                showTimeSelect
                selected={formValue.endDate}
                customInput={<Input type="text" value={formValue.endDate} readOnly />}
                dateFormat="Pp"
              />
            </div>
          </FormSection>
          <FormSection>
            <Heading className="!text-3xl !mb-4">📍 Location</Heading>
            <div className="event-crate__input-group mb-2">
              <label className="text-purple-dark">Location Name</label>
              <Input value={formValue.locationName}
                     onChange={({ target: { value } }) => handleTextChange("locationName", value)} />
            </div>
            <div className="event-create__input-group">
              <label className="text-purple-dark">Location Address</label>
              <Input value={formValue.locationAddress}
                     onChange={({ target: { value } }) => handleTextChange("locationAddress", value)} />
            </div>
          </FormSection>
        </div>
        <div
          className="event-create__right flex flex-col max-w-lg mt-10 lg:mt-0 ml-auto mr-auto lg:mr-0 lg:text-right lg:w-1/2">
          <div className="event-create__image-box relative flex items-center justify-center hover:cursor-pointer">
            <img className="event-create__image rounded-xl" src={confetti} alt="Confetti" />
            <div
              className="overlay hover:flex items-center justify-center absolute inset-0 z-10 bg-neutral-3 opacity-50 rounded-xl"
              onClick={() => imageFile.current!.click()}>
            </div>
            <div
              className="event-create__icon-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20"
              onClick={() => imageFile.current!.click()}>
              <Camera className="w-full h-full" />
            </div>
          </div>
          <Button className="mt-4 py-4" onClick={onSubmit}>Create my event</Button>
          <input ref={imageFile} id="image" type="file" className="hidden" />
        </div>
      </div>
    </div>
  );
}

export default EventCreate;
