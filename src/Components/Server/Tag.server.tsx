import OhterCounter from "Components/Common/Counter"
import type { FC } from "react"


const Tag: FC<{
  count: number,
  title: string
}> = ({ count, title }) => {
  return (
    <div>
      <p>Hello from rsc!</p>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <OhterCounter/>
    </div>
  )
}

export default Tag