
import ContactUsButton from "./ContactUsButton";
import NavBarContent from "./NavBarContent";
import NavBarLogo from "./NavBarLogo";

export default function NavBar() {
 
  return (
    <header className={`w-full relative z-40`}>
      <div className="w-full  absolute lg:top-0 top-4 left-0 ">
        <div className="w-full container-base md:container-xl  flex justify-center lg:justify-between items-center">
          <ContactUsButton />
          <NavBarContent  />
          <NavBarLogo/>
        </div>
      </div>
    </header>
  );
}
