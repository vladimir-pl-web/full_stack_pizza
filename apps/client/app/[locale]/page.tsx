import { Container, Filters, ProductList, Title, TopBar } from '~/components/shared'
import { getDefaultLocale, isLocale } from '~/lib/i18n'
import { getServerTranslation } from '~/lib/i18n/server'
import { Locale } from '~/lib/i18n/types'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const safeLocale: Locale = isLocale(locale) ? (locale as Locale) : getDefaultLocale()

  const t = await getServerTranslation(safeLocale)
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <Container className="mt-5">
        <Title text={t('title.all')} size="lg" className="text-left font-extrabold" />
      </Container>
      <TopBar locale={safeLocale} />
      <Container className="flex flex-row gap-20">
        <Filters />
        <ProductList locale={safeLocale} />
      </Container>
    </div>
  )
}
