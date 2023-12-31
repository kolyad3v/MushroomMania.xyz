/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'

interface IMushroomData {
	data: { name: string; source: string; y: number }
}
type GLTFResult = GLTF & {
	// TODO #1
	nodes: {
		[index: string]: THREE.Mesh
	}
	// We're saying here that the index can be a string (as we are passing it data.source) and that the this will defo link to a THREE.Mesh to keep .geometry happy.
	materials: {}
}

export function Mushroom(
	props: JSX.IntrinsicElements['group'] & IMushroomData
) {
	const { data } = props
	const { nodes } = useGLTF(`models/${data.source}`) as GLTFResult
	const bakedTexture = useLoader(
		THREE.TextureLoader,
		'./textures/bakes/bakedMushrooms.jpg'
	)

	const geometry = nodes[data.name].geometry

	useGLTF.preload(`models/${data.source}`)

	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={geometry}
				position={[
					(Math.random() - 0.5) * 50,
					data.y,
					(Math.random() - 0.5) * 50,
				]}
			>
				<meshBasicMaterial
					map={bakedTexture}
					map-flipY={false}
				/>
			</mesh>
		</group>
	)
}
