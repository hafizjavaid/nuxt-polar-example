<template>
  <UContainer>
    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-for="(product, index) in data?.result.items"
          :key="index"
          :title="product.name"
          :image="product.medias[0]?.publicUrl"
          :date="new Date(product.createdAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2',
          }"
          :to="`/api/checkout?productId=${product.id}`"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/polar/products')

// const purchaseProduct = async (productId: string) => {
//   try {
//     const res = await $fetch('/api/checkout', {
//       method: 'POST',
//       body: {
//         productId,
//       },
//     })
//     console.log(res)
//     if (res.url) {
//       window.location.href = res.url
//     }
//   }
//   catch (error) {
//     console.log(error)
//   }
// }
</script>

<style scoped></style>
