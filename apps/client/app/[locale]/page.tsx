import { Container, Filters, ProductGroupList, Title, TopBar } from '~/components/shared'
import { pizzaItems } from '~/components/shared/filters/dummy'
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
        <Title text={t('title.all')} size="lg" className="text-left font-extrabold" />
      </Container>
      <TopBar />
      <Container className="flex flex-row gap-20">
        <Filters />
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList categoryId="1" title="Пиццы" items={pizzaItems} />
            <ProductGroupList categoryId="2" title="Комбо" items={pizzaItems} />
            <ProductGroupList categoryId="3" title="Пиццы" items={pizzaItems} />
            <ProductGroupList categoryId="4" title="Комбо" items={pizzaItems} />
            <ProductGroupList categoryId="5" title="Пиццы" items={pizzaItems} />
            <ProductGroupList categoryId="6" title="Комбо" items={pizzaItems} />
          </div>
        </div>
      </Container>
    </div>
  )
}
