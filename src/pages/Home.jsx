import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#09090B]">
            <Navbar/>

            <main id="home" className="flex min-h-screen items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                    Welcome to My Portfolio.
                </h1>
            </main>
        </div>
    );
}