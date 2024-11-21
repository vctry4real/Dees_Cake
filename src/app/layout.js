import { Lora, Roboto, Roboto_Flex, Roboto_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Dees Cake",
  description: "Where Every Bite Tells A Sweet Story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
