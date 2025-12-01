import React, { Suspense, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import * as THREE from 'three'
import './Hero3D.css'

function Model({ modelPath, texturePath }) {
  let fbx = null
  try {
    fbx = useLoader(FBXLoader, modelPath)
    console.log('FBX model loaded successfully:', fbx)
  } catch (error) {
    console.error('Error in useLoader for FBX:', error)
    throw error
  }
  
  const [texture, setTexture] = React.useState(null)
  const [textureError, setTextureError] = React.useState(false)
  
  // Load texture using TextureLoader if path is provided
  useEffect(() => {
    if (texturePath && fbx && !textureError) {
      const loader = new THREE.TextureLoader()
      loader.load(
        texturePath,
        (loadedTexture) => {
          setTexture(loadedTexture)
          setTextureError(false)
        },
        undefined,
        (error) => {
          console.warn('Texture loading failed, using default material')
          setTexture(null)
          setTextureError(true)
        }
      )
    } else if (!texturePath) {
      // No texture path provided, use default material
      setTexture(null)
      setTextureError(false)
    }
  }, [texturePath, fbx, textureError])
  
  // Apply texture to the model
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child.isMesh) {
          if (texture && !textureError) {
            child.material = new THREE.MeshStandardMaterial({
              map: texture,
              roughness: 0.5,
              metalness: 0.3
            })
          } else {
            // Use default material if texture is not available
            child.material = new THREE.MeshStandardMaterial({
              color: 0x2563eb,
              roughness: 0.5,
              metalness: 0.3
            })
          }
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [fbx, texture, textureError])

  // Calculate bounding box to center and scale the model
  useEffect(() => {
    if (fbx) {
      const box = new THREE.Box3().setFromObject(fbx)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      
      fbx.scale.multiplyScalar(scale)
      fbx.position.sub(center.multiplyScalar(scale))
    }
  }, [fbx])

  if (!fbx) {
    return null
  }

  return <primitive object={fbx} />
}

const Hero3D = ({ modelPath = '/model.fbx', texturePath = null }) => {
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="hero-3d-wrapper">
      {loading && !error && (
        <div className="hero-3d-fallback">
          <p>Loading 3D Model...</p>
        </div>
      )}
      {!error ? (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={() => setLoading(false)}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <ErrorBoundary 
              onError={(err) => {
                setError(true)
                setErrorMessage(err?.message || 'Failed to load 3D model')
                setLoading(false)
              }}
            >
              <Model modelPath={modelPath} texturePath={texturePath} />
            </ErrorBoundary>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      ) : (
        <div className="hero-3d-fallback">
          <p>Error loading 3D model: {errorMessage || 'Please check the console'}</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Make sure model.fbx exists in the public folder</p>
        </div>
      )}
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}

export default Hero3D

