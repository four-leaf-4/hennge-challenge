export const addDateObj = (data) => {
  return data.map((value) => {
    const newdate = new Date(value.date);
    return { ...value, date: newdate };
  });
};
