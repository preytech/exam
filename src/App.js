import './App.css';

function App() {
  return (
    <body>
      <Header/>
      <div className = "bg-[url('../public/media/bg.webp')] bg-cover">
        <Form/>
      </div>
      <Footer/>
    </body>
  );
}

function Header()
{
  return(
    <header className = "w-full h-32 bg-slate-900 text-white text-6xl font-bold flex justify-center items-center">  
      Sisyphus
    </header>
  );
}

function Form()
{
  return(
    <form className = "bg-white p-8 pb-56 pt-24 flex flex-col  items-start gap-4 w-[700px]">
      <p className = "text-bold text-4xl">Бронирование</p>
      <Input label = "Имя" type = "text" placeholder = "Иван"/>
      <Input label = "Телефон" type = "tel" placeholder = "8(800)555-35-35"/>
      <Input label = "Дата" type = "datetime-local"/>
      <div className = "text-reg flex flex-col w-80">
        Выберите длительность
        <select>
          <option>1 час</option>
          <option>3 часа</option>
          <option>5 часов</option>
        </select>
      </div>
      <input className = "border px-4 py-1 rounded-lg " type = "submit"></input>
    </form>
  );
}

function Input({label, type, placeholder})
{
  const currentDate = new Date().toISOString().split(".")[0];

  return(
    <div className = "flex flex-col gap-40px text-reg">
      <label htmlFor = {label}>{label}</label>
      <input id = {label} className = "border rounded-l p-2 w-80 placeholder:text-reg" required min = {currentDate} type = {type} placeholder = {placeholder}>
      </input>
    </div>
  );
}

function Footer()
{
  return(
    <footer className = "w-full h-32 bg-slate-900 text-white text-md font-reg flex justify-center items-center">  
      @Sisyphus Все права защищены 2024
    </footer>
  );
}

export default App;
