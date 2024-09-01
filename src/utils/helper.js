var nameList = [
  "Arjun",
  "Aditi",
  "Lakshmi",
  "Vikram",
  "Priya",
  "Rohan",
  "Meera",
  "Raj",
  "Sita",
  "Aryan",
  "Gauri",
  "Kiran",
  "Mohan",
  "Ananya",
  "Nikhil",
  "Kavya",
  "Vishal",
  "Suman",
  "Amit",
  "Jyoti",
  "Kabir",
  "Neha",
  "Ravi",
  "Shruti",
  "Isha",
  "Suresh",
  "Leela",
  "Manoj",
  "Pooja",
  "Rahul",
  "Ritika",
  "Sanjay",
  "Tara",
  "Uday",
  "Varun",
  "Yash",
  "Zoya",
  "Ashok",
  "Bhavna",
  "Chitra",
  "Deepak",
  "Esha",
  "Feroz",
  "Gopal",
  "Harsha",
  "Indira",
  "Jatin",
  "Kartik",
  "Lalit",
  "Maya",
  "Naina",
  "Omkar",
  "Pritam",
  "Quila",
  "Rekha",
  "Sneha",
  "Tejas",
  "Usha",
  "Vidya",
  "Waman",
  "Xena",
  "Yamini",
  "Zara",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const subjects = ["The cat", "A dog", "My friend", "The car", "Someone"];
const verbs = ["jumps", "runs", "eats", "sleeps", "drives"];
const objects = ["on the mat", "to the park", "a bone", "in the house", "fast"];

export function makeRandomMessage() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];

  return `${subject} ${verb} ${object}.`;
}
