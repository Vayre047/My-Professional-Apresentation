import './card-component.scss';
function Card({data}) {
    const { Image, Title, Body } = data;
  return (
    <div class="card text-center border-0">
        <img src={Image} class="card-img-top imageConfiguration px-2" alt="Accounting" />
        <div class="card-body pt-4">
            <h5 class="card-title h2 back">{Title} </h5>
            <p class="card-text">{Body} </p>
        </div>
    </div>
  );
}

export default Card;
