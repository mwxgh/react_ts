/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const Hero = () => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-between md:h-auto">
      <Navbar />
      <div className="mx-auto flex h-full max-w-7xl snap-center justify-between">
        <div className="flex flex-1 flex-col justify-center gap-20 md:flex-1 md:items-center">
          <h1 className="text-6xl md:text-4xl">Think. Make. Solve.</h1>
          <div className="flex items-center gap-2">
            <img src="./img/line.png" alt="Line" className="h-5" />
            <h2 className="text-pink-500">What we Do</h2>
          </div>
          <p className="text-lg text-gray-400 md:p-5">
            we enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className="w-24 cursor-pointer rounded-lg bg-pink-500 px-4 py-2 font-medium text-white">
            Learn More
          </button>
        </div>
        <div className="relative w-full flex-1 md:flex-1">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          {/* <img
            src="./img/astronaut.jpg"
            alt="Image"
            className="w-{600} h-{400} md:w-300 md:h-300 absolute inset-0 m-auto animate-bounce object-contain"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
