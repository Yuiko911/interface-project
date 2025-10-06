const DISCOGS_TOKEN = 'bSCOGLLQwsiPYjDearRDkYgSympxWDdobbVBxqsy'
const BASE_URL = 'https://api.discogs.com'

export async function searchDiscogs(query, type = 'artist') {
  const res = await fetch(`${BASE_URL}/database/search?q=${encodeURIComponent(query)}&type=${type}&token=${DISCOGS_TOKEN}`)
  if (!res.ok) throw new Error('Discogs API error')
  return await res.json()
}

export async function getArtist(id) {
  const res = await fetch(`${BASE_URL}/artists/${id}`)
  return await res.json()
}

export async function getRelease(id) {
  const res = await fetch(`${BASE_URL}/releases/${id}`)
  return await res.json()
}
export async function fetchAlbum(id) {
  console.log('Album ID:', id)
  const res = await fetch(`${BASE_URL}/releases/${id}?token=${DISCOGS_TOKEN}`)
  return res.json()
}

export async function fetchSong(id) {
  const res = await fetch(`${BASE_URL}/masters/${id}?token=${DISCOGS_TOKEN}`)
  return res.json()
}
