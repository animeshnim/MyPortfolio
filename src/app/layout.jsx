// Imports
import { Inter } from "next/font/google";
import "static/assets/stylesheets/main.css"
import "static/assets/icons/Line_Awesome_Icons/css/line-awesome.css";


// Inter Subsets
const inter = Inter({ subsets: ["latin"] });


// Meta Data
export const metadata = {
    title: "Animesh Nim",
    description: "Portfolio of Animesh Nim",
};


// Layout
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-body`}>{children}</body>
        </html>
    );
}
