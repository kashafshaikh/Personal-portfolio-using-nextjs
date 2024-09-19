import Link from "next/link";
 
 export default function Header(){
    return (
    <header className="bg-cyan-900  text-white">
         <div className= "flex items-center justify-between py-6 px-3 mb-20 font-bold text-[20px]"> 
        <Link href="/" className="hover:underline">Home</Link>
   <nav className="space-x-4 pr-3">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
        </div>
</header>
)
};


































