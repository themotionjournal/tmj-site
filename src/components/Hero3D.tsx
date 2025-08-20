import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Environment, Lightformer } from '@react-three/drei'
import { useRef } from 'react'

function Shape() {
  const ref = useRef<any>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t / 2) * 0.3 + 0.2
      ref.current.rotation.y = Math.cos(t / 3) * 0.4 + 0.2

      // parallax dolce col mouse
      const { x, y } = state.mouse
      ref.current.position.x = x * 0.5
      ref.current.position.y = y * 0.3
    }
  })

  return (
    <Icosahedron ref={ref} args={[1.2, 1]}>
      <meshStandardMaterial
        metalness={0.6}
        roughness={0.25}
        color="#99FFC8" // verde militare chiaro
      />
    </Icosahedron>
  )
}

export default function Hero3D() {
  return (
    <div className="relative h-[42vh] min-h-[300px] w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-black/30">
      <Canvas camera={{ position: [0, 0, 4], fov: 42 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 2]} intensity={1} />
        <Environment resolution={64}>
          <Lightformer intensity={2} position={[5, 5, 2]} scale={3} color="#284461" />
          <Lightformer intensity={1.5} position={[-4, -2, 2]} scale={2.5} color="#13351F" />
        </Environment>
        <Shape />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_10%,rgba(8,40,22,.22)_0%,transparent_60%),radial-gradient(50%_35%_at_20%_0%,rgba(7,22,52,.22)_0%,transparent_55%)]" />
    </div>
  )
}

