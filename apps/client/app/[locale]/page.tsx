import { Container, Title, TopBar } from '~/components/shared'
import { Locale } from '~/lib/i18n/config'
import { getServerTranslation } from '~/lib/i18n/server'

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { params } = props
  const resolvedParams = await params
  const locale = resolvedParams.locale

  const t = await getServerTranslation(locale)

  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <Container className="mt-5">
        <Title text={t('title.all')} size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <div className="h-[2000px]"></div>
    </div>
  )
}
