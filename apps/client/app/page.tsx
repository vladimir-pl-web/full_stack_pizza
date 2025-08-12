import { Button } from '~/components/ui/button'
import { Switch } from '~/components/ui/switch'

export default async function Home() {
  const data = await fetch('http://localhost:4200/api')

  const post = await data.json()
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <Button variant="outline">Click me</Button>
      <Switch>Theme</Switch>
      {JSON.stringify(post)}
    </div>
  )
}
