export default defineEventHandler(async (event) => {
  const { polarWebhookSecret } = useRuntimeConfig()
  const webhooksHandler = Webhooks({
    webhookSecret: polarWebhookSecret,

    onPayload: async (payload) => {
      console.log('-------payload__________', payload)
      switch (payload.type) {
        case 'checkout.created':
          break
        case 'checkout.updated':
          if (payload.data.status === 'succeeded') {
            console.log('payload__________checkout.updated_', payload.data)
          }
          break
        case 'order.paid':
          console.log('-------payload__________checkout_order.paid', payload.data)
          break
        default:
          // Handle unknown event
          console.log('Unknown event', payload.type)
          break
      }
    },
  })

  return webhooksHandler(event)
})
