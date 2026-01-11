export interface Game {
  name: string;
  hours: number;
  image: string;
  link: string;
}

export const steamProfileUrl =
  "https://steamcommunity.com/profiles/76561199465880809/";

export const games: Game[] = [
  {
    name: "Sekiro: Shadows Die Twice",
    hours: 30,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",
    link: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
  },
  {
    name: "Apex Legends",
    hours: 49,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
    link: "https://store.steampowered.com/app/1172470/Apex_Legends/",
  },
  {
    name: "ATRI -My Dear Moments-",
    hours: 9,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1230140/header.jpg",
    link: "https://store.steampowered.com/app/1230140/ATRI_My_Dear_Moments/",
  },
  {
    name: "Cyberpunk 2077",
    hours: 35,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
  },
];
