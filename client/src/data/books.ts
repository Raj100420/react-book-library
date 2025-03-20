export interface BookType {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
}

export const booksData: BookType[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    description: "Set in the American South during the 1930s, the story is told through the eyes of Scout Finch, a young girl whose father, Atticus, defends a black man accused of raping a white woman."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    description: "A dystopian novel set in a totalitarian society where critical thought is suppressed under a regime of surveillance and propaganda."
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    description: "Set in the Jazz Age, this novel explores themes of decadence, idealism, social upheaval, and resistance to change."
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    description: "A romantic novel that follows Elizabeth Bennet as she deals with issues of manners, upbringing, morality, and marriage in early 19th-century England."
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    description: "A fantasy novel about the adventures of hobbit Bilbo Baggins, who is convinced by the wizard Gandalf to accompany thirteen dwarves on a quest to reclaim their mountain home."
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    description: "A novel that deals with complex issues of innocence, identity, belonging, and alienation through the experiences of its protagonist, Holden Caulfield."
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    description: "An epic high-fantasy novel set in Middle-earth, a fictional world populated by humans and other beings. It follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron."
  },
  {
    id: 8,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    description: "A novel that follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall."
  },
  {
    id: 9,
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
    description: "An allegorical novella that reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union."
  }
];
