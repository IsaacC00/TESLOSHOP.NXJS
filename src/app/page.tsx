import { titleFont } from "@/config/fonts";

export default function NamePage() {
  return (
    <div className="">
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className}`}>Hola Mundo con monserrat</h1>
    </div>
  );
}