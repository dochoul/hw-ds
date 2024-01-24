interface Props {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: Props) {
  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
      <hr />
    </>
  );
}
