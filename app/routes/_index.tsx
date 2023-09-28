import type { MetaFunction } from "@remix-run/node";
import {db}from "~/utils/db.server"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function getPosts() {
  const querySnapshot = await db.collection("posts").get();
  const data:any = [];

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id});
  })

  console.log(data);

}

export default function Index() {
  getPosts();
  return (
    <div>
      Hi!
    </div>
  );
}
