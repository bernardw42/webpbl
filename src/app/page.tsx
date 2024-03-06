import Header from "@/app/components/Home/Header"
import Service from "@/app/components/Home/Service";
import Map from "@/app/components/Home/Map";
import Message from "@/app/components/Home/Message";
import Credits from "@/app/components/Home/Credits";
import Navbar from "@/app/components/en/Navbar"
import Footer from "@/app/components/en/Footer"

export default function Home() {
  return (
    <>
        <head>
          <title>Panca Budi Logistindo</title>
        </head>
        <Navbar></Navbar>
        <Header/>
        <Service/>
        <Map/>
        <Message/>
        <Credits />
        <Footer></Footer>
    </>
  );
}
