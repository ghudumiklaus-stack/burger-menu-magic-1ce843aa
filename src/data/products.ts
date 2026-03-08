import mozzarellaSticksImg from "@/assets/mozzarella-sticks.jpg";
// Premium Unsplash Images for a "WOW" effect
const burgerHero = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80";
const burger1 = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80";
const burger2 = "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80";
const classicBurger = "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80";
const gourmetBurger = "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80";
const fries = "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80";
const nuggets = "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80";
const cola = "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80";
const orangeJuice = "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80";
const milkshake = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80";
const mozzarellaSticks = "https://images.unsplash.com/photo-1531451390451-2bcc9850529d?auto=format&fit=crop&w=800&q=80";
const wings = "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80";
const brownie = "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80";
const cheesecake = "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80";

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sodium?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  removable: boolean;
  extraCost?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[]; // Galeria de imagens
  category: string;
  rating?: number;
  nutritionalInfo?: NutritionalInfo;
  ingredients?: Ingredient[];
}

export const allProducts: Product[] = [
  // Tradicionais
  {
    id: "t1",
    name: "X-Burger",
    description: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
    price: 12.00,
    image: classicBurger,
    images: [classicBurger, burger1, burger2],
    category: "tradicionais",
    rating: 0,
    nutritionalInfo: {
      calories: 450,
      protein: 25,
      carbs: 42,
      fat: 18,
      fiber: 3,
      sodium: 680,
    },
    ingredients: [
      { id: "i1", name: "Pão", removable: false },
      { id: "i2", name: "Hambúrguer 120g", removable: false },
      { id: "i3", name: "Queijo", removable: true },
      { id: "i4", name: "Alface", removable: true },
      { id: "i5", name: "Tomate", removable: true },
      { id: "i6", name: "Maionese", removable: true },
      { id: "i7", name: "Bacon Extra", removable: false, extraCost: 3.00 },
      { id: "i8", name: "Ovo Extra", removable: false, extraCost: 2.00 },
    ],
  },
  {
    id: "t2",
    name: "X-Bacon",
    description: "Pão, hambúrguer, queijo, bacon crocante, alface, tomate e maionese.",
    price: 15.00,
    image: burger1,
    category: "tradicionais",
    rating: 0,
  },
  {
    id: "t3",
    name: "X-Egg",
    description: "Pão, hambúrguer, queijo, ovo frito, alface, tomate e maionese.",
    price: 13.00,
    image: burger2,
    category: "tradicionais",
    rating: 0,
  },
  {
    id: "t4",
    name: "X-Salada",
    description: "Pão, hambúrguer, queijo, alface, tomate, cebola e molho especial.",
    price: 14.00,
    image: classicBurger,
    category: "tradicionais",
    rating: 0,
  },
  {
    id: "t5",
    name: "X-Tudo",
    description: "Pão, hambúrguer, queijo, bacon, ovo, presunto, alface, tomate e maionese.",
    price: 18.00,
    image: burger1,
    category: "tradicionais",
    rating: 0,
  },
  {
    id: "t6",
    name: "Misto Quente",
    description: "Pão de forma, presunto e queijo derretido na chapa.",
    price: 8.00,
    image: classicBurger,
    category: "tradicionais",
    rating: 0,
  },

  // Bebidas
  {
    id: "b1",
    name: "CocaCola Lata 350ml",
    description: "Refrigerante extremamente gelado.",
    price: 7.00,
    image: cola,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b2",
    name: "Guaraná Lata 350ml",
    description: "Guaraná natural gelado.",
    price: 6.00,
    image: cola,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b3",
    name: "Suco de Laranja 300ml",
    description: "Suco natural de laranja, fresquinho!",
    price: 10.00,
    image: orangeJuice,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b4",
    name: "Suco de Maracujá 300ml",
    description: "Suco natural de maracujá, geladinho sem adição de açúcar.",
    price: 13.00,
    image: orangeJuice,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b5",
    name: "Milkshake de Chocolate",
    description: "Cremoso milkshake de chocolate com chantilly.",
    price: 15.00,
    image: milkshake,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b6",
    name: "Milkshake de Morango",
    description: "Cremoso milkshake de morango com chantilly.",
    price: 15.00,
    image: milkshake,
    category: "bebidas",
    rating: 0,
  },
  {
    id: "b7",
    name: "Água Mineral 500ml",
    description: "Água mineral gelada.",
    price: 4.00,
    image: cola,
    category: "bebidas",
    rating: 0,
  },

  // Porções
  {
    id: "p1",
    name: "Batata Chips P",
    description: "Crocante por fora e macia por dentro, levemente temperada.",
    price: 6.00,
    image: fries,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p2",
    name: "Batata Chips G",
    description: "Porção grande de batata crocante.",
    price: 10.00,
    image: fries,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p3",
    name: "Batata Cheddar e Bacon P",
    description: "Batata sequinha com cheddar derretido e bacon crocante.",
    price: 19.00,
    image: fries,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p4",
    name: "Batata Cheddar e Bacon G",
    description: "Porção grande de batata com cheddar e bacon.",
    price: 28.00,
    image: fries,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p5",
    name: "Anéis de Cebola",
    description: "10 unidades feitos artesanalmente, deliciosos e sequinhos.",
    price: 18.00,
    image: fries,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p6",
    name: "Nuggets 12un",
    description: "Deliciosa porção de nuggets sequinhos e quentinhos.",
    price: 16.00,
    image: nuggets,
    category: "porcoes",
    rating: 0,
  },
  {
    id: "p7",
    name: "Palitos de Mussarela",
    description: "8 unidades de queijo empanado crocante com molho especial.",
    price: 20.00,
    image: mozzarellaSticks,
    category: "porcoes",
    rating: 0,
  },

  // Sobremesas
  {
    id: "s1",
    name: "Brownie com Sorvete",
    description: "Brownie de chocolate quente com sorvete de creme e calda.",
    price: 14.00,
    image: brownie,
    category: "sobremesas",
    rating: 0,
  },
  {
    id: "s2",
    name: "Cheesecake de Morango",
    description: "Fatia generosa de cheesecake cremoso com cobertura de morango.",
    price: 16.00,
    image: cheesecake,
    category: "sobremesas",
    rating: 0,
  },
  {
    id: "s3",
    name: "Petit Gateau",
    description: "Bolinho de chocolate quente com recheio cremoso e sorvete.",
    price: 18.00,
    image: brownie,
    category: "sobremesas",
    rating: 0,
  },
  {
    id: "s4",
    name: "Torta de Limão",
    description: "Fatia de torta de limão com merengue suíço.",
    price: 12.00,
    image: cheesecake,
    category: "sobremesas",
    rating: 0,
  },
  {
    id: "s5",
    name: "Sorvete 2 Bolas",
    description: "Escolha 2 sabores: chocolate, morango, creme ou flocos.",
    price: 10.00,
    image: milkshake,
    category: "sobremesas",
    rating: 0,
  },

  // Entradas
  {
    id: "e1",
    name: "Batata Rústica",
    description: "Batatas rústicas com casca, temperadas com ervas.",
    price: 15.00,
    image: fries,
    category: "entradas",
    rating: 0,
  },
  {
    id: "e2",
    name: "Bruschetta",
    description: "Pão italiano com tomate, manjericão e azeite.",
    price: 12.00,
    image: mozzarellaSticks,
    category: "entradas",
    rating: 0,
  },
  {
    id: "e3",
    name: "Chicken Wings 8un",
    description: "Asas de frango crocantes com molho barbecue ou picante.",
    price: 22.00,
    image: wings,
    category: "entradas",
    rating: 0,
  },
  {
    id: "e4",
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar.",
    price: 18.00,
    image: mozzarellaSticks,
    category: "entradas",
    rating: 0,
  },
  {
    id: "e5",
    name: "Combo Aperitivos",
    description: "Mix de onion rings, nuggets e batata frita.",
    price: 32.00,
    image: fries,
    category: "entradas",
    rating: 0,
  },

  // Artesanais
  {
    id: "a1",
    name: "X-Treme Burger",
    description: "Pão com gergelim, hambúrguer artesanal 150g, queijo cheddar, bacon, ovo, salada e molho especial.",
    price: 24.00,
    image: burgerHero,
    images: [burgerHero, burger1, gourmetBurger],
    category: "artesanais",
    rating: 0,
    nutritionalInfo: {
      calories: 720,
      protein: 38,
      carbs: 52,
      fat: 35,
      fiber: 4,
      sodium: 920,
    },
    ingredients: [
      { id: "i1", name: "Pão com Gergelim", removable: false },
      { id: "i2", name: "Hambúrguer Artesanal 150g", removable: false },
      { id: "i3", name: "Queijo Cheddar", removable: true },
      { id: "i4", name: "Bacon Crocante", removable: true },
      { id: "i5", name: "Ovo Frito", removable: true },
      { id: "i6", name: "Alface", removable: true },
      { id: "i7", name: "Tomate", removable: true },
      { id: "i8", name: "Molho Especial", removable: true },
      { id: "i9", name: "Hambúrguer Extra", removable: false, extraCost: 8.00 },
      { id: "i10", name: "Queijo Extra", removable: false, extraCost: 3.00 },
    ],
  },
  {
    id: "a2",
    name: "Double Smash Burger",
    description: "Pão brioche, 2 hambúrgueres smash 100g cada, queijo americano, cebola caramelizada e molho secreto.",
    price: 28.00,
    image: burger1,
    category: "artesanais",
    rating: 0,
  },
  {
    id: "a3",
    name: "Triple Burger Premium",
    description: "Pão australiano, 3 hambúrgueres artesanais, queijos variados, bacon, cebola crispy e molhos especiais.",
    price: 35.00,
    image: burger2,
    category: "artesanais",
    rating: 0,
  },
  {
    id: "a4",
    name: "Burger Gourmet BBQ",
    description: "Pão com gergelim, hambúrguer 180g, queijo gouda, bacon defumado, cebola roxa e molho BBQ artesanal.",
    price: 30.00,
    image: gourmetBurger,
    category: "artesanais",
    rating: 0,
  },
  {
    id: "a5",
    name: "Vegetariano Artesanal",
    description: "Pão integral, hambúrguer de grão-de-bico, queijo, rúcula, tomate seco e maionese verde.",
    price: 26.00,
    image: classicBurger,
    category: "artesanais",
    rating: 0,
  },
  {
    id: "a6",
    name: "Chicken Burger Premium",
    description: "Pão brioche, filé de frango empanado artesanal, queijo, alface roxa, tomate e molho ranch.",
    price: 25.00,
    image: gourmetBurger,
    category: "artesanais",
    rating: 0,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "todas") return allProducts;
  return allProducts.filter(p => p.category === category);
};
