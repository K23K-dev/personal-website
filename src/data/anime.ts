export interface Anime {
  title: string;
  image: string;
  link: string;
}

export const animeList: Anime[] = [
  {
    title: "Your Lie in April",
    image: "https://cdn.myanimelist.net/images/anime/1405/143284l.jpg",
    link: "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso",
  },
  {
    title: "Love Live! Nijigasaki S2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Love_Live_Nijigasaki_Season_2_promotional_image.jpg",
    link: "https://myanimelist.net/anime/49887/Love_Live_Nijigasaki_Gakuen_School_Idol_Doukoukai_2nd_Season",
  },
  {
    title: "K-On!",
    image: "https://cdn.myanimelist.net/images/anime/10/76120l.jpg",
    link: "https://myanimelist.net/anime/5680/K-On",
  },
  {
    title: "Toradora!",
    image: "https://cdn.myanimelist.net/images/anime/13/22128l.jpg",
    link: "https://myanimelist.net/anime/4224/Toradora",
  },
  {
    title: "Charlotte",
    image: "https://cdn.myanimelist.net/images/anime/12/74683l.jpg",
    link: "https://myanimelist.net/anime/28999/Charlotte",
  },
  {
    title: "Kaguya-sama: Love Is War",
    image: "https://cdn.myanimelist.net/images/anime/1295/106551l.jpg",
    link: "https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen",
  },
];

export const animeListUrl = "https://space.bilibili.com/481025065/bangumi";
