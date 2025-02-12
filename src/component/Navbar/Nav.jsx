// import { useState } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import { IoMenu, IoClose } from "react-icons/io5";
// import logo from "../../assets/logo-removebg-preview.png";
// import "./Nav.css";

// export default function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Navbar className="navbar-custom" isBordered isBlurred={false}>
//       {/* Logo and Toggle Button */}
//       <NavbarContent className="flex justify-between w-full">
//         <NavbarBrand>
//           <a href="/">
//             <img src={logo} alt="logo" className="w-44" />
//           </a>
//         </NavbarBrand>
        
//         {/* Toggle button for small screens */}
//         <button
//           className="sm:hidden text-5xl p-2 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <IoClose/> : <IoMenu />}
//         </button>
//       </NavbarContent>

//       {/* Desktop Menu */}
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link href="/" className="hover:text-blue-800 text-lg" color="foreground"> Home </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="/about" className="hover:text-blue-800 text-lg" color="foreground"> About </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="/project" className="hover:text-blue-800 text-lg" color="foreground"> Projects </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="/achievement" className="hover:text-blue-800 text-lg" color="foreground"> Achievements </Link>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4">
//           <Link href="/" color="foreground" className="hover:text-blue-800 text-lg" onClick={() => setMenuOpen(false)}> Home </Link>
//           <Link href="/about" color="foreground" className="hover:text-blue-800 text-lg" onClick={() => setMenuOpen(false)}> About </Link>
//           <Link href="/project" color="foreground" className="hover:text-blue-800 text-lg" onClick={() => setMenuOpen(false)}> Projects </Link>
//           <Link href="/achievement" color="foreground" className="hover:text-blue-800 text-lg" onClick={() => setMenuOpen(false)}> Achievements </Link>
//         </div>
//       )}

//       {/* Contact Button */}
//       <NavbarContent justify="end" className="mr-4 hidden sm:flex">
//         <NavbarItem>
//           <Link href="/contact" color="foreground">
//             <Button color="primary" variant="flat">Contact With Us</Button>
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }







import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";  // Import from react-scroll
import logo from "../../assets/logo-removebg-preview.png";
import "./Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="navbar-custom" isBordered isBlurred={false}>
      <NavbarContent className="flex justify-between w-full">
        <NavbarBrand>
          <a href="/">
            <img src={logo} alt="logo" className="w-44" />
          </a>
        </NavbarBrand>

        {/* Toggle button for small screens */}
        <button
          className="sm:hidden text-5xl p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-800 text-lg">Home</ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="cursor-pointer text-black hover:text-blue-800 text-lg">About</Link>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="project" smooth={true} duration={500} className="cursor-pointer hover:text-blue-800 text-lg">Projects</ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="achievement" smooth={true} duration={500} className="cursor-pointer hover:text-blue-800 text-lg">Achievements</ScrollLink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer text-black hover:text-white hover:bg-blue-300 hover:p-2 text-lg" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
          <Link href="/about" className="cursor-pointer text-black hover:text-white hover:bg-blue-300 hover:p-2 text-lg">About</Link>
          <ScrollLink to="project" smooth={true} duration={500} className="cursor-pointer text-black hover:text-white hover:bg-blue-300 hover:p-2 text-lg" onClick={() => setMenuOpen(false)}>Projects</ScrollLink>
          <ScrollLink to="achievement" smooth={true} duration={500} className="cursor-pointer text-black hover:text-white hover:bg-blue-300 hover:p-2 text-lg" onClick={() => setMenuOpen(false)}>Achievements</ScrollLink>
        </div>
      )}

      {/* Contact Button */}
      <NavbarContent justify="end" className="mr-4 hidden sm:flex">
        <NavbarItem>
          <Button color="primary" variant="flat">
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">Contact With Us</ScrollLink>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
