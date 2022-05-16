import Tour from './Tour';

const Tours = ({tours, removeTour}) => { // "removeTour" added in this feature
  return (
    <section>
      <div className="title">
        <h2>Our Tours </h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      })}
    </section>
  )
};

// "removeTour={removeTour}"" added to Return "<Tour />" element in this feature 

export default Tours;