export interface Anime {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const animeList: Anime[] = [
  {
    title: "Love Live! Nijigasaki S1",
    description: "My favorite Love Live series",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Love_Live%21_Nijigasaki_promotional_image.jpg",
    link: "https://myanimelist.net/anime/40879/Love_Live_Nijigasaki_Gakuen_School_Idol_Doukoukai",
  },
  {
    title: "Love Live! Nijigasaki S2",
    description: "Yuki Setsuna my best idol",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Love_Live_Nijigasaki_Season_2_promotional_image.jpg",
    link: "https://myanimelist.net/anime/49887/Love_Live_Nijigasaki_Gakuen_School_Idol_Doukoukai_2nd_Season",
  },
  {
    title: "K-On!",
    description: "Best slice of life",
    image: "https://cdn.myanimelist.net/images/anime/10/76120.jpg",
    link: "https://myanimelist.net/anime/5680/K-On",
  },
  {
    title: "Toradora!",
    description: "Bittersweet ending",
    image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
    link: "https://myanimelist.net/anime/4224/Toradora",
  },
  {
    title: "Charlotte",
    description: "Abrupt ending but still good",
    image: "https://cdn.myanimelist.net/images/anime/12/74683.jpg",
    link: "https://myanimelist.net/anime/28999/Charlotte",
  },
  {
    title: "Kaguya-sama: Love Is War",
    description: "Classic romcom",
    image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
    link: "https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen",
  },
];

export const animeListUrl = "https://space.bilibili.com/481025065/bangumi";
