import { Heart, HeartHandshake, MoonStar, PencilRuler, Rabbit, Sun } from "lucide-react";
import { GiKing, GiSunbeams } from "react-icons/gi";

function Bento() {
  return (
    <>
    <main className="flex container mx-auto py-10 max-w-5xl">
      <section className="grid grid-cols-3 gap-4">
        <div className="p-6 border border-violet-300 rounded-lg flex flex-col gap-4 col-span-1 row-span-1 bg-white">
          <GiKing size={60} className="text-violet-500"/>
          <span className="text-3xl font-bold">Mira, Hélio!</span>
        </div>
        
        <div className="p-6 border border-white rounded-lg flex flex-col gap-4 col-span-1 row-span-1">
        <PencilRuler size={40} className="text-violet-500" strokeWidth={1.4}/>
          <span className="text-xl font-semibold">Hey, soy yo!</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          
        </div>
        
        <div className="p-6 border border-violet-300 rounded-lg flex flex-col gap-4 col-span-1 row-span-2 relative overflow-hidden">
          <Rabbit size={40} className="text-white" strokeWidth={1.4} />
          <span className="text-xl text-white font-black">Is he...</span>
          <span className="text-3xl font-bold text-white">...the sun?</span>
          <img 
            src="https://images.unsplash.com/photo-1718619578357-f3825be21d50?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
            alt=""
          />
        </div>
        
        <div className="p-6 border border-violet-300 rounded-lg flex flex-col gap-4 col-span-2 bg-violet-700">
          <HeartHandshake size={40} className="text-violet-100" strokeWidth={1.4}/>
          <span className="text-3xl font-bold text-white">Super solar!</span>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam ducimus, dignissimos voluptatibus eos obcaecati quis magni perspiciatis ipsam? Aliquid reprehenderit dolore quidem quis reiciendis sed, quisquam magni tempora iure.</p>
          
        </div>
      </section>
      
    </main>
    </>
  )
}

export default Bento