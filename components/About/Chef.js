import Image from "next/image";

export default function Chef({ name, intro, favoriteFood, picture, altText }) {
  console.log(picture);
  return (
    <article>
      <Image width={100} height={100} src={picture} altText={altText} />
      <h2>{name}</h2>
      <p>{intro}</p>
      <p>{favoriteFood}</p>
    </article>
  );
}
