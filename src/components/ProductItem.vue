<script setup lang="ts">
import { IProduct } from '@core/interfaces/model/product';


defineProps<{
    product: IProduct;
}>();
</script>

<template>
    <div>
        {{ product.id }}
        {{ product.name }}
        {{ product.price }}
    </div>
</template>

<style scoped></style>
