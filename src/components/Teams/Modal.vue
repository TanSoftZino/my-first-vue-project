<template>
  <Transition name="modal">
   <div class="modal-mask" v-show="show">
     <div class="modal-container">
     <header> <slot name="header"></slot></header>
     <div><slot name="body">body text</slot></div>
     <footer>
      <button @click="$emit('remove')">close</button>
     </footer>
     </div>
   </div>
  </Transition>
</template>
<script setup>
defineProps({
  show: Boolean,
});
</script>

<style>
.modal-mask {
    position: fixed;
    display: grid;
    inset: 0;
    place-items: center;
    background: rgb(0,0,0,0.6);
}
.modal-container {
   background: white;
   padding: 10px;
   border-radius: 10px;
   padding: 20px;
}

.modal-container footer{
    border-top: 1px solid #ddd;
    margin-top: 5px;
    padding-top: .7rem;
    font: .8rem;
}
.modal-container footer button {
  background-color: lightgray;
  padding: .25rem .75rem;
  border-radius: 10px;
}
.enterFromOpacity{
    opacity: 0;
}
.enterToOpacity{
    opacity: 100;
}
.enterActiveClass{
    transition-duration: 4000;
}
.modal-enter-from, .modal-leave-to{
    opacity: 0;
    
}
.modal-enter-to, .modal-leave-from{
    opacity: 100;

}
.modal-enter-active, .modal-leave-active{
    transition: opacity 1s;
}

</style>