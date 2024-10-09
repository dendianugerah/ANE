"use client";

import Link from "next/link"

export const CreateButton = () => {
    return (
      <Link href="#" className="absolute insert-y-0 right-0 text-white shadow-lg inline-flex items-center space-x-1
        bg-black hover:bg-blue-900 px-5 py-[9px] rounded-sm text-sm">
        <h2 className="text-white hover:underline">Create</h2>
      </Link>
    )
  }
        