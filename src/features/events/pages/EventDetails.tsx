import Heading from "@/common/components/Heading";
import { ReactComponent as CalendarWhiteBg } from "@/assets/icons/calendar-bg-white.svg";
import { ReactComponent as LocationWhiteBg } from "@/assets/icons/location-bg-white.svg";
import { ReactComponent as ArrowRight } from "@/assets/icons/arrow-right.svg";
import birthdayCakeUrl from "@/assets/images/birthday-cake.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EventDetails() {
  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate('/create');
    }
  }, []);

  return (
    <div className="event-details container h-full flex flex-col lg:flex-row md:mx-auto md:p-20 lg:p-40">
      <div className="event-details px-4 md:px-0 flex flex-col order-1 md:mr-8 lg:order-0 mt-8 lg:mt-0">
        <div className="event-details__data-heading">
          <Heading className="!mb-4 !text-4xl">{ state?.eventName }</Heading>
          <span className="text-neutral-2">Hosted by </span><span className="font-semibold">{ state?.hostName }</span>
        </div>
        <div className="event-details__data-meta mt-8">
          <div className="event-details__datetime flex items-center mb-4 hover:cursor-pointer">
            <div className="event-details__icon-box mr-2">
              <CalendarWhiteBg />
            </div>
            <div className="event-details__from-to flex flex-col w-[300px]">
              <span className="text-purple-dark font-bold">{state?.startDate.toDateString()}</span>
              <span className="text-neutral-1">to 19 <span className="font-bold">{state?.endDate.toDateString()}</span> UTC +10</span>
            </div>
            <div className="event-details__icon-arrow">
              <ArrowRight />
            </div>
          </div>
          <div className="event-details__location flex items-center hover:cursor-pointer">
            <div className="event-details__icon-box mr-2">
              <LocationWhiteBg />
            </div>
            <div className="event-details__address flex flex-col w-[300px]">
              <span className="text-purple-dark font-bold">{state?.locationName}</span>
              <span className="text-neutral-1">{state?.locationAddress}</span>
            </div>
            <div className="event-details__icon-arrow">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="event-details__img-box order-0 lg:order-1 md:max-w-[500px] ml-0 lg:ml-auto">
        <img src={birthdayCakeUrl} alt="Birthday cake" />
      </div>
    </div>
  );
}

export default EventDetails;
