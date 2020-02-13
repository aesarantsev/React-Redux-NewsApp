import moment from "moment";

export const ISOdateToDatepickerFormat = (date: string) => {
  let datepickerFormat: string = "YYYY-MM-DD";
  return moment(date, moment.ISO_8601).format(datepickerFormat);
};

export const ISOdateToUIformat = (date: string) => {
  let UIformat: string = "DD MMMM YYYY";
  return moment(date, moment.ISO_8601).format(UIformat);
};

export const DatepickerDateToISOformat = (date: string) => {
  let datepickerFormat: string = "YYYY-MM-DD";
  return moment(date, datepickerFormat).subtract(1, "days").format("YYYY-MM-DDTHH:mm:ss");
};

