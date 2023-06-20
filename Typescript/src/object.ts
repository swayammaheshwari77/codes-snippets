let employee: {
  readonly id: number;
  name: string;
  faxNumber?: number;
  retire: (date: Date) => void;
} = {
  id: 2,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
