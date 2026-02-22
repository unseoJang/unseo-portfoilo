"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import styles from "./ProjectThumbnail.module.css"

const LENS_SIZE = 140
const ZOOM = 2.5

interface ProjectThumbnailProps {
	imageUrl?: string
}

export function ProjectThumbnail({ imageUrl }: ProjectThumbnailProps) {
	const [imgError, setImgError] = useState(false)
	const thumbRef = useRef<HTMLDivElement>(null)
	const lensRef = useRef<HTMLDivElement>(null)

	const hasImage = !!imageUrl && !imgError

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!hasImage || !thumbRef.current || !lensRef.current) return
		const rect = thumbRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const thumbW = thumbRef.current.offsetWidth
		const thumbH = thumbRef.current.offsetHeight
		const bgX = -(x * ZOOM - LENS_SIZE / 2)
		const bgY = -(y * ZOOM - LENS_SIZE / 2)

		const el = lensRef.current
		el.style.display = "block"
		el.style.left = `${x - LENS_SIZE / 2}px`
		el.style.top = `${y - LENS_SIZE / 2}px`
		el.style.backgroundSize = `${thumbW * ZOOM}px ${thumbH * ZOOM}px`
		el.style.backgroundPosition = `${bgX}px ${bgY}px`
	}

	const handleMouseLeave = () => {
		if (lensRef.current) lensRef.current.style.display = "none"
	}

	return (
		<div
			ref={thumbRef}
			className={`${styles.thumbnail} ${hasImage ? styles.thumbnailInteractive : ""}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{hasImage ? (
				<>
					<Image
						src={imageUrl!}
						alt=""
						role="presentation"
						fill
						sizes="240px"
						className={styles.thumbnailImg}
						style={{ objectFit: "cover", objectPosition: "center center" }}
						onError={() => setImgError(true)}
						unoptimized={imageUrl!.endsWith(".gif")}
					/>
					<div
						ref={lensRef}
						className={styles.magnifier}
						style={{
							display: "none",
							width: LENS_SIZE,
							height: LENS_SIZE,
							backgroundImage: `url(${imageUrl})`,
						}}
					/>
				</>
			) : (
				<div className={styles.thumbnailSkeleton} aria-hidden="true">
					<svg
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M8 6L2 12l6 6"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 6l6 6-6 6"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 3l-4 18"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
						/>
					</svg>
				</div>
			)}
		</div>
	)
}
