"use client";
import useAuthenticated from "@/lib/useAuthenticated";
import SignIn from "./components/ui/SignIn";

function Home() {
  const authenticated = useAuthenticated();
  if (!authenticated) {
    return null;
  }

  return (
    <div className="bg-red-100">
        <SignIn/>
    </div>
  );
}

export default Home;
