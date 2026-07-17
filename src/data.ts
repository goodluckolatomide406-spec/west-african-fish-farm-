export interface FishSpecimen {
  id: string;
  name: string;
  scientificName?: string;
  size: string;
  status: 'IN STOCK' | 'SOLD';
  note: string;
  imageUrl: string;
}

export interface TrustPoint {
  title: string;
  desc: string;
}

export interface ShippingStep {
  title: string;
  desc: string;
}

export const FISH_STOCK: FishSpecimen[] = [
  {
    id: '1',
    name: 'African Tigerfish',
    scientificName: 'Hydrocynus vittatus',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A legendary predatory fish known for its razor-sharp teeth and incredible speed.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1782518253432_1778424284824.png'
  },
  {
    id: '3',
    name: 'Atya Gabonensis',
    scientificName: 'Atya gabonensis',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'The African Giant Filter Shrimp. A peaceful, blue-tinted filter feeder.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1784193162298_IMG_20260716_100812.jpg'
  },
  {
    id: '4',
    name: 'Marble Knife Fish',
    scientificName: 'Chitala ornata',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A fascinating nocturnal predator with distinct marble-like patterns.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1779836297198_IMG_20260526_160358.jpg'
  },
  {
    id: '5',
    name: 'African Butterflyfish',
    scientificName: 'Pantodon buchholzi',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'An exotic surface-dwelling fish known for its unique butterfly-like appearance.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1779838226008_1779838206913.png'
  },
  {
    id: '6',
    name: 'Eel Cat',
    scientificName: 'Gymnallabes typus',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A unique species of eel-like catfish, known for its slender body and nocturnal habits.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1779838878836_1779838608486.png'
  },
  {
    id: '7',
    name: 'Reed Fish',
    scientificName: 'Erpetoichthys calabaricus',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'An elongated, eel-like fish known for its prehistoric appearance and peaceful nature.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1779843879999_1779841066099.png'
  },
  {
    id: '8',
    name: 'Electric Catfish',
    scientificName: 'Malapterurus electricus',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A remarkable catfish capable of generating electric shocks for hunting and self-defense.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f220127d-b1ac-4831-82ec-f4c02abca8e1/electric-catfish-9a237ee5-1784197727437.webp'
  },
  {
    id: '9',
    name: 'Rainbow Crab',
    scientificName: 'Cardisoma armatum',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A striking freshwater crab known for its vibrant rainbow-colored claws and hardy nature.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1783470991659_1783470958603.png'
  },
  {
    id: '10',
    name: 'Mbu Pufferfish',
    scientificName: 'Tetraodon mbu',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A large, intelligent freshwater pufferfish known for its distinctive pattern and curious personality.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1783472096434_1778420191965.png'
  },
  {
    id: '11',
    name: 'Aba Aba',
    scientificName: 'Gymnarchus niloticus',
    size: 'Based on preference',
    status: 'IN STOCK',
    note: 'A unique African knifefish known for its elongated body and ability to generate weak electric fields.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1783473933773_IMG-20260706-WA0025.jpg'
  }
];

export const CONTACT_INFO = {
  phone: '+234 8036708191',
  whatsapp: '2348036708191',
  instagram: 'https://www.instagram.com/alfred_aquarium?igsh=bjhzMjIwMDQ3bHZw',
  email: 'wagffelfarm@gmail.com',
  location: 'Lagos, Nigeria / West African Region',
  facebook: 'https://www.facebook.com/fish.farm.16?mibextid=ZbWKwL'
};

export const SHIPPING_INFO = {
  title: 'Shipping Packaging Summary',
  description: 'Our company ensures the safe international transit of live aquarium fish through a rigorous three-step packaging process:',
  steps: [
    {
      title: 'Preparation & Oxygenation',
      desc: 'Fish are placed in durable, leak-proof plastic bags filled with 1/3 water and 2/3 pure compressed oxygen, then tightly sealed.'
    },
    {
      title: 'Thermal Insulation',
      desc: 'The bags are placed inside a high-density styrofoam box, which is wrapped tightly in heavy-duty shipping tape to lock in the temperature and seal out external air. It is then wrapped in layering paper to maintain maximum insulation.'
    },
    {
      title: 'Outer Protection',
      desc: 'The insulated setup is placed into a heavy-duty cardboard box, reinforced with water-resistant tape, and labeled with international "Live Fish" and "Handle With Care" markers.'
    }
  ]
};

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: 'Elite Stock',
    desc: 'Exotic specimens sourced from premium wild locations.'
  },
  {
    title: 'Expert Care',
    desc: 'Professional husbandry and specialized quarantine protocols.'
  },
  {
    title: 'Verified Trust',
    desc: 'Certified health documentation and guaranteed authenticity.'
  },
  {
    title: 'Priority Delivery',
    desc: 'Rapid, climate-controlled transit for live animals.'
  },
  {
    title: 'Global Social',
    desc: 'Engaged community of passionate aquarists worldwide.'
  }
];