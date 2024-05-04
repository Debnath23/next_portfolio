import Link from "next/link"

export default function Logo() {
  return (
    <Link href='/'>
      <div className="dark:bg-blue-600 bg-orange-300 border-orange-500 dark:border-blue-500 border-[2px] rounded-full p-2 text-xl">DM</div>
    </Link>
  )
}