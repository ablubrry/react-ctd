export default function StudentWork() {
  const studentName = "Ananda Newton";
  const studentAge = 26;
  const studentMajor = "Information Technology";
  const hobbies = ["Playing video games", "Painting", "Coding"];
  return (
    <div>
      <h1>About {studentName}</h1>
      <p>My name is {studentName}, and I am {studentAge} years old. I am studying {studentMajor}.</p>
      <p>Age: {studentAge}</p>
      <p>Major: {studentMajor}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
}