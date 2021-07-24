import { ScaleEnum } from "../pages/index";

export default function getBG(scale: ScaleEnum, temp: number) {
  if (scale === ScaleEnum.celsius) {
    if (temp < 16) return "bg-cold";
    return "bg-hot";
  } else {
    if (temp < 60) return "bg-cold";
    return "bg-hot";
  }
}
