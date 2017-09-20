// создание элемента 
const project = React.createElement(
    'h1',   // элемент, который мы создаем
    {id: 'title'},  // свойства, которые будет иметь создаваемый элемент
    'Hello React'   // внутреннее содержимое
)
// рендеринг элемента
ReactDOM.render(
    <a className="detail__button detail__button--git" >Посмотреть код</a>,  
    document.getElementById('content')    // где мы этот элемент хотим создать
)
ReactDOM.render(
    <h3 className="project__title">Gift-shop</h3>,  
    document.getElementById('content')    // где мы этот элемент хотим создать
)