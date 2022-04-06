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
