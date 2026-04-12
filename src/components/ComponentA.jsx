import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../atom/ComponentAtom';

export default function ComponentA() {
  const value = useRecoilValue(countAtom);

  return (
    <p className='muted'>Component A sees count: <strong>{value}</strong></p>
  )
}
