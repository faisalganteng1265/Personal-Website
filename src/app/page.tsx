import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-black">
      <div className="flex flex-col items-center relative">
        <h1
          className="font-american-captain z-0 absolute"
          style={{
            color: '#ffffff',
            fontSize: '120px',
            transform: 'translate(0px, -50px) scaleY(1.5)',
            whiteSpace: 'nowrap'
          }}
        >
          ABIYYU FAISAL AKMAL

          
        </h1>
        <Image
          src="/faisal.png"
          alt="Faisal"
          width={900}
          height={900}
          priority
          className="z-10"
        />
      </div>
    </main>
  );
}
