const questions = [
    {
        question: "What is the capital of Italy?",
        choices: ["Berlin", "Madrid", "Rome", "Paris"],
        correctAnswer: "Rome",
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au",
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        choices: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
        ],
        correctAnswer: "William Shakespeare",
    },
    {
        question:
            "Which gas do plants absorb from the atmosphere during photosynthesis?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question:
            "In which year did Christopher Columbus first reach the Americas?",
        choices: ["1492", "1520", "1607", "1776"],
        correctAnswer: "1492",
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        choices: [
            "Harper Lee",
            "J.K. Rowling",
            "F. Scott Fitzgerald",
            "George Orwell",
        ],
        correctAnswer: "Harper Lee",
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What is the largest organ in the human body?",
        choices: ["Heart", "Liver", "Brain", "Skin"],
        correctAnswer: "Skin",
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: [
            "Pablo Picasso",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Michelangelo",
        ],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "Which planet is known as the 'King of the Planets'?",
        choices: ["Mars", "Jupiter", "Saturn", "Uranus"],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        choices: ["Oxygen", "Carbon Dioxide", "Methane", "Ozone"],
        correctAnswer: "Ozone",
    },
    {
        question: "Who was the first President of the United States?",
        choices: [
            "George Washington",
            "Thomas Jefferson",
            "John Adams",
            "Benjamin Franklin",
        ],
        correctAnswer: "George Washington",
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: "2",
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: [
            "F. Scott Fitzgerald",
            "J.D. Salinger",
            "Ernest Hemingway",
            "Mark Twain",
        ],
        correctAnswer: "J.D. Salinger",
    },
    {
        question: "Which gas do humans exhale when they breathe out?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "What is the largest moon in the solar system?",
        choices: ["Titan", "Ganymede", "Io", "Europa"],
        correctAnswer: "Ganymede",
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        choices: [
            "Amelia Earhart",
            "Bessie Coleman",
            "Harriet Quimby",
            "Jacqueline Cochran",
        ],
        correctAnswer: "Amelia Earhart",
    },
    {
        question: "Which planet is known as the 'Evening Star'?",
        choices: ["Mars", "Venus", "Mercury", "Saturn"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Si", "Sv", "Ag", "Au"],
        correctAnswer: "Ag",
    },
    {
        question: "Who is the author of '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        correctAnswer: "George Orwell",
    },
    {
        question: "Which gas is known as 'Laughing Gas'?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrous Oxide", "Hydrogen"],
        correctAnswer: "Nitrous Oxide",
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: [
            "Marie Curie",
            "Rosa Parks",
            "Amelia Earhart",
            "Florence Nightingale",
        ],
        correctAnswer: "Marie Curie",
    },
    {
        question: "Which is the largest desert in the world?",
        choices: [
            "Gobi Desert",
            "Sahara Desert",
            "Atacama Desert",
            "Arabian Desert",
        ],
        correctAnswer: "Sahara Desert",
    },
    {
        question: "Who painted the 'Starry Night'?",
        choices: [
            "Pablo Picasso",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Michelangelo",
        ],
        correctAnswer: "Vincent van Gogh",
    },
    {
        question: "What is the chemical symbol for oxygen?",
        choices: ["Ox", "Oy", "O", "Om"],
        correctAnswer: "O",
    },
    {
        question: "Which gas is used for filling balloons to make them float?",
        choices: ["Oxygen", "Carbon Dioxide", "Helium", "Hydrogen"],
        correctAnswer: "Helium",
    },
    {
        question: "Who wrote 'War and Peace'?",
        choices: [
            "Fyodor Dostoevsky",
            "Leo Tolstoy",
            "Anton Chekhov",
            "Nikolai Gogol",
        ],
        correctAnswer: "Leo Tolstoy",
    },
    {
        question: "Which gas is known as 'Greenhouse Gas'?",
        choices: ["Oxygen", "Carbon Dioxide", "Methane", "Ozone"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Who was the first person to set foot on the moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong",
    },
    {
        question: "What is the smallest planet in our solar system?",
        choices: ["Venus", "Mars", "Mercury", "Saturn"],
        correctAnswer: "Mercury",
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        choices: [
            "F. Scott Fitzgerald",
            "J.D. Salinger",
            "Ernest Hemingway",
            "Mark Twain",
        ],
        correctAnswer: "F. Scott Fitzgerald",
    },
    {
        question: "Which gas is known as 'Sweet Air'?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Ozone"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Who wrote 'The Adventures of Huckleberry Finn'?",
        choices: [
            "F. Scott Fitzgerald",
            "J.D. Salinger",
            "Ernest Hemingway",
            "Mark Twain",
        ],
        correctAnswer: "Mark Twain",
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        choices: [
            "Jane Austen",
            "Charlotte Brontë",
            "Emily Brontë",
            "Charles Dickens",
        ],
        correctAnswer: "Jane Austen",
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        choices: [
            "Albert Einstein",
            "Isaac Newton",
            "Galileo Galilei",
            "Niels Bohr",
        ],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "Who is the author of 'The Odyssey'?",
        choices: ["Homer", "Virgil", "Plato", "Aristotle"],
        correctAnswer: "Homer",
    },
    {
        question:
            "Which gas do bees primarily use for communication within the hive?",
        choices: ["Oxygen", "Carbon Dioxide", "Methane", "Pheromones"],
        correctAnswer: "Pheromones",
    },
    {
        question: "What is the chemical symbol for lead?",
        choices: ["Ld", "Pb", "Le", "Pl"],
        correctAnswer: "Pb",
    },
    {
        question: "Who wrote 'The Lord of the Rings' trilogy?",
        choices: [
            "J.K. Rowling",
            "George R.R. Martin",
            "J.R.R. Tolkien",
            "C.S. Lewis",
        ],
        correctAnswer: "J.R.R. Tolkien",
    },
    {
        question: "Who is the founder of Microsoft Corporation?",
        choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
        correctAnswer: "Bill Gates",
    },
    {
        question: "What is the chemical symbol for potassium?",
        choices: ["Kt", "Po", "Pt", "K"],
        correctAnswer: "K",
    },
    {
        question: "Which Disney princess has a magical glass slipper?",
        choices: ["Cinderella", "Ariel", "Snow White", "Belle"],
        correctAnswer: "Cinderella",
    },
    {
        question: "What is the name of Simba's father in 'The Lion King'?",
        choices: ["Mufasa", "Scar", "Timon", "Pumbaa"],
        correctAnswer: "Mufasa",
    },
    {
        question:
            "Which Disney movie features a character named Elsa who has ice powers?",
        choices: ["Tangled", "Moana", "Frozen", "Brave"],
        correctAnswer: "Frozen",
    },
    {
        question: "What type of fish is Dory in 'Finding Nemo'?",
        choices: ["Clownfish", "Angelfish", "Blue Tang", "Pufferfish"],
        correctAnswer: "Blue Tang",
    },
    {
        question: "In 'Beauty and the Beast,' what does Belle love to do?",
        choices: ["Singing", "Dancing", "Reading", "Cooking"],
        correctAnswer: "Reading",
    },
    {
        question: "What is the name of Aladdin's monkey companion in 'Aladdin'?",
        choices: ["Rafiki", "Abu", "Pumbaa", "Timon"],
        correctAnswer: "Abu",
    },
    {
        question: "Which Disney movie is set in the city of Zootopia?",
        choices: ["The Jungle Book", "Bambi", "Zootopia", "Robin Hood"],
        correctAnswer: "Zootopia",
    },
    {
        question: "What is the name of the toy cowboy in 'Toy Story'?",
        choices: ["Buzz Lightyear", "Woody", "Rex", "Slinky Dog"],
        correctAnswer: "Woody",
    },
    {
        question: "Which Disney princess is known for her long, magical hair?",
        choices: ["Belle", "Ariel", "Rapunzel", "Jasmine"],
        correctAnswer: "Rapunzel",
    },
    {
        question:
            "What is the name of the young lion who becomes king in 'The Lion King'?",
        choices: ["Scar", "Mufasa", "Timon", "Simba"],
        correctAnswer: "Simba",
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        choices: ["Soybeans", "Chicken", "Seaweed", "Rice"],
        correctAnswer: "Soybeans",
    },
    {
        question: "Which Italian pasta is shaped like small rice grains?",
        choices: ["Fusilli", "Orzo", "Penne", "Spaghetti"],
        correctAnswer: "Orzo",
    },
    {
        question: "What is the primary ingredient in guacamole?",
        choices: ["Tomatoes", "Avocado", "Lime", "Onion"],
        correctAnswer: "Avocado",
    },
    {
        question: "Which spice is known as 'the king of spices'?",
        choices: ["Cinnamon", "Turmeric", "Saffron", "Paprika"],
        correctAnswer: "Saffron",
    },
    {
        question: "What type of bread is typically used in a classic BLT sandwich?",
        choices: ["Whole Wheat", "Sourdough", "Baguette", "Rye"],
        correctAnswer: "Sourdough",
    },
    {
        question:
            "Which fruit is known as the 'king of fruits' and has a strong, distinctive smell?",
        choices: ["Mango", "Pineapple", "Durian", "Papaya"],
        correctAnswer: "Durian",
    },
    {
        question:
            'What is the main ingredient in the Indian dish "Chicken Tikka Masala"?',
        choices: ["Beef", "Lamb", "Chicken", "Tofu"],
        correctAnswer: "Chicken",
    },
    {
        question: "What type of pastry is used to make a croissant?",
        choices: [
            "Puff Pastry",
            "Filo Pastry",
            "Shortcrust Pastry",
            "Choux Pastry",
        ],
        correctAnswer: "Puff Pastry",
    },
    {
        question: "Which nut is the main ingredient in traditional pesto sauce?",
        choices: ["Almonds", "Pecans", "Cashews", "Pine Nuts"],
        correctAnswer: "Pine Nuts",
    },
    {
        question: 'What is the main ingredient in the Korean dish "Kimchi"?',
        choices: ["Cabbage", "Carrots", "Cucumbers", "Radishes"],
        correctAnswer: "Cabbage",
    },
    {
        question:
            "What is the name of the famous wizard in the 'Harry Potter' series?",
        choices: ["Gandalf", "Merlin", "Dumbledore", "Oz"],
        correctAnswer: "Dumbledore",
    },
    {
        question:
            "Which animal is known for its black and white stripes and lives in Africa?",
        choices: ["Elephant", "Zebra", "Giraffe", "Lion"],
        correctAnswer: "Zebra",
    },
    {
        question: "What do you call a baby dog?",
        choices: ["Calf", "Puppy", "Kitten", "Fawn"],
        correctAnswer: "Puppy",
    },
    {
        question: "What is the name of the famous mouse in Disney's cartoons?",
        choices: ["Mickey Mouse", "Jerry Mouse", "Stuart Little", "Mighty Mouse"],
        correctAnswer: "Mickey Mouse",
    },
    {
        question: "How many continents are there on Earth?",
        choices: ["4", "5", "6", "7"],
        correctAnswer: "7",
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: [
            "Mount Kilimanjaro",
            "Mount Everest",
            "Mount McKinley",
            "Mount Fuji",
        ],
        correctAnswer: "Mount Everest",
    },
    {
        question: "What do you call a group of fish?",
        choices: ["Herd", "Flock", "School", "Hive"],
        correctAnswer: "School",
    },
    {
        question: "Which animal is known for its humps and can survive in deserts?",
        choices: ["Giraffe", "Hippopotamus", "Camel", "Kangaroo"],
        correctAnswer: "Camel",
    },
    {
        question: "What is the world's largest coral reef system?",
        choices: [
            "Maldives Reef",
            "Great Barrier Reef",
            "Hawaii Coral System",
            "Bermuda Triangle",
        ],
        correctAnswer: "Great Barrier Reef",
    },
    {
        question:
            "Which bird is known for its colorful plumage and is often a symbol of tropical regions?",
        choices: ["Penguin", "Seagull", "Parrot", "Hawk"],
        correctAnswer: "Parrot",
    },
    {
        question: "What is the term for the scientific study of earthquakes?",
        choices: ["Seismology", "Meteorology", "Volcanology", "Geology"],
        correctAnswer: "Seismology",
    },
    {
        question:
            "What is the term for the natural home or environment of an animal or plant?",
        choices: ["Ecosystem", "Terrarium", "Habitat", "Biome"],
        correctAnswer: "Habitat",
    },
];
export { questions };
