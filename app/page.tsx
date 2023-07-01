import React, { useEffect } from 'react'
export default async function Page() {
    async function getData() {
        const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.json()
      }
    const name = await getData()
    console.log('name', name)
    
    return <h1>Hello, Next.js!</h1>
  }