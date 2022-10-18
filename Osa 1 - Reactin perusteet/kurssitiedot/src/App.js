const App = () => {

  // KESKENERÄINEN!
  // Bookmark: https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
  
  const course = "Half Stack application development"

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <>
        {parts.map(part => (
          <p>{props.name} {props.exercises}</p>
        ))}
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <>
        <p>Number of exercises {props.total}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts.name} />
      <Total total={null}/>
    </div>
  )
}

export default App