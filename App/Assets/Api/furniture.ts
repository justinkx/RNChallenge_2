export interface Furniture {
  type: string;
  id: string;
  name: string;
  desc: string;
  price: number;
  images: Array<any>;
  rating?: number;
}
export const furnitures: Furniture[] = [
  {
    type: 'Chair',
    id: '005',
    name: 'Armchair Vintage Brown',
    desc: 'Zenith Solid Wood Armchair Vintage Brown in Warm Chestnut Finish',
    price: 750,
    images: [require('../Images/007.png'), require('../Images/006.png')],
  },
  {
    type: 'Chair',
    id: '001',
    name: 'Armchair Green Royal',
    desc: 'Zenith Solid Wood Armchair in Warm Chestnut Finish',
    price: 330,
    images: [require('../Images/001.png'), require('../Images/002.png')],
  },
  {
    type: 'Chair',
    id: '002',
    name: 'Armchair Red Royal',
    desc: 'Zenith Solid Wood Armchair in Warm Chestnut Finish',
    price: 420,
    images: [require('../Images/003.png')],
  },
  {
    type: 'Chair',
    id: '003',
    name: 'Armchair Blue',
    desc: 'Zenith Solid Wood Armchair Blue in Warm Chestnut Finish',
    price: 470,
    images: [require('../Images/004.png')],
  },
  {
    type: 'Chair',
    id: '004',
    name: 'Armchair Royal',
    desc: 'Zenith Solid Wood Armchair Blue in Warm Chestnut Finish',
    price: 560,
    images: [require('../Images/005.png')],
  },

  {
    type: 'Chair',
    id: '006',
    name: 'Old Green Armchair',
    desc: 'Zenith Solid Wood Old Green Armchair in Warm Chestnut Finish',
    price: 750,
    images: [require('../Images/008.png'), require('../Images/009.png')],
  },
  {
    type: 'Sofa',
    id: '007',
    name: 'Grey Fabric Sofa',
    desc: 'Zenith Solid Grey Fabric Sofa in Warm Chestnut Finish',
    price: 1250,
    images: [require('../Images/010.png')],
  },
  {
    type: 'Sofa',
    id: '008',
    name: 'Large Vintage Sofa',
    desc: 'Zenith Solid Large Vintage Sofa in Warm Chestnut Finish',
    price: 1550,
    images: [require('../Images/011.png')],
  },
  {
    type: 'Sofa',
    id: '009',
    name: 'Large Vintage Fabric Sofa',
    desc: 'Zenith Solid Large Vintage Fabric Sofa in Warm Chestnut Finish',
    price: 1550,
    images: [require('../Images/012.png')],
  },
  {
    type: 'Sofa',
    id: '010',
    name: 'Leather Sofa',
    desc: 'Zenith Solid Leather Sofa in Warm Chestnut Finish',
    price: 1499,
    images: [require('../Images/013.png')],
  },
  {
    type: 'Bed',
    id: '011',
    name: 'Modern Brown Bed',
    desc: 'Modern Brown Bed in Warm Chestnut Finish',
    price: 1699,
    images: [require('../Images/014.png')],
  },
  {
    type: 'Bed',
    id: '012',
    name: 'Large Vintage Bed',
    desc: 'Large Vintage Bed in Warm Chestnut Finish',
    price: 1699,
    images: [require('../Images/015.png')],
  },
  {
    type: 'Bed',
    id: '013',
    name: 'Modern Wooden Bed',
    desc: 'Modern Wooden Bed in Warm Chestnut Finish',
    price: 1569,
    images: [require('../Images/016.png')],
  },
  {
    type: 'Bed',
    id: '014',
    name: 'Romantic White Bed',
    desc: 'Romantic White Bed in Warm Chestnut Finish',
    price: 1740,
    images: [require('../Images/017.png')],
  },
  {
    type: 'Bed',
    id: '015',
    name: 'Royal Canopy Bed',
    desc: 'Royal Canopy Bed in Warm Chestnut Finish',
    price: 1960,
    images: [require('../Images/018.png')],
  },
  {
    type: 'Desk',
    id: '016',
    name: 'Computer Desk',
    desc: 'Computer Desk in Warm Chestnut Finish',
    price: 660,
    images: [require('../Images/019.png')],
  },
  {
    type: 'Desk',
    id: '017',
    name: 'Heavy Wooden Desk',
    desc: 'Heavy Wooden Desk in Warm Chestnut Finish',
    price: 750,
    images: [require('../Images/020.png')],
  },
  {
    type: 'Desk',
    id: '018',
    name: 'Little School Desk and Chair',
    desc: 'Little School Desk and Chair in Warm Chestnut Finish',
    price: 580,
    images: [require('../Images/021.png')],
  },
  {
    type: 'Desk',
    id: '019',
    name: 'Modern Wooden Desk',
    desc: 'Modern Wooden Desk in Warm Chestnut Finish',
    price: 730,
    images: [require('../Images/022.png')],
  },
  {
    type: 'Desk',
    id: '020',
    name: 'School Vintage Desk',
    desc: 'School Vintage Desk in Warm Chestnut Finish',
    price: 1020,
    images: [require('../Images/023.png')],
  },
  {
    type: 'Bath',
    id: '021',
    name: 'White Bath Tub',
    desc: 'White Bath Tub in Warm Chestnut Finish',
    price: 1500,
    images: [require('../Images/024.png')],
  },
  {
    type: 'Bath',
    id: '022',
    name: 'Copper Bath Tub',
    desc: 'Copper Bath Tub in Warm Chestnut Finish',
    price: 1749,
    images: [require('../Images/025.png')],
  },
  {
    type: 'Bath',
    id: '023',
    name: 'Vintage Bath',
    desc: 'Vintage Bath in Warm Chestnut Finish',
    price: 1950,
    images: [require('../Images/026.png')],
  },
  {
    type: 'Bath',
    id: '024',
    name: 'Vintage Freestanding Bath',
    desc: 'Vintage Freestanding Bath in Warm Chestnut Finish',
    price: 1870,
    images: [require('../Images/027.png')],
  },
  {
    type: 'Bath',
    id: '025',
    name: 'Ornate Freestanding Bath',
    desc: 'Ornate Freestanding Bath in Warm Chestnut Finish',
    price: 1390,
    images: [require('../Images/028.png')],
  },
];
export function exploreFurniture() {
  let _furnitures = [
    ...furnitures.filter((item) => item.type === 'Sofa').slice(0, 2),
    ...furnitures.filter((item) => item.type === 'Bed').slice(0, 2),
    ...furnitures.filter((item) => item.type === 'Chair').slice(0, 2),
    ...furnitures.filter((item) => item.type === 'Desk').slice(0, 2),
    ...furnitures.filter((item) => item.type === 'Bath').slice(0, 2),
  ];
  return _furnitures;
}
export interface SegmentItem {
  name: string;
  type: 'Chair' | 'Sofa' | 'Bed' | 'Desk' | 'Bath';
}

export const segmentItems: SegmentItem[] = [
  {
    name: 'CHAIRS',
    type: 'Chair',
  },
  {
    name: 'SOFAS',
    type: 'Sofa',
  },
  {
    name: 'DESKS',
    type: 'Desk',
  },
  {
    name: 'BEDS',
    type: 'Bed',
  },
  {
    name: 'BATHS',
    type: 'Bath',
  },
];
