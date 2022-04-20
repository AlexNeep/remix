import { useState } from "react";
// import { TikTokScraper } from "tiktok-scraper";
export const ActionFunction = async ({ request }: any) => {
  let formData = await request.formData();
  console.log(formData);
};

export default function TikTokIntegration() {
  const [searchQuery, setSearchQuery] = useState("grassgods");

  const getData = async () => {
    // const url =
    //   "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    //   await TikTokScraper.hashtag(searchQuery, {
    //     number: 100,
    //     sessionList: ["sid_tt=58ba9e34431774703d3c34e60d584475;"],
    //   })
    //     .then((posts: Array<1>) => console.log(posts))
    //     .catch((error: Error) => console.log(error));
  };

  return (
    <div>
      <form method="post">
        <input
          type="text"
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e?.target?.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
        data-video-id="6718335390845095173"
      >
        <section id="video" />
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script> */}
    </div>
  );
}
