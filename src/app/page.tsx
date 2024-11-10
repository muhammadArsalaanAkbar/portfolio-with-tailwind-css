import Image from "next/image";
import Footer from "./components/footer";

function HomePage () {
  return (
    <main className="w-full">
    <div className="bg-[#284b63]">
      <div className="flex gap-10 ml-64 pt-36">
        <div className=" w-[20rem] h-full"> 
          <h1 className=" font-serif font-extrabold text-[#96b7e1] text-[1.3rem] underline">Muhammad Arsalan Akbar </h1>
          <h3 className="font-semibold mt-2 text-[#778da9] text-[1rem]">Full Stack Devalopar</h3>
          <p className="font-medium mt-20 ml-2 text-balance text-[#ced4da]">
              Hi, I am Muhammad Arsalan Akbar. I recently graduated with
               a degree from Karachi University,where I gained hands-on
               experience through internships in Commerce. I am excited
               excited to kickstart my career and apply my skills to GIAIC
              </p>

          </div>
        <div>
          <Image src="/01.jpg" alt="its pic" width="350" height="100" className="rounded-full"></Image>
        </div>
      </div>
    </div>
    <Footer />
    </main>
      
  )
}
export default HomePage