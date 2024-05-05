import Case from "@/components/casestudies/Case";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Whatwedo from "@/components/wedo/Whatwedo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <Whatwedo />
      <Case />
    </>
  );
}
