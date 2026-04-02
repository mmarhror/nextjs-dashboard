import { Josefin_Sans, Lusitana } from "next/font/google";

export const josefin = Josefin_Sans();

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"], // optional, choose the weights you want
});
