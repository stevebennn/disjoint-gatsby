import fetch from 'isomorphic-fetch'
import React, { useState, useEffect, useRef } from 'react'
import Client from 'shopify-buy'

// import Context from '~/context/ShopifyContext'

export const ShopifyContext = React.createContext()

const client = Client.buildClient(
  {
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    domain: `${process.env.SHOP_NAME}.myshopify.com`,
  },
  fetch
)

const ShopifyProvider = ({ children }) => {
  const initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  }

  const [store, updateStore] = useState(initialStoreState)
  const isRemoved = useRef(false)

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== 'undefined'
      const existingCheckoutID = isBrowser
        ? localStorage.getItem('shopify_checkout_id')
        : null

      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id)
        }

        updateStore(prevState => {
          return { ...prevState, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = id => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!isRemoved.current && !checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem('shopify_checkout_id', null)
        }
      }

      const newCheckout = await createNewCheckout()
      if (!isRemoved.current) {
        setCheckoutInState(newCheckout)
      }
    }

    initializeCheckout()
  }, [store.client.checkout])

  useEffect(() => () => {
    isRemoved.current = true
  })

  return (
    <ShopifyContext.Provider
      value={{
        store,
        addVariantToCart: async (variantId, quantity) => {
          if (variantId === '' || !quantity) {
            return
          }

          updateStore(prevState => {
            return { ...prevState, adding: true }
          })

          const { checkout, client } = store

          const checkoutId = checkout.id
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ]

          client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout, adding: false }
              })
            })
            .then(() => console.log(`add line item complete`))
        },
        removeLineItem: (client, checkoutID, lineItemID) => {
          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res }
              })
            })
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ]

          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res }
              })
            })
        },
      }}
    >
      {children}
    </ShopifyContext.Provider>
  )
}
export default ShopifyProvider
