export interface Place {
  name: string;
  location: string;
  image: string;
  link: string;
}

export const favoritePlaces: Place[] = [
  {
    name: "Shibuya Crossing",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80",
    link: "https://maps.app.goo.gl/4qsqbo6VURqq4SSe6",
  },
  {
    name: "Lofoten Islands",
    location: "Norway",
    image:
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=600&q=80",
    link: "https://maps.app.goo.gl/3tgeZR2ojJeFf4Zb7",
  },
  {
    name: "Dolomites",
    location: "Italy",
    image:
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600&q=80",
    link: "https://maps.app.goo.gl/N7yBWBxaibjzjhVH7",
  },
  {
    name: "Sannenzaka",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    link: "https://maps.app.goo.gl/tVfsbCvPAAHSY3vV7",
  },
];
