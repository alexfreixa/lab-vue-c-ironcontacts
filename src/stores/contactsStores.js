import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contacts from "@/contacts.json";

export const useContactsStore = defineStore('contacts', () => {

    const originalContacts = ref(contacts)
    const showContacts = ref(originalContacts.value.slice(0, 5))
    const sortByPopularity = computed(() => showContacts.value.sort((a, b) => b.popularity - a.popularity));
    const sortByName = computed(() => showContacts.value.sort((a, b) => a.name.localeCompare(b.name)));

    function newRandomContact() {
        const remainingContacts = originalContacts.value.filter(contact => !showContacts.value.some(filteredContact => filteredContact.id === contact.id))
        if (remainingContacts.length > 0) {
          const randomIndex = Math.floor(Math.random() * remainingContacts.length);
          showContacts.value.push(remainingContacts[randomIndex]);
        }
    }

    function sortingByPopularity() {
      showContacts.value = sortByPopularity.value
    }

    function sortingByName() {
      showContacts.value = sortByName.value;
    }

    function deletingContact(id) {
      showContacts.value = showContacts.value.filter(con => con.id !== id)
    }

    return {
        showContacts,
        newRandomContact,
        sortingByPopularity,
        sortingByName,
        deletingContact
    }
});