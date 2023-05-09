"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import { SideBar } from "@/components/containers/SideBar";
import { CollapsibleMenu } from "@/components/containers/CollapsibleMenu";
import { Navigation } from "@/components/containers/Navigation";
import { SettingsMenu } from "@/components/containers/SettingsMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex w-full bg-slate-100'>
					<SideBar setPanelOpen={setIsPanelOpen} isPanelOpen={isPanelOpen} />
					<div className='w-full flex flex-col'>
						<Navigation isSettingsOpen={isSettingsOpen} setIsSettingsOpen={setIsSettingsOpen} />
						<div className='flex w-full h-screen'>
							<CollapsibleMenu isOpen={isPanelOpen} />
							<div className='w-full px-4'>{children}</div>
							<SettingsMenu isSettingsOpen={isSettingsOpen} />
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
