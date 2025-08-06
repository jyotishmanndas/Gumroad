import { Navbar } from "@/components/landingpage/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col min-h-screen bg-green-500">
            <Navbar />
            {children}
        </div>
    )
}