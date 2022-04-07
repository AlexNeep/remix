export default function tiktokRoute() {
  const url =
    "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

  // https://v16-webapp.tiktok.com/78189f99b7f4ab9eb62ed9efb2a1004c/624ebe48/video/tos/useast2a/tos-useast2a-ve-0068/15fbafb086324317bf77a649580b1f95/?a=1988&br=4778&bt=2389&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3yCnz7ThV.bSDXq&l=202204070434380102231280500D98C018&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M245aWhvZ3U4bjMzZzczM0ApOTtmOzdoaDtnNzM5aTo1ZGczc29gcGdnMXJfLS01MTZzczI2L2FiLWFeLzI0MmJhYV86Yw%3D%3D&vl=&vr=
  return (
    <div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
        data-video-id="6718335390845095173"
        // style="max-width: 605px;min-width: 325px;"
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@scout2015"
            href="https://www.tiktok.com/@scout2015"
          >
            @scout2015
          </a>{" "}
          <p>
            Scramble up ur name & I’ll try to guess it😍❤️{" "}
            <a
              title="foryoupage"
              target="_blank"
              href="https://www.tiktok.com/tag/foryoupage"
            >
              #foryoupage
            </a>{" "}
            <a
              title="PetsOfTikTok"
              target="_blank"
              href="https://www.tiktok.com/tag/PetsOfTikTok"
            >
              #petsoftiktok
            </a>{" "}
            <a
              title="aesthetic"
              target="_blank"
              href="https://www.tiktok.com/tag/aesthetic"
            >
              #aesthetic
            </a>
          </p>{" "}
          <a
            target="_blank"
            title="♬ original sound - tiff"
            href="https://www.tiktok.com/music/original-sound-6689804660171082501"
          >
            ♬ original sound - tiff
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
}
