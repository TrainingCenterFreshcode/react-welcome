class HeaderComponent extends React.Component {
    anotherMethod() { // інші якісь методи всередині компоненти - не заборонено

    }

    render() { // єдиний метод, який ви зобов'язані визначити в класі
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi!'}, 'Header');
        const article = React.createElement('article', {}, h2, p);
        return article;
    }
}

const component = React.createElement(HeaderComponent);


const root = document.querySelector('#root');

ReactDOM.render(component, root);