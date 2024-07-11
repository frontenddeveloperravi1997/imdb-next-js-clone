import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {
            results.map((result) => (
                <div key={result.id}>
                    <h2>{result.overview}</h2>
                </div>
            ))
        }
    </div>
  )
}
