"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

const getPartsOfTimeDuration = (duration: number) => {
  const days = Math.floor(duration / msInDay);
  const hours = Math.floor((duration % msInDay) / msInHour);
  const minutes = Math.floor((duration % msInHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  return { days, hours, minutes, seconds };
};

export default function Countdown({ style }: any) {
  const t = useTranslations("Countdown");
  const [isClient, setIsClient] = useState(false);
  const [timeDif, setTimeDif] = useState(0);

  const [endDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 84);
    date.setHours(23, 59, 59, 0);
    return date;
  });

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = endDate.getTime() - now;
    return difference > 0 ? difference : 0;
  };

  useEffect(() => {
    setIsClient(true);
    setTimeDif(calculateTimeLeft());

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeDif(newTimeLeft);
      if (newTimeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const timeParts = getPartsOfTimeDuration(timeDif);

  if (!isClient) {
    return null;
  }

  return (
    <div className="timer">
      <div className="time-box">
        <span id="days1" className="time-value">
          {timeParts.days}
        </span>
        <br />
        {t("days")}
      </div>
      <div className="space14" />
      <div className="time-box">
        <span id="hours1" className="time-value">
          {timeParts.hours}
        </span>
        <br />
        {t("hours")}
      </div>
      <div className="space14" />
      <div className="time-box">
        <span id="minutes1" className="time-value">
          {timeParts.minutes}
        </span>
        <br />
        {t("minutes")}
      </div>
      <div className="space14" />
      <div className="time-box">
        <span id="seconds1" className="time-value">
          {timeParts.seconds}
        </span>
        <br />
        {t("seconds")}
      </div>
      <div className="space14" />
    </div>
  );
}
