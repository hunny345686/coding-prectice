export async function Home() {
  const data = await fetch("https//localhost:3000/api/data");

  const result = await data.json();

  return (
    <div>
      {result.map((elem) => {
        <>
          <p>{elme}</p>
        </>;
      })}
    </div>
  );
}
