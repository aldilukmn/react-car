export function trimWords (words: string, trim: number): string {
  const content = words.split(' ')
  const trimWords = content.slice(0, trim).join(' ')
  return trimWords
}
