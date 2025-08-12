import { Button } from '~/components/ui/button'
import { Switch } from '~/components/ui/switch'
import { Locale } from '~/lib/i18n/config'
import { getServerTranslation } from '~/lib/i18n/server'
export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { params } = props
  const resolvedParams = await params
  const locale = resolvedParams.locale

  const t = await getServerTranslation(locale)
  const data = await fetch('http://localhost:4200/api')

  const post = await data.json()

  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <h1>{t('hello')}</h1>
      <Button variant="outline">Click me</Button>
      <Switch>Theme</Switch>
      {JSON.stringify(post)}
    </div>
  )
}
