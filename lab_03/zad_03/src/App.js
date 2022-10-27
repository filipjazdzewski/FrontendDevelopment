const data = {
  image: "https://i.ytimg.com/vi/kHjzuqq3b44/maxresdefault.jpg",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};

const OneData = () => {
 return (
  <div class="card m-5">
    <img class="card-img-top" src={data.image} alt="Card img cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
      <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
    </div>
  </div>
 )
}

export default OneData;
