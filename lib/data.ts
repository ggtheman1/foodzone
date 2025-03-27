 import { Data, IProductInput } from "@/types";
 import { toSlug } from "./utils";

 const products: IProductInput[] =[
  {
    name: "Chicken Burger",
    slug: toSlug("Chicken Burger"),
    category: "Burger",
    images:'/images/burger/b1.png',
    description: " what is the teast of the food tells how we live with foods ",
    price: 300.00,
    isPublished: true,
    countOrdered:2,
    avgRating:4.71,
    ratingDistribution:[
     {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:0},
     {rating:4, count:2},
     {rating:5, count:5},
  ],
  sizes: [
    "Small","Medium","Large"
  ],
  numSales:10,
  },
  {
    name:"Roast Chicken",
    slug: toSlug("Roast Chicken"),
    category: "Chicken",
    images:"/images/chicken/c1.jpeg",
    description:"Roast a juicy chicken for dinner! Ree Drummond's recipe calls for slathering the bird in lemon-herb ",
    price: 1600.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Red Sauce Pasta",
    slug: toSlug("Red Sauce Pasta"),
    category: "Pasta",
    images:"/images/pasta/p1.jpeg",
    description:"Red sauce pasta is a delicious pasta dish made with tomatoes, garlic, dried herbs and seasoning",
    price: 200.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Salami, Red Onion and Oregano Pizza",
    slug: toSlug("Salami, Red Onion and Oregano Pizza"),
    category: "pizza",
    images:"/images/pizza/p1.jpeg",
    description:"Deliciously simple and flavorful, this Salami, Red Onion and Oregano",
    price: 500.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Chicken Shawarma",
    slug: toSlug("Chicken Shawarma"),
    category: "Shawarma",
    images:"/images/shawa/s1.jpeg",
    description:"Lebanese Shawarma features marinated chicken or beef seasoned with garlic, cumin, coriander, turmeric, cinnamon, and cloves, roasted to tender perfection.",
    price: 800.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.8,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:5},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Awaze Tibs",
    slug: toSlug("Awaze Tibs"),
    category: "tibs",
    images:"/images/tibs/t1.jpeg",
    description:"Awaze Tibs (Ethiopian beef tibs) is a spicy Ethiopian stir-fry that is so versatile",
    price: 450.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.5,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
   {
    name: "Chicken Burger",
    slug: toSlug("Chicken Burger"),
    category: "Burger",
    images:'/images/burger/b2.png',
    description: " what is the teast of the food tells how we live with foods ",
    price: 300.00,
    isPublished: true,
    countOrdered:2,
    avgRating:4.71,
    ratingDistribution:[
     {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:0},
     {rating:4, count:2},
     {rating:5, count:5},
  ],
  sizes: [
    "Small","Medium","Large"
  ],
  numSales:10,
  },
  {
    name:"Roast Chicken",
    slug: toSlug("Roast Chicken"),
    category: "Chicken",
    images:"/images/chicken/c2.jpeg",
    description:"Roast a juicy chicken for dinner! Ree Drummond's recipe calls for slathering the bird in lemon-herb ",
    price: 1600.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Red Sauce Pasta",
    slug: toSlug("Red Sauce Pasta"),
    category: "Pasta",
    images:"/images/pasta/p2.jpeg",
    description:"Red sauce pasta is a delicious pasta dish made with tomatoes, garlic, dried herbs and seasoning",
    price: 200.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Salami, Red Onion and Oregano Pizza",
    slug: toSlug("Salami, Red Onion and Oregano Pizza"),
    category: "pizza",
    images:"/images/pizza/p2.jpeg",
    description:"Deliciously simple and flavorful, this Salami, Red Onion and Oregano",
    price: 500.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Chicken Shawarma",
    slug: toSlug("Chicken Shawarma"),
    category: "Shawarma",
    images:"/images/shawa/s2.jpeg",
    description:"Lebanese Shawarma features marinated chicken or beef seasoned with garlic, cumin, coriander, turmeric, cinnamon, and cloves, roasted to tender perfection.",
    price: 800.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.8,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:5},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Awaze Tibs",
    slug: toSlug("Awaze Tibs"),
    category: "tibs",
    images:"/images/tibs/t2.jpeg",
    description:"Awaze Tibs (Ethiopian beef tibs) is a spicy Ethiopian stir-fry that is so versatile",
    price: 450.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.5,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
   {
    name: "Chicken Burger",
    slug: toSlug("Chicken Burger"),
    category: "Burger",
    images:'/images/burger/b3.png',
    description: " what is the teast of the food tells how we live with foods ",
    price: 300.00,
    isPublished: true,
    countOrdered:2,
    avgRating:4.71,
    ratingDistribution:[
     {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:0},
     {rating:4, count:2},
     {rating:5, count:5},
  ],
  sizes: [
    "Small","Medium","Large"
  ],
  numSales:10,
  },
  {
    name:"Roast Chicken",
    slug: toSlug("Roast Chicken"),
    category: "Chicken",
    images:"/images/chicken/c3.jpeg",
    description:"Roast a juicy chicken for dinner! Ree Drummond's recipe calls for slathering the bird in lemon-herb ",
    price: 1600.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Red Sauce Pasta",
    slug: toSlug("Red Sauce Pasta"),
    category: "Pasta",
    images:"/images/pasta/p3.jpeg",
    description:"Red sauce pasta is a delicious pasta dish made with tomatoes, garlic, dried herbs and seasoning",
    price: 200.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Salami, Red Onion and Oregano Pizza",
    slug: toSlug("Salami, Red Onion and Oregano Pizza"),
    category: "pizza",
    images:"/images/pizza/p3.jpeg",
    description:"Deliciously simple and flavorful, this Salami, Red Onion and Oregano",
    price: 500.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.3,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Chicken Shawarma",
    slug: toSlug("Chicken Shawarma"),
    category: "Shawarma",
    images:"/images/shawa/s3.jpeg",
    description:"Lebanese Shawarma features marinated chicken or beef seasoned with garlic, cumin, coriander, turmeric, cinnamon, and cloves, roasted to tender perfection.",
    price: 800.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.8,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:5},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
  {
    name:"Awaze Tibs",
    slug: toSlug("Awaze Tibs"),
    category: "tibs",
    images:"/images/tibs/t3.jpeg",
    description:"Awaze Tibs (Ethiopian beef tibs) is a spicy Ethiopian stir-fry that is so versatile",
    price: 450.00,
    isPublished: true,
    countOrdered:1,
    avgRating: 4.5,
    ratingDistribution:[
      {rating:1, count:0},
     {rating:2, count:0},
     {rating:3, count:3},
     {rating:4, count:2},
     {rating:5, count:5},
    ],
    sizes: [ 
    "Half", "Full"
    ],
    numSales:5,
  },
]
const data: Data= {
    products,
     headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],

  carousels:[
  {
    title:"Most Popular Burger Here",
    buttonCaption:'Order Now',
    image:'/images/slider 1.png',
    url:'/search?category=Burger',
    isPublished: Boolean(true), 
  },
  {
    title:"Most Popular Pizza Here",
    buttonCaption:'Order Now',
    image:'/images/pizza.jpeg',
    url:'/search?category=Pizza',
    isPublished: Boolean(true),
  },
  {
    title:"Most Popular Chicken Here",
    buttonCaption:'Order Now',
    image:'/images/chicken.jpeg',
    url:'/search?category=Chicken',
    isPublished: Boolean(true) ,
  },
  {
    title:"Most Popular Pasta Here",
    buttonCaption:'Order Now',
    image:'/images/pasta.png',
    url:'/search?category=Pasta',
    isPublished: Boolean(true) ,
  },
  {
    title:"Most Popular Tibs Here",
    buttonCaption:'Order Now',
    image:'/images/tibs.jpg',
    url:'/search?category=Tibs',
    isPublished: Boolean(true),
  }

]
}
   export default data;
   
