import HeroContacDate from "./HeroContacDate"
import HeroContactForm from "./HeroContactForm"

const HeroContac = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-2 lg:mx-auto">
      <HeroContacDate />
      <HeroContactForm />
    </section>
  )
}

export default HeroContac                                                                                                                 