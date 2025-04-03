import { Polar } from '@polar-sh/sdk'

export default defineEventHandler(async (event) => {
  const { polarToken, polarServer, public: { baseUrl } } = useRuntimeConfig()

  // const checkoutHandler = Checkout({
  //   accessToken: polarAccessToken,
  //   successUrl: `${baseUrl}/api/stripe/success-redirect?session_id={CHECKOUT_SESSION_ID}`,
  //   server: polarServer as 'sandbox' | 'production',
  // })

  // return checkoutHandler(event)

  const { productId } = await readBody<{ productId: string }>(event)

  const polar = new Polar({
    accessToken: polarToken,
    server: polarServer as 'sandbox' | 'production',
  })

  const res = await polar.checkouts.create({
    productId,
    successUrl: `${baseUrl}`,
  })
  console.log(res)
  return res
})
