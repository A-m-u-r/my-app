import React from "react";
import { format, formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";
import { addDays } from "date-fns/esm";
import styles from "./style.module.css"

export interface IAddDayProps {
  day: number;
}

export const AddDay: React.FC<IAddDayProps> = (props) => {
  return (
    <div className={styles.dayIsWeek}>
      {format(addDays(new Date(), props.day), "EEEEEE", {locale: ru,})[0].toUpperCase() +
        format(addDays(new Date(), props.day), "EEEEEE", { locale: ru }).slice(1)}
    </div>
  );
};
