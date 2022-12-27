<template>
  <tr>
    <td>
      <img :src="'https://i.pravatar.cc/50?u='+email" alt="James"/>
        {{ name }}
    </td>
    <td>{{ email }}</td>
    <td>{{ status }}</td>
  </tr>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  status: String,
});
</script>
