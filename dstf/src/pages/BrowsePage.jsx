import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import ContentCard from '../components/ContentCard'
import { featuredContent, trending } from '../data/mockData'

const allContent = [...featuredContent, ...trending]
const allGenres = [...new Set(allContent.flatMap(c => c.genre))]
const allTypes = ['All', 'Movie', 'TV Show', 'Sport', 'Game']

export default function BrowsePage({ content, onToggleProtect }) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [genreFilter, setGenreFilter] = useState('All')

  const allItems = content.concat(
    trending.filter(t => !content.find(c => c.id === t.id))
  )

  const filtered = allItems.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'All' || item.type === typeFilter
    const matchGenre = genreFilter === 'All' || item.genre.includes(genreFilter)
    return matchSearch && matchType && matchGenre
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">Browse & Protect</h1>
        <p className="text-gray-500 mt-1">Search for anything — add spoiler protection in one click.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search titles..."
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-sm text-white placeholder-gray-600 pl-9 pr-4 py-2.5 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={14} className="text-gray-500 flex-shrink-0" />
          <div className="flex gap-2 flex-wrap">
            {allTypes.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                  typeFilter === t
                    ? 'gradient-bg text-black'
                    : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-orange-500/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Genre chips */}
      <div className="flex gap-2 flex-wrap mb-8">
        <button
          onClick={() => setGenreFilter('All')}
          className={`text-xs px-3 py-1 rounded-full transition-all ${
            genreFilter === 'All'
              ? 'text-orange-400 border border-orange-500/50 bg-orange-500/10'
              : 'text-gray-500 border border-[#2a2a2a] hover:text-gray-300'
          }`}
        >
          All Genres
        </button>
        {allGenres.map(g => (
          <button
            key={g}
            onClick={() => setGenreFilter(g)}
            className={`text-xs px-3 py-1 rounded-full transition-all ${
              genreFilter === g
                ? 'text-orange-400 border border-orange-500/50 bg-orange-500/10'
                : 'text-gray-500 border border-[#2a2a2a] hover:text-gray-300'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mb-4 text-gray-500 text-sm">
        {filtered.length} title{filtered.length !== 1 ? 's' : ''} found
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-600">
          <Search size={40} className="mx-auto mb-4 opacity-30" />
          <div className="text-lg font-bold text-gray-500">No results found</div>
          <div className="text-sm mt-1">Try a different search or filter</div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map(item => (
            <ContentCard key={item.id} item={item} onToggleProtect={onToggleProtect} />
          ))}
        </div>
      )}
    </div>
  )
}
