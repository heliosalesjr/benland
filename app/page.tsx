import { Heart, HeartHandshake, MoonStar, PencilRuler, Rabbit, Sun } from "lucide-react";
import { GiKing, GiSunbeams } from "react-icons/gi";


export default function Home() {
  return (
    <>
    <main className="flex container mx-auto py-20">
      <section className="grid grid-cols-3 gap-6">
        <div className="p-6 border border-emerald-500 rounded-lg flex flex-col gap-4 col-span-1 row-span-1">
          <GiKing size={60} className="text-violet-500"/>
          <span className="text-3xl font-bold">Mira, Hélio!</span>
        </div>
        
        <div className="p-6 border border-emerald-500 rounded-lg flex flex-col gap-4 col-span-1 row-span-1">
        <PencilRuler size={40} className="text-violet-500" strokeWidth={1.4}/>
          <span className="text-xl font-semibold">Hey, soy yo!</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          
        </div>
        
        <div className="p-6 border border-emerald-500 rounded-lg flex flex-col gap-4 col-span-1 row-span-2">
          <Rabbit size={40} className="text-violet-500" strokeWidth={1.4}/>
          <span className="text-xl">Is he...</span>
          <span className="text-3xl font-bold">...the sun?</span>
          <img 
            src='https://images.unsplash.com/photo-1718619578357-f3825be21d50?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className="rounded-lg"
            alt=""
          />
        </div>
        
        <div className="p-6 border border-emerald-500 rounded-lg flex flex-col gap-4 col-span-2">
          <HeartHandshake size={40} className="text-violet-500" strokeWidth={1.4}/>
          <span className="text-3xl font-bold">Super solar!</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam ducimus, dignissimos voluptatibus eos obcaecati quis magni perspiciatis ipsam? Aliquid reprehenderit dolore quidem quis reiciendis sed, quisquam magni tempora iure.</p>
          
        </div>
      </section>
      
    </main>
    </>
  );
}
