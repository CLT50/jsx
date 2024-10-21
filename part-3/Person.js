const maxNameLength = 6;


const Person= ({ age, hobbies, name })=> {
  const voteMessage = age >= 18
      ? "Please go vote!"
      : "You must be 18!";

  const hobbyList = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, maxNameLength)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbyList}
        </ul>
      </ul>
      <h3>{voteMessage}</h3>
    </div>
  );
}