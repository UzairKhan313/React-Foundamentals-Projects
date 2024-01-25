import BirthdayItem from './BirthdayItem'
const BirthdayList = ({ people }) => {
  return (
    <section>
      {people.map((item) => (
        <BirthdayItem
          key={item.id}
          img={item.image}
          name={item.name}
          age={item.age}
        />
      ))}
    </section>
  )
}
export default BirthdayList
