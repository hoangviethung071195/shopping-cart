<script setup lang="ts">
import { IProduct } from '@core/interfaces/model/product';
import BaseModal from '@components/BaseModal.vue';

const listProducts: IProduct[] = [
  {
    id: '4234324',
    name: '1',
    price: 22,
  },
  {
    id: '321',
    name: '2',
    price: 33,
  },
  {
    id: '233',
    name: '3',
    price: 77,
  }
];

const addProduct = (product: IProduct) => {
  product;
};

const DeleteProduct = (product: IProduct) => {
  const x = new BaseModal
};

</script>

<template>
  <table class="pure-table pure-table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Id No.</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in listProducts">
        <td>1</td>
        <td>
          {{ product.id }}
        </td>
        <td>
          {{ product.name }}
        </td>
        <td>
          {{ product.price }}
        </td>
        <td>
          <button
            @click="addProduct(product)"
            class="btn btn--success"
          >Add</button>
          <button
            @click="addProduct(product)"
            class="btn btn--secondary"
          >Edit</button>
          <button
            @click="DeleteProduct(product)"
            class="btn btn--error"
          >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <Teleport to="body">
    <!-- <BaseModal /> -->
  </Teleport>
</template>

<style scoped>
.pure-table {
  /* Remove spacing between table cells (from Normalize.css) */
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

.pure-table caption {
  color: #000;
  font: italic 85%/1 arial, sans-serif;
  padding: 1em 0;
  text-align: center;
}

.pure-table td,
.pure-table th {
  border-left: 1px solid #cbcbcb;
  /* inner column border */
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  /* to make this where the title is really long work */
  padding: 0.5em 1em;
  /* cell padding */
}

.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

/*
striping:
   even - #fff (white)
   odd  - #f2f2f2 (light gray)
*/
.pure-table td {
  background-color: transparent;
}

/* nth-child selector for modern browsers */
.pure-table-striped tr:nth-child(even) td {
  background-color: #f2f2f2;
}

/* BORDERED TABLES */
.pure-table-bordered td {
  border-bottom: 1px solid #cbcbcb;
}

.pure-table-bordered tbody>tr:last-child>td {
  border-bottom-width: 0;
}


/* HORIZONTAL BORDERED TABLES */

.pure-table-horizontal td,
.pure-table-horizontal th {
  border-width: 0 0 1px 0;
  border-bottom: 1px solid #cbcbcb;
}

.pure-table-horizontal tbody>tr:last-child>td {
  border-bottom-width: 0;
}
</style>
