
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react";
import { Appbar } from "./components/Appbar";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH);
  console.log(session);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      <Appbar />
      {JSON.stringify(session)}
    </div>
  );
}
