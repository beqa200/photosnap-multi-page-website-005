import React from 'react'
import Image from '../components/Image'

const minContent = [
  {
    bg: "./assets/stories/mobile/mountains.jpg",
    date: "April 16th 2020",
    title: "The Mountains",
    creator: "by John Appleseed"
  },
  {
    bg: "./assets/stories/mobile/cityscapes.jpg",
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    creator: "by Benjamin Cruz"
  },
  {
    bg: "./assets/stories/mobile/18-days-voyage.jpg",
    date: "April 11th 2020",
    title: "18 Days Voyage",
    creator: "by Alexei Borodin"
  },
  {
    bg: "./assets/stories/mobile/architecturals.jpg",
    date: "April 9th 2020",
    title: "Architecturals",
    creator: "by Samantha Brooke"
  },
]
export default function Home() {
  return (
    <div>
      {minContent.map((item) => (
        <Image bg={item.bg} dateTxt={item.date} title={item.title} creator={item.creator} key={Math.random()}/>
      ))}
    </div>
  )
}

