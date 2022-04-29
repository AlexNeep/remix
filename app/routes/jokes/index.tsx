import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { db } from "~/utils/db.server";
import type { Joke } from "@prisma/client";

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  const data: LoaderData = { joke: randomJoke };
  return json(data);
};

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Here's a random joke</h1>
      <h2>{data.joke.name}</h2>
      <p>{data.joke.content}</p>
      <Link to={data.joke.id}>"{data.joke.name}" Permalink</Link>
    </div>
  );
}
