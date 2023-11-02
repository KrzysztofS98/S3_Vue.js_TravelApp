new Vue({
    el: '#app',
    data: {
        items: [],
        newItem: {
            continent: 'Europa',
            country: '',
            travelPurpose: 'Przygoda',
            month: 'Styczeń',
            cost: 0
        },
        editingItem: null,
        isCountryValid: true
    },
    watch: {
        'newItem.country': function(newVal) {
            this.isCountryValid = !/\d/.test(newVal); // Sprawdzanie, czy w wartości występują cyfry
        }
    },

    computed: {
        totalCostComputed() {
            // Ta metoda oblicza łączny koszt i jest używana w szablonie
            let total = 0;
            for (const item of this.items) {
                total += parseFloat(item.cost);
            }
            return total; // Zwraca łączny koszt jako wynik
        }
    },

    mounted() {
        const savedItems = localStorage.getItem('items');
        if (savedItems) {
            this.items = JSON.parse(savedItems);
        }
    },
    methods: {
        addItem() {
            // Znajdź maksymalne id w istniejącej liście
        //     const maxId = Math.max(...this.items.map(item => item.id), 0);
        //     this.newItem.id = maxId + 1;
        //     this.items.push({...this.newItem});
        //     this.newItem.country = '';
        //     this.newItem.cost = 0;
        //     localStorage.setItem('items', JSON.stringify(this.items));

            if (this.isCountryValid) {
                // Wykonaj akcje dodawania nowego elementu
                const maxId = Math.max(...this.items.map(item => item.id), 0);
                this.newItem.id = maxId + 1;
                this.items.push({ ...this.newItem });
                this.newItem.country = '';
                this.newItem.cost = 0;
                localStorage.setItem('items', JSON.stringify(this.items));
            } else {
                console.log('Nazwa kraju nie może zawierać cyfr.');
            }



        },



        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id);
            // Przesuń id, aby były po kolei
            this.items.forEach((item, index) => {
                item.id = index + 1;
            });
            localStorage.setItem('items', JSON.stringify(this.items));
        },
        editItem(item) {
            this.editingItem = {...item};
        },
        updateItem() {
            // Znajdź indeks edytowanego elementu
            const index = this.items.findIndex(item => item.id === this.editingItem.id);
            if (index !== -1) {
                this.items[index] = {...this.editingItem};
                // Wyczyść pole edycji
                this.editingItem = null;
                // Zapisz zmiany w Local Storage
                localStorage.setItem('items', JSON.stringify(this.items));
            }
        },
        cancelEdit() {
            // Anuluj edycję
            this.editingItem = null;
        }
    }
});