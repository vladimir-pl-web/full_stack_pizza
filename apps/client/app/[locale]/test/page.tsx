import React from 'react'

interface IPage {
  className?: string
}

const Page: React.FC<IPage> = ({ className }) => {
  return <div className={className}>Test</div>
}
export default Page
