<script setup>
import { useTeamStore } from '../../stores/TeamStore';
let team = useTeamStore();
</script>
<template>
        <footer>
        <h5>{{ team.name }} - {{ team.slots }} Member(s) team</h5>
    </footer>
</template>
