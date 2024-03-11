import Header from "@/app/components/Rumah/Header"
import Service from "@/app/components/Rumah/Service";
import Map from "@/app/components/Rumah/Map";
import Message from "@/app/components/Rumah/Message";
import Credits from "@/app/components/Rumah/Credits";

export default function Home() {
  return (
    <>
        <head>
          <title>Panca Budi Logistindo</title>
        </head>
        <Header/>
        <Service/>
        <Map/>
        <Message/>
        <Credits />
    </>
  );
}