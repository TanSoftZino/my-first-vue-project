<script setup>
import TeamMember from "../components/Teams/TeamMember.vue";
//import team from "../../src/team.json"
import TeamHeader from "../components/Teams/TeamHeader.vue";
import TeamMembers from "../components/Teams/TeamMembers.vue";
import TeamFooter from "../components/Teams/TeamFooter.vue";
import {useTeamStore} from "../stores/TeamStore.js";
import Modal from "../components/Teams/Modal.vue";
import { ref } from "vue";

let team = useTeamStore(); 
team.fill();

setTimeout(()=> {
  team.growTo25();
}, 5000);

let showModal = ref(false);
</script>

<style>
.forButton {
    background-color: aqua;
    border-radius: 10px;
    padding: 8px;
    border: none;
    color:black;
    cursor:grab;
}
.forButton:hover{
    background-color: lightgreen;
}
.forButton:disabled {
    background-color: lightgray;
    cursor:default;
    color:black;
}
</style>
<template>
    <TeamHeader @add="showModal = true"/>
    <div>
      <TeamMembers/>
    </div>
    <TeamFooter/>
    <Teleport to="body">
    <Modal :show = "showModal" @remove="showModal = false">
    <template #header>
        DO you want to add a new member?
    </template>
    <template #body>
        <input type="email" placeholder="Enter an email address"/> <button type="submit">Add</button>
    </template>
    </Modal>
</Teleport>

</template>