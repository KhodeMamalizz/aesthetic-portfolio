<template>
  <div class="w-full h-auto fixed inset-0 z-[20]">
    <StarsCanvas />
  </div>
</template>

<script>
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = {
  setup() {
    const ref = ref();

    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    useFrame((state, delta) => {
      ref.value.rotation.x -= delta / 10;
      ref.value.rotation.y -= delta / 15;
    });

    return { ref, sphere };
  },
  template: `
      <group :rotation="[0, 0, Math.PI / 4]">
        <points :ref="ref" :positions="sphere" :stride="3" frustumCulled>
          <pointMaterial transparent :color="$fff" :size="0.002" sizeAttenuation :depthWrite="false" />
        </points>
      </group>
    `,
};

const StarsCanvas = {
  template: `
      <canvas :camera="{ position: [0, 0, 1] }">
        <StarBackground />
      </canvas>
    `,
};

console.log(StarsCanvas);

export default {
  components: {
    StarsCanvas,
  },
};
</script>