class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        // todo: this.state.count++;
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const button = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        return React.createElement(React.Fragment, {}, h2, button);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component, root);


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