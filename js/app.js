// new Vue({
//     el: '#app_head', // Wybierz element HTML, do którego chcesz dołączyć Vue.js
//     data: {
//         message: 'Witamy Cię w aplikacji podróżniczej. W pierwszej sekcji po podaniu nam\n' +
//             '    kilku danych zaproponujemy Ci miejsce na twoją kolejną podróż. W drugiej sekcji aplikacji możesz zapisać\n' +
//             '    swoje podróże, a aplikacja przechowa o nich dane i podliczy twoje koszty za podróże.',
//     }
// });
//
//
// new Vue({
//     el: '#app',
//     data: {
//         firstName: '',
//         email: '',
//         username: '',
//         country: '',
//         preferedMonth: '',
//         travelPurpose1: '',
//         travelPurpose2: '',
//         privacyAccepted: false,
//         showRecommendation: false,
//         travelPurposeOptions: ["Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"],
//         monthOptions: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
//             "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
//     },
//     computed: {
//         isWinter: function () {
//             return ['Styczeń', 'Luty', 'Listopad', 'Grudzień'].includes(this.preferedMonth);
//         }
//     },
//     methods: {
//         submitForm: function () {
//             if (this.privacyAccepted) {
//                 this.showRecommendation = true;
//             } else {
//                 alert('Proszę zaakceptować politykę prywatności.');
//             }
//         }
//     }
// });
//
//
//
//
// new Vue({
//     el: '#app2',
//     data: {
//         formFields: [
//             { key: 'continent', label: 'Kontynent', type: 'select', options: ["Europa", "Ameryka Północna", "Ameryka Południowa", "Azja", "Afryka", "Australia"] },
//             { key: 'country', label: 'Kraj', type: 'text' },
//             { key: 'travelPurpose', label: 'Cel Podróży', type: 'select', options: ["Biznes", "Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"] },
//             { key: 'month', label: 'Miesiąc', type: 'select', options: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"] },
//             { key: 'cost', label: 'Koszt', type: 'number' },
//         ],
//         items: [],
//         newItem: {
//             continent: 'Europa',
//             country: '',
//             travelPurpose: 'Przygoda',
//             month: 'Styczeń',
//             cost: 0
//         },
//         editingItem: null,
//         isCountryValid: true
//     },
//     watch: {
//         'newItem.country': function(newVal) {
//             this.isCountryValid = !/\d/.test(newVal); // Sprawdzanie, czy w wartości występują cyfry
//         }
//     },
//
//     computed: {
//         totalCostComputed() {
//             let total = 0;
//             for (const item of this.items) {
//                 total += parseFloat(item.cost);
//             }
//             return total; // Zwracamy łączny koszt jako wynik
//         },
//     },
//
//     mounted() {
//         const savedItems = localStorage.getItem('items');
//         if (savedItems) {
//             this.items = JSON.parse(savedItems);
//         }
//     },
//
//     methods: {
//         addItem() {
//               if (this.isCountryValid) {
//                 // Wykonaj akcje dodawania nowego elementu
//                 const maxId = Math.max(...this.items.map(item => item.id), 0);
//                 this.newItem.id = maxId + 1;
//                 this.items.push({ ...this.newItem });
//                 this.newItem.country = '';
//                 this.newItem.cost = 0;
//                 localStorage.setItem('items', JSON.stringify(this.items));
//             } else {
//                 alert('Nazwa kraju nie może zawierać cyfr.');
//             }
//         },
//
//         removeItem(id) {
//             this.items = this.items.filter(item => item.id !== id);
//             // Przesuń id, aby były po kolei
//             this.items.forEach((item, index) => {
//                 item.id = index + 1;
//             });
//             localStorage.setItem('items', JSON.stringify(this.items));
//         },
//
//         editItem(item) {
//             this.editingItem = {...item};
//         },
//
//         updateItem() {
//             // Znajdź indeks edytowanego elementu
//             const index = this.items.findIndex(item => item.id === this.editingItem.id);
//             if (index !== -1) {
//                 this.$set(this.items, index, {...this.editingItem});
//                 // Wyczyść pole edycji
//                 this.editingItem = null;
//                 // Zapisz zmiany w Local Storage
//                 localStorage.setItem('items', JSON.stringify(this.items));
//             }
//         },
//
//         cancelEdit() {
//             // Anuluj edycję
//             this.editingItem = null;
//         }
//     }
// });
//


//
// const appHead = Vue.createApp({
//     data() {
//         return {
//             message: 'Witamy Cię w aplikacji podróżniczej. W pierwszej sekcji po podaniu nam kilku danych zaproponujemy Ci miejsce na twoją kolejną podróż. W drugiej sekcji aplikacji możesz zapisać swoje podróże, a aplikacja przechowa o nich dane i podliczy twoje koszty za podróże.'
//         };
//     }
// });
//
// const app = Vue.createApp({
//     data() {
//         return {
//             firstName: '',
//         email: '',
//         username: '',
//         country: '',
//         preferedMonth: '',
//         travelPurpose1: '',
//         travelPurpose2: '',
//         privacyAccepted: false,
//         showRecommendation: false,
//         travelPurposeOptions: ["Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"],
//         monthOptions: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
//             "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
//         };
//     },
//     computed: {
//         isWinter() {
//             return ['Styczeń', 'Luty', 'Listopad', 'Grudzień'].includes(this.preferedMonth);
//         }
//     },
//     methods: {
//         submitForm() {
//             if (this.privacyAccepted) {
//                 this.showRecommendation = true;
//             } else {
//                 alert('Proszę zaakceptować politykę prywatności.');
//             }
//         },
//         resetRecommendation() {
//             // Dodaj logikę resetowania propozycji
//             this.showRecommendation = false;
//         }
//
//     },
//     watch: {
//         firstName: 'resetRecommendation',
//         email: 'resetRecommendation',
//         username: 'resetRecommendation',
//         country: 'resetRecommendation',
//         preferedMonth: 'resetRecommendation',
//         travelPurpose1: 'resetRecommendation',
//         travelPurpose2: 'resetRecommendation'
//     }
// });
//
// const app2 = Vue.createApp({
//     data() {
//         return {
//             formFields: [
//                 { key: 'continent', label: 'Kontynent', type: 'select', options: ["Europa", "Ameryka Północna", "Ameryka Południowa", "Azja", "Afryka", "Australia"] },
//                 { key: 'country', label: 'Kraj', type: 'text' },
//                 { key: 'travelPurpose', label: 'Cel Podróży', type: 'select', options: ["Biznes", "Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"] },
//                 { key: 'month', label: 'Miesiąc', type: 'select', options: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"] },
//                 { key: 'cost', label: 'Koszt', type: 'number' },
//             ],
//             items: [],
//             newItem: {
//                 continent: 'Europa',
//                 country: '',
//                 travelPurpose: 'Przygoda',
//                 month: 'Styczeń',
//                 cost: 0
//             },
//             editingItem: null,
//             isCountryValid: true
//         };
//     },
//     computed: {
//         totalCostComputed() {
//             let total = 0;
//             for (const item of this.items) {
//                 total += parseFloat(item.cost);
//             }
//             return total;
//         }
//     },
//     watch: {
//         'newItem.country': function (newVal) {
//             this.isCountryValid = !/\d/.test(newVal);
//         }
//     },
//     methods: {
//         addItem() {
//             if (this.isCountryValid) {
//                 // Wykonaj akcje dodawania nowego elementu
//                 const maxId = Math.max(...this.items.map(item => item.id), 0);
//                 this.newItem.id = maxId + 1;
//                 this.items.push({ ...this.newItem });
//                 this.newItem.country = '';
//                 this.newItem.cost = 0;
//                 localStorage.setItem('items', JSON.stringify(this.items));
//             } else {
//                 alert('Nazwa kraju nie może zawierać cyfr.');
//             }
//         },
//
//         removeItem(id) {
//             this.items = this.items.filter(item => item.id !== id);
//             // Przesuń id, aby były po kolei
//             this.items.forEach((item, index) => {
//                 item.id = index + 1;
//             });
//             localStorage.setItem('items', JSON.stringify(this.items));
//         },
//
//         editItem(item) {
//             this.editingItem = { ...item };
//         },
//
//         updateItem() {
//             // Znajdź indeks edytowanego elementu
//             const index = this.items.findIndex(item => item.id === this.editingItem.id);
//             if (index !== -1) {
//                 this.items[index] = { ...this.editingItem };
//                 // Wyczyść pole edycji
//                 this.editingItem = null;
//                 // Zapisz zmiany w Local Storage
//                 localStorage.setItem('items', JSON.stringify(this.items));
//             }
//         },
//
//         cancelEdit() {
//             // Anuluj edycję
//             this.editingItem = null;
//         }
//     },
//     mounted() {
//         const savedItems = localStorage.getItem('items');
//         if (savedItems) {
//             this.items = JSON.parse(savedItems);
//         }
//     }
// });
//
//
// appHead.mount('#app_head');
// app.mount('#app');
// app2.mount('#app2');
//











const { createApp, ref, computed, watch, onMounted } = Vue;

const appHead = createApp({
    setup() {
        const message = ref('Witamy Cię w aplikacji podróżniczej. W pierwszej sekcji po podaniu nam kilku danych zaproponujemy Ci miejsce na twoją kolejną podróż. W drugiej sekcji aplikacji możesz zapisać swoje podróże, a aplikacja przechowa o nich dane i podliczy twoje koszty za podróże.');

        return {
            message
        };
    }
});

appHead.mount('#app_head');

const app = createApp({
    setup() {
        const firstName = ref('');
        const email = ref('');
        const username = ref('');
        const country = ref('');
        const preferedMonth = ref('');
        const travelPurpose1 = ref('');
        const travelPurpose2 = ref('');
        const privacyAccepted = ref(false);
        const showRecommendation = ref(false);

        const travelPurposeOptions = [
            "Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"
        ];

        const monthOptions = [
            "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
        ];

        const isWinter = computed(() => ['Styczeń', 'Luty', 'Listopad', 'Grudzień'].includes(preferedMonth.value));

        const resetRecommendation = () => {
            showRecommendation.value = false;
        };

        watch([firstName, email, username, country, preferedMonth, travelPurpose1, travelPurpose2], () => {
            resetRecommendation();
        });

        const submitForm = () => {
            if (privacyAccepted.value) {
                showRecommendation.value = true;
            } else {
                alert('Proszę zaakceptować politykę prywatności.');
            }
        };

        return {
            firstName,
            email,
            username,
            country,
            preferedMonth,
            travelPurpose1,
            travelPurpose2,
            privacyAccepted,
            showRecommendation,
            travelPurposeOptions,
            monthOptions,
            isWinter,
            submitForm
        };
    }
});

app.mount('#app');

const app2 = createApp({
    setup() {
        const formFields = ref([
            { key: 'continent', label: 'Kontynent', type: 'select', options: ["Europa", "Ameryka Północna", "Ameryka Południowa", "Azja", "Afryka", "Australia"] },
            { key: 'country', label: 'Kraj', type: 'text' },
            { key: 'travelPurpose', label: 'Cel Podróży', type: 'select', options: ["Biznes", "Cena", "Kuchnia", "Kultura", "Natura", "Podróż", "Przygoda", "Relaks"] },
            { key: 'month', label: 'Miesiąc', type: 'select', options: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"] },
            { key: 'cost', label: 'Koszt', type: 'number' },
        ]);

        const items = ref([]);
        const newItem = ref({
            continent: 'Europa',
            country: '',
            travelPurpose: 'Przygoda',
            month: 'Styczeń',
            cost: 0
        });
        const editingItem = ref(null);
        const isCountryValid = ref(true);

        const totalCostComputed = computed(() => {
            let total = 0;
            for (const item of items.value) {
                total += parseFloat(item.cost);
            }
            return total;
        });

        watch(newItem, (newVal) => {
            isCountryValid.value = !/\d/.test(newVal.country);
        });

        const addItem = () => {
            if (isCountryValid.value) {
                const maxId = Math.max(...items.value.map(item => item.id), 0);
                newItem.value.id = maxId + 1;
                items.value.push({ ...newItem.value });
                newItem.value.country = '';
                newItem.value.cost = 0;
                localStorage.setItem('items', JSON.stringify(items.value));
            } else {
                alert('Nazwa kraju nie może zawierać cyfr.');
            }
        };

        const removeItem = (id) => {
            items.value = items.value.filter(item => item.id !== id);
            items.value.forEach((item, index) => {
                item.id = index + 1;
            });
            localStorage.setItem('items', JSON.stringify(items.value));
        };

        const editItem = (item) => {
            editingItem.value = { ...item };
        };

        const updateItem = () => {
            const index = items.value.findIndex(item => item.id === editingItem.value.id);
            if (index !== -1) {
                items.value[index] = { ...editingItem.value };
                editingItem.value = null;
                localStorage.setItem('items', JSON.stringify(items.value));
            }
        };

        const cancelEdit = () => {
            editingItem.value = null;
        };

        onMounted(() => {
            const savedItems = localStorage.getItem('items');
            if (savedItems) {
                items.value = JSON.parse(savedItems);
            }
        });

        return {
            formFields,
            items,
            newItem,
            editingItem,
            isCountryValid,
            totalCostComputed,
            addItem,
            removeItem,
            editItem,
            updateItem,
            cancelEdit
        };
    }
});

app2.mount('#app2');
