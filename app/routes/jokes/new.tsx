import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { useActionData } from "@remix-run/react";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    name?: string | undefined;
    content?: string | undefined;
  };
  fields?: {
    name: string;
    content: string;
  };
};

function validateJokeName(name: string) {
  if (name.length < 3) {
    return "That name is just too damn short";
  }
  if (name.length > 10) {
    return "No good joke has such a long name. 10 characters or less please";
  }
}

function validateJokeContent(content: string) {
  if (content.length === 0) {
    return "That joke is just too short";
  }
  if (content.length > 240) {
    return "Wow that was a long (boring?) joke. Please get to the chase a bit quicker. 240 characters or less please";
  }
}
const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  if (typeof name !== "string" || typeof content !== "string") {
    return badRequest({ formError: "Form not submitted properly" });
  }

  const fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content),
  };

  const fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const joke = await db.joke.create({ data: fields });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokesRoute() {
  const actionData = useActionData<ActionData>();

  return (
    <div>
      <h2>Add your joke</h2>
      <form method="post">
        <div>
          <label>
            Name:
            <input
              type="text"
              defaultValue={actionData?.fields?.name}
              name="name"
            />
          </label>
          {actionData?.fieldErrors?.name ? (
            <p>{actionData.fieldErrors.name}</p>
          ) : null}
        </div>
        <label>
          Joke:
          <textarea defaultValue={actionData?.fields?.content} name="content" />
        </label>
        {actionData?.fieldErrors?.content ? (
          <p>{actionData.fieldErrors.content}</p>
        ) : null}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
