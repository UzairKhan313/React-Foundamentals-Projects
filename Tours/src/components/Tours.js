import Tour from './Tour'

const Tours = ({ tours, onRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} onRemoveTour={onRemoveTour} />
        ))}
      </div>
    </section>
  )
}
export default Tours
