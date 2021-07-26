import { useEffect, useState } from 'react';

const PREFIX = 'chatApp-clone-';

export default function useLocalStorage(key, initialValue) {
  const perfixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(perfixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue)
    if(typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue;
    }
  })

  useEffect(() => {
    localStorage.setItem(perfixedKey, JSON.stringify(value))
  }, [perfixedKey, value])

  return [value, setValue]
}