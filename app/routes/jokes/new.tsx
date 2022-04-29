import { ActionFunction, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  if (typeof name !== "string" || typeof content !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, content };
  const joke = await db.joke.create({ data: fields });
  return redirect(`/jokes/${joke.id}`);
};

export default function newJokesRoute() {
  return (
    <div>
      <h2>Add your joke</h2>
      <form method="post">
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        <label>
          Joke:
          <textarea name="content" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
