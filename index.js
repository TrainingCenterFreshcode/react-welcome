class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1
        };
    }

    increment() {
        this.setState({
            count: this.state.count + this.state.step
        });
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - this.state.step
            });
        } else if(this.state.count === 0) {
            alert('Лічильник = 0. Декремент заборонено!');
        }
    }

    render() {
        const counter = React.createElement('h2', {}, `Значення лічильника: ${this.state.count}`);
        const step = React.createElement('h2', {}, `Значення кроку: ${this.state.step}`);

        const buttonIncrement = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        const buttonDecrement = React.createElement('button', {onClick: () => {this.decrement()}}, '-');

        const setStepButton = React.createElement('button', {onClick: () => {
            this.setState({
                step: Number(prompt('Введіть нове значення для кроку:'))
            })
        }}, 'Встановити нове значення для кроку');

        return React.createElement(React.Fragment, {}, counter, buttonIncrement, buttonDecrement, step, setStepButton);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component, root);


/*


+1. Зробіть такий же counter, який крім інкременту буде вміти ще й декрементувати лічильник.
+1*. Лічильник не має опускатись нижче нуля.

+2. Реалізувати крок лічильника (need fix)

*/


/*


1. Реакт - бібілотека для створення користувацьких інтерфейсів
2. Ви можете використовувати як звичайний "ванільний" JS, так можете використовувати і Реакт. Це може відбуватись одночасно
3. Пропси - це дані, які можна передавати в компоненти для того, щоб налаштовувати зовнішній вигляд компонент.
4. Для того, щоб Реакт нам щосб відобразив, нам потрібно викликати метод ReactDOM.render().
Він приймає 2 параметри:
- елемент, який потрібно відрендерити
- елемент, в який потрібно рендерити 
5. Реакт оперує Реакт-елементами.
Реакт-елемент - це об'єкт.
Реакт-елемент набагато легший, ніж той самий елемент у нативному DOM'і.
6. З цих Реакт-елементів як маленьких блоків складаються Реакт-компоненти.
А з Реакт-компонент складаються сторінки, які будуть бачити наші користувачі.
7. Стан компоненти - такі дані, які можуть змінюватися за час життя нашої компоненти.

*/