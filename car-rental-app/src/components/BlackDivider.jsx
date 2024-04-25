function BlackDivider(props) {
  return (
    <div>
      <section className="divider">
        <div className="title-divider">
          <h2>{props.title}</h2>
          <h3>
            {props.text}
            <span>{props.span}</span> {props.text2}.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default BlackDivider;
