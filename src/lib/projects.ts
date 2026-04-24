export interface Project {
  id: string;
  slug: string;
  title: string;
  titleCn?: string;
  client: string;
  year: number;
  artDirector: string;
  designer: string;
  category: string;
  description: string;
  descriptionCn: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "a-black",
    title: "A BLACK",
    titleCn: "黑色标签",
    client: "A Black",
    year: 2020,
    artDirector: "Nod Young / Guang Yu",
    designer: "Hu Wen / Xu Mingru",
    category: "Branding",
    description: "Why not deconstruct and disperse the typographic elements that belong to the flat plane, granting whitespace its own realm and independent significance? Three labels, each embodying a unique entity, yet serving as complementary accessories.",
    descriptionCn: "何不将属于平面的字符拆解、分置，让空白拥有属于自己的空间和独立的意义？三张标签，各为主体，又互为配件。",
    coverImage: "/projects/a-black-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=1600&q=80",
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=1600&q=80",
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1600&q=80",
      "https://images.unsplash.com/photo-1541961298193-4348f8c8c82b?w=1600&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=1600&q=80",
      "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "bananain",
    title: "Bananain",
    titleCn: "蕉内",
    client: "Bananain",
    year: 2020,
    artDirector: "Nod Young",
    designer: "Team ABCD",
    category: "Branding",
    description: "Bananain is a Chinese underwear and loungewear brand. The redesign focuses on minimal aesthetics and premium feel, targeting young consumers who appreciate modern design.",
    descriptionCn: "蕉内是中国内衣和家居服品牌。重新设计聚焦于极简美学和高级感，目标受众是欣赏现代设计的年轻消费者。",
    coverImage: "/projects/bananain-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1600&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "soda",
    title: "SODA",
    titleCn: "苏打",
    client: "SODA Inc.",
    year: 2021,
    artDirector: "Guang Yu",
    designer: "Team ABCD",
    category: "Branding",
    description: "A refreshing brand identity for a modern beverage company. The design language speaks to the effervescent nature of the product through dynamic typography and bold graphics.",
    descriptionCn: "为一个现代饮料公司打造的清新品牌视觉。设计语言通过动态字体和大胆的图形来传达产品的气泡感。",
    coverImage: "/projects/soda-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80",
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=1600&q=80",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80",
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=1600&q=80",
    ],
    featured: false,
  },
  {
    id: "4",
    slug: "neiwai",
    title: "NEIWAI",
    titleCn: "内外",
    client: "NEIWAI",
    year: 2021,
    artDirector: "Nod Young",
    designer: "Team ABCD",
    category: "Branding",
    description: "NEIWAI is a Chinese lingerie and clothing brand focused on comfort and self-acceptance. The brand identity embodies inclusivity and authenticity.",
    descriptionCn: "内外是中国内衣和服装品牌，专注于舒适和自我接纳。品牌视觉体现了包容性和真实性。",
    coverImage: "/projects/neiwai-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "oct-espresso",
    title: "OCT ESPRESSO",
    titleCn: "OCT 咖啡",
    client: "OCT",
    year: 2022,
    artDirector: "Guang Yu",
    designer: "Team ABCD",
    category: "Branding",
    description: "A specialty coffee brand with a bold, architectural approach to visual identity. The design contrasts raw materials with refined typography.",
    descriptionCn: "一个以大胆、建筑感视觉识别为特色的精品咖啡品牌。设计将原材料与精致的排版形成对比。",
    coverImage: "/projects/oct-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1600&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1600&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80",
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "m-dug",
    title: "M Dug",
    titleCn: "M Dug",
    client: "M Dug",
    year: 2022,
    artDirector: "Nod Young",
    designer: "Team ABCD",
    category: "Branding",
    description: "A contemporary fashion brand identity that balances avant-garde aesthetics with wearable design principles.",
    descriptionCn: "一个将前卫美学与可穿戴设计原则相结合的当代时尚品牌视觉。",
    coverImage: "/projects/mdug-cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
