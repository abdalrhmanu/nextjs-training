import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <img src="/logo.png"></img> */}
                {/* <Image src='/logo.png' width={128} height={77}/> */}
                <h1>Nav Title/Logo</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Listing</a></Link>
        </nav>
     );
}
 
export default NavBar;