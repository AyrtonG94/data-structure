class Deque {
    constructor() {
        this.lowestCount = 0;
        this.count = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpyt()) {
            this.addBack(element);
        }
        //Cenário caso a função removeFront tenha sido chamada
        else if (this.lowestCount > 0) {
            this.lowestCount = 0;
            this.items[this.lowestCount] = element
        }

        else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }

            this.count++;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.count == 0) {
            console.log('A lista está vazia e não há itens para remover');
            return;
        }
        delete this.items[0]
        this.lowestCount++;
    }

    removeBack() {
        if (this.count == 0) {
            console.log('A lista está vazia e não há itens para remover');
            return;
        }

        delete this.items[this.count - 1]
    }

    peekFront() {
        if (this.count == 0) {
            console.log('A lista está vazia');
            return;
        }
        return this.items[0]
    }

    peekBack() {
        if (this.count == 0) {
            console.log('A lista está vazia');
            return;
        }
        return this.items[this.count - 1]
    }

    size() {
        if (this.count == 0) {
            console.log('A lista está vazia');
            return;
        }
        return this.count;
    }

    isEmpyt() {
        if (this.count == 0) {
            return 'A lista está vazia'
        }
    }

    clear() {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }
}

