import { LeftPanel } from "@/components/containers/LeftPanel";

export default function Home() {
	return (
		<>
			<LeftPanel />
			<div className='w-full bg-red-400'>Middle Side</div>
		</>
	);
}
