'use client';
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react"

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [timeStamp, setTimeStamp] = useState(0);
  const router = useRouter();

  const executeSearch = useCallback((query: string) => {
    if (query.length < 2) return;

    router.push(`/search?query=${query}`)
  }, [router])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setTimeStamp(e.timeStamp)
  }

  useEffect(() => {
    const searchTimeOut = setTimeout(() => {
      if (timeStamp <= timeStamp + 1000) executeSearch(searchValue)
    }, 1000)

    return () => clearTimeout(searchTimeOut)
  }, [executeSearch, searchValue, timeStamp])

  return (
    <div className="flex items-center justify-center">
      <form>
        <input
          type="text"
          className="w-full h-12 px-4 rounded-md border-2 border-slate-100"
          placeholder="Search..."
          value={searchValue}
          onChange={onChange}
        />
      </form>
    </div>
  )
}
