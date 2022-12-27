<template>
        <header style="display:flex; justify-content:space-between;">
        <div>
            <button class="forButton" :disabled="team.members.length === team.slots" @click="$emit('add')">Add Member(s) ({{ team.slots - team.members.length }} Spots Left)</button>            
        </div>
        <div>
            <img src="../../assets/smile.jpg" alt="s" width="10%" style="height:40px; width:80px; margin-right: 10px;"/>
            <span style="margin-right:30px;">{{ team.name }} Team</span>
            
            <div style="margin-left:5px;background-color:lightblue;position:absolute;right:0px;top:0px;display:inline-block; border-radius: 10px; padding: 5px;">
              {{ team.slots }}
            </div>  


        </div>
    </header>
</template>


<script setup>
import { useTeamStore } from '../../stores/TeamStore';
let team = useTeamStore();
</script>
