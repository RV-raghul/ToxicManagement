import { useEffect, useState } from "react";

function Navbar() {

  const navItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Overview' },
    { id: 4, name: 'Analysis' },
    { id: 5, name: 'Outcome' },
    { id: 6, name: 'Future Scope'}
  ];

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.name.toLowerCase());
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (window.scrollY >= offsetTop - 150 && window.scrollY < offsetTop + offsetHeight - 150) {
            setActiveSection(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='w-[100vw] h-[10vh] bg-white flex justify-center items-center sticky top-0 z-50'>
      <div className='w-[100vw] h-full rounded-lg bg-[#41c2ca] flex text-2xl gap-8 justify-evenly items-center'>
        <div className='flex gap-5 w-[40vw] justify-start ml-10'>
          <div>
            <img src="src\components\assets\TRILogo.jpg" alt="" className=' w-20 h-15' />
          </div>
          <div>
            <div className='text-white text-2xl font-bold'>TRI</div>
            <div className='be-vietnam-pro-medium text-white text-lg'> Data Analysis</div>
          </div>
        </div>

        <div className='flex text-xl gap-5 w-[60vw] justify-center'>
          {
            navItems.map((item) => (
              <div
                key={item.id}
                className={`hover:cursor-pointer hover:text-black 
                  ${activeSection === item.name ? 'text-black font-bold border-b-2 border-black' : 'text-white'}`}
              >
                <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Navbar;
