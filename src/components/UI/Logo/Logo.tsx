import { useMemo } from 'react'

interface LogoProps {
  src: string
}

const Logo = ({ src }: LogoProps) => {
  return useMemo(() => <img src={src} alt="https://developer.nytimes.com" />, [src])
}

export default Logo
