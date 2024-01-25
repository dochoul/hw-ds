interface Props {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: Props) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2 className="title">{title}</h2>
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <hr />
    </div>
  );
}
