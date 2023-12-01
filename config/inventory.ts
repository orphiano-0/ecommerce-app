import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  // {
  //   id: "64da6006-a4bb-4555-af78-3467853eb75e",
  //   sku: "canvas_tote_bag_1",
  //   name: "Canvas Tote Bag",
  //   description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
  //   price: 16800, // price in smallest currency unit (e.g. cent for USD)
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["bags"],
  //   colors: ["brown"],
  //   currency: "USD",
  // },
  // {
  //   id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
  //   sku: "khaki_tote_bag_1",
  //   name: "Khaki Tote Bag",
  //   description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
  //   price: 14500,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["bags"],
  //   colors: ["blue"],
  //   currency: "USD",
  // },
  // {
  //   id: "e882fe48-253c-40fb-8155-51b47b063c1a",
  //   sku: "braided_leather_belt_1",
  //   name: "Braided Leather Belt",
  //   description: `These handsome leather belts are guaranteed to pull together any outfit. They're made of vegetable-tanned Italian leather, which means they have natural highs and lows of color and will look even better over time.`,
  //   price: 4999,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["belts"],
  //   colors: ["brown"],
  //   currency: "USD",
  // },
  // {
  //   id: "6853a582-fc95-44af-9dac-dffbc694b47d",
  //   sku: "woolblend_suit_belt_1",
  //   name: "Wool-Blend Suit Belt",
  //   description: `This handsome belt will pull together any outfit. The strong materials will take on your wear patterns and look even better over time.`,
  //   price: 5599,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["belts"],
  //   colors: ["black"],
  //   currency: "USD",
  // },
  // {
  //   id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
  //   sku: "wool_scarf_1",
  //   name: "Wool Scarf",
  //   description: `Crafted in the finest English wool from the Abraham Moon mill (established in 1837), this scarf is an elegant and cozy addition to your winter wardrobe.`,
  //   price: 6199,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["scarves"],
  //   colors: ["green"],
  //   currency: "USD",
  // },
  // {
  //   id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
  //   sku: "leather_gloves_1",
  //   name: "Leather Gloves",
  //   description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
  //   price: 9800,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["gloves"],
  //   colors: ["brown"],
  //   currency: "USD",
  // },
  // {
  //   id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
  //   sku: "down_mittens_1",
  //   name: "Down Mittens",
  //   description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
  //   price: 13999,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["gloves"],
  //   colors: ["black"],
  //   currency: "USD",
  // },
  // {
  //   id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
  //   sku: "brooks_sunglasses_1",
  //   name: "Brooks Sunglasses",
  //   description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
  //   price: 42000,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["sunglasses"],
  //   colors: ["yellow"],
  //   currency: "USD",
  // },
  // {
  //   id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
  //   sku: "dock_sunglasses_1",
  //   name: "Dock Sunglasses",
  //   description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won't break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
  //   price: 5599,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["sunglasses"],
  //   colors: ["black"],
  //   currency: "USD",
  // },
  {
    id: "107414fa-e63f-42f0-a214-3ead0cf78614",
    sku: "lavander-lyt",
    name: "Lavander Lyt",
    description: `Timeless and calming. Find tranquility in the soothing embrace of Lavender Lyt. The fragrance of this candle effortlessly brings a sense of peace and relaxation to your space, making it perfect for moments of quiet contemplation and serenity.`,
    price: 701, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1EO6T22ejlJcjxNw7o2ZAL3r0MAaXo5JI/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1EO6T22ejlJcjxNw7o2ZAL3r0MAaXo5JI/view?usp=drive_link",
    ],
    sizes: ["one-size"],
    categories: ["floral-calming"],
    colors: ["purple"],
    currency: "USD",
  },
  { 
    id: "a7d9ad6f-2585-40f8-9d7c-48b1cefa473e",
    sku: "blueberry-cotton",
    name: "Blueberry Cotton",
    description: `Ripe blueberries mingle with the soft, clean scent of fresh cotton, creating an enchanting fragrance that transports you to a sun-dappled blueberry field.`,
    price: 800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1L6uExVWnnBq1vst7xiN-BvbzcQTRHmDo/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1L6uExVWnnBq1vst7xiN-BvbzcQTRHmDo/view?usp=drive_link",
    ],
    sizes: ["one-size"],
    categories: ["fruity-fresh-clean"],
    colors: ["blue"],
    currency: "USD",
  },

  {
    id: "9872710a-ce2b-48c7-a21b-2a5d67dad6df",
    sku: "sugar-plum-cotton",
    name: "Sugar Plum Cotton",
    description: `Experience the magic of Sugar Plum Cotton, where the sweetness of sugar plums intertwines with the gentle embrace of cotton. This delightful combination evokes the cozy warmth of holiday festivities and the softness of freshly fallen snow.`,
    price: 701, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1IpYgXRvHZ_NDSn2DtXapxMpHrhhl_6qY/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1IpYgXRvHZ_NDSn2DtXapxMpHrhhl_6qY/view?usp=drive_link",
    ],
    sizes: ["l"],
    categories: ["sweet-fruity-cozy"],
    colors: ["purple"],
    currency: "USD",
  },

  {
    id: "86c4c7d3-193a-41f4-9500-ba5c732a4fa2",
    sku: "honeydew-cotton",
    name: "Honeydew Cotton",
    description: `The crisp and juicy aroma of Honeydew Cotton will refresh your senses with . Succulent honeydew melon meets the comforting notes of cotton, creating a fragrance that's as invigorating as a summer breeze.`,
    price: 619, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1eJBPuXUomccviXG4MpJXM-79yTtbkUBh/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1eJBPuXUomccviXG4MpJXM-79yTtbkUBh/view?usp=drive_link",
    ],
    sizes: ["s", "m", "l"],
    categories: ["fruity-fresh-clean"],
    colors: ["green"],
    currency: "USD",
  },

  {
    id: "294ac94a-92af-478c-9c71-634fc0a665be",
    sku: "chocolate-cotton",
    name: "Chocolate Cotton",
    description: `Chocolate Cotton radiates with decadence in the combination of velvety richness of chocolate with the softness of cotton is a treat for the senses, creating an atmosphere as the scnets harmonizes making you experience indulgence and relaxation.`,
    price: 800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1tRl3cVdMFxKFhKlpNnVIm3AOnVmOiJNU/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1tRl3cVdMFxKFhKlpNnVIm3AOnVmOiJNU/view?usp=drive_link",
    ],
    sizes: ["l"],
    categories: ["decadent-rich-comforting"],
    colors: ["brown"],
    currency: "USD",
  },
  
  {
    id: "f48e1280-d15d-4fc1-86c0-530c6a0a9491",
    sku: "sunset-lyt",
    name: "Sunset Lyt",
    description: `As the sun sets, embrace the warm and sophisticated hues with our Sunset Lyt candle. This fragrance captures the essence of a tranquil evening, filling your space with the soothing and comforting tones of a picturesque sunset.`,
    price: 500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1wvUDdi4uz-nR-fep_g5Ag4q3VhcpsobD/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1wvUDdi4uz-nR-fep_g5Ag4q3VhcpsobD/view?usp=drive_link",
    ],
    sizes: ["m"],
    categories: ["warm-sophisticated-tranquil"],
    colors: ["orange"],
    currency: "USD",
  },
  
  {
    id: "1e6b2500-e1a4-47e7-95d1-2b462a41006a",
    sku: "minty-lyt",
    name: "Minty Lyt",
    description: `Awaken your senses with the cool and invigorating Minty Lyt candle. Crisp mint leaves dance with the air, creating a refreshing aroma that revitalizes your space and uplifts your mood.`,
    price: 400, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1c0w3aEBbdpooqw9VcMrCJ9nwu29gX7-p/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1c0w3aEBbdpooqw9VcMrCJ9nwu29gX7-p/view?usp=drive_link",
    ],
    sizes: ["s"],
    categories: ["fresh-sophisticated-tranquil"],
    colors: ["blue"],
    currency: "USD",
  },
  
  {
    id: "8bd01cc2-7d9f-45c3-b719-f2c8d61083f0",
    sku: "cinnamon-lyt",
    name: "Cinnamon Lyt",
    description: `The comforting warmth of cinnamon swirls through the air, creating an inviting atmosphere that evokes memories of cozy gatherings and sweet indulgences.`,
    price: 400, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1HnXskDPhjtbLFUVTtVXOK0MZEgVeghHR/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1HnXskDPhjtbLFUVTtVXOK0MZEgVeghHR/view?usp=drive_link",
    ],
    sizes: ["s"],
    categories: ["spicy-warm"],
    colors: ["brown"],
    currency: "USD",
  },
  
  {
    id: "4358b493-d280-4e12-bc2f-91ec1cfcd11d",
    sku: "honey-lyt",
    name: "Honey Lyt",
    description: `Bask in the sweet embrace of Honey Lyt, where golden nectar infuses your space with a comforting sweetness. This warm and inviting fragrance creates an ambiance of relaxation and contentment.`,
    price: 500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1s44ui_KkmoJzToHYOXf5kw67AteTQIrF/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1s44ui_KkmoJzToHYOXf5kw67AteTQIrF/view?usp=drive_link",
    ],
    sizes: ["m"],
    categories: ["sweet-rich-comforting"],
    colors: ["yellow"],
    currency: "USD",
  },
  
  {
    id: "68a2d53e-80d9-452c-bb3c-4f8f182ba82c",
    sku: "eucalyptus-lyt",
    name: "Eucalyptus Lyt",
    description: `Eucalyptus Lyt's aroma excudes mind rejuvination and body healing. Crisp and invigorating, this scent brings the freshness of eucalyptus leaves into your space, promoting a sense of clarity and well-being.`,
    price: 700, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1Uj_nKEa7B0cJXz8ST1QaSrooBupC6ubW/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1Uj_nKEa7B0cJXz8ST1QaSrooBupC6ubW/view?usp=drive_link",
    ],
    sizes: ["l"],
    categories: ["fresh-healing-calming"],
    colors: ["green"],
    currency: "USD",
  },
  
  {
    id: "9872710a-ce2b-48c7-a22a-2a5d67dad6df",
    sku: "berries-lyt",
    name: "Berries Lyt",
    description: `If you crave the sensation of enveloping your senses in the fruity delight, Berries Lyt is the perfect candle for you. It has a vibrant medley of berries awakens your space with a burst of freshness and energy, creating a lively and invigorating ambiance.`,
    price: 700, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1G5AoxvceEN7ZZlaehJJobBgI5k5taHYv/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1G5AoxvceEN7ZZlaehJJobBgI5k5taHYv/view?usp=drive_link",
    ],
    sizes: ["l"],
    categories: ["fresh-vibrant"],
    colors: ["red"],
    currency: "USD",
  },
  {
    id: "35a3743a-27a0-49b0-9632-bfb15ed31c1a",
    sku: "clouds-lyt",
    name: "Clouds Lyt",
    description: `Drift into dreamy relaxation with Clouds Lyt. This gentle and airy scent captures the essence of fluffy clouds lazily floating in the sky, creating a tranquil atmosphere that encourages peaceful moments of introspection.`,
    price: 500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://drive.google.com/file/d/1mkT3lExwV0gWFdIc8CLdh6YKPNUpc8Sy/view?usp=drive_link",
    images: [
      "https://drive.google.com/file/d/1mkT3lExwV0gWFdIc8CLdh6YKPNUpc8Sy/view?usp=drive_link",
    ],
    sizes: ["m"],
    categories: ["airy-gentle"],
    colors: ["blue"],
    currency: "USD",
  },
]
