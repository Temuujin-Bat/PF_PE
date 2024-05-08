import { Stack } from "@mui/material";
import { useState } from "react";

export default function RightTimeZone() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

  return <Stack sx={{ fontSize: "2em" }}>{ctime} ⏱️</Stack>;
}
