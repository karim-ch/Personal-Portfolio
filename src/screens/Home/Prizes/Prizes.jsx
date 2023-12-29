import React from "react"
import withStyle from "./withStyle"
import Prize from "./Components/Prize"
import usePrizes from "./usePrizes"

const Prizes = ({ className }) => {
  const prizes = usePrizes()
  const sortedPrizes = prizes.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <section className={className}>
      <div className="projects-container">
        <h3 className="heading"> I've Been Here </h3>
        <div className="prizes">
          {sortedPrizes.map((prize, i) => (
            <div className="prize-item" key={i}>
              <Prize prize={prize} odd={i % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default withStyle(Prizes)
