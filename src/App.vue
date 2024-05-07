<script setup>
import { useContactsStore } from "@/stores/contactsStores";
import { storeToRefs } from "pinia";

const contactsStore = useContactsStore();
const { newRandomContact, deletingContact, sortingByPopularity, sortingByName } = contactsStore
const { showContacts } = storeToRefs(contactsStore);

</script>

<template>
  <div id="app">
    <h1 class="text-center">IronHack Contacts</h1>
    <div class="text-center">
      <button class="btn new" @click="newRandomContact()">Add Random Contact</button>
      <button class="btn new" @click="sortingByPopularity()">Sort by Popularity</button>
      <button class="btn new" @click="sortingByName()">Sort by name</button>
    </div>
    <table class="taula">
      <tr>
        <th></th>
        <th @click="sortingByName()">Name</th>
        <th @click="sortingByPopularity()">Popularity</th>
        <th>Oscar winner</th>
        <th>Emmy Winner</th>
        <th>Options</th>
      </tr>
      <tr v-for="person in showContacts" :key="person.id">
        <td class="foto-wrapper"><img class="foto" :src="person.pictureUrl"/></td>
        <td>{{ person.name }}</td>
        <td>{{ person.popularity.toFixed(2) }}</td>
        <td>{{ person.wonOscar ? '🏆' : '' }}</td>
        <td>{{ person.wonEmmy ? '🏆' : '' }}</td>
        <td><button class="btn" @click="deletingContact(person.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

#app {
  width: 80%;
  margin:0 auto
}

.taula {
  text-align: center;
}

.taula th {
  min-width: 120px;
}

.taula tr:nth-child(even) {background-color: #f2f2f2;}

.foto {
  max-width: 35%;
}

.text-center {
  text-align: center;
}

.btn {
  margin: 8px 4px;
}
.btn {
  color: white;
  background-color: rgb(49, 57, 173);
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
}

</style>