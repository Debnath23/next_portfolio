"use client"

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri'

import Link from 'next/link'

export default function Socials({ containerStyles, iconsStyles}) {
  const icons = [
    {
      id: 1,
      path: 'https://github.com/Debnath23',
      name: <RiGithubFill />
    },
    {
      id: 2,
      path: 'https://www.linkedin.com/in/debnath-mahapatra-36a1a720a/',
      name: <RiLinkedinFill />
    },
    {
      id: 3,
      path: 'https://www.facebook.com/debnath.mahapatra.39',
      name: <RiFacebookFill />
    },
    {
      id: 4,
      path: 'https://www.instagram.com/debnathmahapatra14/',
      name: <RiInstagramFill />
    },
  ]
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon) => (
        <Link href={icon.path} key={icon.id} target='_blank'>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}