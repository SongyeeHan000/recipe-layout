import "./globals.css";
import Link from "next/link";

export default function Navbar() {
    return ( 
        <div className="navBar">
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}