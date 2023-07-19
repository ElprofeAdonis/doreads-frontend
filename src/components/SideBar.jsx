import '../styles/sidebar.css';
import SidebarLink from './SideBarlinks';
import foto from '../assets/2.svg';
import home from '../assets/hom3.svg';
import openbooks from '../assets/openbook.svg';
import stud from '../assets/graduated.svg';
import cerrar from '../assets/log-out.svg';

function SideBar() {
  return (
    <div className="sidebar2">
      <img src={foto} className="icon"></img>
      <SidebarLink text="Home" img1={home} href="/" />
      <SidebarLink text="Books" img1={openbooks} href="/books" />
      <SidebarLink text="Students" img1={stud} href="/students" />
      <div className="LogOut">
        <SidebarLink text="Log Out" img1={cerrar} href="/Login" />
      </div>
    </div>
  );
}

export default SideBar;
