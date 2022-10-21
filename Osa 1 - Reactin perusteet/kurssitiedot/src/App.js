const App = () => {

  // KESKENERÄINEN!
  
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

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
        {course.parts.map(part => (
          <p key={part.name}>{part.name} {part.exercises}</p>
        ))}
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <>
        <p>Number of exercises {course.parts.reduce((total, currentValue) => total = total + currentValue.exercises, 0)}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App