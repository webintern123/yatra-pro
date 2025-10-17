// src/components/ElevatorDemo.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Types
type ElevatorState = "doorsOpening" | "doorsClosing" | "entering" | "exiting" | "moving";
type Direction = "up" | "down";

// Elevator Doors
function ElevatorDoors({
  open,
  onOpenEnd,
  onCloseEnd,
}: {
  open: boolean;
  onOpenEnd: () => void;
  onCloseEnd: () => void;
}) {
  const leftDoor = useRef<THREE.Mesh>(null);
  const rightDoor = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0); // start fully closed

  const openedRef = useRef(false);
  const closedRef = useRef(false);

  useEffect(() => {
    openedRef.current = false;
    closedRef.current = false;
  }, [open]);

  useFrame((_, delta) => {
    let next = progressRef.current;

    if (open) {
      next += delta * 0.5;
      if (next >= 1 && !openedRef.current) {
        next = 1;
        openedRef.current = true;
        onOpenEnd();
      }
    } else {
      next -= delta * 0.5;
      if (next <= 0 && !closedRef.current) {
        next = 0;
        closedRef.current = true;
        onCloseEnd();
      }
    }

    progressRef.current = Math.max(0, Math.min(1, next));

    if (leftDoor.current && rightDoor.current) {
      leftDoor.current.position.x = -0.35 - progressRef.current * 0.4;
      rightDoor.current.position.x = 0.35 + progressRef.current * 0.4;
    }
  });

  return (
    <>
      <mesh ref={leftDoor} position={[-0.35, 0, 0.71]}>
        <boxGeometry args={[0.45, 1.6, 0.05]} />
        <meshStandardMaterial color="#e6e6e6" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh ref={rightDoor} position={[0.35, 0, 0.71]}>
        <boxGeometry args={[0.45, 1.6, 0.05]} />
        <meshStandardMaterial color="#e6e6e6" metalness={0.8} roughness={0.3} />
      </mesh>
    </>
  );
}

// Person
function Person({
  state,
  cabinRef,
  delay = 0,
}: {
  state: ElevatorState | "idle";
  cabinRef: React.MutableRefObject<THREE.Group | null>;
  delay?: number;
}) {
  const personRef = useRef<THREE.Group>(null);
  const [active, setActive] = useState(delay === 0); // first person active immediately

  useEffect(() => {
    if (delay > 0) {
      const t = setTimeout(() => setActive(true), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [delay]);

  useFrame((_, delta) => {
    if (!personRef.current || !active) return;

    if (state === "entering" && personRef.current.position.z > 0) {
      personRef.current.position.z -= delta * 0.8;
    }
    if (state === "exiting" && personRef.current.position.z < 2) {
      personRef.current.position.z += delta * 0.8;
    }
    if ((state === "entering" || state === "exiting") && cabinRef.current && personRef.current.parent !== cabinRef.current) {
      cabinRef.current.add(personRef.current);
      personRef.current.position.set(0, -0.8, 0);
    }
  });

  return (
    <group ref={personRef} position={[0, -0.8, 2]}>
      {active && (
        <>
          <mesh position={[-0.1, -0.5, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.9, 12]} />
            <meshStandardMaterial color="#000" />
          </mesh>
          <mesh position={[0.1, -0.5, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.9, 12]} />
            <meshStandardMaterial color="#000" />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.25, 0.3, 1, 16]} />
            <meshStandardMaterial color="#4682b4" />
          </mesh>
          <mesh position={[-0.35, 0.2, 0]} rotation={[0, 0, Math.PI / 8]}>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 12]} />
            <meshStandardMaterial color="#4682b4" />
          </mesh>
          <mesh position={[0.35, 0.2, 0]} rotation={[0, 0, -Math.PI / 8]}>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 12]} />
            <meshStandardMaterial color="#4682b4" />
          </mesh>
          <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ffe0bd" />
          </mesh>
        </>
      )}
    </group>
  );
}

// Elevator Cabin
function ElevatorCabin({
  state,
  setState,
  direction,
  setDirection,
}: {
  state: ElevatorState;
  setState: (s: ElevatorState) => void;
  direction: Direction;
  setDirection: (d: Direction) => void;
}) {
  const cabinRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!cabinRef.current) return;

    if (state === "moving") {
      const speed = 0.01 * (direction === "up" ? 1 : -1);
      cabinRef.current.position.y += speed;

      if (direction === "up" && cabinRef.current.position.y >= 1.5) {
        setState("doorsOpening");
        setDirection("down");
      }
      if (direction === "down" && cabinRef.current.position.y <= 0) {
        setState("doorsOpening");
        setDirection("up");
      }
    }
  });

  const personState: ElevatorState | "idle" =
    state === "entering" ? "entering" : state === "exiting" ? "exiting" : "idle";

  return (
    <group ref={cabinRef}>
      <mesh>
        <boxGeometry args={[1.4, 2, 1.4]} />
        <meshPhysicalMaterial
          color="#aee7ff"
          transparent
          opacity={0.25}
          transmission={0.9}
          thickness={0.1}
          roughness={0}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.42, 2.05, 1.42]} />
        <meshStandardMaterial color="#d9d9d9" wireframe />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      <ElevatorDoors
        open={state === "doorsOpening" || state === "entering" || state === "exiting"}
        onOpenEnd={() => {
          if (state === "doorsOpening") setState(direction === "up" ? "entering" : "exiting");
        }}
        onCloseEnd={() => {
          if (state === "doorsClosing") setState("moving");
        }}
      />

      <Person state={personState} cabinRef={cabinRef} delay={0} />
      <Person state={personState} cabinRef={cabinRef} delay={1} />
      <Person state={personState} cabinRef={cabinRef} delay={2} />
    </group>
  );
}

// Main Elevator Demo
export default function ElevatorDemo() {
  const [state, setState] = useState<ElevatorState>("doorsOpening");
  const [direction, setDirection] = useState<Direction>("up");

  // Kickstart animation on mount
  useEffect(() => {
    setState("doorsOpening");
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    switch (state) {
      case "doorsOpening":
        timer = setTimeout(() => setState(direction === "up" ? "entering" : "exiting"), 1000);
        break;
      case "entering":
      case "exiting":
        timer = setTimeout(() => setState("doorsClosing"), 3000);
        break;
      case "doorsClosing":
        timer = setTimeout(() => setState("moving"), 1000);
        break;
    }

    return () => clearTimeout(timer);
  }, [state, direction]);

  return (
    <Canvas shadows camera={{ position: [3, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />

      {/* Elevator shaft */}
      <mesh>
        <boxGeometry args={[2, 5, 2]} />
        <meshStandardMaterial color="#ccc" transparent opacity={0.15} wireframe />
      </mesh>

      <ElevatorCabin state={state} setState={setState} direction={direction} setDirection={setDirection} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
