/* eslint-disable react/no-unknown-property */
import { styles } from '../styles'
import { BackgroundCanvas } from './canvas'
import { moon } from '../assets'

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">MWX</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div className="ml-80 h-full w-full">
        <BackgroundCanvas />
        <img src={moon} alt="" />
      </div>
    </section>
  )
}

export default Hero
