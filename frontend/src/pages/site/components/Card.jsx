function Card({img, title}) {
  return (
    <div class="card">
      <img
        src={img}
        class="card-image"
      />
      <div class="card-body">
        <h3>{title}</h3>
      </div>
      <div class="card-footer">
        <a href="https://google.com" class="btn">Contato</a>
      </div>
    </div>
  );
}
  
  export default Card;