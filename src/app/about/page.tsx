import Image from "next/image";
function About () {
    return(
        <main>
        <div className="w-full h-full">
            <div className="mt-9 text-balance ml-9 mr-7 text-cyan-800">
                <h1 className="text-center font-serif font-extrabold text-5xl underline">About</h1>
            <p className="font-bold text-justify text-violet-800 mt-5">Hello! I am <b>Muhammad Arsalan Akbar</b>, 
            an IT professional currently pursuing an advanced course in Information Technology from GIAIC. 
            I hold a bachelor's degree from Karachi University, where I developed a strong foundation in
            computer science and technology.With a passion for solving complex problems and a keen interest
             in innovative solutions, I am continually expanding my skill set in areas such as software 
             development, system  administration, and networking. My current focus is on enhancing my technical 
             expertise,learning cutting-edge technologies, and contributing to meaningful projects that make a 
             difference.I am always eager to collaborate, learn, and take on challenges that push
              my boundaries. Feel free to explore my portfolio to see examples of my work and projects.</p>
            
            </div>
            <div className=" relative" >
                <div className="absolute">
                    <Image src="/01.jpg" alt="its pic" width="350" height="200" className=" absolute   mt-16 mb-16 rounded-2xl ml-9" ></Image>
                    <h1 className="text-[#d8973c] mt-[6rem] ml-[35rem] text-[2rem] font-serif font-bold">Muhammad Arsalan Akbar</h1>
                    <ul className="ml-[37rem] pt-5 font-semibold  "><br/>

                        <li>
                        <span className="font-bold text-black">~Birthday,    </span>17 Februray 1988
                        </li><br/>

                        <li>
                        <span className="font-bold text-black ">~Degree,</span> Bachelors In Commerece
                        </li><br/>

                        <li> 
                        <span className="font-bold text-black ">~Now, </span>Curently Enrolled In GIAIC
                        </li><br/>

                        <li>
                        <span className="font-bold text-black ">~Resident, </span> Karachi, Pakistan
                        </li><br/>

                    </ul>
                </div>
            </div>

        </div>
        </main>
    ) 
}
export default About