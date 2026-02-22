"use client"

import { useState } from "react"
import { PROJECTS } from "./data"

const PER_PAGE = 3

export function useProjectsPager() {
	const [page, setPage] = useState(0)
	const totalPages = Math.ceil(PROJECTS.length / PER_PAGE)

	const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages)
	const next = () => setPage((p) => (p + 1) % totalPages)
	const visible = PROJECTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

	return { page, setPage, prev, next, visible, totalPages }
}
