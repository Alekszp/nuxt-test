import currencyapi from '@everapi/currencyapi-js'

export default defineEventHandler(async (event) => {

    const { name } = getQuery(event)
    const { age } = await readBody(event)
    const { currencyKey } = useRuntimeConfig()

    const client = new currencyapi(currencyKey)
    const currencies = await client.currencies()



    return {
        message: `Hello, ninja ${name}, age: ${age} y.o.`,
        currencies
    }
})