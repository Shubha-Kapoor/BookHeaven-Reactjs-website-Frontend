const initialBooks = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&q=80",
    publishedYear: 1937,
    rating: 4.8,
    description:
      "The Hobbit is an unforgettable classic fantasy adventure that follows the unexpected journey of Bilbo Baggins. Stripped from his comfortable life in the Shire, he enters a perilous quest alongside a company of dwarves to reclaim their lost home and treasure from the terrifying dragon, Smaug. A masterpiece of world-building.",
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    publishedYear: 1965,
    rating: 4.9,
    description:
      "Set on the desert planet of Arrakis, Dune is a brilliant blend of political intrigue, mysticism, and environmentalism. It follows young Paul Atreides as his family accepts control of a dangerous planet containing the universe's most valuable substance, Melange. This grand epic explores deep themes of power, religion, and destiny.",
  },
  {
    id: 3,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1531594896955-305cf81269f1?w=400&q=80",
    publishedYear: 2011,
    rating: 4.7,
    description:
      "Based on more than forty interviews with Steve Jobs conducted over two years, this biography provides an intense, unvarnished look into the life of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized personal computing, animated movies, music, phones, tablet computing, and digital publishing.",
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tech",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    publishedYear: 2008,
    rating: 4.8,
    description:
      "Even bad code can function, but if code isn't clean, it can bring a development organization to its knees. This vital guide breaks down best architectural practices for writing pristine, highly maintainable software. Essential reading for any student or professional looking to elevate their engineering craftsmanship drastically.",
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80",
    publishedYear: 1925,
    rating: 4.6,
    description:
      "The Great Gatsby is a beautifully written critique of the disillusioned American Dream during the roaring twenties. It tells the fascinating story of the mysteriously wealthy Jay Gatsby and his obsessive, tragic love for Daisy Buchanan. It remains a definitive structural work of classical fiction.",
  },
  {
    id: 6,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    publishedYear: 1984,
    rating: 4.5,
    description:
      "Neuromancer is the definitive cyberpunk masterpiece that accurately predicted the rise of the internet, global hacking networks, and virtual reality matrix systems. It tells the fast-paced story of Case, a washed-up computer hacker hired for one last desperate run against an incredibly powerful artificial intelligence system.",
  },
  {
    id: 7,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    publishedYear: 2021,
    rating: 4.9,
    description:
      "An incredible sci-fi thriller following Ryland Grace, the sole survivor on a desperate, last-chance space mission to save humanity from an extinction-level threat. Awake with total amnesia, he must utilize pure science, logic, and an unexpected alien ally to complete a set of complex interstellar calculations before time runs out entirely.",
  },
  {
    id: 8,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    publishedYear: 2007,
    rating: 4.8,
    description:
      "This poetic fantasy novel outlines the dramatic life story of Kvothe, a notoriously gifted magician, musician, and infamous hero. Told in his own words, the story leads us through his destiny-driven years at an elite university.",
  },
  {
    id: 9,
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
    publishedYear: 2010,
    rating: 4.9,
    description:
      "An incredibly detailed epic fantasy that introduces Roshar, a brutal world torn apart by massive cyclic storms. Through the interconnected perspectives of characters, a massive history-altering war unfolds beautifully.",
  },
  {
    id: 10,
    title: "Elon Musk",
    author: "Walter Isaacson",
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80",
    publishedYear: 2023,
    rating: 4.6,
    description:
      "An astonishingly intimate narrative chronicling the chaotic life of the innovator who helped guide humanity into the era of electric vehicles, private space exploration, and artificial intelligence models under pressure.",
  },
  {
    id: 11,
    title: "Leonardo da Vinci",
    author: "Walter Isaacson",
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80",
    publishedYear: 2017,
    rating: 4.7,
    description:
      "Based on thousands of pages from Leonardo da Vinci's notebooks, this book weaves a brilliant tapestry connecting his masterful art with his profound scientific curiosity and passionate observational skills.",
  },
  {
    id: 12,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Tech",
    cover:
      "https://images.unsplash.com/photo-157468118864-1b9ea3c0db4a?w=400&q=80",
    publishedYear: 2015,
    rating: 4.8,
    description:
      "This deep-dive series tackles the highly misunderstood core mechanics of JavaScript programming. It explores scopes, closures, object prototypes, and async handling in absolute granular details.",
  },
  {
    id: 13,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Tech",
    cover:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
    publishedYear: 2017,
    rating: 4.9,
    description:
      "An unparalleled engineering deep-dive into the complex principles, trade-offs, and architectures behind modern data systems. It covers storage architectures, replication profiles, and scalability models.",
  },
  {
    id: 14,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    publishedYear: 1960,
    rating: 4.9,
    description:
      "An American masterpiece centered around a small Southern town poisoned by deep systemic prejudice. Through the innocent eyes of young Scout Finch, it follows her principled attorney father Atticus.",
  },
  {
    id: 15,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80",
    publishedYear: 1949,
    rating: 4.8,
    description:
      "George Orwell's haunting dystopian classic depicts a terrifying world dominated by pervasive government surveillance, psychological manipulation, and absolute semantic control over historical facts.",
  },
  {
    id: 16,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    publishedYear: 1932,
    rating: 4.7,
    description:
      "A profoundly prophetic look at a highly structured future society entirely controlled by reproductive technology, psychological conditioning, and corporate commercial consumerism models.",
  },
  {
    id: 17,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
    publishedYear: 2019,
    rating: 4.5,
    description:
      "A shocking psychological thriller about a famous painter who shoots her husband five times in the face and then never speaks another single word. An absolute page turner with an insane twist.",
  },
  {
    id: 18,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    cover:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
    publishedYear: 1951,
    rating: 4.7,
    description:
      "The sweeping tale of the collapse of a massive Galactic Empire. Using psychohistory—a complex science predicting macro-historical patterns—a specialized foundation is setup to safeguard knowledge.",
  },
  {
    id: 19,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    publishedYear: 2006,
    rating: 4.8,
    description:
      "For a thousand years, ash has fallen from the sky while a brutal immortal god-emperor rules enslaved populations. This introduces an epic heist run to overthrow the ultimate immortal empire.",
  },
  {
    id: 20,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Tech",
    cover:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=80",
    publishedYear: 1999,
    rating: 4.9,
    description:
      "One of the most highly regarded software development guides ever compiled. It completely transcends specific programming syntax to deliver timeless advice on engineering career growth architectures.",
  },
];

export default initialBooks;
