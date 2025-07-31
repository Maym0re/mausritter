import { HexGridCanvas } from "@/app/(pages)/map/components/HexGridCanvas";

// export default function MapPage() {
// 	return (
// 		<div className="w-full h-screen">
// 			<HexGrid width={800} height={600} radius={40} />
// 		</div>
// 	);
// }

// app/map/page.tsx


export default function MapPage() {
  return (
    <div className="w-full h-screen">
      <HexGridCanvas />
    </div>
  );
}