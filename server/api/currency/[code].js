import currencyapi from '@everapi/currencyapi-js'

export default defineEventHandler(async (event) => {
    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()
    const client = new currencyapi(currencyKey)
    const currency = await client.currencies({ currencies: code })

    return currency
})