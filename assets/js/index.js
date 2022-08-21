function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.btnClicks();
            this.pressEnter();
        },

        btnClicks() {
            document.addEventListener('click', function(e) {
                const element = e.target;
                
                if (element.classList.contains('btn-number')) {
                    this.returnOnDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (element.classList.contains('btn-equal')) {
                    this.makeCount();
                }

                this.display.focus();
            }.bind(this));
        },

        returnOnDisplay(eValue) {
            this.display.value += eValue;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter() {
            this.display.addEventListener('keypress', e => {
    
                if (e.keyCode === 13) {
                    this.makeCount();
                }

                if (e.keyCode === 8) {
                    this.deleteOne();
                }
            });
        },

        makeCount() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (!count) {
                    alert('Invalid Calculation!');
                    return;
                }

                this.display.value = String(count);
            } catch(e) {
                alert('Invalid Calculation!');
                return;
            }
        }
    };
}

const calculator = createCalculator();
calculator.start()
