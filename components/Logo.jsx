import Link from "next/link"

export default function Logo() {
  return (
    <Link href='/'>
      <div className="bg-blue-600 text-slate-300 rounded-full p-2.5 text-xl font-bold">DM</div>
    </Link>
  )
}