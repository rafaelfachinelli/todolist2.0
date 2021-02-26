export default function Header(props) {
  return (
    <header className="header">
      <h2>
        {props.name} <small>{props.small}</small>
      </h2>
    </header>
  );
}
